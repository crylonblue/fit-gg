'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    icon: '💪',
    title: 'WORK OUT IRL',
    description: 'Log your real workouts using our simple tracking system',
    details: [
      'Quick 15-second logging',
      'Supports all exercise types',  
      'Automatic Health app sync'
    ]
  },
  {
    icon: '⚡',
    title: 'LEVEL UP',
    description: 'Earn XP, unlock gear, and evolve your avatar',
    details: [
      'Real workouts = Real progress',
      'Unlock epic equipment',
      'Character gets stronger'
    ]
  },
  {
    icon: '👑',
    title: 'BECOME LEGEND',
    description: 'Lead guilds, defeat bosses, and inspire others',
    details: [
      'Join or create guilds',
      'Epic multiplayer boss fights',
      'Share your transformation'
    ]
  }
]

export default function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      id="how-it-works"
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">EVERY WORKOUT IS A</span><br />
            <span className="gradient-text">BATTLE.</span><br />
            <span className="text-white">EVERY BATTLE MAKES YOU</span><br />
            <span className="text-secondary font-mono">STRONGER.</span>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connection line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent z-0" />
              )}
              
              <div className="card relative z-10 p-8 text-center group">
                {/* Icon */}
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-primary font-mono">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                  {step.description}
                </p>
                
                {/* Details */}
                <ul className="space-y-2 text-sm text-text-muted">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center justify-center">
                      <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-12 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
            Ready to transform your fitness journey into an epic adventure?
          </p>
          
          <button 
            className="btn-primary glow group"
            onClick={() => {
              document.getElementById('avatar-evolution')?.scrollIntoView({ 
                behavior: 'smooth' 
              })
            }}
          >
            <span>See Your Avatar Evolve</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              ↓
            </span>
          </button>
        </motion.div>
      </div>
      
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}