'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Blog', href: '/blog' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? 'rgba(0,0,0,0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px) saturate(1.2)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(1.2)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px' }}>
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <Image src="/logo-shield.png" alt="fit.gg" width={32} height={32} style={{ filter: 'drop-shadow(0 0 8px rgba(0,255,135,0.3))' }} />
          <span style={{ fontSize: '20px', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
            <span style={{ color: '#00FF87' }}>fit</span><span style={{ color: '#222' }}>.</span>gg
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="nav-desktop">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              color: '#777', fontSize: '13px', fontWeight: 600, textDecoration: 'none',
              textTransform: 'uppercase', letterSpacing: '0.08em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#777')}>
              {l.label}
            </a>
          ))}
          <button className="btn" style={{ padding: '10px 24px', fontSize: '12px', animation: 'none', boxShadow: 'none' }}
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
            Join Waitlist
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-mobile-toggle"
          style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer',
            flexDirection: 'column', gap: '5px', padding: '8px',
          }}
        >
          <span style={{ width: '24px', height: '2px', background: '#fff', borderRadius: '1px', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span style={{ width: '24px', height: '2px', background: '#fff', borderRadius: '1px', transition: 'all 0.3s', opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ width: '24px', height: '2px', background: '#fff', borderRadius: '1px', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{
        maxHeight: mobileOpen ? '300px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        background: 'rgba(0,0,0,0.95)',
        backdropFilter: 'blur(24px)',
        borderTop: mobileOpen ? '1px solid rgba(255,255,255,0.05)' : 'none',
      }}>
        <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{
              color: '#999', fontSize: '14px', fontWeight: 600, textDecoration: 'none',
              textTransform: 'uppercase', letterSpacing: '0.06em',
            }}>
              {l.label}
            </a>
          ))}
          <button className="btn" style={{ padding: '12px 24px', fontSize: '12px', animation: 'none', boxShadow: 'none', width: '100%', justifyContent: 'center' }}
            onClick={() => { setMobileOpen(false); document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Join Waitlist
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
