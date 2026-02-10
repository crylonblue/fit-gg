'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const classes = [
  {
    id: 'warrior',
    name: 'Warrior',
    emoji: '⚔️',
    description: 'Masters of strength and power',
    details: 'Warriors gain +25% XP from strength training. Perfect for gym rats and iron addicts.',
    popularity: 34,
    bonuses: [
      '+25% XP from strength training',
      'Unique heavy armor sets',
      'Intimidation special abilities'
    ],
    primaryStat: 'Strength',
    color: '#EF4444'
  },
  {
    id: 'ranger',
    name: 'Ranger',
    emoji: '🏹',
    description: 'Endurance athletes and runners',
    details: 'Rangers excel at cardio and endurance. Born to run, built to last.',
    popularity: 28,
    bonuses: [
      '+25% XP from cardio workouts',
      'Agility and speed bonuses',
      'Nature-themed gear sets'
    ],
    primaryStat: 'Endurance',
    color: '#10B981'
  },
  {
    id: 'mage',
    name: 'Mage',
    emoji: '🧙',
    description: 'Flexibility and mind-body masters',
    details: 'Mages focus on yoga, flexibility, and mindful movement. Wisdom through wellness.',
    popularity: 18,
    bonuses: [
      '+25% XP from flexibility training',
      'Meditation and recovery bonuses',
      'Mystical robes and accessories'
    ],
    primaryStat: 'Flexibility',
    color: '#8B5CF6'
  },
  {
    id: 'paladin',
    name: 'Paladin',
    emoji: '🛡️',
    description: 'Balanced warriors of wellness',
    details: 'Paladins are well-rounded athletes who excel at everything. Jack of all trades, master of balance.',
    popularity: 20,
    bonuses: [
      '+15% XP from all workout types',
      'Healing and recovery bonuses',
      'Radiant golden armor sets'
    ],
    primaryStat: 'Balance',
    color: '#F59E0B'
  }
]

export default function ClassSelectionSection() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null)
  const [hoveredClass, setHoveredClass] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const activeClass = hoveredClass || selectedClass
  const displayedClass = classes.find(c => c.id === activeClass) || classes[0]

  return (
    <section 
      id="class-selection"
      ref={ref}
      className="relative py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">CHOOSE YOUR CLASS</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Each class has unique bonuses and specializations. Pick the one that matches your fitness journey.
          </p>
        </motion.div>

        {/* Class grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {classes.map((classItem, index) => (
            <motion.div
              key={classItem.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`card cursor-pointer relative overflow-hidden transition-all duration-300 ${
                selectedClass === classItem.id 
                  ? 'border-primary glow' 
                  : hoveredClass === classItem.id
                  ? 'border-primary/70'
                  : ''
              }`}
              onClick={() => setSelectedClass(classItem.id)}
              onMouseEnter={() => setHoveredClass(classItem.id)}
              onMouseLeave={() => setHoveredClass(null)}
            >
              {/* Background accent */}
              <div 
                className="absolute inset-0 opacity-5 transition-opacity duration-300"
                style={{ backgroundColor: classItem.color }}
              />
              
              <div className="relative p-6 text-center">
                {/* Class emoji */}
                <div className="text-5xl mb-4 transform transition-transform duration-300 hover:scale-110">
                  {classItem.emoji}
                </div>
                
                {/* Class name */}
                <h3 className="text-xl font-bold mb-2" style={{ color: classItem.color }}>
                  {classItem.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-text-secondary mb-4">
                  {classItem.description}
                </p>
                
                {/* Popularity bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-text-muted">Popularity</span>
                    <span className="text-primary font-mono font-bold">
                      {classItem.popularity}%
                    </span>
                  </div>
                  <div className="w-full bg-surface-elevated rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{ backgroundColor: classItem.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${classItem.popularity}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                </div>

                {/* Selection indicator */}
                {selectedClass === classItem.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: classItem.color }}
                  >
                    <span className="text-white text-sm">✓</span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Class details panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="card p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Class info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl">{displayedClass.emoji}</span>
                <div>
                  <h3 className="text-3xl font-bold mb-2" style={{ color: displayedClass.color }}>
                    {displayedClass.name}
                  </h3>
                  <p className="text-text-secondary">
                    Primary Stat: <span className="text-primary font-mono font-bold">
                      {displayedClass.primaryStat}
                    </span>
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                {displayedClass.details}
              </p>

              {/* Class bonuses */}
              <div>
                <h4 className="font-bold text-white mb-4">Class Bonuses:</h4>
                <ul className="space-y-2">
                  {displayedClass.bonuses.map((bonus, index) => (
                    <li key={index} className="flex items-start">
                      <span 
                        className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"
                        style={{ backgroundColor: displayedClass.color }}
                      />
                      <span className="text-text-muted">{bonus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stats visualization */}
            <div className="space-y-6">
              <h4 className="font-bold text-white">Stat Distribution:</h4>
              
              <div className="space-y-4">
                {['Strength', 'Endurance', 'Flexibility'].map((stat) => {
                  const value = stat.toLowerCase() === displayedClass.primaryStat.toLowerCase() ? 90 :
                               displayedClass.id === 'paladin' ? 70 : 
                               Math.floor(Math.random() * 30) + 40
                  
                  return (
                    <div key={stat} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">{stat}</span>
                        <span className="text-primary font-mono font-bold">{value}</span>
                      </div>
                      <div className="w-full bg-surface-elevated rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full"
                          style={{ backgroundColor: displayedClass.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${value}%` }}
                          transition={{ duration: 0.8 }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Call to action */}
              <button 
                className="btn-primary w-full mt-6 group"
                onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  })
                }}
              >
                <span>Explore Features</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Hint text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-text-muted text-sm mt-6"
        >
          Hover or tap a class to see it in action • You can change classes anytime in the app
        </motion.p>
      </div>
    </section>
  )
}