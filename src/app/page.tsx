'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroSection from '@/components/sections/HeroSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import AvatarEvolutionSection from '@/components/sections/AvatarEvolutionSection'
import ClassSelectionSection from '@/components/sections/ClassSelectionSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import WaitlistSection from '@/components/sections/WaitlistSection'
import Footer from '@/components/sections/Footer'
import ParticleField from '@/components/3d/ParticleField'

export default function LandingPage() {
  const [waitlistCount, setWaitlistCount] = useState(12847)
  const { scrollYProgress } = useScroll()

  // Update waitlist count from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('fit-gg-waitlist-count')
    if (saved) {
      setWaitlistCount(parseInt(saved))
    }
  }, [])

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <main className="relative min-h-screen">
      {/* Background particle field */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ y: bgY }}
      >
        <ParticleField />
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold gradient-text"
          >
            fit.gg
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="btn-primary"
            onClick={() => {
              document.getElementById('waitlist')?.scrollIntoView({ 
                behavior: 'smooth' 
              })
            }}
          >
            Join Waitlist
          </motion.button>
        </div>
      </nav>

      {/* Page sections */}
      <div className="relative z-10">
        <HeroSection waitlistCount={waitlistCount} />
        <HowItWorksSection />
        <AvatarEvolutionSection />
        <ClassSelectionSection />
        <FeaturesSection />
        <WaitlistSection 
          waitlistCount={waitlistCount} 
          onJoinWaitlist={(newCount) => {
            setWaitlistCount(newCount)
            localStorage.setItem('fit-gg-waitlist-count', newCount.toString())
          }}
        />
        <Footer />
      </div>
    </main>
  )
}