'use client'

const steps = [
  { num: '1', icon: '📱', title: 'Open', desc: "Get today's 5-minute session, picked for your level." },
  { num: '2', icon: '🏋️', title: 'Move', desc: 'Follow along with guided exercises. No equipment needed.' },
  { num: '3', icon: '📈', title: 'Progress', desc: 'Earn XP, extend your streak, unlock new skills.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px' }}>
          Dead simple. Stupidly effective.
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '56px' }}>
          Three steps. Five minutes. Every day.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {steps.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'var(--color-green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', margin: '0 auto 20px' }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>{s.title}</h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
