'use client'

import { useReveal } from '@/hooks/useReveal'

export default function Problem() {
  const ref = useReveal()

  return (
    <section style={{ padding: '140px 24px' }}>
      <div className="container">
        <div ref={ref} className="reveal" style={{ maxWidth: '700px' }}>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#00FF87', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>
            The Problem
          </p>

          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '48px' }}>
            YOU&apos;VE TRIED<br />EVERYTHING.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
            <p className="strike" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 600 }}>Downloaded 12 fitness apps.</p>
            <p className="strike" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 600 }}>Watched 47 YouTube workouts.</p>
            <p className="strike" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 600 }}>Made 52 Monday promises.</p>
          </div>

          <p style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 800, marginBottom: '12px' }}>
            None of them stuck.
          </p>
          <p style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 800, color: '#00FF87' }}>
            Because they weren&apos;t designed to.
          </p>
        </div>
      </div>
    </section>
  )
}
