'use client'

const rows = [
  { feature: '5-min daily sessions', fitgg: true, others: false },
  { feature: 'Progressive skill tree', fitgg: true, others: false },
  { feature: 'Streak & XP system', fitgg: true, others: false },
  { feature: 'Adaptive difficulty', fitgg: true, others: false },
  { feature: 'Zero equipment needed', fitgg: true, others: true },
  { feature: 'Weekly leagues', fitgg: true, others: false },
  { feature: 'Heart / accountability system', fitgg: true, others: false },
  { feature: 'Free tier', fitgg: true, others: true },
]

export default function Comparison() {
  return (
    <section className="section-muted">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px' }}>
          Not another workout library.
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '48px' }}>
          Here&apos;s what makes fit.gg different.
        </p>

        <div style={{ maxWidth: '600px', margin: '0 auto', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--color-border)', background: 'white' }}>
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 100px 100px', padding: '16px 24px', background: 'var(--color-bg-muted)', borderBottom: '1px solid var(--color-border)', fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
            <div style={{ textAlign: 'left' }}></div>
            <div className="text-gradient">fit.gg</div>
            <div style={{ color: 'var(--color-text-muted)' }}>Others</div>
          </div>
          {/* Rows */}
          {rows.map((r, i) => (
            <div key={i} style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 100px 100px', 
              padding: '14px 24px', 
              borderBottom: i < rows.length - 1 ? '1px solid var(--color-border)' : 'none',
              fontSize: '15px',
              alignItems: 'center',
            }}>
              <div style={{ textAlign: 'left', fontWeight: 500 }}>{r.feature}</div>
              <div style={{ fontSize: '20px' }}>{r.fitgg ? '✅' : '—'}</div>
              <div style={{ fontSize: '20px' }}>{r.others ? '✅' : '❌'}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
