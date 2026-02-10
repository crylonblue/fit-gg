'use client'
import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const ref = useReveal()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    const existing = JSON.parse(localStorage.getItem('fitgg_waitlist') || '[]')
    existing.push({ email, date: new Date().toISOString() })
    localStorage.setItem('fitgg_waitlist', JSON.stringify(existing))
    setSubmitted(true)
  }

  return (
    <section id="waitlist" style={{ padding: '180px 24px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,255,135,0.03) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
        <div ref={ref} className="reveal">
          <h2 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 800, letterSpacing: '-0.05em', marginBottom: '20px', lineHeight: 0.95 }}>
            READY<span style={{ color: '#00FF87' }}>?</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#555', marginBottom: '48px', maxWidth: '380px', margin: '0 auto 48px', lineHeight: 1.7 }}>
            Drop your email. We&apos;ll ping you when it&apos;s go time.
          </p>

          {submitted ? (
            <div>
              <p style={{ fontSize: '28px', fontWeight: 800, textTransform: 'uppercase', color: '#00FF87' }}>GG. You&apos;re in.</p>
              <p style={{ fontSize: '14px', color: '#444', marginTop: '8px' }}>We&apos;ll keep you posted.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '460px', margin: '0 auto' }}>
              <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required
                style={{ flex: 1, minWidth: '250px', padding: '18px 20px', borderRadius: '8px', fontSize: '16px' }} />
              <button type="submit" className="btn" style={{ whiteSpace: 'nowrap', animation: 'none', boxShadow: 'none' }}>
                Count Me In
              </button>
            </form>
          )}

          <p style={{ fontSize: '11px', color: '#333', marginTop: '20px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            No spam. Ever.
          </p>
        </div>
      </div>
    </section>
  )
}
