'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/sections/HeroSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import ClassSelectionSection from '@/components/sections/ClassSelectionSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import WaitlistSection from '@/components/sections/WaitlistSection'
import Footer from '@/components/sections/Footer'

export default function LandingPage() {
  return (
    <main className="relative min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold gradient-text"
          >
            fit.gg
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            {['How It Works', 'Classes', 'Features'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <button
              className="btn-primary text-sm px-5 py-2.5"
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Waitlist
            </button>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden btn-primary text-sm px-4 py-2"
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join
          </motion.button>
        </div>
      </nav>

      <HeroSection />
      <HowItWorksSection />
      <ClassSelectionSection />
      <FeaturesSection />
      <WaitlistSection />
      <Footer />
    </main>
  )
}
