import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'fit.gg — The RPG That Makes You Fit',
  description: 'Your body is the controller. Real workouts level up your 3D character. Join guilds, fight bosses, earn loot. The fitness game for everyone.',
  keywords: ['fitness', 'RPG', 'gamification', 'workout', 'game', 'health', 'exercise'],
  authors: [{ name: 'fit.gg Team' }],
  creator: 'fit.gg',
  publisher: 'fit.gg',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fit.gg'),
  openGraph: {
    title: 'fit.gg — The RPG That Makes You Fit',
    description: 'Your body is the controller. Real workouts level up your 3D character. Join guilds, fight bosses, earn loot.',
    url: 'https://fit.gg',
    siteName: 'fit.gg',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'fit.gg - The RPG that makes you fit',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'fit.gg — The RPG That Makes You Fit',
    description: 'Your body is the controller. Real workouts level up your 3D character.',
    creator: '@fitgg',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#7C3AED" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        
        {/* Analytics placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Analytics will be added here
              console.log('fit.gg — Ready to transform fitness into an epic adventure! 🎮💪');
            `,
          }}
        />
      </body>
    </html>
  )
}