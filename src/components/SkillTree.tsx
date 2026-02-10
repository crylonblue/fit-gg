'use client'

const skills = [
  { name: 'Squats 101', unlocked: true, icon: '🦵' },
  { name: 'Pushups 101', unlocked: true, icon: '💪' },
  { name: 'Core 101', unlocked: true, icon: '🎯' },
  { name: 'Mobility', unlocked: true, icon: '🧘' },
  { name: 'Jump Squats', unlocked: true, icon: '⬆️' },
  { name: 'Diamond Push', unlocked: true, icon: '💎' },
  { name: 'Planks', unlocked: false, icon: '🔒' },
  { name: 'Burpees', unlocked: false, icon: '🔒' },
  { name: 'Pike Push', unlocked: false, icon: '🔒' },
  { name: 'Lunges', unlocked: false, icon: '🔒' },
  { name: 'Pistol Squat', unlocked: false, icon: '🔒' },
  { name: 'Handstand', unlocked: false, icon: '🔒' },
]

export default function SkillTree() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'center' }}>
          {/* Left: Copy */}
          <div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px' }}>
              A skill tree,<br />not a playlist.
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
              Most fitness apps dump 500 random workouts on you. fit.gg gives you a <strong>progressive path</strong> — like a game&apos;s skill tree.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '32px' }}>
              Master the basics, unlock harder moves. You can&apos;t skip ahead — and that&apos;s the point. Every session builds on the last.
            </p>
            <div style={{ display: 'flex', gap: '24px' }}>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--color-green-dark)' }}>200+</div>
                <div style={{ fontSize: '14px', color: 'var(--color-text-muted)', fontWeight: 500 }}>Guided sessions</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--color-purple-primary)' }}>4</div>
                <div style={{ fontSize: '14px', color: 'var(--color-text-muted)', fontWeight: 500 }}>Skill branches</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--color-amber-primary)' }}>∞</div>
                <div style={{ fontSize: '14px', color: 'var(--color-text-muted)', fontWeight: 500 }}>Progression</div>
              </div>
            </div>
          </div>

          {/* Right: Visual skill tree */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {skills.map((s, i) => (
              <div key={i} style={{
                padding: '20px 12px',
                borderRadius: '16px',
                textAlign: 'center',
                background: s.unlocked ? 'white' : '#F9FAFB',
                border: s.unlocked ? '2px solid var(--color-green-primary)' : '2px dashed var(--color-border)',
                opacity: s.unlocked ? 1 : 0.5,
                transition: 'all 0.2s',
              }}>
                <div style={{ fontSize: '24px', marginBottom: '6px' }}>{s.icon}</div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: s.unlocked ? 'var(--color-text)' : 'var(--color-text-muted)' }}>{s.name}</div>
                {s.unlocked && <div style={{ fontSize: '10px', color: 'var(--color-green-dark)', fontWeight: 600, marginTop: '4px' }}>✓ Mastered</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
