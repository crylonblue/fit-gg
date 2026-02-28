import { internalAction } from "./_generated/server";
import { internal } from "./_generated/api";

// VAPID keys - public key is also in the frontend
const VAPID_PUBLIC_KEY = "BJrNq1vuRQrQp_IN_AbvdUv908MISevIe9hgqFFKnc7LlexaROXHeDkxirh8LPU9XcjVbfzuLNC0yUojyHizOFs";
const VAPID_PRIVATE_KEY = "eN92LCyY2h2UyS9-e8PA1Q-5NDEcxoHxn6Th5qqL9zk";

// Web Push requires specific crypto - we'll use the raw Web Push protocol
// For Convex actions, we implement the minimal push sending via fetch

async function sendPushNotification(
  subscription: { endpoint: string; keys: { p256dh: string; auth: string } },
  payload: string
): Promise<boolean> {
  // Use the web-push protocol via fetch
  // For MVP, we'll use a simple unsigned push (works for testing)
  // Production should use VAPID-signed JWTs
  try {
    const res = await fetch(subscription.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream",
        TTL: "86400",
      },
      body: payload,
    });
    return res.ok || res.status === 201;
  } catch {
    return false;
  }
}

// Send daily reminders - called by cron
export const sendDailyReminders = internalAction({
  args: {},
  handler: async (ctx) => {
    const subs = await ctx.runQuery(internal.pushSubscriptions.getAllSubscriptions);
    if (!subs.length) return;

    const currentHour = new Date().getUTCHours();

    // Filter subscriptions whose reminder hour matches current UTC hour
    // (Users set their local hour, we'd need timezone - for MVP use UTC)
    const dueSubs = subs.filter((s) => (s.reminderHour ?? 9) === currentHour);
    if (!dueSubs.length) return;

    // Check which users haven't worked out today
    const userIds = [...new Set(dueSubs.map((s) => s.userId))];
    const noSession = await ctx.runQuery(
      internal.pushSubscriptions.getUsersWithoutTodaySession,
      { userIds: userIds as any }
    );

    const toNotify = dueSubs.filter((s) => noSession.includes(s.userId as any));

    for (const sub of toNotify) {
      await sendPushNotification(
        { endpoint: sub.endpoint, keys: sub.keys },
        JSON.stringify({
          title: "🏋️ Time to train!",
          body: "Your streak is counting on you. Let's get a quick session in!",
          url: "/app",
        })
      );
    }
  },
});

// Send streak warning at 9 PM - called by cron
export const sendStreakWarnings = internalAction({
  args: {},
  handler: async (ctx) => {
    const subs = await ctx.runQuery(internal.pushSubscriptions.getAllSubscriptions);
    if (!subs.length) return;

    const userIds = [...new Set(subs.map((s) => s.userId))];
    const noSession = await ctx.runQuery(
      internal.pushSubscriptions.getUsersWithoutTodaySession,
      { userIds: userIds as any }
    );

    // Only notify users who haven't worked out
    const toNotify = subs.filter((s) => noSession.includes(s.userId as any));

    for (const sub of toNotify) {
      await sendPushNotification(
        { endpoint: sub.endpoint, keys: sub.keys },
        JSON.stringify({
          title: "⚠️ Streak in danger!",
          body: "You haven't trained today. Complete a session before midnight to keep your streak alive!",
          url: "/app",
        })
      );
    }
  },
});
