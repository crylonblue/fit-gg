'use client'
import { useReveal } from '@/hooks/useReveal'

export default function Problem() {
  const ref = useReveal()
  return (
    <section style={{ padding: '160px 24px' }}>
      <div className="container">
        <div ref={ref} className="reveal" style={{ maxWidth: '680px' }}>
          <p style={{ fontSize: '13px', fontWeight: 700, color: '#00FF87', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '20px' }}>The Problem</p>

          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '56px' }}>
            YOU&apos;VE TRIED<br />EVERYTHING.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '56px' }}>
            {['Downloaded 12 fitness apps.', 'Watched 47 YouTube workouts.', 'Made 52 Monday promises.'].map((t, i) => (
              <p key={i} className="strike" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 600 }}>{t}</p>
            ))}
          </div>

          <p style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 800, marginBottom: '8px', lineHeight: 1.3 }}>
            None of them stuck.
          </p>
          <p style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 800, color: '#00FF87', lineHeight: 1.3 }}>
            Because they weren&apos;t designed to.
          </p>
        </div>
      </div>
    </section>
  )
}
