'use client'

import { useState } from 'react'

export default function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 600))
    localStorage.setItem('fit-gg-waitlist', JSON.stringify({ email, ts: Date.now() }))
    setSubmitted(true)
    setSubmitting(false)
  }

  return (
    <section id="waitlist" style={{ padding: '100px 40px', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '500px', height: '400px', background: 'rgba(123,108,246,0.1)', borderRadius: '50%', filter: 'blur(120px)' }} />
      </div>

      <div style={{ maxWidth: '560px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
        {submitted ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ fontSize: '3.5rem' }}>🎉</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700 }}><span className="gradient-text">You&apos;re In!</span></h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>We&apos;ll notify you when fit.gg launches.</p>
            <div className="card" style={{ padding: '24px', textAlign: 'left' }}>
              <p className="font-mono" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-text-muted)', marginBottom: '12px' }}>What&apos;s next</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                <p>✉️ Check your inbox for a welcome email</p>
                <p>🎁 Early members get exclusive Founder&apos;s Armor</p>
                <p>💬 Join our Discord for sneak peeks</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '40px' }}>
              <p className="font-mono" style={{ color: '#A78BFA', fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>Join the Quest</p>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '16px' }}>
                Ready to <span className="gradient-text">Begin?</span>
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', maxWidth: '400px', margin: '0 auto' }}>
                Be the first to play. Early members get exclusive Founder&apos;s Armor.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '12px' }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={{ flex: 1, padding: '16px 20px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '16px', color: 'var(--color-text-primary)', fontSize: '16px', outline: 'none' }}
              />
              <button type="submit" disabled={submitting} className="btn-primary" style={{ whiteSpace: 'nowrap', opacity: submitting ? 0.5 : 1 }}>
                {submitting ? 'Joining...' : <>Join Waitlist →</>}
              </button>
            </form>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '13px', marginTop: '16px' }}>No spam, ever. Just launch updates.</p>
          </>
        )}
      </div>
    </section>
  )
}
