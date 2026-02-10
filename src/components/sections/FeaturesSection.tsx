'use client'

const features = [
  { icon: '🔥', title: 'Streaks', tagline: 'Miss a day, your armor rusts.', description: 'Build daily workout streaks for multiplied XP. Your gear glows brighter the longer you go.', color: '#F97316' },
  { icon: '👥', title: 'Guilds', tagline: 'Your squad needs you.', description: 'Form guilds with friends. Complete team challenges, share XP, and climb leaderboards together.', color: '#22D3EE' },
  { icon: '⚔️', title: 'PvP Duels', tagline: 'Settle it with sweat.', description: 'Challenge anyone to workout duels. Weekly competitions with exclusive rewards for the winner.', color: '#F87171' },
  { icon: '🐉', title: 'Boss Raids', tagline: 'The whole server vs one boss.', description: 'Epic community events where every workout deals damage. Unite against raid bosses for legendary loot.', color: '#A78BFA' },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-28 sm:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary-light font-mono text-sm tracking-widest uppercase mb-4">Features</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Not Your Average <span className="gradient-text-warm">Fitness App</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} className="card p-8 group">
              <div className="flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: f.color + '14' }}
                >
                  {f.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-text-primary">{f.title}</h3>
                  <p className="text-sm font-medium" style={{ color: f.color }}>{f.tagline}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{f.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
