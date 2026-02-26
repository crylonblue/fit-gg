'use client'
import { useState, useCallback, useMemo } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import sessions from '@/data/sessions.json'
import type { Session, Exercise } from '@/data/types'
import ExerciseTimer from '@/components/ExerciseTimer'
import RestTimer from '@/components/RestTimer'
import SessionComplete from '@/components/SessionComplete'

type Phase = 'ready' | 'exercising' | 'resting' | 'complete'

const XP_PER_SESSION = 50

export default function SessionPage() {
  const params = useParams()
  const session = useMemo(
    () => (sessions as Session[]).find(s => s.id === Number(params.id)),
    [params.id]
  )

  const [phase, setPhase] = useState<Phase>('ready')
  const [exerciseIndex, setExerciseIndex] = useState(0)

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <p className="text-2xl">Session not found</p>
        <Link href="/" className="text-green-400 underline">← Home</Link>
      </div>
    )
  }

  const exercise = session.exercises[exerciseIndex]
  const isLastExercise = exerciseIndex >= session.exercises.length - 1
  const totalExercises = session.exercises.length

  const handleStart = () => setPhase('exercising')

  const handleExerciseDone = useCallback(() => {
    if (isLastExercise) {
      setPhase('complete')
    } else if (exercise.rest > 0) {
      setPhase('resting')
    } else {
      setExerciseIndex(i => i + 1)
      setPhase('exercising')
    }
  }, [isLastExercise, exercise?.rest])

  const handleRestDone = useCallback(() => {
    setExerciseIndex(i => i + 1)
    setPhase('exercising')
  }, [])

  // ── COMPLETE ──
  if (phase === 'complete') {
    return <SessionComplete sessionTitle={session.title} day={session.day} xpEarned={XP_PER_SESSION} />
  }

  // ── READY ──
  if (phase === 'ready') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center gap-6">
        <Link href="/" className="absolute top-6 left-6 text-gray-500 hover:text-white transition-colors text-sm">
          ← Back
        </Link>
        <div className="text-xs uppercase tracking-widest text-gray-500">Day {session.day}</div>
        <h1 className="text-4xl md:text-5xl font-bold font-heading" style={{ color: '#00FF87' }}>
          {session.title}
        </h1>
        <p className="text-gray-400 max-w-md text-lg leading-relaxed">{session.description}</p>
        <div className="flex gap-4 text-sm text-gray-500">
          <span>⏱ {session.estimatedMinutes} min</span>
          <span>•</span>
          <span>{totalExercises} exercises</span>
        </div>

        {/* exercise preview */}
        <div className="w-full max-w-sm space-y-2 mt-4">
          {session.exercises.map((ex, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl">
              <span className="text-2xl">{ex.emoji}</span>
              <span className="flex-1 text-left text-sm">{ex.name}</span>
              <span className="text-xs text-gray-500">
                {ex.reps ? `${ex.reps}×` : `${ex.duration}s`}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={handleStart}
          className="mt-6 px-10 py-4 rounded-full font-bold text-lg text-black transition-all hover:scale-105 active:scale-95"
          style={{
            background: '#00FF87',
            boxShadow: '0 0 30px rgba(0,255,135,0.3)',
          }}
        >
          Start Workout
        </button>
      </div>
    )
  }

  // ── RESTING ──
  if (phase === 'resting') {
    const nextExercise = exerciseIndex + 1 < totalExercises ? session.exercises[exerciseIndex + 1] : null
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <RestTimer
          key={exerciseIndex}
          duration={exercise.rest}
          nextExercise={nextExercise}
          onComplete={handleRestDone}
          onSkip={handleRestDone}
        />
      </div>
    )
  }

  // ── EXERCISING ──
  const progressPercent = ((exerciseIndex + 1) / totalExercises) * 100

  return (
    <div className="flex flex-col items-center justify-between min-h-screen px-6 py-8">
      {/* Progress bar */}
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            Exercise {exerciseIndex + 1}/{totalExercises}
          </span>
          <span className="text-xs text-gray-500">{session.title}</span>
        </div>
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%`, background: '#00FF87' }}
          />
        </div>
      </div>

      {/* Exercise content */}
      <div className="flex flex-col items-center text-center gap-4 flex-1 justify-center">
        <div className="text-8xl mb-2">{exercise.emoji}</div>
        <h2 className="text-3xl md:text-4xl font-bold font-heading">{exercise.name}</h2>

        {exercise.duration ? (
          <div className="relative flex items-center justify-center mt-4">
            <ExerciseTimer
              key={exerciseIndex}
              duration={exercise.duration}
              onComplete={handleExerciseDone}
              isActive={true}
            />
          </div>
        ) : (
          <div className="mt-2">
            <span className="text-5xl font-bold tabular-nums" style={{ color: '#00FF87' }}>
              {exercise.reps}
            </span>
            <span className="text-xl text-gray-400 ml-2">reps</span>
          </div>
        )}

        {/* Form cues */}
        <div className="mt-6 space-y-2 max-w-xs">
          {exercise.cues.map((cue, i) => (
            <p key={i} className="text-sm text-gray-400 flex items-start gap-2">
              <span className="text-green-400 mt-0.5">•</span>
              {cue}
            </p>
          ))}
        </div>
      </div>

      {/* Action button (only for rep-based) */}
      {!exercise.duration && (
        <button
          onClick={handleExerciseDone}
          className="w-full max-w-md py-4 rounded-full font-bold text-lg text-black transition-all hover:scale-[1.02] active:scale-95"
          style={{
            background: '#00FF87',
            boxShadow: '0 0 30px rgba(0,255,135,0.3)',
          }}
        >
          {isLastExercise ? '🏆 Finish Workout' : 'Done →'}
        </button>
      )}
    </div>
  )
}
