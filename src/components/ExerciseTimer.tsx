'use client'
import { useState, useEffect, useCallback } from 'react'

interface ExerciseTimerProps {
  duration: number
  onComplete: () => void
  isActive: boolean
}

export default function ExerciseTimer({ duration, onComplete, isActive }: ExerciseTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration)

  useEffect(() => {
    setTimeLeft(duration)
  }, [duration])

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [isActive, timeLeft <= 0])

  useEffect(() => {
    if (timeLeft === 0 && isActive) onComplete()
  }, [timeLeft, isActive, onComplete])

  const progress = 1 - timeLeft / duration
  const radius = 70
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference * (1 - progress)

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="180" height="180" className="transform -rotate-90">
        <circle
          cx="90" cy="90" r={radius}
          stroke="#1a1a1a"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="90" cy="90" r={radius}
          stroke="#00FF87"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-linear"
        />
      </svg>
      <div className="absolute text-5xl font-bold font-heading tabular-nums" style={{ color: '#00FF87' }}>
        {timeLeft}s
      </div>
    </div>
  )
}
