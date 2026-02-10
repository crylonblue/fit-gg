'use client'

const features = [
  { icon: '🔥', title: 'Streaks', desc: 'Your streak is sacred. One day at a time, watch it grow. Miss a day? Use a streak freeze.' },
  { icon: '🌳', title: 'Skill Tree', desc: 'Progressive path from basics to advanced. Master one skill, unlock the next. No skipping ahead.' },
  { icon: '🏆', title: 'Leagues', desc: 'Weekly leaderboards with promotions and demotions. Bronze to Champion — compete with friends.' },
  { icon: '❤️', title: 'Hearts', desc: "5 hearts per day. Skip exercises or quit early? Lose a heart. It keeps you honest." },
  { icon: '🧠', title: 'Adaptive', desc: "Too easy? We push you. Struggling? We dial it back. Your workouts evolve with you." },
  { icon: '⚡', title: 'XP System', desc: 'Every rep counts. Earn XP, level up, unlock achievements. Progress you can feel.' },
]

export default function Features() {
  return (
    <section id="features" className="section-muted">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px' }}>
          Everything that makes Duolingo addictive.<br />
          <span className="text-gradient">But for your body.</span>
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '56px' }}>
          Proven retention mechanics, adapted for fitness.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {features.map((f, i) => (
            <div key={i} className="card" style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{f.icon}</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>{f.title}</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
