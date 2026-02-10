'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface WaitlistSectionProps {
  waitlistCount: number
  onJoinWaitlist: (newCount: number) => void
}

const classes = [
  { id: 'warrior', name: 'Warrior', emoji: '⚔️', color: '#EF4444' },
  { id: 'ranger', name: 'Ranger', emoji: '🏹', color: '#10B981' },
  { id: 'mage', name: 'Mage', emoji: '🧙', color: '#8B5CF6' },
  { id: 'paladin', name: 'Paladin', emoji: '🛡️', color: '#F59E0B' }
]

export default function WaitlistSection({ waitlistCount, onJoinWaitlist }: WaitlistSectionProps) {
  const [formData, setFormData] = useState({
    email: '',
    heroName: '',
    selectedClass: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [todaysJoined] = useState(Math.floor(Math.random() * 50) + 100) // Mock daily joins
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.email || !formData.heroName || !formData.selectedClass) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Store in localStorage (mock backend)
    const waitlistData = {
      ...formData,
      timestamp: Date.now(),
      position: waitlistCount + 1
    }
    
    localStorage.setItem('fit-gg-waitlist-data', JSON.stringify(waitlistData))
    
    // Update count
    const newCount = waitlistCount + 1
    onJoinWaitlist(newCount)
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleClassSelect = (classId: string) => {
    setFormData(prev => ({ ...prev, selectedClass: classId }))
  }

  if (isSubmitted) {
    return (
      <section 
        id="waitlist"
        className="relative py-24 px-6 bg-gradient-to-b from-surface/30 to-primary/10"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            {/* Success animation */}
            <div className="text-8xl mb-6">🎉</div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">WELCOME TO THE QUEST,</span><br />
              <span className="text-primary font-mono">{formData.heroName}!</span>
            </h2>
            
            <div className="card p-8 text-left">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Your Position:</span>
                  <span className="text-2xl font-bold text-primary font-mono">
                    #{waitlistCount.toLocaleString()}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Chosen Class:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">
                      {classes.find(c => c.id === formData.selectedClass)?.emoji}
                    </span>
                    <span className="font-semibold text-primary">
                      {classes.find(c => c.id === formData.selectedClass)?.name}
                    </span>
                  </div>
                </div>
                
                <div className="border-t border-border pt-4 mt-6">
                  <h4 className="font-bold text-white mb-2">What happens next:</h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Check your email for welcome message</li>
                    <li>• Get early access to character customization</li>
                    <li>• Receive exclusive Founder's Armor</li>
                    <li>• Join our Discord community</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn-primary"
                onClick={() => {
                  const tweetText = `Just joined the fit.gg waitlist as ${formData.heroName} the ${classes.find(c => c.id === formData.selectedClass)?.name}! 🎮💪 The RPG that makes you fit is coming... Position #${waitlistCount}`
                  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`, '_blank')
                }}
              >
                Share on Twitter 🐦
              </button>
              
              <button 
                className="px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
                onClick={() => window.location.reload()}
              >
                Refer a Friend
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section 
      id="waitlist"
      ref={ref}
      className="relative py-24 px-6 bg-gradient-to-b from-surface/30 to-primary/10"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">READY TO BEGIN YOUR</span><br />
            <span className="gradient-text">ADVENTURE?</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Join thousands of heroes already waiting for the ultimate fitness RPG experience.
          </p>
        </motion.div>

        {/* Signup form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card p-8 mb-12"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Class selection */}
            <div>
              <label className="block text-lg font-semibold text-white mb-4">
                Choose your class:
              </label>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {classes.map((classItem) => (
                  <button
                    key={classItem.id}
                    type="button"
                    onClick={() => handleClassSelect(classItem.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      formData.selectedClass === classItem.id
                        ? 'border-primary bg-primary/10 glow'
                        : 'border-border bg-surface/50 hover:border-primary/50'
                    }`}
                  >
                    <div className="text-3xl mb-2">{classItem.emoji}</div>
                    <div className="text-sm font-semibold" style={{ color: classItem.color }}>
                      {classItem.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Email input */}
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-white mb-4">
                Enter your email:
              </label>
              
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="hero@example.com"
                className="w-full px-6 py-4 bg-surface border border-border rounded-xl text-white placeholder-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              />
            </div>

            {/* Hero name input */}
            <div>
              <label htmlFor="heroName" className="block text-lg font-semibold text-white mb-4">
                Choose your hero name:
              </label>
              
              <input
                id="heroName"
                type="text"
                required
                value={formData.heroName}
                onChange={(e) => setFormData(prev => ({ ...prev, heroName: e.target.value }))}
                placeholder="e.g., IronWarrior, FlexMage, RunnerBeast"
                className="w-full px-6 py-4 bg-surface border border-border rounded-xl text-white placeholder-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              />
              
              <p className="text-xs text-text-muted mt-2">
                This will be your unique username in the game. Choose wisely!
              </p>
            </div>

            {/* Submit button */}
            <button 
              type="submit"
              disabled={!formData.email || !formData.heroName || !formData.selectedClass || isSubmitting}
              className="w-full btn-primary text-xl py-6 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Joining the Quest...
                </span>
              ) : (
                <>
                  <span>JOIN THE QUEST</span>
                  <span className="ml-3 group-hover:translate-x-1 transition-transform">
                    ⚔️
                  </span>
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Incentives and social proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center space-y-6"
        >
          {/* Founder's benefit */}
          <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/30 rounded-full px-6 py-3">
            <span className="text-2xl">🎁</span>
            <span className="text-accent font-semibold">
              First 1,000 heroes get Founder's Armor (exclusive)
            </span>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary font-mono mb-1">
                {waitlistCount.toLocaleString()}
              </div>
              <div className="text-text-muted text-sm">
                heroes waiting
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-border"></div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary font-mono mb-1">
                {todaysJoined}
              </div>
              <div className="text-text-muted text-sm">
                joined today
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
    </section>
  )
}