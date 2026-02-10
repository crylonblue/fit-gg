'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    icon: '🔥',
    title: 'Streaks',
    tagline: 'Miss a day, your armor rusts.',
    description: 'Build daily workout streaks for multiplied XP. Your gear literally glows brighter the longer you go.',
    color: '#FF6B35',
  },
  {
    icon: '👥',
    title: 'Guilds',
    tagline: 'Your squad needs you.',
    description: 'Form guilds with friends. Complete team challenges, share XP bonuses, and climb leaderboards together.',
    color: '#4ECDC4',
  },
  {
    icon: '⚔️',
    title: 'PvP Duels',
    tagline: 'Settle it with sweat.',
    description: 'Challenge anyone to workout duels. Weekly competitions with exclusive rewards for the victor.',
    color: '#FF6B6B',
  },
  {
    icon: '🐉',
    title: 'Boss Raids',
    tagline: 'The whole server vs one boss.',
    description: 'Epic community events where every workout deals damage. Unite against massive raid bosses for legendary loot.',
    color: '#A29BFE',
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="features" ref={ref} className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-light font-mono text-sm tracking-widest uppercase mb-4">Features</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Not Your Average <span className="gradient-text-warm">Fitness App</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto text-lg">
            This is a game that happens to make you fit. Every feature keeps you coming back.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-8 group"
            >
              <div className="flex items-start gap-5">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: feature.color + '15' }}
                >
                  {feature.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-text-primary">{feature.title}</h3>
                  <p className="text-sm font-medium" style={{ color: feature.color }}>{feature.tagline}</p>
                  <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
