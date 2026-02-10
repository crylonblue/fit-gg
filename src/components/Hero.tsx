'use client'

export default function Hero() {
  return (
    <section className="section" style={{ paddingTop: '140px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
      {/* Background blobs */}
      <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(123,108,246,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', background: 'var(--color-green-light)', fontSize: '14px', fontWeight: 600, color: 'var(--color-green-dark)', marginBottom: '28px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-green-primary)' }} />
            Coming Soon
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '24px' }}>
            The 5-minute workout habit<br />
            <span className="text-gradient">that actually sticks.</span>
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto 40px' }}>
            Duolingo-style progression for bodyweight fitness. Build streaks, unlock skills, get stronger — 5 minutes at a time.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn-primary"
              style={{ fontSize: '18px', padding: '16px 36px' }}
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join the Waitlist 💪
            </button>
            <button
              className="btn-secondary"
              style={{ fontSize: '18px', padding: '16px 36px' }}
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Works ↓
            </button>
          </div>
        </div>

        {/* Hero visual — app preview mockup */}
        <div style={{ marginTop: '64px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          {/* Streak card */}
          <div className="card" style={{ minWidth: '200px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '8px' }}>🔥</div>
            <div style={{ fontSize: '36px', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>47</div>
            <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>Day Streak</div>
          </div>
          {/* XP card */}
          <div className="card" style={{ minWidth: '200px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '8px' }}>⚡</div>
            <div style={{ fontSize: '36px', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>2,450</div>
            <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>Total XP</div>
          </div>
          {/* Level card */}
          <div className="card" style={{ minWidth: '200px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '8px' }}>🏆</div>
            <div style={{ fontSize: '36px', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>Gold</div>
            <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>League</div>
          </div>
        </div>
      </div>
    </section>
  )
}
