'use client'

const problems = [
  { emoji: '💀', text: 'Download fitness app. Do 2 workouts. Delete it.' },
  { emoji: '😴', text: 'Open YouTube. Search "home workout". Close YouTube.' },
  { emoji: '🔄', text: '"I\'ll start Monday" — every Sunday since 2020.' },
]

export default function Problem() {
  return (
    <section className="section-alt">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="badge" style={{ marginBottom: '24px', display: 'inline-flex' }}>The Problem</div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px', textTransform: 'uppercase' }}>
          Sound <span className="text-neon">Familiar?</span>
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '56px', maxWidth: '500px', margin: '0 auto 56px' }}>
          Most fitness apps are built for people who already work out. You need something different.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '0' }}>
          {problems.map((p, i) => (
            <div key={i} className="card" style={{ textAlign: 'center', padding: '40px 28px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{p.emoji}</div>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, fontWeight: 500 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
