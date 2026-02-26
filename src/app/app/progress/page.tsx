'use client';

import { useMemo } from 'react';
import { calculateStreak, calculateLevel } from '@/lib/streaks';

// Mock data
const MOCK_COMPLETIONS = [
  { sessionId: 1, completedAt: Date.now() - 86400000 * 1, xpEarned: 50 },
  { sessionId: 2, completedAt: Date.now() - 86400000 * 2, xpEarned: 50 },
  { sessionId: 3, completedAt: Date.now() - 86400000 * 3, xpEarned: 50 },
];
const MOCK_XP = 150;

export default function ProgressPage() {
  const completions = MOCK_COMPLETIONS;
  const streak = useMemo(() => calculateStreak(completions), [completions]);
  const level = useMemo(() => calculateLevel(MOCK_XP), []);

  // Last 30 days heatmap
  const heatmap = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days = [];
    for (let i = 29; i >= 0; i--) {
      const dayStart = today.getTime() - i * 86400000;
      const dayEnd = dayStart + 86400000;
      const done = completions.some(
        (c) => c.completedAt >= dayStart && c.completedAt < dayEnd
      );
      days.push({
        date: new Date(dayStart),
        done,
      });
    }
    return days;
  }, [completions]);

  const sortedCompletions = [...completions].sort(
    (a, b) => b.completedAt - a.completedAt
  );

  return (
    <div className="max-w-lg mx-auto px-4 pt-8 pb-4 space-y-6">
      <h1 className="text-3xl font-extrabold font-[family-name:var(--font-heading)]">
        📊 Progress
      </h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { value: completions.length, label: 'Total Sessions' },
          { value: MOCK_XP, label: 'Total XP' },
          { value: streak.current, label: 'Current Streak' },
          { value: streak.longest, label: 'Longest Streak' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-[#151515] rounded-xl p-4 border border-[#222] text-center"
          >
            <div className="text-2xl font-extrabold text-[#22c55e]">
              {stat.value}
            </div>
            <div className="text-xs text-[#666] uppercase tracking-wider font-semibold mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* 30-Day Heatmap */}
      <div className="bg-[#151515] rounded-2xl p-4 border border-[#222]">
        <div className="text-xs font-bold text-[#888] uppercase tracking-wider mb-3">
          Last 30 Days
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {heatmap.map((day, i) => (
            <div
              key={i}
              title={day.date.toLocaleDateString()}
              className={`aspect-square rounded-sm transition-all ${
                day.done
                  ? 'bg-[#22c55e] shadow-[0_0_6px_rgba(34,197,94,0.3)]'
                  : 'bg-[#222]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Session History */}
      <div className="space-y-2">
        <div className="text-xs font-bold text-[#888] uppercase tracking-wider">
          Recent Sessions
        </div>
        {sortedCompletions.length === 0 ? (
          <div className="text-[#555] text-sm py-4 text-center">
            No sessions completed yet. Start your first quest!
          </div>
        ) : (
          sortedCompletions.map((c, i) => (
            <div
              key={i}
              className="bg-[#151515] rounded-xl p-3 border border-[#222] flex items-center justify-between"
            >
              <div>
                <div className="font-bold text-sm">Session {c.sessionId}</div>
                <div className="text-xs text-[#666]">
                  {new Date(c.completedAt).toLocaleDateString('en', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
              </div>
              <div className="text-[#22c55e] font-bold text-sm">
                +{c.xpEarned} XP
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
