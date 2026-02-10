'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    id: 'streaks',
    icon: '🔥',
    title: 'STREAKS',
    subtitle: "Miss a day, your armor rusts.",
    description: "Build momentum with daily workout streaks. Every consecutive day makes your character stronger and your gear more powerful.",
    details: [
      'Daily streak multipliers',
      'Streak protection shields',
      'Legendary streak rewards',
      'Community streak challenges'
    ],
    gradient: 'from-orange-500 to-red-500',
    glowColor: '#F59E0B'
  },
  {
    id: 'guilds',
    icon: '👥',
    title: 'GUILDS',
    subtitle: "Your team needs you. Don't let them down.",
    description: "Join forces with other heroes. Complete guild quests, climb leaderboards, and support each other's fitness journeys.",
    details: [
      'Weekly guild challenges',
      'Shared XP bonuses',
      'Guild vs guild competitions',
      'Private chat and motivation'
    ],
    gradient: 'from-blue-500 to-purple-500',
    glowColor: '#3B82F6'
  },
  {
    id: 'pvp',
    icon: '⚔️',
    title: 'PVP DUELS',
    subtitle: "Challenge friends. Settle it with sweat.",
    description: "Direct challenges between heroes. Weekly workout competitions with bragging rights and exclusive rewards.",
    details: [
      'Friend vs friend duels',
      'Weekly competition cycles',
      'Custom challenge types',
      'Winner takes glory (and loot)'
    ],
    gradient: 'from-red-500 to-pink-500',
    glowColor: '#EF4444'
  },
  {
    id: 'bosses',
    icon: '🐉',
    title: 'BOSS FIGHTS',
    subtitle: "The whole server vs one massive boss.",
    description: "Epic community events where all heroes unite against legendary bosses. Your workouts deal damage. Together, we're unstoppable.",
    details: [
      'Server-wide raid events',
      'Collective damage tracking',
      'Epic loot for all participants',
      'Monthly boss rotations'
    ],
    gradient: 'from-purple-500 to-indigo-500',
    glowColor: '#7C3AED'
  }
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      id="features"
      ref={ref}
      className="relative py-24 px-6 bg-gradient-to-b from-bg-primary to-surface/20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">NOT YOUR GRANDMA'S</span><br />
            <span className="gradient-text">FITNESS APP.</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            This is a game that happens to make you fit. Every feature is designed to keep you coming back.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="card p-8 h-full relative overflow-hidden transition-all duration-500 group-hover:scale-105">
                {/* Background gradient on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                  style={{ backgroundColor: feature.glowColor }}
                />
                
                <div className="relative z-10">
                  {/* Icon and title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 font-mono text-primary">
                        {feature.title}
                      </h3>
                      <p className="text-text-secondary font-medium">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Feature details */}
                  <ul className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, delay: index * 0.15 + detailIndex * 0.1 }}
                        className="flex items-center text-sm text-text-muted"
                      >
                        <span 
                          className="w-2 h-2 rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"
                          style={{ backgroundColor: feature.glowColor }}
                        />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Interactive element */}
                  <div className="mt-8 p-4 bg-surface-elevated/50 rounded-lg border border-border/50 group-hover:border-primary/30 transition-colors duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-text-muted uppercase tracking-wide">
                        Feature Status
                      </span>
                      <span className="text-xs font-mono text-secondary">
                        Coming Soon
                      </span>
                    </div>
                    
                    <div className="mt-2 w-full bg-surface-elevated rounded-full h-1">
                      <motion.div
                        className="h-1 rounded-full bg-gradient-to-r from-secondary to-primary"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '85%' } : { width: 0 }}
                        transition={{ duration: 1.5, delay: index * 0.2 + 0.8 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Ready to experience fitness gaming like never before?
          </p>
          
          <button 
            className="btn-primary glow text-lg px-8 py-4 group"
            onClick={() => {
              document.getElementById('waitlist')?.scrollIntoView({ 
                behavior: 'smooth' 
              })
            }}
          >
            <span>Join the Revolution</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              ⚡
            </span>
          </button>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}