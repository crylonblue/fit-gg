import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    name: v.optional(v.string()),
    clerkId: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    apiKeys: v.optional(v.any()),
    apiKeyMasks: v.optional(v.any()),
    fitnessLevel: v.optional(v.union(
      v.literal("beginner"),
      v.literal("some"),
      v.literal("intermediate")
    )),
    preferredTime: v.optional(v.union(
      v.literal("morning"),
      v.literal("afternoon"),
      v.literal("evening")
    )),
    xp: v.optional(v.number()),
    streakFreezeUsed: v.optional(v.boolean()),
    createdAt: v.number(),
  }).index("by_email", ["email"]),

  completions: defineTable({
    userId: v.id("users"),
    sessionId: v.number(),
    completedAt: v.number(),
    xpEarned: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_user_and_date", ["userId", "completedAt"]),
});
