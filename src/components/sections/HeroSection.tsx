'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 sm:px-10 lg:px-16 pt-28 pb-20">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-cyan/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface border border-border text-sm text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              Coming Soon — Join the Waitlist
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
              <span className="text-text-primary">Your Body.</span>
              <br />
              <span className="gradient-text">Your Game.</span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary max-w-lg leading-relaxed">
              The fitness RPG where real workouts level up your character. 
              Build streaks, join guilds, fight bosses — all powered by your sweat.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                className="btn-primary text-lg"
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Join the Quest</span>
                <span>⚔️</span>
              </button>
              <button 
                className="btn-outline text-lg"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>How It Works</span>
                <span>↓</span>
              </button>
            </div>
          </div>

          {/* Right: Hero Character */}
          <div className="relative flex justify-center">
            {/* Glow behind character */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 bg-primary/20 rounded-full blur-[80px]" />
            </div>

            <div className="relative w-[340px] h-[420px] sm:w-[400px] sm:h-[480px]">
              <Image
                src="/characters/hero.png"
                alt="fit.gg Hero Character"
                fill
                className="object-contain drop-shadow-[0_0_40px_rgba(123,108,246,0.3)]"
                priority
              />
            </div>

            {/* Floating stat badges */}
            <div className="absolute top-8 right-0 sm:right-8 bg-bg-secondary/80 backdrop-blur-sm border border-border rounded-2xl px-5 py-3 animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="text-accent-green font-mono font-bold text-sm">+250 XP</span>
            </div>

            <div className="absolute bottom-24 left-0 sm:left-4 bg-bg-secondary/80 backdrop-blur-sm border border-border rounded-2xl px-5 py-3">
              <span className="text-accent-orange font-mono font-bold text-sm">🔥 12 Day Streak</span>
            </div>

            <div className="absolute top-32 left-0 sm:-left-4 bg-bg-secondary/80 backdrop-blur-sm border border-border rounded-2xl px-5 py-3">
              <span className="text-primary-light font-mono font-bold text-sm">⬆️ Level 24</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
