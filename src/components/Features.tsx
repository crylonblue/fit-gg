'use client'
import { Flame, Swords, Zap, TreePine, Target, Home, Gem, Crown, Lock, Check } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'

const features = [
  {
    icon: <Flame size={22} strokeWidth={2} style={{ color: '#F97316' }} />, label: 'Streaks', title: 'Your streak is sacred.',
    desc: 'Show up every day. Watch it grow. Break it and it resets. The longer it gets, the more it hurts to lose.',
    color: '#F97316', gradient: 'linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(249,115,22,0.02) 100%)',
    wide: true,
    extra: (
      <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginTop: '20px' }}>
        {[1,2,3,4,5].map(d => (
          <div key={d} style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Flame size={18} strokeWidth={2} style={{ color: '#F97316' }} />
          </div>
        ))}
        {[6,7].map(d => (
          <div key={d} style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#333', fontWeight: 700 }}>—</div>
        ))}
        <span style={{ marginLeft: '12px', fontSize: '22px', fontWeight: 900, color: '#F97316', fontFamily: 'var(--font-heading)' }}>5</span>
      </div>
    ),
  },
  {
    icon: <Swords size={22} strokeWidth={2} style={{ color: '#A855F7' }} />, label: 'Leagues', title: 'Weekly competition.',
    desc: 'Top 10 promote. Bottom 5 demote. Just enough pressure to keep you going.',
    color: '#A855F7', gradient: 'linear-gradient(135deg, rgba(168,85,247,0.08) 0%, rgba(168,85,247,0.02) 100%)',
    extra: (
      <div style={{ display: 'flex', gap: '8px', marginTop: '16px', alignItems: 'center' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(205,127,50,0.1)', border: '1px solid rgba(205,127,50,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CD7F32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
        </div>
        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(192,192,192,0.1)', border: '1px solid rgba(192,192,192,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
        </div>
        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
        </div>
        <Gem size={20} strokeWidth={2} style={{ color: '#A855F7', opacity: 0.3 }} />
        <Crown size={20} strokeWidth={2} style={{ color: '#FFD700', opacity: 0.3 }} />
      </div>
    ),
  },
  {
    icon: <Zap size={22} strokeWidth={2} style={{ color: '#FBBF24' }} />, label: 'XP System', title: 'Every rep counts.',
    desc: 'Watch your level climb. Unlock new moves. Feel the dopamine.',
    color: '#FBBF24', gradient: 'linear-gradient(135deg, rgba(251,191,36,0.08) 0%, rgba(251,191,36,0.02) 100%)',
    extra: (
      <div style={{ marginTop: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '6px' }}>
          <span style={{ color: '#555' }}>Level 12</span>
          <span style={{ color: '#FBBF24', fontWeight: 700 }}>2,450 / 3,000</span>
        </div>
        <div style={{ height: '6px', borderRadius: '3px', background: 'rgba(255,255,255,0.05)', overflow: 'hidden' }}>
          <div className="xp-fill" />
        </div>
      </div>
    ),
  },
  {
    icon: <TreePine size={22} strokeWidth={2} style={{ color: '#00FF87' }} />, label: 'Skill Tree', title: 'Progressive. Not random.',
    desc: 'Master basics, unlock advanced moves. You can\'t skip ahead — and that\'s the point.',
    color: '#00FF87', gradient: 'linear-gradient(135deg, rgba(0,255,135,0.08) 0%, rgba(0,255,135,0.02) 100%)',
    wide: true,
    extra: (
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '16px' }}>
        {['Squats','Pushups','Core','Mobility'].map((s,i) => (
          <span key={i} className="node" style={{ padding: '6px 14px', borderRadius: '8px', fontSize: '11px', fontWeight: 700, background: 'rgba(0,255,135,0.06)', border: '1px solid rgba(0,255,135,0.2)', color: '#00FF87', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            {s} <Check size={10} strokeWidth={3} style={{ color: '#00FF87' }} />
          </span>
        ))}
        {['Planks','Burpees'].map((s,i) => (
          <span key={i} style={{ padding: '6px 14px', borderRadius: '8px', fontSize: '11px', fontWeight: 700, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', color: '#333', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <Lock size={10} strokeWidth={2} style={{ color: '#333' }} /> {s}
          </span>
        ))}
      </div>
    ),
  },
  {
    icon: <Target size={22} strokeWidth={2} style={{ color: '#3B82F6' }} />, label: 'Daily Challenges', title: 'New challenge every day.',
    desc: 'Bonus XP for completing daily challenges. Keep it fresh, keep it fun.',
    color: '#3B82F6', gradient: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.02) 100%)',
  },
  {
    icon: <Home size={22} strokeWidth={2} style={{ color: '#666' }} />, label: 'Zero Equipment', title: 'Your body is the gym.',
    desc: 'Bedroom. Hotel room. Park. Anywhere with floor space and 5 minutes.',
    color: '#666', gradient: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
  },
]

export default function Features() {
  const ref = useReveal()
  return (
    <section id="features" style={{ padding: '160px 24px' }}>
      <div className="container">
        <div ref={ref} className="reveal">
          <p style={{ fontSize: '13px', fontWeight: 700, color: '#00FF87', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '20px', textAlign: 'center' }}>The Engine</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.04em', textAlign: 'center', marginBottom: '80px' }}>
            POWERED BY <span className="text-gradient">ADDICTION SCIENCE.</span>
          </h2>

          <div className="bento">
            {features.map((f, i) => (
              <div key={i} className={`bento-card ${f.wide ? 'bento-wide' : ''}`} style={{ background: f.gradient, position: 'relative', overflow: 'hidden' }}>
                {/* Top glow */}
                <div style={{
                  position: 'absolute', top: '-40%', right: '-20%', width: '200px', height: '200px',
                  background: `radial-gradient(circle, ${f.color}10 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                <div style={{ position: 'relative' }}>
                  {/* Hex icon */}
                  <div className="hex-icon" style={{
                    background: `${f.color}15`,
                    border: `1px solid ${f.color}25`,
                    marginBottom: '16px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {f.icon}
                  </div>

                  <div style={{ fontSize: '12px', fontWeight: 700, color: f.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>
                    {f.label}
                  </div>
                  <h3 style={{ fontSize: f.wide ? '1.5rem' : '1.15rem', fontWeight: 800, marginBottom: '8px' }}>{f.title}</h3>
                  <p style={{ color: '#555', lineHeight: 1.7, fontSize: f.wide ? '15px' : '14px' }}>{f.desc}</p>
                  {f.extra}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
