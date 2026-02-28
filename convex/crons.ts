import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

// Check every hour for users whose reminder time matches
crons.hourly(
  "daily-reminders",
  { minuteUTC: 0 },
  internal.pushNotify.sendDailyReminders
);

// Streak warning at 21:00 UTC (adjust per user timezone later)
crons.daily(
  "streak-warnings",
  { hourUTC: 21, minuteUTC: 0 },
  internal.pushNotify.sendStreakWarnings
);

export default crons;
