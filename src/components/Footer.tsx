export default function Footer() {
  return (
    <footer style={{ padding: '64px 24px 32px', borderTop: '1px solid #111' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        <div style={{ fontSize: '24px', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
          <span style={{ color: '#00FF87' }}>fit</span>.gg
        </div>

        <nav style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { label: 'Features', href: '#features' },
            { label: 'Skill Tree', href: '#skill-tree' },
            { label: 'FAQ', href: '#faq' },
            { label: 'Waitlist', href: '#waitlist' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontSize: '13px', color: '#555', textDecoration: 'none', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <a href="https://twitter.com/fitdotgg" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none', fontSize: '18px', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}>
            𝕏
          </a>
          <a href="https://instagram.com/fit.gg" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none', fontSize: '18px', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}>
            📸
          </a>
          <a href="https://tiktok.com/@fitdotgg" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none', fontSize: '18px', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}>
            🎵
          </a>
        </div>

        <div style={{ width: '100%', borderTop: '1px solid #111', paddingTop: '24px', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', color: '#333', letterSpacing: '0.04em' }}>
            © {new Date().getFullYear()} <span style={{ color: '#00FF87' }}>fit</span>.gg · Your body. Your game.
          </p>
        </div>
      </div>
    </footer>
  )
}
