'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import dynamic from 'next/dynamic'

const ChibiCharacter = dynamic(() => import('@/components/3d/ChibiCharacter'), { 
  ssr: false,
  loading: () => <div className="w-full h-full animate-pulse bg-surface rounded-2xl" />
})

const classes = [
  {
    id: 'warrior',
    name: 'Warrior',
    tagline: 'Masters of Iron',
    description: 'Warriors gain bonus XP from strength training. Perfect for lifters and gym enthusiasts who live for the pump.',
    bonuses: ['+25% Strength XP', 'Heavy armor sets', 'Intimidation abilities'],
    primaryStat: 'STR',
    color: '#FF6B6B',
    bodyColor: '#CC3333',
    accentColor: '#FFD93D',
    weaponType: 'sword' as const,
  },
  {
    id: 'ranger',
    name: 'Ranger',
    tagline: 'Born to Run',
    description: 'Rangers excel at cardio and endurance. Built for runners, cyclists, and anyone who loves to move fast.',
    bonuses: ['+25% Cardio XP', 'Agility gear', 'Speed abilities'],
    primaryStat: 'END',
    color: '#00D68F',
    bodyColor: '#2D8B5E',
    accentColor: '#4ECDC4',
    weaponType: 'bow' as const,
  },
  {
    id: 'mage',
    name: 'Mage',
    tagline: 'Mind & Body',
    description: 'Mages focus on yoga, flexibility, and mindful movement. Wisdom through wellness, power through presence.',
    bonuses: ['+25% Flexibility XP', 'Recovery bonuses', 'Mystical gear'],
    primaryStat: 'FLX',
    color: '#A29BFE',
    bodyColor: '#6C5CE7',
    accentColor: '#A29BFE',
    weaponType: 'staff' as const,
  },
  {
    id: 'paladin',
    name: 'Paladin',
    tagline: 'Balanced & Strong',
    description: 'Paladins are all-rounders who get bonuses from every workout type. The true jack of all trades.',
    bonuses: ['+15% All XP', 'Healing abilities', 'Radiant armor'],
    primaryStat: 'BAL',
    color: '#FFD93D',
    bodyColor: '#CC9900',
    accentColor: '#FFD93D',
    weaponType: 'shield' as const,
  },
]

export default function ClassSelectionSection() {
  const [selected, setSelected] = useState('warrior')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const activeClass = classes.find(c => c.id === selected) || classes[0]

  return (
    <section id="classes" ref={ref} className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-light font-mono text-sm tracking-widest uppercase mb-4">Choose Your Path</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Pick Your <span className="gradient-text">Class</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto text-lg">
            Each class has unique bonuses that match your workout style. You can switch anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Class tabs */}
          <div className="lg:col-span-2 space-y-4">
            {classes.map((cls, i) => (
              <motion.button
                key={cls.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setSelected(cls.id)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                  selected === cls.id
                    ? 'bg-surface border-primary/50 shadow-lg shadow-primary/10'
                    : 'bg-transparent border-border hover:border-border-hover hover:bg-surface/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold font-mono"
                    style={{ 
                      backgroundColor: selected === cls.id ? cls.color + '20' : 'transparent',
                      color: cls.color,
                      border: `1px solid ${selected === cls.id ? cls.color + '40' : 'transparent'}`
                    }}
                  >
                    {cls.primaryStat}
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary">{cls.name}</h3>
                    <p className="text-sm text-text-muted">{cls.tagline}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Active class detail */}
          <motion.div
            key={activeClass.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3 card p-8"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* 3D Preview */}
              <div className="h-[300px] md:h-full relative">
                <div 
                  className="absolute inset-0 rounded-2xl opacity-10 blur-2xl"
                  style={{ backgroundColor: activeClass.color }}
                />
                <ChibiCharacter
                  bodyColor={activeClass.bodyColor}
                  accentColor={activeClass.accentColor}
                  weaponType={activeClass.weaponType}
                  scale={1.5}
                />
              </div>

              {/* Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-1" style={{ color: activeClass.color }}>
                    {activeClass.name}
                  </h3>
                  <p className="text-text-muted text-sm font-mono">{activeClass.tagline}</p>
                </div>

                <p className="text-text-secondary leading-relaxed">
                  {activeClass.description}
                </p>

                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-3">Bonuses</p>
                  <div className="space-y-2">
                    {activeClass.bonuses.map((bonus, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeClass.color }} />
                        <span className="text-sm text-text-secondary">{bonus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  className="btn-primary w-full"
                  onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>Play as {activeClass.name}</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
