'use client'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--color-border)' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '48px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
        <span className="gradient-text" style={{ fontSize: '1.1rem', fontWeight: 700 }}>fit.gg</span>
        <div style={{ display: 'flex', gap: '32px', fontSize: '14px' }}>
          <a href="#how-it-works" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>How It Works</a>
          <a href="#classes" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Classes</a>
          <a href="#features" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Features</a>
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>© 2026 fit.gg</p>
      </div>
    </footer>
  )
}
