'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const classes = [
  {
    id: 'warrior',
    name: 'Warrior',
    tagline: 'Masters of Iron',
    description: 'Warriors gain bonus XP from strength training. Built for lifters and gym lovers who live for the pump.',
    bonuses: ['+25% Strength XP', 'Heavy armor sets', 'Intimidation abilities'],
    stat: 'STR',
    color: '#F87171',
    image: '/characters/warrior.png',
  },
  {
    id: 'ranger',
    name: 'Ranger',
    tagline: 'Born to Run',
    description: 'Rangers excel at cardio and endurance. Built for runners, cyclists, and anyone who loves to move.',
    bonuses: ['+25% Cardio XP', 'Agility gear', 'Speed abilities'],
    stat: 'END',
    color: '#34D399',
    image: '/characters/ranger.png',
  },
  {
    id: 'mage',
    name: 'Mage',
    tagline: 'Mind & Body',
    description: 'Mages focus on yoga, flexibility, and mindful movement. Wisdom through wellness.',
    bonuses: ['+25% Flexibility XP', 'Recovery bonuses', 'Mystical gear'],
    stat: 'FLX',
    color: '#A78BFA',
    image: '/characters/mage.png',
  },
  {
    id: 'paladin',
    name: 'Paladin',
    tagline: 'Balanced & Strong',
    description: 'Paladins are all-rounders. Bonus XP from every workout type. The true jack of all trades.',
    bonuses: ['+15% All XP', 'Healing abilities', 'Radiant armor'],
    stat: 'BAL',
    color: '#FBBF24',
    image: '/characters/paladin.png',
  },
]

export default function ClassSelectionSection() {
  const [selected, setSelected] = useState('warrior')
  const active = classes.find(c => c.id === selected)!

  return (
    <section id="classes" className="py-28 sm:py-36 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-primary-light font-mono text-sm tracking-widest uppercase mb-4">Choose Your Path</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Pick Your <span className="gradient-text">Class</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Character Image */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 rounded-full blur-[80px] transition-colors duration-500" style={{ backgroundColor: active.color + '25' }} />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="relative w-[280px] h-[350px] sm:w-[340px] sm:h-[420px]"
              >
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  className="object-contain drop-shadow-[0_0_30px_rgba(123,108,246,0.2)]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Class selector + details */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Class tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {classes.map((cls) => (
                <button
                  key={cls.id}
                  onClick={() => setSelected(cls.id)}
                  className={`p-4 rounded-2xl border text-center transition-all duration-300 cursor-pointer ${
                    selected === cls.id
                      ? 'bg-surface border-border-hover shadow-lg'
                      : 'bg-transparent border-border hover:border-border-hover'
                  }`}
                >
                  <div className="text-xs font-bold font-mono mb-1" style={{ color: cls.color }}>{cls.stat}</div>
                  <div className="text-sm font-semibold text-text-primary">{cls.name}</div>
                </button>
              ))}
            </div>

            {/* Active class detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="card p-8 space-y-6"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-1" style={{ color: active.color }}>{active.name}</h3>
                  <p className="text-text-muted text-sm font-mono">{active.tagline}</p>
                </div>

                <p className="text-text-secondary leading-relaxed">{active.description}</p>

                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-3">Class Bonuses</p>
                  <div className="space-y-2.5">
                    {active.bonuses.map((bonus, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: active.color }} />
                        <span className="text-sm text-text-secondary">{bonus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  className="btn-primary w-full justify-center"
                  onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>Play as {active.name}</span>
                  <span>→</span>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
