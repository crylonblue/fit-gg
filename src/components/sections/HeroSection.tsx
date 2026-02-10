'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const ChibiCharacter = dynamic(() => import('@/components/3d/ChibiCharacter'), { ssr: false })

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-accent-cyan/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-sm text-text-secondary mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            Coming Soon — Join the Waitlist
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
            Your Workout.{' '}
            <span className="gradient-text">Your Quest.</span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-lg mb-10 leading-relaxed">
            Real workouts level up your 3D character. Join guilds, fight bosses, earn loot.
            The RPG that makes fitness an adventure.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              className="btn-primary text-base"
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Join the Quest</span>
              <span>⚔️</span>
            </button>
            <button
              className="btn-outline text-base"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              How It Works
            </button>
          </div>
        </motion.div>

        {/* Right: 3D Character + floating UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-[480px] lg:h-[560px]"
        >
          <ChibiCharacter characterClass="warrior" scale={1.6} />

          {/* Floating XP badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute top-8 right-4 glass rounded-2xl px-4 py-3 text-sm"
          >
            <div className="text-accent-gold font-bold">+250 XP</div>
            <div className="text-text-muted text-xs">Morning Run Complete</div>
          </motion.div>

          {/* Floating level indicator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute bottom-16 left-0 glass rounded-2xl px-4 py-3 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-accent-cyan font-bold">LVL 24</span>
              <div className="w-20 h-1.5 bg-bg-secondary rounded-full overflow-hidden">
                <div className="w-[72%] h-full bg-gradient-to-r from-primary to-accent-cyan rounded-full" />
              </div>
            </div>
            <div className="text-text-muted text-xs mt-1">Warrior • 3,420 / 4,750 XP</div>
          </motion.div>

          {/* Streak badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="absolute top-1/2 right-0 glass rounded-2xl px-4 py-2 text-sm"
          >
            <div className="text-accent-orange font-bold">🔥 12 Day Streak</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
