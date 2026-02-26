'use client'
import { useState } from 'react'

export default function WaitlistSignup({ source = 'inline' }: { source?: string }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || loading) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else if (data.reason === 'invalid_email') {
        setError('Please enter a valid email.')
      } else {
        setError('Something went wrong. Try again.')
      }
    } catch {
      setError('Connection failed. Try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '18px', fontWeight: 800, color: '#00FF87', textTransform: 'uppercase' }}>
          GG. You&apos;re in. 🎮
        </p>
        <p style={{ fontSize: '13px', color: '#555', marginTop: '4px' }}>We&apos;ll keep you posted.</p>
      </div>
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '460px', margin: '0 auto' }}>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ flex: 1, minWidth: '220px', padding: '14px 18px', borderRadius: '8px', fontSize: '15px' }}
        />
        <button
          type="submit"
          className="btn"
          style={{ whiteSpace: 'nowrap', animation: 'none', boxShadow: 'none', opacity: loading ? 0.6 : 1, fontSize: '15px' }}
          disabled={loading}
        >
          {loading ? 'Joining...' : 'Join the Waitlist'}
        </button>
      </form>
      {error && <p style={{ fontSize: '13px', color: '#ff4444', marginTop: '8px', textAlign: 'center' }}>{error}</p>}
      <p style={{ fontSize: '11px', color: '#333', marginTop: '12px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        No spam. Ever.
      </p>
    </div>
  )
}
