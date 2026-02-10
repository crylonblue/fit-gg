'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const stats = ['🔥 47 day streak', '⚡ Level 12', '🏆 Gold League', '💪 Squats mastered', '🎯 92% accuracy']

export default function Hero() {
  const [statIndex, setStatIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setStatIndex(i => (i + 1) % stats.length), 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Mesh background */}
      <div className="mesh-bg">
        <div className="mesh-blob-1" />
        <div className="mesh-blob-2" />
        <div className="mesh-blob-3" />
      </div>

      <div className="container" style={{ position: 'relative', padding: '120px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'center' }}>
          {/* Left: Copy */}
          <div>
            <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.04em', marginBottom: '28px' }}>
              YOUR<br />BODY.<br />
              <span className="text-gradient-animated">YOUR GAME.</span>
            </h1>

            <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: '#888', lineHeight: 1.7, maxWidth: '440px', marginBottom: '40px' }}>
              5-minute daily workouts with RPG progression. Build streaks. Climb leagues. Level up. Zero equipment.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <button className="btn glow-pulse" onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
                Join the Waitlist ⚡
              </button>
            </div>

            {/* Cycling stats */}
            <div style={{ height: '28px', overflow: 'hidden' }}>
              <div key={statIndex} style={{ fontSize: '15px', color: '#00FF87', fontWeight: 600, fontFamily: 'var(--font-heading)', letterSpacing: '0.02em', animation: 'count-up 0.4s ease-out' }}>
                {stats[statIndex]}
              </div>
            </div>
          </div>

          {/* Right: Hero image */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <Image
              src="/img-hero.png"
              alt="Floating fitness elements"
              width={560}
              height={560}
              style={{ maxWidth: '100%', height: 'auto', filter: 'brightness(1.1)' }}
              priority
            />
          </div>
        </div>
      </div>

      <div className="gradient-line" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
    </section>
  )
}
