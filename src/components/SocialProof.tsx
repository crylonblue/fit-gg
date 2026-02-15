'use client'
import { useEffect, useState } from 'react'
import { useReveal } from '@/hooks/useReveal'

function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!visible) return
    const duration = 1600
    const steps = 40
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [visible, target])

  return (
    <span ref={(el) => {
      if (!el) return
      const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.5 })
      obs.observe(el)
    }}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { value: 5, suffix: ' min', label: 'Per session' },
  { value: 0, suffix: '', label: 'Equipment needed', display: 'ZERO' },
  { value: 200, suffix: '+', label: 'Guided sessions' },
  { value: 30, suffix: '+', label: 'Progressive skills' },
]

export default function SocialProof() {
  const ref = useReveal()
  return (
    <section style={{ padding: '80px 24px' }}>
      <div className="container">
        <div ref={ref} className="reveal stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', textAlign: 'center' }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.04em', color: '#00FF87' }}>
                {s.display || <AnimatedNumber target={s.value} suffix={s.suffix} />}
              </div>
              <div style={{ fontSize: '13px', color: '#555', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '8px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
