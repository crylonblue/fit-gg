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
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className="text-xl font-bold gradient-text">fit.gg</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <a href="#how-it-works" className="hidden sm:inline text-sm text-text-muted hover:text-text-primary transition-colors">How It Works</a>
            <a href="#classes" className="hidden sm:inline text-sm text-text-muted hover:text-text-primary transition-colors">Classes</a>
            <a href="#features" className="hidden sm:inline text-sm text-text-muted hover:text-text-primary transition-colors">Features</a>
            <button
              className="btn-primary text-sm"
              style={{ padding: '10px 24px', borderRadius: '12px' }}
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      <HeroSection />
      <div style={{ height: '40px' }} />
      <HowItWorksSection />
      <div style={{ height: '20px' }} />
      <ClassSelectionSection />
      <div style={{ height: '20px' }} />
      <FeaturesSection />
      <div style={{ height: '20px' }} />
      <WaitlistSection />
      <Footer />
    </main>
  )
}
