'use client'
import { useReveal } from '@/hooks/useReveal'

const stats = [
  { value: '86%', desc: 'of desk workers experience back pain' },
  { value: '73%', desc: 'quit fitness apps within 2 weeks' },
  { value: '12', desc: 'apps downloaded, zero habits built' },
]

export default function Problem() {
  const ref = useReveal()
  return (
    <section style={{ padding: '160px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle red glow on left */}
      <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(239,68,68,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />
      {/* Green glow on right */}
      <div style={{ position: 'absolute', bottom: '10%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,255,135,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div className="container">
        <div ref={ref} className="reveal">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            {/* Left — Problem */}
            <div>
              <p style={{ fontSize: '13px', fontWeight: 700, color: '#EF4444', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '20px' }}>
                The Problem
              </p>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '40px' }}>
                YOU&apos;VE TRIED<br />
                <span style={{ color: '#333' }}>EVERYTHING.</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                {['Downloaded 12 fitness apps.', 'Watched 47 YouTube workouts.', 'Made 52 Monday promises.'].map((t, i) => (
                  <p key={i} className="strike" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 600 }}>{t}</p>
                ))}
              </div>

              <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 800, marginBottom: '8px', lineHeight: 1.3 }}>
                None of them stuck.
              </p>
              <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 800, color: '#00FF87', lineHeight: 1.3 }}>
                Because they weren&apos;t designed to.
              </p>
            </div>

            {/* Right — Stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {stats.map((s, i) => (
                <div key={i} className="glass-card" style={{ padding: '28px 32px' }}>
                  <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, fontFamily: 'var(--font-heading)', color: i === 2 ? '#00FF87' : '#EF4444', letterSpacing: '-0.03em', marginBottom: '4px' }}>
                    {s.value}{i === 2 ? '' : ''}
                  </div>
                  <p style={{ fontSize: '14px', color: '#666', fontWeight: 500 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .container > .reveal > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
