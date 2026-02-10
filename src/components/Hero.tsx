'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '120px 24px 80px' }}>
      {/* Background effects */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(0,255,135,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '20%', left: '60%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(178,75,243,0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      
      {/* Grid lines background */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          {/* Left: Copy */}
          <div>
            <div className="badge" style={{ marginBottom: '24px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-neon-green)', boxShadow: '0 0 8px var(--color-neon-green)' }} />
              Early Access — 2026
            </div>

            <h1 style={{ fontSize: 'clamp(3rem, 5.5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '24px' }}>
              YOUR BODY.<br />
              <span className="text-neon-glow glow-pulse">YOUR GAME.</span>
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '460px', marginBottom: '40px' }}>
              5-minute daily workouts with RPG progression. Build streaks, climb leagues, unlock skills — all powered by your sweat. Zero equipment. Zero excuses.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}>
              <button
                className="btn-primary"
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the Quest ⚔️
              </button>
              <button
                className="btn-outline"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
              </button>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '40px' }}>
              {[
                { value: '5 min', label: 'Daily Sessions' },
                { value: '200+', label: 'Workouts' },
                { value: '0', label: 'Equipment' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: '24px', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--color-neon-green)' }}>{s.value}</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mascot image */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Glow */}
            <div style={{ position: 'absolute', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,255,135,0.12) 0%, rgba(178,75,243,0.06) 50%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
            <Image
              src="/mascot-3d-hero.png"
              alt="fit.gg mascot"
              width={500}
              height={500}
              style={{ position: 'relative', filter: 'drop-shadow(0 0 40px rgba(0,255,135,0.2))', maxWidth: '100%', height: 'auto' }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="gradient-line" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
    </section>
  )
}
