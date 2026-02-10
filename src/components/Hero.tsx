'use client'

import dynamic from 'next/dynamic'

const MascotScene = dynamic(() => import('./MascotScene'), { ssr: false })

export default function Hero() {
  return (
    <section className="section" style={{ paddingTop: '140px', paddingBottom: '60px', position: 'relative', overflow: 'hidden' }}>
      {/* Background blobs */}
      <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(123,108,246,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', background: 'var(--color-green-light)', fontSize: '14px', fontWeight: 600, color: 'var(--color-green-dark)', marginBottom: '28px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-green-primary)' }} />
              Coming Soon
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '24px' }}>
              The 5-minute workout habit<br />
              <span className="text-gradient">that actually sticks.</span>
            </h1>

            <p style={{ fontSize: '1.15rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '480px', marginBottom: '36px' }}>
              Duolingo-style progression for bodyweight fitness. Build streaks, unlock skills, get stronger — 5 minutes at a time.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                className="btn-primary"
                style={{ fontSize: '17px', padding: '16px 32px' }}
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the Waitlist 💪
              </button>
              <button
                className="btn-secondary"
                style={{ fontSize: '17px', padding: '16px 32px' }}
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                How It Works ↓
              </button>
            </div>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: '32px', marginTop: '48px' }}>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>🔥 5 min</div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', fontWeight: 500 }}>Daily sessions</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>⚡ 200+</div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', fontWeight: 500 }}>Guided workouts</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>🏠 Zero</div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', fontWeight: 500 }}>Equipment needed</div>
              </div>
            </div>
          </div>

          {/* Right: 3D Mascot */}
          <div style={{ position: 'relative' }}>
            {/* Glow behind mascot */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(52,211,153,0.15) 0%, rgba(123,108,246,0.08) 50%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
            <MascotScene />
          </div>
        </div>
      </div>
    </section>
  )
}
