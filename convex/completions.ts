import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const recordCompletion = mutation({
  args: {
    userId: v.id("users"),
    sessionId: v.number(),
    xpEarned: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("completions", {
      userId: args.userId,
      sessionId: args.sessionId,
      completedAt: Date.now(),
      xpEarned: args.xpEarned,
    });
  },
});

export const getCompletions = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("completions")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();
  },
});

export const getCompletionsForDay = query({
  args: {
    userId: v.id("users"),
    dayStart: v.number(),
    dayEnd: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("completions")
      .withIndex("by_user_and_date", (q) =>
        q.eq("userId", args.userId).gte("completedAt", args.dayStart).lte("completedAt", args.dayEnd)
      )
      .collect();
  },
});
