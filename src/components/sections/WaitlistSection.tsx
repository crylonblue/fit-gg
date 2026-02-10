'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

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
    <section id="waitlist" className="py-28 sm:py-36 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-xl mx-auto relative text-center">
        {submitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
            <div className="text-6xl">🎉</div>
            <h2 className="text-3xl sm:text-4xl font-bold"><span className="gradient-text">You&apos;re In!</span></h2>
            <p className="text-text-secondary text-lg">We&apos;ll notify you when fit.gg launches.</p>
            <div className="card p-6 text-left space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-text-muted">What&apos;s next</p>
              <div className="space-y-2 text-text-secondary text-sm">
                <p>✉️ Check your inbox for a welcome email</p>
                <p>🎁 Early members get exclusive Founder&apos;s Armor</p>
                <p>💬 Join our Discord for sneak peeks</p>
              </div>
            </div>
          </motion.div>
        ) : (
          <>
            <div className="space-y-5 mb-10">
              <p className="text-primary-light font-mono text-sm tracking-widest uppercase">Join the Quest</p>
              <h2 className="text-3xl sm:text-5xl font-bold">
                Ready to <span className="gradient-text">Begin?</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-md mx-auto">
                Be the first to play. Early members get exclusive Founder&apos;s Armor.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-5 py-4 bg-surface border border-border rounded-2xl text-text-primary placeholder-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-base"
              />
              <button type="submit" disabled={submitting} className="btn-primary px-8 py-4 justify-center whitespace-nowrap disabled:opacity-50">
                {submitting ? <span className="animate-pulse">Joining...</span> : <><span>Join Waitlist</span><span>→</span></>}
              </button>
            </form>

            <p className="text-text-muted text-sm mt-4">No spam, ever. Just launch updates.</p>
          </>
        )}
      </div>
    </section>
  )
}
