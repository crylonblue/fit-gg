'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const ref = useReveal()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || loading) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'landing' }),
      })
      const data = await res.json()
      if (data.success) setSubmitted(true)
      else if (data.reason === 'invalid_email') setError('Please enter a valid email.')
      else setError('Something went wrong. Try again.')
    } catch {
      setError('Connection failed. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="waitlist" style={{ padding: '180px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* Background shield */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        opacity: 0.03, pointerEvents: 'none',
      }}>
        <Image src="/logo-shield.png" alt="" width={400} height={400} />
      </div>

      {/* Atmospheric glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(0,255,135,0.06) 0%, transparent 50%)', pointerEvents: 'none' }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
        <div ref={ref} className="reveal">
          <p style={{ fontSize: '13px', fontWeight: 700, color: '#00FF87', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>
            Ready to play?
          </p>

          <h2 style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', fontWeight: 900, letterSpacing: '-0.06em', marginBottom: '20px', lineHeight: 0.9 }}>
            READY<span style={{ color: '#00FF87' }}>?</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '48px', maxWidth: '400px', margin: '0 auto 48px', lineHeight: 1.7 }}>
            Drop your email. We&apos;ll ping you when it&apos;s go time.
          </p>

          {submitted ? (
            <div>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎮</div>
              <p style={{ fontSize: '32px', fontWeight: 900, textTransform: 'uppercase', color: '#00FF87', fontFamily: 'var(--font-heading)' }}>GG. You&apos;re in.</p>
              <p style={{ fontSize: '14px', color: '#444', marginTop: '8px' }}>We&apos;ll keep you posted.</p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} style={{
                display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap',
                maxWidth: '500px', margin: '0 auto',
              }}>
                <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required
                  style={{
                    flex: 1, minWidth: '260px', padding: '18px 24px', borderRadius: '10px', fontSize: '16px',
                    background: 'rgba(255,255,255,0.03)', border: '2px solid rgba(255,255,255,0.08)',
                  }} />
                <button type="submit" className="btn" style={{
                  whiteSpace: 'nowrap', animation: 'glow-pulse-strong 2.5s ease-in-out infinite',
                  opacity: loading ? 0.6 : 1,
                }} disabled={loading}>
                  {loading ? 'Joining...' : 'Count Me In →'}
                </button>
              </form>
              {error && <p style={{ fontSize: '13px', color: '#ff4444', marginTop: '12px' }}>{error}</p>}
            </>
          )}

          <p style={{ fontSize: '12px', color: '#333', marginTop: '24px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Join 2,847 warriors · No spam. Ever.
          </p>
        </div>
      </div>
    </section>
  )
}
