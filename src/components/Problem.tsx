'use client'

const problems = [
  { emoji: '😩', text: 'Download fitness app → do 2 workouts → forget it exists' },
  { emoji: '😰', text: 'Watch a 45-min YouTube workout → give up at minute 8' },
  { emoji: '🫠', text: 'Tell yourself "I\'ll start Monday" every Sunday night' },
]

export default function Problem() {
  return (
    <section className="section-muted">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '48px' }}>
          Sound familiar?
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {problems.map((p, i) => (
            <div key={i} className="card" style={{ textAlign: 'center', padding: '40px 32px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{p.emoji}</div>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, fontWeight: 500 }}>{p.text}</p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '1.15rem', color: 'var(--color-text-secondary)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
          It&apos;s not your fault. Most fitness apps are built for people who <em>already</em> work out.
        </p>
      </div>
    </section>
  )
}
