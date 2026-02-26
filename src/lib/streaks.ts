/**
 * Streak & XP calculation utilities for fit.gg
 */

interface Completion {
  completedAt: number;
  xpEarned: number;
  sessionId: number;
}

interface StreakResult {
  current: number;
  longest: number;
  today: boolean;
}

interface LevelResult {
  level: number;
  currentXP: number;
  xpForNext: number;
  progress: number;
}

/**
 * Get the start of day (midnight) for a timestamp in local timezone
 */
function startOfDay(timestamp: number): number {
  const d = new Date(timestamp);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

/**
 * Calculate streak info from an array of completions
 */
export function calculateStreak(completions: Completion[]): StreakResult {
  if (completions.length === 0) {
    return { current: 0, longest: 0, today: false };
  }

  // Get unique completion days (as midnight timestamps)
  const uniqueDays = [...new Set(completions.map((c) => startOfDay(c.completedAt)))].sort(
    (a, b) => b - a
  ); // descending

  const todayStart = startOfDay(Date.now());
  const oneDayMs = 86400000;
  const today = uniqueDays[0] === todayStart;

  // Calculate current streak
  let current = 0;
  let checkDay = today ? todayStart : todayStart - oneDayMs;

  for (const day of uniqueDays) {
    if (day === checkDay) {
      current++;
      checkDay -= oneDayMs;
    } else if (day < checkDay) {
      break;
    }
  }

  // If streak is 0 but we haven't checked if yesterday counts
  if (current === 0 && !today && uniqueDays[0] === todayStart - oneDayMs) {
    // re-check from yesterday
    checkDay = todayStart - oneDayMs;
    for (const day of uniqueDays) {
      if (day === checkDay) {
        current++;
        checkDay -= oneDayMs;
      } else if (day < checkDay) {
        break;
      }
    }
  }

  // Calculate longest streak
  let longest = 0;
  let streak = 1;
  const ascending = [...uniqueDays].sort((a, b) => a - b);
  for (let i = 1; i < ascending.length; i++) {
    if (ascending[i] - ascending[i - 1] === oneDayMs) {
      streak++;
    } else {
      longest = Math.max(longest, streak);
      streak = 1;
    }
  }
  longest = Math.max(longest, streak, current);

  return { current, longest, today };
}

/**
 * Calculate level from XP. Level = floor(XP / 500)
 */
export function calculateLevel(xp: number): LevelResult {
  const level = Math.floor(xp / 500);
  const currentXP = xp % 500;
  const xpForNext = 500;
  const progress = (currentXP / xpForNext) * 100;

  return { level, currentXP, xpForNext, progress };
}
