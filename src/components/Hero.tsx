'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Flame, Zap, Trophy, Dumbbell, Target, TreePine } from 'lucide-react'
import Particles from './Particles'
import WaitlistSignup from './WaitlistSignup'

const lines: { icon: React.ReactNode; text: string }[] = [
  { icon: <Flame size={14} className="inline" style={{ color: '#FF6B35' }} />, text: '47 day streak — @darkslayer_99' },
  { icon: <Zap size={14} className="inline" style={{ color: '#FBBF24' }} />, text: 'Level 12 reached — @fitwarrior' },
  { icon: <Trophy size={14} className="inline" style={{ color: '#FFD700' }} />, text: 'Promoted to Gold League — @xp_grinder' },
  { icon: <Dumbbell size={14} className="inline" style={{ color: '#A855F7' }} />, text: 'Squats 101 mastered — @noob_gains' },
  { icon: <Target size={14} className="inline" style={{ color: '#3B82F6' }} />, text: 'Session complete — 92% accuracy' },
  { icon: <TreePine size={14} className="inline" style={{ color: '#00FF87' }} />, text: 'New skill unlocked: Diamond Pushups' },
]

function AnimatedStat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!started) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [started, target])

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, fontFamily: 'var(--font-heading)', color: '#00FF87', letterSpacing: '-0.03em' }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div style={{ fontSize: '11px', color: '#555', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '4px' }}>
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % lines.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
      <Particles />

      {/* Atmospheric light rays */}
      <div className="light-rays" />

      {/* Radial glows */}
      <div style={{ position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)', width: '1000px', height: '1000px', background: 'radial-gradient(circle, rgba(0,255,135,0.06) 0%, transparent 50%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(168,85,247,0.03) 0%, transparent 50%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', padding: '120px 24px 80px' }}>
        {/* Floating shield logo */}
        <div style={{ marginBottom: '32px', animation: 'shield-float 4s ease-in-out infinite, shield-glow 3s ease-in-out infinite' }}>
          <Image src="/logo-shield.png" alt="fit.gg shield" width={80} height={80} priority />
        </div>

        {/* MASSIVE headline */}
        <h1 style={{
          fontSize: 'clamp(4rem, 13vw, 11rem)',
          fontWeight: 900,
          lineHeight: 0.88,
          letterSpacing: '-0.06em',
          marginBottom: '32px',
          fontFamily: 'var(--font-heading)',
        }}>
          YOUR BODY<span style={{ color: '#1a1a1a' }}>.</span><br />
          <span className="text-gradient">YOUR GAME<span style={{ WebkitTextFillColor: '#1a1a1a' }}>.</span></span>
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#666', lineHeight: 1.8,
          maxWidth: '460px', margin: '0 auto 48px', fontWeight: 500,
        }}>
          5-minute daily workouts with RPG progression.<br />
          Build streaks. Climb leagues. Level up your life.
        </p>

        {/* Waitlist CTA */}
        <div style={{ marginBottom: '64px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
          <WaitlistSignup source="hero" />
        </div>

        {/* Animated stat counters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(32px, 6vw, 64px)', marginBottom: '48px', flexWrap: 'wrap' }}>
          <AnimatedStat target={2847} suffix="+" label="Warriors" />
          <AnimatedStat target={50000} suffix="+" label="Workouts Done" />
          <AnimatedStat target={98} suffix="%" label="Stick Rate" />
        </div>

        {/* Live feed ticker */}
        <div style={{ height: '28px', overflow: 'hidden' }}>
          <div key={idx} className="cursor" style={{
            fontSize: '13px', color: '#00FF87', fontWeight: 600,
            fontFamily: 'var(--font-heading)', letterSpacing: '0.01em',
            animation: 'count-up 0.4s ease-out',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          }}>
            {lines[idx].icon}
            <span>{lines[idx].text}</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(transparent, #000)', pointerEvents: 'none' }} />
    </section>
  )
}
