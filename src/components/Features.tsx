'use client'

const features = [
  { icon: '🔥', title: 'STREAKS', desc: 'Your streak is sacred. Break it and it hurts. Keep it and flex on everyone.', color: '#FF6B35' },
  { icon: '🌳', title: 'SKILL TREE', desc: 'Progressive path. Master basics, unlock advanced moves. No skipping.', color: '#00FF87' },
  { icon: '⚔️', title: 'LEAGUES', desc: 'Weekly leaderboards. Get promoted. Get demoted. Talk trash.', color: '#B24BF3' },
  { icon: '❤️', title: 'HEARTS', desc: '5 per day. Quit early? Lose one. It keeps you honest.', color: '#FF4757' },
  { icon: '🧠', title: 'ADAPTIVE AI', desc: 'Too easy? We push harder. Struggling? We dial back. Your workout evolves.', color: '#00D4FF' },
  { icon: '⚡', title: 'XP SYSTEM', desc: 'Every rep counts. Watch your level climb. Chase that next milestone.', color: '#FFE600' },
]

export default function Features() {
  return (
    <section id="features" className="section-alt">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="badge" style={{ marginBottom: '24px', display: 'inline-flex' }}>RPG Mechanics</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
            Everything That Makes<br />Games Addictive.<br /><span className="text-neon">For Your Body.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px' }}>
          {features.map((f, i) => (
            <div key={i} className="card" style={{ borderLeft: `3px solid ${f.color}` }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '32px', flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '6px', letterSpacing: '0.05em' }}>{f.title}</h3>
                  <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
