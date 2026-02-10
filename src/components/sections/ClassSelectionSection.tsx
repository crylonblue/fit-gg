'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'

const ChibiCharacter = dynamic(() => import('@/components/3d/ChibiCharacter'), { ssr: false })

const classes = [
  {
    id: 'warrior',
    name: 'Warrior',
    focus: 'Strength Training',
    description: 'Masters of heavy lifting. Every squat, deadlift, and bench press fuels raw power. Wield a mighty sword forged from iron discipline.',
    color: '#DC2626',
    bgGlow: 'rgba(220, 38, 38, 0.08)',
    stats: { strength: 95, endurance: 70, agility: 45, spirit: 40 },
  },
  {
    id: 'ranger',
    name: 'Ranger',
    focus: 'Cardio & Running',
    description: 'Swift and relentless. Runs, cycling, and HIIT forge unmatched stamina. The arrow flies true for those who never stop moving.',
    color: '#16A34A',
    bgGlow: 'rgba(22, 163, 74, 0.08)',
    stats: { strength: 50, endurance: 95, agility: 85, spirit: 50 },
  },
  {
    id: 'mage',
    name: 'Mage',
    focus: 'Flexibility & Yoga',
    description: 'Harness the arcane through flow and focus. Yoga, stretching, and mobility unlock powers beyond the physical.',
    color: '#A855F7',
    bgGlow: 'rgba(168, 85, 247, 0.08)',
    stats: { strength: 35, endurance: 55, agility: 90, spirit: 95 },
  },
  {
    id: 'paladin',
    name: 'Paladin',
    focus: 'Balanced Training',
    description: 'Jack of all trades, master of balance. A blend of strength, cardio, and flexibility creates the ultimate all-rounder.',
    color: '#D97706',
    bgGlow: 'rgba(217, 119, 6, 0.08)',
    stats: { strength: 75, endurance: 75, agility: 70, spirit: 75 },
  },
]

function StatBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="w-16 text-text-muted">{label}</span>
      <div className="flex-1 h-1.5 bg-bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
      <span className="w-8 text-right text-text-secondary font-mono text-xs">{value}</span>
    </div>
  )
}

export default function ClassSelectionSection() {
  const [activeClass, setActiveClass] = useState('warrior')
  const active = classes.find((c) => c.id === activeClass) || classes[0]

  return (
    <section id="classes" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Choose Your <span className="gradient-text">Class</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-md mx-auto">
            Your workout style defines your hero. Pick a class that matches how you train.
          </p>
        </motion.div>

        {/* Class selector tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {classes.map((cls) => (
            <button
              key={cls.id}
              onClick={() => setActiveClass(cls.id)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeClass === cls.id
                  ? 'text-white shadow-lg scale-105'
                  : 'bg-surface border border-border text-text-secondary hover:border-border-hover'
              }`}
              style={
                activeClass === cls.id
                  ? { backgroundColor: cls.color, boxShadow: `0 8px 30px ${cls.color}40` }
                  : undefined
              }
            >
              {cls.name}
            </button>
          ))}
        </div>

        {/* Active class display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* 3D character */}
            <div
              className="h-[400px] lg:h-[480px] rounded-3xl relative overflow-hidden"
              style={{ background: active.bgGlow }}
            >
              <ChibiCharacter characterClass={active.id} scale={1.6} />
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <div
                  className="text-xs font-mono font-bold tracking-widest mb-2"
                  style={{ color: active.color }}
                >
                  {active.focus.toUpperCase()}
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-3">{active.name}</h3>
                <p className="text-text-secondary text-lg leading-relaxed">{active.description}</p>
              </div>

              <div className="card-glass p-6 space-y-3">
                <div className="text-sm font-semibold text-text-secondary mb-2 uppercase tracking-wider">Stats</div>
                <StatBar label="STR" value={active.stats.strength} color={active.color} />
                <StatBar label="END" value={active.stats.endurance} color={active.color} />
                <StatBar label="AGI" value={active.stats.agility} color={active.color} />
                <StatBar label="SPI" value={active.stats.spirit} color={active.color} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
