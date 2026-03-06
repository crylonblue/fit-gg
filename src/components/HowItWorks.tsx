'use client'
import { useReveal } from '@/hooks/useReveal'

const steps = [
  { num: '01', word: 'OPEN', desc: 'Your daily session is waiting. Picked for your level. Tap and go.', color: '#00FF87', icon: '⚡' },
  { num: '02', word: 'MOVE', desc: '5 minutes. Bodyweight only. Your bedroom is your arena.', color: '#A855F7', icon: '💪' },
  { num: '03', word: 'LEVEL UP', desc: 'Earn XP. Extend your streak. Climb the leaderboard. Repeat.', color: '#3B82F6', icon: '🚀' },
]

export default function HowItWorks() {
  const ref = useReveal()
  return (
    <section id="how-it-works" style={{ padding: '160px 24px', position: 'relative' }}>
      <div className="container">
        <div ref={ref} className="reveal">
          <p style={{ fontSize: '13px', fontWeight: 700, color: '#00FF87', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '20px', textAlign: 'center' }}>The Loop</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.04em', textAlign: 'center', marginBottom: '100px' }}>
            DEAD SIMPLE. <span className="text-gradient">STUPIDLY EFFECTIVE.</span>
          </h2>

          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', position: 'relative' }}>
            {/* Connecting line */}
            <div style={{
              position: 'absolute', top: '80px', left: '20%', right: '20%', height: '1px',
              background: 'linear-gradient(90deg, #00FF87, #A855F7, #3B82F6)',
              opacity: 0.15, zIndex: 0,
            }} className="steps-line" />

            {steps.map((s, i) => (
              <div key={i} className="glass-card" style={{ padding: '40px 32px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                {/* Gradient atmosphere */}
                <div style={{
                  position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
                  width: '200px', height: '200px',
                  background: `radial-gradient(circle, ${s.color}08 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                {/* Big watermark number */}
                <div style={{
                  fontSize: 'clamp(5rem, 8vw, 8rem)', fontWeight: 900,
                  fontFamily: 'var(--font-heading)', lineHeight: 0.85,
                  color: '#0A0A0A', marginBottom: '16px', userSelect: 'none',
                  position: 'relative',
                }}>
                  {s.num}
                </div>

                {/* Hex icon */}
                <div className="hex-icon" style={{
                  background: `${s.color}15`, margin: '0 auto 20px',
                  border: `1px solid ${s.color}30`,
                }}>
                  {s.icon}
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '0.02em', marginBottom: '12px', color: s.color }}>
                  {s.word}
                </h3>
                <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .steps-line { display: none !important; }
        }
      `}</style>
    </section>
  )
}
