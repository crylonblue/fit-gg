'use client'

export default function Hero() {
  return (
    <section className="section" style={{ paddingTop: '140px', paddingBottom: '60px', position: 'relative', overflow: 'hidden' }}>
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

        {/* App Preview Mockup */}
        <div style={{ marginTop: '72px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ 
            background: 'white', 
            borderRadius: '24px', 
            border: '1px solid var(--color-border)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
            padding: '32px',
            maxWidth: '560px',
            width: '100%',
          }}>
            {/* Mock app header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div>
                <div style={{ fontSize: '14px', color: 'var(--color-text-muted)', fontWeight: 500 }}>Good morning! 👋</div>
                <div style={{ fontSize: '20px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Today&apos;s Session</div>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '20px' }}>🔥</div>
                  <div style={{ fontSize: '13px', fontWeight: 700 }}>47</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '20px' }}>❤️</div>
                  <div style={{ fontSize: '13px', fontWeight: 700 }}>5/5</div>
                </div>
              </div>
            </div>

            {/* Session card */}
            <div style={{ 
              background: 'linear-gradient(135deg, #D1FAE5, #EDE9FE)', 
              borderRadius: '16px', 
              padding: '24px',
              marginBottom: '20px',
            }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-green-dark)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Core Strength · 5 min</div>
              <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>Plank Foundations</div>
              <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>3 exercises · No equipment</div>
              <div style={{ marginTop: '16px', background: 'var(--color-green-primary)', color: '#111827', padding: '12px', borderRadius: '12px', textAlign: 'center', fontWeight: 700, fontSize: '15px', fontFamily: 'var(--font-heading)', cursor: 'pointer' }}>
                Start Session ▶
              </div>
            </div>

            {/* Progress bar */}
            <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 600 }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>Level 12</span>
              <span style={{ color: 'var(--color-purple-primary)' }}>2,450 / 3,000 XP</span>
            </div>
            <div style={{ height: '8px', borderRadius: '4px', background: '#F3F4F6', overflow: 'hidden' }}>
              <div style={{ width: '82%', height: '100%', borderRadius: '4px', background: 'linear-gradient(90deg, var(--color-green-primary), var(--color-purple-primary))' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
