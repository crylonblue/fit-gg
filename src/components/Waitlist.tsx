'use client'

import { useState } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    const existing = JSON.parse(localStorage.getItem('fitgg_waitlist') || '[]')
    existing.push({ email, date: new Date().toISOString() })
    localStorage.setItem('fitgg_waitlist', JSON.stringify(existing))
    setSubmitted(true)
  }

  return (
    <section id="waitlist" className="section-alt" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(0,255,135,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      
      <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
        <div className="badge" style={{ marginBottom: '24px', display: 'inline-flex' }}>Waitlist Open</div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px', textTransform: 'uppercase' }}>
          Ready to <span className="text-neon-glow">Level Up?</span>
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '40px', maxWidth: '460px', margin: '0 auto 40px' }}>
          Be the first to play. Drop your email and we&apos;ll ping you when it&apos;s go time.
        </p>

        {submitted ? (
          <div className="card" style={{ display: 'inline-block', padding: '32px 48px', borderColor: 'rgba(0,255,135,0.3)' }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>⚡</div>
            <p style={{ fontSize: '20px', fontWeight: 800, textTransform: 'uppercase' }}>You&apos;re In.</p>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>GG. We&apos;ll keep you posted.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '500px', margin: '0 auto' }}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flex: 1,
                minWidth: '260px',
                padding: '16px 20px',
                borderRadius: '8px',
                fontSize: '16px',
              }}
            />
            <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
              Count Me In ⚡
            </button>
          </form>
        )}

        <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          No spam. Just launch updates.
        </p>
      </div>
    </section>
  )
}
