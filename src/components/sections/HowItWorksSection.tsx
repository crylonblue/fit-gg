'use client'

const steps = [
  { number: '01', icon: '💪', title: 'Work Out', description: 'Do any workout — gym, run, yoga, whatever. Log it in seconds or sync from Apple Health.', color: '#F97316' },
  { number: '02', icon: '⚡', title: 'Earn XP', description: 'Every rep, every mile, every stretch earns experience. Real effort = real progress.', color: '#7B6CF6' },
  { number: '03', icon: '🎮', title: 'Level Up', description: 'Your character grows stronger, unlocks epic gear, and evolves into a legendary hero.', color: '#34D399' },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-28 sm:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-primary-light font-mono text-sm tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Simple as <span className="gradient-text">1, 2, 3</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-3xl bg-surface border border-border relative">
                <span className="text-4xl">{step.icon}</span>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold font-mono text-white" style={{ backgroundColor: step.color }}>
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed max-w-[280px] mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
