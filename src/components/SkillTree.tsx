'use client'
import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'

interface SkillNode {
  id: string
  label: string
  emoji: string
  x: number
  y: number
  unlocked: boolean
  mastered: boolean
  tier: 'foundations' | 'intermediate' | 'advanced'
  description: string
}

const nodes: SkillNode[] = [
  // Foundations tier
  { id: 'squats', label: 'Squats 101', emoji: '🦵', x: 15, y: 15, unlocked: true, mastered: true, tier: 'foundations', description: 'Master basic squat form. 8 sessions to complete.' },
  { id: 'pushups', label: 'Pushups 101', emoji: '💪', x: 40, y: 12, unlocked: true, mastered: true, tier: 'foundations', description: 'Learn proper pushup mechanics from the ground up.' },
  { id: 'core', label: 'Core 101', emoji: '🎯', x: 65, y: 15, unlocked: true, mastered: true, tier: 'foundations', description: 'Build a solid core foundation with planks and crunches.' },
  { id: 'mobility', label: 'Mobility', emoji: '🧘', x: 88, y: 12, unlocked: true, mastered: false, tier: 'foundations', description: 'Improve flexibility and range of motion. 6 sessions.' },

  // Intermediate tier
  { id: 'jump-squats', label: 'Jump Squats', emoji: '⚡', x: 10, y: 42, unlocked: true, mastered: false, tier: 'intermediate', description: 'Add explosiveness to your squats. Plyometric power.' },
  { id: 'diamond', label: 'Diamond Push', emoji: '💎', x: 32, y: 38, unlocked: true, mastered: false, tier: 'intermediate', description: 'Narrow grip pushups targeting triceps. 10 sessions.' },
  { id: 'mountain', label: 'Mountain Climbers', emoji: '⛰️', x: 55, y: 42, unlocked: false, mastered: false, tier: 'intermediate', description: 'High-intensity cardio meets core strength.' },
  { id: 'lunges', label: 'Lunge Mastery', emoji: '🏃', x: 78, y: 38, unlocked: false, mastered: false, tier: 'intermediate', description: 'Single-leg strength and balance training.' },

  // Advanced tier
  { id: 'pistol', label: 'Pistol Squats', emoji: '🔫', x: 15, y: 68, unlocked: false, mastered: false, tier: 'advanced', description: 'The ultimate single-leg squat. Strength + balance mastery.' },
  { id: 'pike', label: 'Pike Pushups', emoji: '🔺', x: 40, y: 72, unlocked: false, mastered: false, tier: 'advanced', description: 'Shoulder strength gateway to handstands.' },
  { id: 'lsit', label: 'L-Sit Hold', emoji: '🪑', x: 65, y: 68, unlocked: false, mastered: false, tier: 'advanced', description: 'Core and tricep isometric hold. Pure strength.' },
  { id: 'handstand', label: 'Handstand', emoji: '🤸', x: 88, y: 72, unlocked: false, mastered: false, tier: 'advanced', description: 'Wall-assisted to freestanding. The ultimate goal.' },
]

const connections: [string, string][] = [
  ['squats', 'jump-squats'],
  ['pushups', 'diamond'],
  ['core', 'mountain'],
  ['mobility', 'lunges'],
  ['jump-squats', 'pistol'],
  ['diamond', 'pike'],
  ['mountain', 'lsit'],
  ['lunges', 'handstand'],
]

function getNode(id: string) { return nodes.find(n => n.id === id)! }

