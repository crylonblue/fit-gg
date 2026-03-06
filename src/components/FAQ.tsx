'use client'
import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'

const faqs = [
  { q: 'How long are the workouts?', a: 'Just 5 minutes. Every session is designed to be short, intense, and completable — even on your worst days. No hour-long gym sessions. No excuses.' },
  { q: 'Do I need any equipment?', a: 'Zero. Every exercise is bodyweight-only. All you need is a bit of floor space — bedroom, hotel room, park, wherever.' },
  { q: 'How is this different from other fitness apps?', a: 'Most fitness apps give you a workout and hope you come back. fit.gg uses the same psychology that makes Duolingo addictive — streaks, leagues, XP, skill trees — to make showing up feel like a game, not a chore.' },
  { q: 'Is it good for beginners?', a: "Absolutely. The skill tree starts with fundamentals and progressively unlocks harder moves as you improve. You literally can't skip ahead — the system adapts to your level." },
  { q: 'What are leagues?', a: "Weekly competitions where you're ranked against other players. Top 10 promote to the next league. Bottom 5 demote. It adds just enough social pressure to keep you going." },
  { q: 'Is fit.gg free?', a: "The core experience will be free. We're exploring a premium tier for extra features like advanced analytics and bonus content, but the main game loop will always be free." },
  { q: 'When does it launch?', a: "We're currently in development. Join the waitlist to get early access and help shape the product. Early members get founder perks." },
  { q: 'Can I actually get fit in 5 minutes a day?', a: "Yes — science backs this up. Consistent short bursts of high-intensity bodyweight exercise improve strength, endurance, and metabolic health. The key is consistency, and that's exactly what fit.gg is engineered for." },
]

export default function FAQ() {
  const ref = useReveal()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" style={{ padding: '160px 24px' }}>
      <div className="container">
        <div ref={ref} className="reveal" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontSize: '13px', fontWeight: 700, color: '#00FF87', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '20px', textAlign: 'center' }}>FAQ</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.04em', textAlign: 'center', marginBottom: '64px' }}>
            GOT QUESTIONS<span style={{ color: '#00FF87' }}>?</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {faqs.map((faq, i) => {
              const isOpen = open === i
              return (
                <div key={i} style={{
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s',
                }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    style={{
                      width: '100%', padding: '22px 0', background: 'none', border: 'none',
                      cursor: 'pointer', display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', gap: '16px', textAlign: 'left',
                    }}
                  >
                    <span style={{ fontSize: '16px', fontWeight: 700, color: isOpen ? '#fff' : '#bbb', fontFamily: 'var(--font-heading)', transition: 'color 0.3s' }}>
                      {faq.q}
                    </span>
                    <span style={{
                      width: '28px', height: '28px', borderRadius: '50%',
                      background: isOpen ? 'rgba(0,255,135,0.1)' : 'rgba(255,255,255,0.03)',
                      border: `1px solid ${isOpen ? 'rgba(0,255,135,0.3)' : 'rgba(255,255,255,0.05)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '16px', color: '#00FF87', fontWeight: 300,
                      transition: 'all 0.3s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                      flexShrink: 0,
                    }}>
                      +
                    </span>
                  </button>
                  <div style={{
                    maxHeight: isOpen ? '300px' : '0', overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s',
                    opacity: isOpen ? 1 : 0,
                  }}>
                    <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.8, paddingBottom: '22px' }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
