'use client'

import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import Waitlist from '@/components/Waitlist'
import Footer from '@/components/Footer'

export default function LandingPage() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Waitlist />
      <Footer />
    </main>
  )
}
