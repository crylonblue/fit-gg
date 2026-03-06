'use client'
import { Check, X, Award } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'

const competitors = [
  { name: 'Other fitness apps', progression: false, streaks: false, leagues: false, freeCore: false, noEquipment: true, fiveMin: false },
  { name: 'YouTube workouts', progression: false, streaks: false, leagues: false, freeCore: true, noEquipment: true, fiveMin: false },
  { name: 'Gym membership', progression: false, streaks: false, leagues: false, freeCore: false, noEquipment: false, fiveMin: false },
  { name: 'fit.gg', progression: true, streaks: true, leagues: true, freeCore: true, noEquipment: true, fiveMin: true },
]

const features = [
  { key: 'progression', label: 'Progressive skill tree' },
  { key: 'streaks', label: 'Streak system' },
  { key: 'leagues', label: 'Competitive leagues' },
  { key: 'freeCore', label: 'Free core experience' },
  { key: 'noEquipment', label: 'Zero equipment' },
  { key: 'fiveMin', label: '5-minute sessions' },
]

export default function Comparison() {
  const ref = useReveal()
  return (
    <section style={{ padding: '160px 24px' }}>
      <div className="container">
        <div ref={ref} className="reveal">
          <p style={{ fontSize: '13px', fontWeight: 700, color: '#00FF87', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '20px', textAlign: 'center' }}>Why fit.gg</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.04em', textAlign: 'center', marginBottom: '80px' }}>
            NOT ANOTHER <span className="text-gradient">FITNESS APP.</span>
          </h2>

          {/* Desktop table */}
          <div className="comparison-desktop" style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <th style={{ textAlign: 'left', padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#555', fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}></th>
                  {competitors.map((c, i) => (
                    <th key={i} style={{
                      padding: '20px 24px',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      fontWeight: 900,
                      fontFamily: 'var(--font-heading)',
                      fontSize: i === 3 ? '16px' : '13px',
                      color: i === 3 ? '#00FF87' : '#666',
                      textAlign: 'center',
                      background: i === 3 ? 'rgba(0,255,135,0.05)' : 'transparent',
                      borderLeft: i === 3 ? '1px solid rgba(0,255,135,0.1)' : 'none',
                      borderRight: i === 3 ? '1px solid rgba(0,255,135,0.1)' : 'none',
                    }}>
                      {i === 3 && (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '10px', color: '#00FF87', fontWeight: 700, marginBottom: '4px', letterSpacing: '0.15em' }}>
                          <Award size={12} strokeWidth={2.5} style={{ color: '#00FF87' }} /> BEST
                        </div>
                      )}
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((f, fi) => (
                  <tr key={fi} style={{ background: fi % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                    <td style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.03)', color: '#aaa', fontWeight: 500 }}>{f.label}</td>
                    {competitors.map((c, ci) => {
                      const val = c[f.key as keyof typeof c]
                      return (
                        <td key={ci} style={{
                          textAlign: 'center',
                          padding: '16px 24px',
                          borderBottom: '1px solid rgba(255,255,255,0.03)',
                          background: ci === 3 ? 'rgba(0,255,135,0.05)' : 'transparent',
                          borderLeft: ci === 3 ? '1px solid rgba(0,255,135,0.1)' : 'none',
                          borderRight: ci === 3 ? '1px solid rgba(0,255,135,0.1)' : 'none',
                        }}>
                          {val ? (
                            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(0,255,135,0.1)', filter: ci === 3 ? 'drop-shadow(0 0 6px rgba(0,255,135,0.4))' : 'none' }}>
                              <Check size={14} strokeWidth={3} style={{ color: '#00FF87' }} />
                            </span>
                          ) : (
                            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }}>
                              <X size={14} strokeWidth={2} style={{ color: '#333' }} />
                            </span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="comparison-mobile" style={{ display: 'none' }}>
            <div className="glass-card" style={{
              padding: '32px 24px', marginBottom: '16px',
              border: '1px solid rgba(0,255,135,0.15)',
              boxShadow: '0 0 40px rgba(0,255,135,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '18px', fontWeight: 900, color: '#00FF87', fontFamily: 'var(--font-heading)', marginBottom: '20px', textAlign: 'center' }}>
                <Award size={16} strokeWidth={2.5} style={{ color: '#00FF87' }} /> fit.gg
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#aaa', fontSize: '14px' }}>{f.label}</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(0,255,135,0.1)', filter: 'drop-shadow(0 0 4px rgba(0,255,135,0.4))' }}>
                      <Check size={14} strokeWidth={3} style={{ color: '#00FF87' }} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card" style={{ padding: '28px 24px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#555', fontFamily: 'var(--font-heading)', marginBottom: '20px', textAlign: 'center' }}>Everyone else</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#444', fontSize: '14px' }}>{f.label}</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }}>
                      <X size={14} strokeWidth={2} style={{ color: '#333' }} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
