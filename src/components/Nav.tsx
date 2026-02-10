'use client'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid #111' : '1px solid transparent',
      transition: 'all 0.4s',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px' }}>
        <span style={{ fontSize: '22px', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
          <span style={{ color: '#00FF87' }}>fit</span><span style={{ color: '#333' }}>.</span>gg
        </span>
        <button className="btn" style={{ padding: '10px 24px', fontSize: '12px', animation: 'none', boxShadow: 'none' }}
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
          Join Waitlist
        </button>
      </div>
    </nav>
  )
}
