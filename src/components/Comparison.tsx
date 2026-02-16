'use client'
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
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', textAlign: 'center', marginBottom: '72px' }}>
            NOT ANOTHER <span className="text-gradient">FITNESS APP.</span>
          </h2>

          {/* Desktop table */}
          <div className="comparison-desktop" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '1px solid #181818', color: '#555', fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}></th>
                  {competitors.map((c, i) => (
                    <th key={i} style={{
                      padding: '16px 20px',
                      borderBottom: '1px solid #181818',
                      fontWeight: 800,
                      fontFamily: 'var(--font-heading)',
                      fontSize: i === 3 ? '16px' : '13px',
                      color: i === 3 ? '#00FF87' : '#888',
                      textAlign: 'center',
                      background: i === 3 ? 'rgba(0,255,135,0.03)' : 'transparent',
                      borderTop: i === 3 ? '2px solid #00FF8744' : 'none',
                      borderRadius: i === 3 ? '12px 12px 0 0' : '0',
                    }}>
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((f, fi) => (
                  <tr key={fi}>
                    <td style={{ padding: '14px 20px', borderBottom: '1px solid #0c0c0c', color: '#aaa', fontWeight: 500 }}>{f.label}</td>
                    {competitors.map((c, ci) => {
                      const val = c[f.key as keyof typeof c]
                      return (
                        <td key={ci} style={{
                          textAlign: 'center',
                          padding: '14px 20px',
                          borderBottom: '1px solid #0c0c0c',
                          fontSize: '18px',
                          background: ci === 3 ? 'rgba(0,255,135,0.03)' : 'transparent',
                        }}>
                          {val ? '✅' : <span style={{ opacity: 0.3 }}>✕</span>}
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
            <div style={{
              background: 'rgba(0,255,135,0.03)',
              border: '1px solid rgba(0,255,135,0.15)',
              borderRadius: '16px',
              padding: '28px 24px',
              marginBottom: '16px',
            }}>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#00FF87', fontFamily: 'var(--font-heading)', marginBottom: '20px', textAlign: 'center' }}>fit.gg</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#aaa', fontSize: '14px' }}>{f.label}</span>
                    <span style={{ fontSize: '16px' }}>✅</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{
              background: '#080808',
              border: '1px solid #151515',
              borderRadius: '16px',
              padding: '28px 24px',
            }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#555', fontFamily: 'var(--font-heading)', marginBottom: '20px', textAlign: 'center' }}>Everyone else</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#555', fontSize: '14px' }}>{f.label}</span>
                    <span style={{ fontSize: '16px', opacity: 0.3 }}>✕</span>
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
