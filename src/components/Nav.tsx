'use client'

export default function Nav() {
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <span style={{ fontSize: '24px', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
          <span className="text-neon">fit</span>.gg
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a href="#how-it-works" className="hidden sm:inline" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', transition: 'color 0.2s' }}>How It Works</a>
          <a href="#features" className="hidden sm:inline" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', transition: 'color 0.2s' }}>Features</a>
          <button
            className="btn-primary"
            style={{ padding: '10px 24px', fontSize: '13px' }}
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  )
}
