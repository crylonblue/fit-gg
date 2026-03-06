'use client'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ padding: '64px 24px 32px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <Image src="/logo-shield.png" alt="fit.gg" width={28} height={28} style={{ opacity: 0.7 }} />
          <span style={{ fontSize: '22px', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
            <span style={{ color: '#00FF87' }}>fit</span><span style={{ color: '#222' }}>.</span>gg
          </span>
        </a>

        <nav style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { label: 'Features', href: '#features' },
            { label: 'How It Works', href: '#how-it-works' },
            { label: 'FAQ', href: '#faq' },
            { label: 'Blog', href: '/blog' },
            { label: 'Waitlist', href: '#waitlist' },
          ].map((link) => (
            <a key={link.href} href={link.href} style={{
              fontSize: '13px', color: '#444', textDecoration: 'none', fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '0.06em', transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#444')}>
              {link.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {[
            { href: 'https://twitter.com/fitdotgg', icon: '𝕏' },
            { href: 'https://instagram.com/fit.gg', icon: '📸' },
            { href: 'https://tiktok.com/@fitdotgg', icon: '🎵' },
          ].map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" style={{
              color: '#333', textDecoration: 'none', fontSize: '18px', transition: 'all 0.2s',
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(0,255,135,0.2)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#333'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)' }}>
              {s.icon}
            </a>
          ))}
        </div>

        <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '24px', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', color: '#333', letterSpacing: '0.04em' }}>
            © {new Date().getFullYear()} <span style={{ color: '#00FF87' }}>fit</span>.gg · Your body. Your game.
          </p>
        </div>
      </div>
    </footer>
  )
}
