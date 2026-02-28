import { v } from "convex/values";
import { mutation, query, action, internalQuery } from "./_generated/server";
import { internal } from "./_generated/api";

// Save a push subscription for a user
export const subscribe = mutation({
  args: {
    userId: v.id("users"),
    endpoint: v.string(),
    keys: v.object({
      p256dh: v.string(),
      auth: v.string(),
    }),
    reminderHour: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    // Remove existing subscription for this endpoint
    const existing = await ctx.db
      .query("pushSubscriptions")
      .withIndex("by_endpoint", (q) => q.eq("endpoint", args.endpoint))
      .first();
    if (existing) {
      await ctx.db.delete(existing._id);
    }
    await ctx.db.insert("pushSubscriptions", {
      userId: args.userId,
      endpoint: args.endpoint,
      keys: args.keys,
      reminderHour: args.reminderHour ?? 9,
      createdAt: Date.now(),
    });
  },
});

// Remove a push subscription
export const unsubscribe = mutation({
  args: { endpoint: v.string() },
  handler: async (ctx, args) => {
    const sub = await ctx.db
      .query("pushSubscriptions")
      .withIndex("by_endpoint", (q) => q.eq("endpoint", args.endpoint))
      .first();
    if (sub) await ctx.db.delete(sub._id);
  },
});

// Update reminder time
export const setReminderHour = mutation({
  args: {
    userId: v.id("users"),
    reminderHour: v.number(),
  },
  handler: async (ctx, args) => {
    const subs = await ctx.db
      .query("pushSubscriptions")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();
    for (const sub of subs) {
      await ctx.db.patch(sub._id, { reminderHour: args.reminderHour });
    }
  },
});

// Internal: get all subscriptions (for cron)
export const getAllSubscriptions = internalQuery({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("pushSubscriptions").collect();
  },
});

// Internal: check if user completed a session today
export const getUsersWithoutTodaySession = internalQuery({
  args: { userIds: v.array(v.id("users")) },
  handler: async (ctx, args) => {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayMs = todayStart.getTime();

    const noSession: string[] = [];
    for (const userId of args.userIds) {
      const completion = await ctx.db
        .query("completions")
        .withIndex("by_user_and_date", (q) =>
          q.eq("userId", userId).gte("completedAt", todayMs)
        )
        .first();
      if (!completion) noSession.push(userId);
    }
    return noSession;
  },
});
