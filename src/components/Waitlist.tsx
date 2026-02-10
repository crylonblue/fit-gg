'use client'

import { useState } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    // Store locally for now
    const existing = JSON.parse(localStorage.getItem('fitgg_waitlist') || '[]')
    existing.push({ email, date: new Date().toISOString() })
    localStorage.setItem('fitgg_waitlist', JSON.stringify(existing))
    setSubmitted(true)
  }

  return (
    <section id="waitlist" className="section" style={{ background: 'linear-gradient(135deg, var(--color-green-light), var(--color-purple-light))' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px' }}>
          Ready to build the habit?
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px' }}>
          Join the waitlist. We&apos;ll let you know when fit.gg launches.
        </p>

        {submitted ? (
          <div style={{ padding: '24px', borderRadius: '16px', background: 'white', display: 'inline-block', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>🎉</div>
            <p style={{ fontSize: '18px', fontWeight: 700 }}>You&apos;re in!</p>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>We&apos;ll keep you posted.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '480px', margin: '0 auto' }}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flex: 1,
                minWidth: '240px',
                padding: '14px 20px',
                borderRadius: '14px',
                border: '2px solid var(--color-border)',
                fontSize: '16px',
                outline: 'none',
                fontFamily: 'var(--font-body)',
                background: 'white',
              }}
            />
            <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
              Count me in 🚀
            </button>
          </form>
        )}

        <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '16px' }}>
          No spam. Just launch updates.
        </p>
      </div>
    </section>
  )
}
