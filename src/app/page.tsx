'use client'

import HeroSection from '@/components/sections/HeroSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import ClassSelectionSection from '@/components/sections/ClassSelectionSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import WaitlistSection from '@/components/sections/WaitlistSection'
import Footer from '@/components/sections/Footer'

export default function LandingPage() {
  return (
    <main className="relative min-h-screen bg-bg-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold gradient-text">fit.gg</span>

          <div className="flex items-center gap-8">
            <a href="#how-it-works" className="hidden sm:inline text-sm text-text-muted hover:text-text-primary transition-colors">How It Works</a>
            <a href="#classes" className="hidden sm:inline text-sm text-text-muted hover:text-text-primary transition-colors">Classes</a>
            <a href="#features" className="hidden sm:inline text-sm text-text-muted hover:text-text-primary transition-colors">Features</a>
            <button
              className="btn-primary text-sm !px-5 !py-2.5 !rounded-xl"
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Waitlist
            </button>
          </div>
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
