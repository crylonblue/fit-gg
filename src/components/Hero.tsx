'use client'

import { useEffect, useState } from 'react'

const stats = ['🔥 47 day streak', '⚡ Level 12', '🏆 Gold League', '💪 Squats mastered', '🎯 92% accuracy']

export default function Hero() {
  const [statIndex, setStatIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStatIndex(i => (i + 1) % stats.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      {/* Animated mesh background */}
      <div className="mesh-bg">
        <div className="mesh-blob-1" />
        <div className="mesh-blob-2" />
        <div className="mesh-blob-3" />
      </div>

      <div className="container" style={{ position: 'relative', padding: '120px 24px 80px' }}>
        {/* Main headline */}
        <h1 style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.04em', marginBottom: '32px' }}>
          YOUR BODY.<br />
          <span className="text-gradient-animated">YOUR GAME.</span>
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', color: '#888', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto 48px' }}>
          5-minute daily workouts with RPG progression.<br />
          Build streaks. Climb leagues. Level up.
        </p>

        {/* CTA */}
        <button
          className="btn glow-pulse"
          style={{ fontSize: '16px', padding: '20px 48px', marginBottom: '48px' }}
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Join the Waitlist ⚡
        </button>

        {/* Cycling stats */}
        <div style={{ height: '32px', overflow: 'hidden' }}>
          <div
            key={statIndex}
            style={{
              fontSize: '16px',
              color: '#00FF87',
              fontWeight: 600,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.02em',
              animation: 'count-up 0.4s ease-out',
            }}
          >
            {stats[statIndex]}
          </div>
        </div>
      </div>
    </section>
  )
}
