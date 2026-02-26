import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: {
    email: v.string(),
    fitnessLevel: v.union(
      v.literal("beginner"),
      v.literal("some"),
      v.literal("intermediate")
    ),
    preferredTime: v.union(
      v.literal("morning"),
      v.literal("afternoon"),
      v.literal("evening")
    ),
  },
  handler: async (ctx, args) => {
    // Check if user already exists
    const existing = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();
    if (existing) return existing._id;

    return await ctx.db.insert("users", {
      email: args.email,
      fitnessLevel: args.fitnessLevel,
      preferredTime: args.preferredTime,
      xp: 0,
      streakFreezeUsed: false,
      createdAt: Date.now(),
    });
  },
});

export const getUser = query({
  args: {
    email: v.optional(v.string()),
    id: v.optional(v.id("users")),
  },
  handler: async (ctx, args) => {
    if (args.id) return await ctx.db.get(args.id);
    if (args.email) {
      const email = args.email;
      return await ctx.db
        .query("users")
        .withIndex("by_email", (q) => q.eq("email", email))
        .unique();
    }
    return null;
  },
});

export const updateXP = mutation({
  args: {
    userId: v.id("users"),
    xpToAdd: v.number(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db.get(args.userId);
    if (!user) throw new Error("User not found");
    await ctx.db.patch(args.userId, { xp: (user.xp ?? 0) + args.xpToAdd });
  },
});
