'use client'

const features = [
  { icon: '🔥', title: 'Streaks', tagline: 'Miss a day, your armor rusts.', description: 'Build daily workout streaks for multiplied XP. Your gear glows brighter the longer you go.', color: '#F97316' },
  { icon: '👥', title: 'Guilds', tagline: 'Your squad needs you.', description: 'Form guilds with friends. Complete team challenges, share XP, and climb leaderboards together.', color: '#22D3EE' },
  { icon: '⚔️', title: 'PvP Duels', tagline: 'Settle it with sweat.', description: 'Challenge anyone to workout duels. Weekly competitions with exclusive rewards for the winner.', color: '#F87171' },
  { icon: '🐉', title: 'Boss Raids', tagline: 'The whole server vs one boss.', description: 'Epic community events where every workout deals damage. Unite against raid bosses for legendary loot.', color: '#A78BFA' },
]

export default function FeaturesSection() {
  return (
    <section id="features" style={{ padding: '100px 40px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p className="font-mono" style={{ color: '#A78BFA', fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>Features</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
            Not Your Average <span className="gradient-text-warm">Fitness App</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          {features.map((f, i) => (
            <div key={i} className="card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0, background: f.color + '14' }}>
                  {f.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>{f.title}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 500, color: f.color }}>{f.tagline}</p>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{f.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
