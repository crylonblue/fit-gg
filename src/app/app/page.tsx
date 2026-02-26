'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import sessions from '@/data/sessions.json';
import { calculateStreak, calculateLevel } from '@/lib/streaks';

// Mock data — replace with Convex queries later
const MOCK_COMPLETIONS = [
  { sessionId: 1, completedAt: Date.now() - 86400000 * 1, xpEarned: 50 },
  { sessionId: 2, completedAt: Date.now() - 86400000 * 2, xpEarned: 50 },
  { sessionId: 3, completedAt: Date.now() - 86400000 * 3, xpEarned: 50 },
];
const MOCK_XP = 150;

export default function AppHome() {
  const completions = MOCK_COMPLETIONS;
  const xp = MOCK_XP;

  const streak = useMemo(() => calculateStreak(completions), [completions]);
  const level = useMemo(() => calculateLevel(xp), [xp]);

  // Determine next session: lowest ID not yet completed, or loop back to 1
  const completedIds = new Set(completions.map((c) => c.sessionId));
  const nextSession =
    sessions.find((s) => !completedIds.has(s.id)) || sessions[0];

  // Weekly activity: last 7 days
  const weekDots = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dots = [];
    for (let i = 6; i >= 0; i--) {
      const dayStart = today.getTime() - i * 86400000;
      const dayEnd = dayStart + 86400000;
      const done = completions.some(
        (c) => c.completedAt >= dayStart && c.completedAt < dayEnd
      );
      const dayLabel = new Date(dayStart).toLocaleDateString('en', { weekday: 'short' });
      dots.push({ done, label: dayLabel });
    }
    return dots;
  }, [completions]);

  return (
    <div className="max-w-lg mx-auto px-4 pt-8 pb-4 space-y-6">
      {/* Streak */}
      <div className="text-center">
        <div className="text-6xl font-extrabold font-[family-name:var(--font-heading)]">
          🔥 {streak.current}
        </div>
        <div className="text-[#888] text-sm mt-1 font-semibold uppercase tracking-wider">
          Day Streak
        </div>
      </div>

      {/* Level + XP Bar */}
      <div className="bg-[#151515] rounded-2xl p-4 border border-[#222]">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-bold text-[#22c55e]">
            LEVEL {level.level}
          </span>
          <span className="text-xs text-[#666]">
            {level.currentXP} / {level.xpForNext} XP
          </span>
        </div>
        <div className="w-full h-3 bg-[#222] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-full transition-all duration-500"
            style={{ width: `${level.progress}%` }}
          />
        </div>
      </div>

      {/* Today's Session Card */}
      <div className="bg-[#151515] rounded-2xl p-5 border border-[#222] space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#22c55e] uppercase tracking-wider">
            Today&apos;s Quest
          </span>
          <span className="text-xs text-[#555]">
            ~{nextSession.estimatedMinutes} min
          </span>
        </div>
        <div>
          <h2 className="text-2xl font-extrabold font-[family-name:var(--font-heading)]">
            Day {nextSession.day}: {nextSession.title}
          </h2>
          <p className="text-[#888] text-sm mt-1 leading-relaxed">
            {nextSession.description}
          </p>
        </div>

        {streak.today ? (
          <div className="text-center py-3">
            <div className="text-3xl mb-1">✅</div>
            <div className="text-[#22c55e] font-bold text-lg">
              Done for today!
            </div>
            <div className="text-[#666] text-xs mt-1">Come back tomorrow</div>
          </div>
        ) : (
          <Link
            href={`/session/${nextSession.id}`}
            className="block w-full text-center py-4 rounded-xl bg-[#22c55e] text-black font-extrabold text-xl uppercase tracking-wider hover:bg-[#16a34a] active:scale-[0.98] transition-all"
            style={{
              boxShadow: '0 0 30px rgba(34,197,94,0.3), 0 0 60px rgba(34,197,94,0.1)',
            }}
          >
            START →
          </Link>
        )}
      </div>

      {/* Weekly Activity */}
      <div className="bg-[#151515] rounded-2xl p-4 border border-[#222]">
        <div className="text-xs font-bold text-[#888] uppercase tracking-wider mb-3">
          This Week
        </div>
        <div className="flex justify-between">
          {weekDots.map((dot, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <div
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                  dot.done
                    ? 'bg-[#22c55e] border-[#22c55e] shadow-[0_0_12px_rgba(34,197,94,0.4)]'
                    : 'border-[#333] bg-transparent'
                }`}
              >
                {dot.done && <span className="text-black text-xs font-bold">✓</span>}
              </div>
              <span className="text-[10px] text-[#555]">{dot.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { value: xp, label: 'Total XP' },
          { value: streak.current, label: 'Streak' },
          { value: completions.length, label: 'Sessions' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-[#151515] rounded-xl p-3 border border-[#222] text-center"
          >
            <div className="text-xl font-extrabold text-[#22c55e]">
              {stat.value}
            </div>
            <div className="text-[10px] text-[#666] uppercase tracking-wider font-semibold">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
