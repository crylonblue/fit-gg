'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

export default function Features() {
  const ref = useReveal()

  return (
    <section id="features" style={{ padding: '140px 24px' }}>
      <div className="container">
        <div ref={ref} className="reveal">
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#00FF87', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', textAlign: 'center' }}>
            The Engine
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', textAlign: 'center', marginBottom: '64px' }}>
            POWERED BY<br /><span className="text-gradient-animated">ADDICTION SCIENCE.</span>
          </h2>

          <div className="bento">
            {/* Large: Streaks with fire image */}
            <div className="bento-card bento-large" style={{ display: 'grid', gridTemplateColumns: '1fr 180px', gap: '24px', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#F97316', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>🔥 Streaks</div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '12px' }}>Your streak is sacred.</h3>
                <p style={{ color: '#888', lineHeight: 1.7, marginBottom: '20px' }}>Every day you show up, it grows. Break it and it resets. The longer it gets, the more it hurts to lose.</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {[...Array(7)].map((_, i) => (
                    <div key={i} style={{
                      width: '36px', height: '36px', borderRadius: '6px',
                      background: i < 5 ? 'rgba(249,115,22,0.15)' : '#0A0A0A',
                      border: i < 5 ? '1px solid rgba(249,115,22,0.3)' : '1px solid #1a1a1a',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: i < 5 ? '16px' : '11px', color: '#555',
                    }}>
                      {i < 5 ? '🔥' : ['S', 'S'][i - 5]}
                    </div>
                  ))}
                </div>
              </div>
              <Image src="/img-fire.png" alt="Streak fire" width={180} height={180} style={{ maxWidth: '100%', height: 'auto', filter: 'brightness(1.1)' }} />
            </div>

            {/* Small: Leagues with crown */}
            <div className="bento-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#A855F7', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>⚔️ Leagues</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>Compete weekly.</h3>
                <p style={{ color: '#888', lineHeight: 1.6, fontSize: '14px' }}>Get promoted. Get demoted. Talk trash.</p>
              </div>
              <Image src="/img-crown.png" alt="Crown" width={120} height={120} style={{ alignSelf: 'center', marginTop: '16px', filter: 'brightness(1.1)' }} />
            </div>

            {/* Small: Hearts */}
            <div className="bento-card">
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#EF4444', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>❤️ Hearts</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>5 per day.</h3>
              <p style={{ color: '#888', lineHeight: 1.6, fontSize: '14px', marginBottom: '16px' }}>Quit early or skip? Lose a heart. Keeps you honest.</p>
              <div style={{ display: 'flex', gap: '6px' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ fontSize: '24px', opacity: i < 3 ? 1 : 0.2 }}>{i < 3 ? '❤️' : '🖤'}</span>
                ))}
              </div>
            </div>

            {/* Large: Skill Tree with tree image */}
            <div className="bento-card bento-large" style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: '24px', alignItems: 'center' }}>
              <Image src="/img-tree.png" alt="Skill tree" width={180} height={180} style={{ maxWidth: '100%', height: 'auto', filter: 'brightness(1.1)' }} />
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#00FF87', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>🌳 Skill Tree</div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '12px' }}>Progressive. Not random.</h3>
                <p style={{ color: '#888', lineHeight: 1.7, marginBottom: '20px' }}>Master basics, unlock advanced moves. You can&apos;t skip ahead. Every session builds on the last.</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['Squats', 'Pushups', 'Core'].map((s, i) => (
                    <span key={i} className="node-active" style={{
                      padding: '6px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 700,
                      background: 'rgba(0,255,135,0.08)', border: '1px solid rgba(0,255,135,0.25)',
                      color: '#00FF87', textTransform: 'uppercase',
                    }}>{s} ✓</span>
                  ))}
                  {['Planks', 'Burpees'].map((s, i) => (
                    <span key={i} style={{
                      padding: '6px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 700,
                      background: '#0A0A0A', border: '1px solid #1a1a1a', color: '#333', textTransform: 'uppercase',
                    }}>🔒 {s}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Small: Adaptive */}
            <div className="bento-card">
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>🧠 Adaptive</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>Evolves with you.</h3>
              <p style={{ color: '#888', lineHeight: 1.6, fontSize: '14px' }}>Too easy? Harder. Struggling? Dialed back. Your AI coach adjusts every session.</p>
            </div>

            {/* Small: XP */}
            <div className="bento-card">
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#FBBF24', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>⚡ XP System</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>Every rep counts.</h3>
              <p style={{ color: '#888', lineHeight: 1.6, fontSize: '14px', marginBottom: '16px' }}>Watch your level climb.</p>
              <div style={{ fontSize: '11px', color: '#888', marginBottom: '6px', display: 'flex', justifyContent: 'space-between' }}>
                <span>Level 12</span><span style={{ color: '#FBBF24' }}>2,450 / 3,000</span>
              </div>
              <div style={{ height: '6px', borderRadius: '3px', background: '#111', overflow: 'hidden' }}>
                <div className="xp-bar-fill" />
              </div>
            </div>

            {/* Small: Zero Equipment */}
            <div className="bento-card">
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>🏠 Zero Equipment</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>Your body is the gym.</h3>
              <p style={{ color: '#888', lineHeight: 1.6, fontSize: '14px' }}>Bedroom. Hotel. Park. Anywhere with floor space.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
