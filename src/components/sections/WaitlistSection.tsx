'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 800))
    localStorage.setItem('fit-gg-waitlist', JSON.stringify({ email, ts: Date.now() }))
    setSubmitted(true)
    setSubmitting(false)
  }

  return (
    <section id="waitlist" ref={ref} className="section-padding relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-2xl mx-auto relative text-center">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="text-6xl">🎉</div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">You&apos;re In!</span>
            </h2>
            <p className="text-text-secondary text-lg">
              We&apos;ll notify you when fit.gg launches. Get ready for your adventure.
            </p>
            <div className="card p-6 text-left space-y-3">
              <p className="text-sm text-text-muted font-mono uppercase tracking-widest">What&apos;s next</p>
              <div className="space-y-2 text-text-secondary">
                <p>✉️ Check your inbox for a welcome email</p>
                <p>🎁 Early access members get Founder&apos;s Armor</p>
                <p>💬 Join our Discord for sneak peeks</p>
              </div>
            </div>
          </motion.div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-6 mb-12"
            >
              <p className="text-primary-light font-mono text-sm tracking-widest uppercase">Join the Quest</p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to <span className="gradient-text">Begin?</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-lg mx-auto">
                Be the first to play when we launch. Early members get exclusive Founder&apos;s Armor.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-5 py-4 bg-surface border border-border rounded-xl text-text-primary placeholder-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary px-8 py-4 whitespace-nowrap disabled:opacity-50"
              >
                {submitting ? (
                  <span className="animate-pulse">Joining...</span>
                ) : (
                  <>
                    <span>Join Waitlist</span>
                    <span>→</span>
                  </>
                )}
              </button>
            </motion.form>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-text-muted text-sm mt-4"
            >
              No spam, ever. Just launch updates.
            </motion.p>
          </>
        )}
      </div>
    </section>
  )
}
