'use client'
import { useState, useEffect } from 'react'
import type { Exercise } from '@/data/types'

interface RestTimerProps {
  duration: number
  nextExercise: Exercise | null
  onComplete: () => void
  onSkip: () => void
}

export default function RestTimer({ duration, nextExercise, onComplete, onSkip }: RestTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration)

  useEffect(() => {
    setTimeLeft(duration)
  }, [duration])

  useEffect(() => {
    if (timeLeft <= 0) { onComplete(); return }
    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [timeLeft <= 0])

  useEffect(() => {
    if (timeLeft === 0) onComplete()
  }, [timeLeft])

  const radius = 50
  const circumference = 2 * Math.PI * radius
  const progress = 1 - timeLeft / duration
  const strokeDashoffset = circumference * (1 - progress)

  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <p className="text-lg uppercase tracking-widest text-gray-400 font-heading">Rest</p>
      
      <div className="relative flex items-center justify-center">
        <svg width="140" height="140" className="transform -rotate-90">
          <circle cx="70" cy="70" r={radius} stroke="#1a1a1a" strokeWidth="6" fill="none" />
          <circle
            cx="70" cy="70" r={radius}
            stroke="#00FF87"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
        <span className="absolute text-4xl font-bold tabular-nums" style={{ color: '#00FF87' }}>
          {timeLeft}
        </span>
      </div>

      <button
        onClick={onSkip}
        className="px-6 py-2 text-sm uppercase tracking-wider text-gray-400 border border-gray-700 rounded-full hover:border-gray-500 transition-colors"
      >
        Skip Rest →
      </button>

      {nextExercise && (
        <div className="mt-4 p-4 bg-white/5 rounded-xl w-full max-w-xs">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Up Next</p>
          <div className="flex items-center gap-3">
            <span className="text-3xl">{nextExercise.emoji}</span>
            <div className="text-left">
              <p className="font-semibold">{nextExercise.name}</p>
              <p className="text-sm text-gray-400">
                {nextExercise.reps ? `${nextExercise.reps} reps` : `${nextExercise.duration}s`}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
