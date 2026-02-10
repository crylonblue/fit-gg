'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '120px 40px 60px 40px' }}>
      {/* Background glow effects */}
      <div style={{ position: 'absolute', top: '25%', left: '33%', width: '600px', height: '600px', background: 'rgba(123,108,246,0.08)', borderRadius: '50%', filter: 'blur(150px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '25%', right: '25%', width: '400px', height: '400px', background: 'rgba(34,211,238,0.06)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          {/* Left: Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div className="inline-flex items-center gap-2.5" style={{ padding: '8px 16px', borderRadius: '9999px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', fontSize: '14px', color: 'var(--color-text-secondary)', width: 'fit-content' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34D399' }} />
              Coming Soon — Join the Waitlist
            </div>

            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              <span style={{ color: 'var(--color-text-primary)' }}>Your Body.</span>
              <br />
              <span className="gradient-text">Your Game.</span>
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', maxWidth: '480px', lineHeight: 1.7 }}>
              The fitness RPG where real workouts level up your character. 
              Build streaks, join guilds, fight bosses — all powered by your sweat.
            </p>

            <div style={{ display: 'flex', gap: '16px', paddingTop: '8px', flexWrap: 'wrap' }}>
              <button 
                className="btn-primary"
                style={{ fontSize: '18px' }}
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Join the Quest</span>
                <span>⚔️</span>
              </button>
              <button 
                className="btn-outline"
                style={{ fontSize: '18px' }}
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>How It Works</span>
                <span>↓</span>
              </button>
            </div>
          </div>

          {/* Right: Hero Character */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Glow */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
              <div style={{ width: '320px', height: '320px', background: 'rgba(123,108,246,0.2)', borderRadius: '50%', filter: 'blur(80px)' }} />
            </div>

            <div style={{ position: 'relative', width: '400px', height: '480px' }}>
              <Image
                src="/characters/hero.png"
                alt="fit.gg Hero Character"
                fill
                style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 40px rgba(123,108,246,0.3))' }}
                priority
              />
            </div>

            {/* Floating badges */}
            <div style={{ position: 'absolute', top: '32px', right: '32px', background: 'rgba(14,17,40,0.8)', backdropFilter: 'blur(12px)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '12px 20px' }}>
              <span className="font-mono font-bold text-sm" style={{ color: '#34D399' }}>+250 XP</span>
            </div>

            <div style={{ position: 'absolute', bottom: '96px', left: '16px', background: 'rgba(14,17,40,0.8)', backdropFilter: 'blur(12px)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '12px 20px' }}>
              <span className="font-mono font-bold text-sm" style={{ color: '#F97316' }}>🔥 12 Day Streak</span>
            </div>

            <div style={{ position: 'absolute', top: '128px', left: '-16px', background: 'rgba(14,17,40,0.8)', backdropFilter: 'blur(12px)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '12px 20px' }}>
              <span className="font-mono font-bold text-sm" style={{ color: '#A78BFA' }}>⬆️ Level 24</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
