'use client'

import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import SkillTree from '@/components/SkillTree'
import Features from '@/components/Features'
import Comparison from '@/components/Comparison'
import Waitlist from '@/components/Waitlist'
import Footer from '@/components/Footer'

export default function LandingPage() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <SkillTree />
      <Features />
      <Comparison />
      <Waitlist />
      <Footer />
    </main>
  )
}
