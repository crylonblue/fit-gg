'use client'
import { useReveal } from '@/hooks/useReveal'

export default function Features() {
  const ref = useReveal()
  return (
    <section id="features" style={{ padding: '160px 24px' }}>
      <div className="container">
        <div ref={ref} className="reveal">
          <p style={{ fontSize: '13px', fontWeight: 700, color: '#00FF87', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '20px', textAlign: 'center' }}>The Engine</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', textAlign: 'center', marginBottom: '72px' }}>
            POWERED BY <span className="text-gradient">ADDICTION SCIENCE.</span>
          </h2>

          <div className="bento">
            {/* ── Streaks (wide) ── */}
            <div className="bento-card bento-wide accent-orange">
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#F97316', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>🔥 Streaks</div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '10px' }}>Your streak is sacred.</h3>
              <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '20px', fontSize: '15px' }}>Show up every day. Watch it grow. Break it and it resets. The longer it gets, the more it hurts to lose.</p>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                {[1,2,3,4,5].map(d => (
                  <div key={d} style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🔥</div>
                ))}
                {[6,7].map(d => (
                  <div key={d} style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#0a0a0a', border: '1px solid #151515', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#333', fontWeight: 700 }}>{d === 6 ? 'S' : 'S'}</div>
                ))}
                <span style={{ marginLeft: '12px', fontSize: '22px', fontWeight: 800, color: '#F97316', fontFamily: 'var(--font-heading)' }}>5</span>
              </div>
            </div>

            {/* ── Leagues ── */}
            <div className="bento-card accent-purple">
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#A855F7', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>⚔️ Leagues</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px' }}>Weekly competition.</h3>
              <p style={{ color: '#555', lineHeight: 1.6, fontSize: '14px', marginBottom: '14px' }}>Top 10 promote. Bottom 5 demote.</p>
              <div style={{ display: 'flex', gap: '6px', fontSize: '22px' }}>
                {['🥉','🥈','🥇'].map((e,i) => <span key={i}>{e}</span>)}
                {['💎','👑'].map((e,i) => <span key={i} style={{ opacity: 0.25 }}>{e}</span>)}
              </div>
            </div>

            {/* ── Hearts ── */}
            <div className="bento-card accent-red">
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#EF4444', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>❤️ Hearts</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px' }}>5 per day. Use them wisely.</h3>
              <p style={{ color: '#555', lineHeight: 1.6, fontSize: '14px', marginBottom: '14px' }}>Skip or quit? Lose a heart.</p>
              <div style={{ display: 'flex', gap: '4px', fontSize: '26px' }}>
                {[0,1,2].map(i => <span key={i}>❤️</span>)}
                {[3,4].map(i => <span key={i} style={{ opacity: 0.15 }}>🖤</span>)}
              </div>
            </div>

            {/* ── Skill Tree (wide) ── */}
            <div className="bento-card bento-wide accent-green">
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#00FF87', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>🌳 Skill Tree</div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '10px' }}>Progressive. Not random.</h3>
              <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '20px', fontSize: '15px' }}>Master basics, unlock advanced moves. You can&apos;t skip ahead — and that&apos;s the point.</p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {['Squats','Pushups','Core','Mobility','Jumps','Diamond'].map((s,i) => (
                  <span key={i} className="node" style={{ padding: '6px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, background: 'rgba(0,255,135,0.06)', border: '1px solid rgba(0,255,135,0.2)', color: '#00FF87', textTransform: 'uppercase' }}>{s} ✓</span>
                ))}
                {['Planks','Burpees','Pike'].map((s,i) => (
                  <span key={i} style={{ padding: '6px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, background: '#060606', border: '1px solid #121212', color: '#222', textTransform: 'uppercase' }}>🔒 {s}</span>
                ))}
              </div>
            </div>

            {/* ── Adaptive ── */}
            <div className="bento-card accent-blue">
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>🧠 Adaptive</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px' }}>Your AI coach.</h3>
              <p style={{ color: '#555', lineHeight: 1.6, fontSize: '14px' }}>Too easy? Harder. Struggling? Dialed back. Every session adapts to you.</p>
            </div>

            {/* ── XP ── */}
            <div className="bento-card accent-yellow">
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#FBBF24', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>⚡ XP System</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px' }}>Every rep counts.</h3>
              <p style={{ color: '#555', lineHeight: 1.6, fontSize: '14px', marginBottom: '14px' }}>Watch your level climb.</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '6px' }}>
                <span style={{ color: '#555' }}>Level 12</span>
                <span style={{ color: '#FBBF24', fontWeight: 700 }}>2,450 / 3,000</span>
              </div>
              <div style={{ height: '6px', borderRadius: '3px', background: '#111', overflow: 'hidden' }}>
                <div className="xp-fill" />
              </div>
            </div>

            {/* ── Zero Equipment ── */}
            <div className="bento-card" style={{ borderTop: '2px solid #22222244' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#555', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>🏠 Zero Equipment</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px' }}>Your body is the gym.</h3>
              <p style={{ color: '#555', lineHeight: 1.6, fontSize: '14px' }}>Bedroom. Hotel room. Park. Anywhere with floor space and 5 minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
