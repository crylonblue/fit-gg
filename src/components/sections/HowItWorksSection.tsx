'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Workout',
    description: 'Complete real exercises — push-ups, runs, yoga, whatever moves you. Your phone or watch tracks every rep.',
    icon: '💪',
    color: 'from-accent-orange to-accent-gold',
  },
  {
    number: '02',
    title: 'Earn XP',
    description: 'Every workout earns experience points. Harder challenges, bigger rewards. Build streaks for bonus multipliers.',
    icon: '⚡',
    color: 'from-primary to-accent-cyan',
  },
  {
    number: '03',
    title: 'Level Up',
    description: 'Watch your character grow stronger. Unlock new gear, abilities, and cosmetics as you progress.',
    icon: '🚀',
    color: 'from-accent-green to-accent-cyan',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-md mx-auto">
            Three simple steps to turn every workout into an epic adventure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="card-glass p-8 text-center group"
            >
              <div className="text-5xl mb-6">{step.icon}</div>
              <div className={`inline-block text-xs font-mono font-bold tracking-widest bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-3`}>
                STEP {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
