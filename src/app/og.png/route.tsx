import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(145deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,255,135,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Title */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '4px',
            marginBottom: '16px',
          }}
        >
          <span
            style={{
              fontSize: '120px',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.05em',
            }}
          >
            fit
          </span>
          <span
            style={{
              fontSize: '120px',
              fontWeight: 800,
              color: '#00FF87',
              letterSpacing: '-0.05em',
            }}
          >
            .gg
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '32px',
            fontWeight: 600,
            color: '#888',
            letterSpacing: '-0.02em',
          }}
        >
          Your Body. Your Game.
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: '22px',
            color: '#555',
            marginTop: '16px',
          }}
        >
          5-minute workouts · RPG progression · No equipment
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
