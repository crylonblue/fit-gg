'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const ChibiCharacter = dynamic(() => import('@/components/3d/ChibiCharacter'), { 
  ssr: false,
  loading: () => <div className="w-full h-full" />
})

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden section-padding pt-32">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-accent-blue/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-sm text-text-secondary"
            >
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              Coming Soon — Join the Waitlist
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
              <span className="text-text-primary">Your Body.</span>
              <br />
              <span className="gradient-text">Your Game.</span>
            </h1>

            <p className="text-xl text-text-secondary max-w-lg leading-relaxed">
              The fitness RPG where real workouts level up your character. 
              Build streaks, join guilds, fight bosses — all powered by your sweat.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                className="btn-primary text-lg px-8 py-4"
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Join the Quest</span>
                <span>⚔️</span>
              </button>
              <button 
                className="btn-outline text-lg px-8 py-4"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>How It Works</span>
                <span>↓</span>
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {['🧙', '⚔️', '🏹', '🛡️'].map((emoji, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-surface-elevated border-2 border-bg-primary flex items-center justify-center text-lg">
                    {emoji}
                  </div>
                ))}
              </div>
              <p className="text-sm text-text-muted">
                Join heroes already on the waitlist
              </p>
            </div>
          </motion.div>

          {/* Right: 3D Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="relative h-[500px] md:h-[600px]"
          >
            {/* Glow behind character */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 bg-primary/20 rounded-full blur-[80px]" />
            </div>
            
            <ChibiCharacter 
              bodyColor="#6C5CE7" 
              accentColor="#FFD93D" 
              weaponType="sword"
              scale={1.6}
            />

            {/* Floating stat badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-16 right-4 glass rounded-xl px-4 py-2"
            >
              <span className="text-accent-green font-mono font-bold text-sm">+250 XP</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-32 left-4 glass rounded-xl px-4 py-2"
            >
              <span className="text-accent-orange font-mono font-bold text-sm">🔥 12 Day Streak</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-40 left-0 glass rounded-xl px-4 py-2"
            >
              <span className="text-primary-light font-mono font-bold text-sm">⬆️ Level 24</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
