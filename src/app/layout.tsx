import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { PWARegister } from '@/components/PWARegister'
import './globals.css'

export const metadata: Metadata = {
  title: 'fit.gg — The 5-Minute Workout Habit That Actually Sticks',
  description: 'Duolingo-style progression for bodyweight fitness. Build streaks, unlock skills, climb leagues, get stronger — 5 minutes at a time. No equipment needed.',
  metadataBase: new URL('https://fit.gg'),
  alternates: { canonical: '/' },
  keywords: ['fitness app', 'home workout', 'bodyweight workout', 'workout streak', 'fitness gamification', 'duolingo fitness', '5 minute workout', 'RPG fitness'],
  openGraph: {
    title: 'fit.gg — Your Body. Your Game.',
    description: 'Duolingo-style progression for bodyweight fitness. Build streaks, unlock skills, get stronger — 5 minutes at a time.',
    siteName: 'fit.gg',
    type: 'website',
    url: 'https://fit.gg',
    locale: 'en_US',
    images: [{ url: 'https://fit.gg/og.png', width: 1200, height: 630, alt: 'fit.gg — Your Body. Your Game.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'fit.gg — Your Body. Your Game.',
    description: '5-minute daily workouts with RPG progression. Build streaks. Climb leagues. Level up.',
    images: ['https://fit.gg/og.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  manifest: '/manifest.json',
  themeColor: '#10b981',
  appleWebApp: { capable: true, statusBarStyle: 'black-translucent', title: 'fit.gg' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How long are the workouts?', acceptedAnswer: { '@type': 'Answer', text: 'Just 5 minutes. Every session is designed to be short, intense, and completable — even on your worst days.' } },
    { '@type': 'Question', name: 'Do I need any equipment?', acceptedAnswer: { '@type': 'Answer', text: 'Zero. Every exercise is bodyweight-only. All you need is a bit of floor space.' } },
    { '@type': 'Question', name: 'How is this different from other fitness apps?', acceptedAnswer: { '@type': 'Answer', text: 'fit.gg uses the same psychology that makes Duolingo addictive — streaks, leagues, XP, skill trees — to make showing up feel like a game, not a chore.' } },
    { '@type': 'Question', name: 'Is it good for beginners?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. The skill tree starts with fundamentals and progressively unlocks harder moves as you improve.' } },
    { '@type': 'Question', name: 'Can I actually get fit in 5 minutes a day?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — science backs this up. Consistent short bursts of high-intensity bodyweight exercise improve strength, endurance, and metabolic health.' } },
    { '@type': 'Question', name: 'Is fit.gg free?', acceptedAnswer: { '@type': 'Answer', text: 'The core experience will be free. We\'re exploring a premium tier for extra features, but the main game loop will always be free.' } },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'fit.gg',
  description: 'Duolingo-style progression for bodyweight fitness. Build streaks, unlock skills, get stronger — 5 minutes at a time.',
  url: 'https://fit.gg',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script defer src="https://cloud.umami.is/script.js" data-website-id="e4cb20f0-7ca2-4f14-a4e4-cf3a1216fb0a" />
      </head>
      <body>
        {children}
        <PWARegister />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
