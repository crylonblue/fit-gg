'use client'

import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import RotatingWarrior from '@/components/3d/RotatingWarrior'

interface HeroSectionProps {
  waitlistCount: number
}

export default function HeroSection({ waitlistCount }: HeroSectionProps) {
  const scrollToNext = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Character Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 md:w-[500px] md:h-[500px]">
          <RotatingWarrior />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gradient-text">
              YOUR BODY IS THE
            </span>
            <br />
            <span className="text-white">
              CONTROLLER.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            The RPG where real workouts level up your character.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-4"
          >
            <button 
              className="btn-primary glow text-lg px-8 py-4 group"
              onClick={() => {
                document.getElementById('waitlist')?.scrollIntoView({ 
                  behavior: 'smooth' 
                })
              }}
            >
              <span>JOIN THE QUEST</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-8"
          >
            <p className="text-text-muted font-mono">
              <span className="text-primary font-bold">
                {waitlistCount.toLocaleString()}
              </span>{' '}
              heroes already waiting
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-muted hover:text-primary transition-colors group"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDownIcon className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
          </div>
        </motion.button>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary/20 pointer-events-none" />
    </section>
  )
}