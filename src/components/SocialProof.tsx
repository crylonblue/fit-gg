'use client'
import { useEffect, useState } from 'react'
import { Timer, Home, Target, TreePine, Star } from 'lucide-react'
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
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(current))
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
  { value: 5, suffix: ' min', label: 'Per session', icon: <Timer size={24} strokeWidth={2} style={{ color: '#00FF87' }} /> },
  { value: 0, suffix: '', label: 'Equipment needed', display: 'ZERO', icon: <Home size={24} strokeWidth={2} style={{ color: '#00FF87' }} /> },
  { value: 200, suffix: '+', label: 'Guided sessions', icon: <Target size={24} strokeWidth={2} style={{ color: '#00FF87' }} /> },
  { value: 30, suffix: '+', label: 'Progressive skills', icon: <TreePine size={24} strokeWidth={2} style={{ color: '#00FF87' }} /> },
]

const testimonials = [
  { name: 'Alex K.', initials: 'AK', role: 'Software Engineer', color: '#3B82F6', text: 'Finally something that sticks. The streak system is genuinely addictive — 47 days and counting.', stars: 5 },
  { name: 'Sarah M.', initials: 'SM', role: 'Gamer & Streamer', color: '#A855F7', text: 'I treat it like a daily quest. 5 minutes between games, and I actually feel the difference.', stars: 5 },
  { name: 'Jordan T.', initials: 'JT', role: 'Remote Worker', color: '#F97316', text: 'My back pain is gone after 3 weeks. The skill tree makes me want to unlock everything.', stars: 5 },
]

export default function SocialProof() {
  const ref = useReveal()
  return (
    <section style={{ padding: '80px 24px 120px' }}>
      <div className="container">
        {/* Stats grid */}
        <div ref={ref} className="reveal stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center', marginBottom: '120px' }}>
          {stats.map((s, i) => (
            <div key={i} className="glass-card" style={{ padding: '32px 20px' }}>
              <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
              <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, fontFamily: 'var(--font-heading)', letterSpacing: '-0.04em', color: '#00FF87' }}>
                {s.display || <AnimatedNumber target={s.value} suffix={s.suffix} />}
              </div>
              <div style={{ fontSize: '12px', color: '#555', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '8px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ fontSize: '13px', fontWeight: 700, color: '#00FF87', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>
            What Warriors Say
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
            JOIN <span style={{ color: '#00FF87' }}>2,847</span> WARRIORS
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} strokeWidth={0} fill="#FBBF24" style={{ color: '#FBBF24' }} />
                ))}
              </div>
              <p style={{ color: '#aaa', fontSize: '15px', lineHeight: 1.7, marginBottom: '20px', fontStyle: 'italic' }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: `${t.color}15`, border: `1px solid ${t.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '13px', fontWeight: 800, color: t.color, fontFamily: 'var(--font-heading)',
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px' }}>{t.name}</div>
                  <div style={{ fontSize: '12px', color: '#555' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
