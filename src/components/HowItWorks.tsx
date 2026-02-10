'use client'

import { useReveal } from '@/hooks/useReveal'

const steps = [
  { num: '01', word: 'OPEN', line: 'Your daily session is ready.' },
  { num: '02', word: 'MOVE', line: '5 minutes. Bodyweight. Anywhere.' },
  { num: '03', word: 'LEVEL UP', line: 'XP. Streaks. Leagues. Repeat.' },
]

export default function HowItWorks() {
  const ref = useReveal()

  return (
    <section id="how-it-works" style={{ padding: '140px 24px' }}>
      <div className="container">
        <div ref={ref} className="reveal">
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#00FF87', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', textAlign: 'center' }}>
            The Loop
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', textAlign: 'center', marginBottom: '80px' }}>
            DEAD SIMPLE.<br /><span className="text-gradient-animated">STUPIDLY EFFECTIVE.</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
            {steps.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(5rem, 8vw, 8rem)', fontWeight: 800, color: '#111', fontFamily: 'var(--font-heading)', lineHeight: 1, marginBottom: '16px' }}>
                  {s.num}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.01em', marginBottom: '8px', color: '#00FF87' }}>
                  {s.word}
                </h3>
                <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.6 }}>{s.line}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
