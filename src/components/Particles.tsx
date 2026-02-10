'use client'

export default function Particles() {
  // Generate deterministic particles (no random on server)
  const particles = [
    { left: '10%', delay: '0s', duration: '12s', size: 3 },
    { left: '20%', delay: '2s', duration: '14s', size: 2 },
    { left: '35%', delay: '4s', duration: '10s', size: 4 },
    { left: '50%', delay: '1s', duration: '16s', size: 2 },
    { left: '65%', delay: '3s', duration: '11s', size: 3 },
    { left: '75%', delay: '5s', duration: '13s', size: 2 },
    { left: '85%', delay: '0.5s', duration: '15s', size: 3 },
    { left: '92%', delay: '2.5s', duration: '12s', size: 2 },
    { left: '5%', delay: '6s', duration: '14s', size: 2 },
    { left: '45%', delay: '3.5s', duration: '11s', size: 3 },
    { left: '58%', delay: '7s', duration: '13s', size: 2 },
    { left: '30%', delay: '1.5s', duration: '15s', size: 2 },
  ]

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: p.left,
            bottom: '-10px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: 0.4,
          }}
        />
      ))}
    </div>
  )
}
