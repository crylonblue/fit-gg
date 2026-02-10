'use client'

const steps = [
  { num: '01', icon: '📱', title: 'OPEN', desc: "Your daily 5-minute session is ready. Picked for your level. No thinking required." },
  { num: '02', icon: '⚡', title: 'MOVE', desc: 'Follow guided exercises. Bodyweight only. Your bedroom is your gym.' },
  { num: '03', icon: '🏆', title: 'LEVEL UP', desc: 'Earn XP. Extend your streak. Climb the leaderboard. Unlock new skills.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="badge" style={{ marginBottom: '24px', display: 'inline-flex' }}>The Loop</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
            Dead Simple.<br /><span className="text-neon">Stupidly Effective.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {steps.map((s, i) => (
            <div key={i} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
              {/* Step number watermark */}
              <div style={{ position: 'absolute', top: '-10px', right: '16px', fontSize: '120px', fontWeight: 900, color: 'rgba(255,255,255,0.02)', fontFamily: 'var(--font-heading)', lineHeight: 1, pointerEvents: 'none' }}>{s.num}</div>
              <div style={{ position: 'relative' }}>
                <div style={{ fontSize: '40px', marginBottom: '20px' }}>{s.icon}</div>
                <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--color-neon-green)', letterSpacing: '0.1em', marginBottom: '8px' }}>STEP {s.num}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.01em' }}>{s.title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
