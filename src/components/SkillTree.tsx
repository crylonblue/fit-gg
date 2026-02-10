'use client'

import Image from 'next/image'

const skills = [
  { name: 'Squats 101', done: true },
  { name: 'Pushups 101', done: true },
  { name: 'Core 101', done: true },
  { name: 'Mobility', done: true },
  { name: 'Jump Squats', done: true },
  { name: 'Diamond Push', done: true },
  { name: 'Planks', done: false },
  { name: 'Burpees', done: false },
  { name: 'Pike Push', done: false },
  { name: 'Lunges', done: false },
  { name: 'Pistol Squat', done: false },
  { name: 'Handstand', done: false },
]

export default function SkillTree() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '80px', alignItems: 'center' }}>
          {/* Left: Copy */}
          <div>
            <div className="badge" style={{ marginBottom: '24px' }}>Progression</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '20px', textTransform: 'uppercase' }}>
              A Skill Tree.<br /><span className="text-neon">Not a Playlist.</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '32px' }}>
              No more random workout dumps. fit.gg gives you a <strong style={{ color: 'white' }}>progressive path</strong> — master the basics, unlock harder moves. Every session builds on the last.
            </p>

            <div style={{ display: 'flex', gap: '40px' }}>
              {[
                { value: '200+', label: 'Sessions', color: 'var(--color-neon-green)' },
                { value: '4', label: 'Branches', color: 'var(--color-neon-purple)' },
                { value: '∞', label: 'Growth', color: 'var(--color-neon-yellow)' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-heading)', color: s.color }}>{s.value}</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual skill tree */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {skills.map((s, i) => (
              <div key={i} style={{
                padding: '16px 10px',
                borderRadius: '8px',
                textAlign: 'center',
                background: s.done ? 'rgba(0,255,135,0.06)' : 'var(--color-bg-card)',
                border: s.done ? '1px solid rgba(0,255,135,0.3)' : '1px solid var(--color-border)',
                opacity: s.done ? 1 : 0.4,
              }}>
                <div style={{ fontSize: '20px', marginBottom: '4px' }}>{s.done ? '✅' : '🔒'}</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: s.done ? 'var(--color-neon-green)' : 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>{s.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
