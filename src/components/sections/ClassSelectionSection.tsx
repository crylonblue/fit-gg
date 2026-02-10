'use client'

import { useState } from 'react'
import Image from 'next/image'

const classes = [
  {
    id: 'warrior', name: 'Warrior', tagline: 'Masters of Iron', stat: 'STR', color: '#F87171',
    description: 'Warriors gain bonus XP from strength training. Built for lifters and gym lovers who live for the pump.',
    bonuses: ['+25% Strength XP', 'Heavy armor sets', 'Intimidation abilities'],
    image: '/characters/warrior.png',
  },
  {
    id: 'ranger', name: 'Ranger', tagline: 'Born to Run', stat: 'END', color: '#34D399',
    description: 'Rangers excel at cardio and endurance. Built for runners, cyclists, and anyone who loves to move.',
    bonuses: ['+25% Cardio XP', 'Agility gear', 'Speed abilities'],
    image: '/characters/ranger.png',
  },
  {
    id: 'mage', name: 'Mage', tagline: 'Mind & Body', stat: 'FLX', color: '#A78BFA',
    description: 'Mages focus on yoga, flexibility, and mindful movement. Wisdom through wellness.',
    bonuses: ['+25% Flexibility XP', 'Recovery bonuses', 'Mystical gear'],
    image: '/characters/mage.png',
  },
  {
    id: 'paladin', name: 'Paladin', tagline: 'Balanced & Strong', stat: 'BAL', color: '#FBBF24',
    description: 'Paladins are all-rounders. Bonus XP from every workout type. The true jack of all trades.',
    bonuses: ['+15% All XP', 'Healing abilities', 'Radiant armor'],
    image: '/characters/paladin.png',
  },
]

export default function ClassSelectionSection() {
  const [selected, setSelected] = useState('warrior')
  const active = classes.find(c => c.id === selected)!

  return (
    <section id="classes" style={{ padding: '100px 40px', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(20,24,51,0.2), transparent)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p className="font-mono" style={{ color: '#A78BFA', fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>Choose Your Path</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
            Pick Your <span className="gradient-text">Class</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          {/* Character Image */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
              <div style={{ width: '256px', height: '256px', borderRadius: '50%', filter: 'blur(80px)', background: active.color + '25', transition: 'background 0.5s' }} />
            </div>
            <div style={{ position: 'relative', width: '340px', height: '420px' }}>
              <Image
                src={active.image}
                alt={active.name}
                fill
                style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 30px rgba(123,108,246,0.2))' }}
              />
            </div>
          </div>

          {/* Class selector + details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Tabs */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
              {classes.map((cls) => (
                <button
                  key={cls.id}
                  onClick={() => setSelected(cls.id)}
                  style={{
                    padding: '16px',
                    borderRadius: '16px',
                    border: selected === cls.id ? '1px solid rgba(255,255,255,0.14)' : '1px solid var(--color-border)',
                    background: selected === cls.id ? 'var(--color-surface)' : 'transparent',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: selected === cls.id ? '0 8px 32px rgba(0,0,0,0.3)' : 'none',
                  }}
                >
                  <div className="font-mono" style={{ fontSize: '12px', fontWeight: 700, color: cls.color, marginBottom: '4px' }}>{cls.stat}</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-primary)' }}>{cls.name}</div>
                </button>
              ))}
            </div>

            {/* Detail card */}
            <div className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: active.color, marginBottom: '4px' }}>{active.name}</h3>
                <p className="font-mono" style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>{active.tagline}</p>
              </div>

              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{active.description}</p>

              <div>
                <p className="font-mono" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-text-muted)', marginBottom: '12px' }}>Class Bonuses</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {active.bonuses.map((bonus, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: active.color, flexShrink: 0 }} />
                      <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>{bonus}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Play as {active.name}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
