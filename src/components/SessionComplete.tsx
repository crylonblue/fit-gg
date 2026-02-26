'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface SessionCompleteProps {
  sessionTitle: string
  day: number
  xpEarned: number
}

export default function SessionComplete({ sessionTitle, day, xpEarned }: SessionCompleteProps) {
  const [displayXp, setDisplayXp] = useState(0)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setShowContent(true)
    let current = 0
    const step = Math.ceil(xpEarned / 40)
    const interval = setInterval(() => {
      current += step
      if (current >= xpEarned) {
        current = xpEarned
        clearInterval(interval)
      }
      setDisplayXp(current)
    }, 30)
    return () => clearInterval(interval)
  }, [xpEarned])

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen px-6 text-center transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="text-7xl mb-6">🏆</div>

      <h1
        className="text-4xl md:text-5xl font-bold font-heading mb-2"
        style={{ color: '#00FF87' }}
      >
        Day {day} Complete!
      </h1>

      <p className="text-gray-400 text-lg mb-10">{sessionTitle}</p>

      <div className="bg-white/5 border border-white/10 rounded-2xl px-10 py-8 mb-10">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">XP Earned</p>
        <p className="text-6xl font-bold font-heading tabular-nums" style={{ color: '#00FF87' }}>
          +{displayXp}
        </p>
      </div>

      <div className="flex items-center gap-2 text-xl text-gray-300 mb-12">
        <span>🔥</span>
        <span>Keep the streak alive — come back tomorrow!</span>
      </div>

      <Link
        href="/"
        className="px-8 py-4 rounded-full font-bold text-lg text-black transition-all hover:scale-105"
        style={{
          background: '#00FF87',
          boxShadow: '0 0 30px rgba(0,255,135,0.3)',
        }}
      >
        Back to Home
      </Link>
    </div>
  )
}
