'use client'

const steps = [
  { number: '01', icon: '💪', title: 'Work Out', description: 'Do any workout — gym, run, yoga, whatever. Log it in seconds or sync from Apple Health.', color: '#F97316' },
  { number: '02', icon: '⚡', title: 'Earn XP', description: 'Every rep, every mile, every stretch earns experience. Real effort = real progress.', color: '#7B6CF6' },
  { number: '03', icon: '🎮', title: 'Level Up', description: 'Your character grows stronger, unlocks epic gear, and evolves into a legendary hero.', color: '#34D399' },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" style={{ padding: '100px 40px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p className="font-mono" style={{ color: '#A78BFA', fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>How It Works</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
            Simple as <span className="gradient-text">1, 2, 3</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
          {steps.map((step, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '96px', height: '96px', marginBottom: '32px', borderRadius: '24px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', position: 'relative' }}>
                <span style={{ fontSize: '2.5rem' }}>{step.icon}</span>
                <div style={{ position: 'absolute', top: '-8px', right: '-8px', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: '#fff', background: step.color, fontFamily: 'var(--font-mono)' }}>
                  {step.number}
                </div>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '12px' }}>{step.title}</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '280px', margin: '0 auto' }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
