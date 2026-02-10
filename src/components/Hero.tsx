'use client'
import { useEffect, useState } from 'react'
import Particles from './Particles'

const lines = [
  '🔥  47 day streak',
  '⚡  Level 12 reached',
  '🏆  Promoted to Gold League',
  '💪  Squats 101 mastered',
  '🎯  Session complete — 92% accuracy',
  '🌳  New skill unlocked: Diamond Pushups',
]

export default function Hero() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % lines.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <Particles />

      {/* Radial glows */}
      <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(0,255,135,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', padding: '0 24px' }}>
        <h1 style={{ fontSize: 'clamp(4.5rem, 12vw, 10rem)', fontWeight: 800, lineHeight: 0.9, letterSpacing: '-0.05em', marginBottom: '32px' }}>
          YOUR BODY<span style={{ color: '#222' }}>.</span><br />
          <span className="text-gradient">YOUR GAME<span style={{ WebkitTextFillColor: '#222' }}>.</span></span>
        </h1>

        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#666', lineHeight: 1.8, maxWidth: '480px', margin: '0 auto 48px', fontWeight: 500 }}>
          5-minute daily workouts with RPG progression.<br />
          Build streaks. Climb leagues. Level up.
        </p>

        <button className="btn" style={{ marginBottom: '56px', fontSize: '16px' }}
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
          Join the Waitlist
        </button>

        {/* Live feed ticker */}
        <div style={{ height: '28px', overflow: 'hidden' }}>
          <div key={idx} className="cursor" style={{
            fontSize: '14px', color: '#00FF87', fontWeight: 600,
            fontFamily: 'var(--font-heading)', letterSpacing: '0.01em',
            animation: 'count-up 0.4s ease-out',
          }}>
            {lines[idx]}
          </div>
        </div>

        {/* count-up keyframe inline since it's small */}
        <style>{`@keyframes count-up { 0% { opacity:0; transform:translateY(12px); } 100% { opacity:1; transform:translateY(0); }}`}</style>
      </div>
    </section>
  )
}
