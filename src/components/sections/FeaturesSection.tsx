'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '🔥',
    title: 'Daily Streaks',
    description: 'Build momentum with consecutive workout days. Longer streaks unlock rare rewards and XP multipliers.',
    gradient: 'from-accent-orange/20 to-accent-gold/10',
  },
  {
    icon: '⚔️',
    title: 'Guilds',
    description: 'Team up with friends or join a guild of like-minded athletes. Train together, compete on leaderboards.',
    gradient: 'from-primary/20 to-accent-cyan/10',
  },
  {
    icon: '🏆',
    title: 'PvP Duels',
    description: 'Challenge other players to head-to-head workout battles. Outperform them to claim victory and loot.',
    gradient: 'from-accent-red/20 to-accent-orange/10',
  },
  {
    icon: '🐉',
    title: 'Boss Raids',
    description: 'Epic weekly challenges that require your whole guild. Take down massive bosses through collective effort.',
    gradient: 'from-accent-purple/20 to-primary/10',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding relative">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-cyan/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Built for <span className="gradient-text-warm">Adventure</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-md mx-auto">
            Everything you need to stay motivated and make fitness genuinely fun.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-glass p-8 group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl mb-5`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
