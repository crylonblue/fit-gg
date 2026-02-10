'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? 'rgba(0,0,0,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid #111' : '1px solid transparent',
      transition: 'all 0.3s',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px' }}>
        <span style={{ fontSize: '22px', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
          <span style={{ color: '#00FF87' }}>fit</span><span style={{ color: '#555' }}>.</span>gg
        </span>
        <button
          className="btn"
          style={{ padding: '12px 28px', fontSize: '12px' }}
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Join Waitlist
        </button>
      </div>
    </nav>
  )
}
