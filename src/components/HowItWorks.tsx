'use client'
import { useReveal } from '@/hooks/useReveal'

const steps = [
  { num: '01', word: 'OPEN', desc: 'Your daily session is waiting. Picked for your level. Tap and go.', color: '#00FF87' },
  { num: '02', word: 'MOVE', desc: '5 minutes. Bodyweight only. Your bedroom is your arena.', color: '#A855F7' },
  { num: '03', word: 'LEVEL UP', desc: 'Earn XP. Extend your streak. Climb the leaderboard.', color: '#3B82F6' },
]

export default function HowItWorks() {
  const ref = useReveal()
  return (
    <section id="how-it-works" style={{ padding: '160px 24px' }}>
      <div className="container">
        <div ref={ref} className="reveal">
          <p style={{ fontSize: '13px', fontWeight: 700, color: '#00FF87', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '20px', textAlign: 'center' }}>The Loop</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', textAlign: 'center', marginBottom: '100px' }}>
            DEAD SIMPLE. <span className="text-gradient">STUPIDLY EFFECTIVE.</span>
          </h2>

          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
            {steps.map((s, i) => (
              <div key={i} style={{ position: 'relative', textAlign: 'center' }}>
                {/* Big watermark number */}
                <div style={{ fontSize: 'clamp(6rem, 10vw, 10rem)', fontWeight: 900, fontFamily: 'var(--font-heading)', lineHeight: 0.85, color: '#0A0A0A', marginBottom: '16px', userSelect: 'none' }}>
                  {s.num}
                </div>
                {/* Colored line */}
                <div style={{ width: '40px', height: '3px', background: s.color, margin: '0 auto 16px', borderRadius: '2px' }} />
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '0.02em', marginBottom: '12px', color: s.color }}>
                  {s.word}
                </h3>
                <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
