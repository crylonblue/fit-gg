import type { Metadata } from 'next'
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'fit.gg — Your Body. Your Game.',
    description: '5-minute daily workouts with RPG progression. Build streaks. Climb leagues. Level up.',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
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
      </head>
      <body>{children}</body>
    </html>
  )
}
