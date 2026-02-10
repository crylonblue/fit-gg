'use client'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[var(--color-border)]">
      <div className="container flex items-center justify-between" style={{ padding: '16px 24px', maxWidth: '1120px', margin: '0 auto' }}>
        <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
          <span className="text-gradient">fit.gg</span>
        </span>
        <div className="flex items-center gap-8">
          <a href="#how-it-works" className="hidden sm:inline text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>How It Works</a>
          <a href="#features" className="hidden sm:inline text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>Why It Works</a>
          <button
            className="btn-primary"
            style={{ padding: '10px 24px', fontSize: '14px', borderRadius: '12px' }}
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  )
}
