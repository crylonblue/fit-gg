'use client';

import { useState } from 'react';

// Mock user data
const MOCK_USER = {
  email: 'player@fit.gg',
  fitnessLevel: 'beginner' as const,
  streakFreezeUsed: false,
  xp: 150,
};

export default function ProfilePage() {
  const [user, setUser] = useState(MOCK_USER);
  const [freezeUsed, setFreezeUsed] = useState(false);

  const handleUseFreeze = () => {
    if (!user.streakFreezeUsed) {
      setUser({ ...user, streakFreezeUsed: true });
      setFreezeUsed(true);
    }
  };

  const levelLabels = {
    beginner: '🌱 Beginner',
    some: '💪 Some Experience',
    intermediate: '🔥 Intermediate',
  };

  return (
    <div className="max-w-lg mx-auto px-4 pt-8 pb-4 space-y-6">
      <h1 className="text-3xl font-extrabold font-[family-name:var(--font-heading)]">
        👤 Profile
      </h1>

      {/* User Info */}
      <div className="bg-[#151515] rounded-2xl p-5 border border-[#222] space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-[#22c55e] flex items-center justify-center text-2xl font-extrabold text-black">
            {user.email[0].toUpperCase()}
          </div>
          <div>
            <div className="font-bold text-lg">{user.email}</div>
            <div className="text-[#888] text-sm">
              {levelLabels[user.fitnessLevel]}
            </div>
          </div>
        </div>
      </div>

      {/* Streak Freeze */}
      <div className="bg-[#151515] rounded-2xl p-5 border border-[#222] space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🧊</span>
          <span className="font-bold text-lg">Streak Freeze</span>
        </div>
        <p className="text-[#888] text-sm leading-relaxed">
          Protects your streak for one missed day. You get one per week.
        </p>
        {user.streakFreezeUsed || freezeUsed ? (
          <div className="text-[#666] text-sm font-semibold py-2">
            ❄️ Freeze already used this week
          </div>
        ) : (
          <button
            onClick={handleUseFreeze}
            className="w-full py-3 rounded-xl bg-[#1a3a2a] border border-[#22c55e]/30 text-[#22c55e] font-bold text-sm uppercase tracking-wider hover:bg-[#22c55e]/20 active:scale-[0.98] transition-all"
          >
            Use Streak Freeze
          </button>
        )}
      </div>

      {/* Stats */}
      <div className="bg-[#151515] rounded-2xl p-5 border border-[#222] space-y-3">
        <div className="text-xs font-bold text-[#888] uppercase tracking-wider">
          Account
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-[#666]">Total XP</span>
            <span className="font-bold text-[#22c55e]">{user.xp}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#666]">Level</span>
            <span className="font-bold">{Math.floor(user.xp / 500)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#666]">Fitness Level</span>
            <span className="font-bold capitalize">{user.fitnessLevel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
