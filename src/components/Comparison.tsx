'use client'

const rows = [
  { feature: '5-min daily sessions', fitgg: true, others: false },
  { feature: 'Progressive skill tree', fitgg: true, others: false },
  { feature: 'Streak & XP system', fitgg: true, others: false },
  { feature: 'Adaptive difficulty', fitgg: true, others: false },
  { feature: 'Zero equipment', fitgg: true, others: true },
  { feature: 'Weekly leagues', fitgg: true, others: false },
  { feature: 'Heart system', fitgg: true, others: false },
  { feature: 'Free tier', fitgg: true, others: true },
]

export default function Comparison() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="badge" style={{ marginBottom: '24px', display: 'inline-flex' }}>Why Us</div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '56px', textTransform: 'uppercase' }}>
          Not Another <span className="text-neon">Workout Library.</span>
        </h2>

        <div style={{ maxWidth: '640px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 100px 100px', padding: '16px 24px', background: 'var(--color-bg-card)', borderBottom: '1px solid var(--color-border)', fontSize: '13px', fontWeight: 800, fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <div style={{ textAlign: 'left' }}></div>
            <div className="text-neon">fit.gg</div>
            <div style={{ color: 'var(--color-text-muted)' }}>Others</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 100px 100px', 
              padding: '14px 24px', 
              borderBottom: i < rows.length - 1 ? '1px solid var(--color-border)' : 'none',
              fontSize: '14px',
              alignItems: 'center',
              background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
            }}>
              <div style={{ textAlign: 'left', fontWeight: 600, color: 'var(--color-text-secondary)' }}>{r.feature}</div>
              <div style={{ fontSize: '18px' }}>{r.fitgg ? '✅' : '—'}</div>
              <div style={{ fontSize: '18px' }}>{r.others ? '⚪' : '❌'}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
