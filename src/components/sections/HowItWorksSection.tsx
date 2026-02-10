'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    icon: '💪',
    title: 'Work Out',
    description: 'Do any workout — gym, run, yoga, whatever moves you. Log it in seconds or sync from Apple Health.',
    color: '#FF6B35',
  },
  {
    number: '02',
    icon: '⚡',
    title: 'Earn XP',
    description: 'Every rep, every mile, every stretch earns experience points. Your real effort becomes real progress.',
    color: '#6C5CE7',
  },
  {
    number: '03',
    icon: '🎮',
    title: 'Level Up',
    description: 'Watch your character grow stronger, unlock epic gear, and evolve into a legendary hero.',
    color: '#00D68F',
  },
]

export default function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" ref={ref} className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary-light font-mono text-sm tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple as <span className="gradient-text">1, 2, 3</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-border-hover to-transparent" />
              )}

              <div className="relative inline-flex items-center justify-center w-28 h-28 mb-8">
                <div 
                  className="absolute inset-0 rounded-3xl opacity-15 blur-xl"
                  style={{ backgroundColor: step.color }}
                />
                <div className="relative w-full h-full rounded-3xl bg-surface border border-border flex items-center justify-center">
                  <span className="text-5xl">{step.icon}</span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="font-mono text-xs tracking-widest uppercase" style={{ color: step.color }}>
                  Step {step.number}
                </p>
                <h3 className="text-2xl font-bold text-text-primary">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