export default function SkillTree() {
  const ref = useReveal()
  const [active, setActive] = useState<string | null>(null)
  const activeNode = active ? getNode(active) : null

  return (
    <section id="skill-tree" style={{ padding: '160px 24px' }}>
      <div className="container">
        <div ref={ref} className="reveal">
          <p style={{ fontSize: '13px', fontWeight: 700, color: '#00FF87', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '20px', textAlign: 'center' }}>Progression</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', textAlign: 'center', marginBottom: '16px' }}>
            YOUR <span className="text-gradient">SKILL TREE.</span>
          </h2>
          <p style={{ color: '#555', textAlign: 'center', maxWidth: '500px', margin: '0 auto 56px', fontSize: '15px', lineHeight: 1.7 }}>
            No random workouts. Every session builds on the last.<br />Master the basics → unlock advanced moves.
          </p>

          {/* Tier labels */}
          <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto' }}>
            {/* SVG connections */}
            <svg viewBox="0 0 100 85" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
              {connections.map(([fromId, toId]) => {
                const from = getNode(fromId)
                const to = getNode(toId)
                const unlocked = from.mastered && to.unlocked
                return (
                  <line
                    key={`${fromId}-${toId}`}
                    x1={from.x} y1={from.y + 3}
                    x2={to.x} y2={to.y - 3}
                    stroke={unlocked ? '#00FF87' : '#1a1a1a'}
                    strokeWidth="0.4"
                    strokeDasharray={unlocked ? 'none' : '1.5 1'}
                    opacity={unlocked ? 0.6 : 0.4}
                  />
                )
              })}
            </svg>

            {/* Tier backgrounds */}
            {(['foundations', 'intermediate', 'advanced'] as const).map((tier, i) => (
              <div key={tier} style={{
                position: 'absolute',
                top: `${i * 33}%`,
                left: '-8px',
                right: '-8px',
                height: '33%',
                borderRadius: '12px',
                background: i === 0 ? 'rgba(0,255,135,0.015)' : 'transparent',
                borderBottom: i < 2 ? '1px solid #111' : 'none',
              }} />
            ))}

            {/* Tier labels */}
            {[
              { label: 'FOUNDATIONS', y: '8%', color: '#00FF87' },
              { label: 'INTERMEDIATE', y: '40%', color: '#F97316' },
              { label: 'ADVANCED', y: '72%', color: '#A855F7' },
            ].map(t => (
              <div key={t.label} style={{
                position: 'absolute', left: '-4px', top: t.y,
                fontSize: '9px', fontWeight: 800, color: t.color,
                letterSpacing: '0.15em', opacity: 0.5,
                writingMode: 'vertical-rl', textOrientation: 'mixed',
                transform: 'rotate(180deg)',
              }}>{t.label}</div>
            ))}

            {/* Nodes */}
            <div style={{ position: 'relative', paddingBottom: '85%' }}>
              {nodes.map(node => {
                const isActive = active === node.id
                const color = node.tier === 'foundations' ? '#00FF87' : node.tier === 'intermediate' ? '#F97316' : '#A855F7'
                return (
                  <button
                    key={node.id}
                    onClick={() => setActive(isActive ? null : node.id)}
                    style={{
                      position: 'absolute',
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      transform: 'translate(-50%, -50%)',
                      width: '56px',
                      height: '56px',
                      borderRadius: '14px',
                      border: `2px solid ${node.mastered ? color : node.unlocked ? `${color}55` : '#1a1a1a'}`,
                      background: node.mastered ? `${color}15` : node.unlocked ? '#0a0a0a' : '#060606',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '2px',
                      transition: 'all 0.2s ease',
                      zIndex: 1,
                      boxShadow: isActive ? `0 0 20px ${color}33` : node.mastered ? `0 0 12px ${color}22` : 'none',
                      opacity: node.unlocked ? 1 : 0.4,
                    }}
                  >
                    <span style={{ fontSize: '20px', lineHeight: 1 }}>{node.unlocked ? node.emoji : '🔒'}</span>
                    <span style={{
                      fontSize: '7px', fontWeight: 700, color: node.mastered ? color : '#555',
                      textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1,
                      maxWidth: '48px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    }}>{node.label}</span>
                    {node.mastered && <span style={{ position: 'absolute', top: '-6px', right: '-6px', fontSize: '12px' }}>✅</span>}
                  </button>
                )
              })}
            </div>

            {/* Detail card */}
            {activeNode && (
              <div style={{
                marginTop: '-20px',
                padding: '20px 24px',
                borderRadius: '12px',
                border: `1px solid ${activeNode.tier === 'foundations' ? '#00FF8733' : activeNode.tier === 'intermediate' ? '#F9731633' : '#A855F733'}`,
                background: '#0a0a0a',
                animation: 'count-up 0.3s ease-out',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '28px' }}>{activeNode.emoji}</span>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 800 }}>{activeNode.label}</h4>
                    <span style={{
                      fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
                      color: activeNode.mastered ? '#00FF87' : activeNode.unlocked ? '#F97316' : '#555',
                    }}>
                      {activeNode.mastered ? '✓ Mastered' : activeNode.unlocked ? 'In Progress' : '🔒 Locked'}
                    </span>
                  </div>
                </div>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.6 }}>{activeNode.description}</p>
              </div>
            )}
          </div>

          {/* Bottom CTA */}
          <p style={{ textAlign: 'center', marginTop: '48px', color: '#333', fontSize: '13px', fontWeight: 600 }}>
            12 skills shown · 50+ in the full app · <span style={{ color: '#00FF87' }}>Tap a node to explore</span>
          </p>
        </div>
      </div>
    </section>
  )
}
