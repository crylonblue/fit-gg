'use client'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import SkillTree from '@/components/SkillTree'
import Waitlist from '@/components/Waitlist'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import SocialProof from '@/components/SocialProof'

export default function LandingPage() {
  return (
    <main>
      <Nav />
      <Hero />
      <SocialProof />
      <hr className="gradient-line" />
      <Problem />
      <hr className="gradient-line" />
      <HowItWorks />
      <hr className="gradient-line" />
      <Features />
      <hr className="gradient-line" />
      <SkillTree />
      <hr className="gradient-line" />
      <FAQ />
      <hr className="gradient-line" />
      <Waitlist />
      <Footer />
    </main>
  )
}
