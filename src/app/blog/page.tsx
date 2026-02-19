import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from './posts'

export const metadata: Metadata = {
  title: 'Blog — fit.gg',
  description: 'Tips, science, and motivation for building a daily workout habit. Bodyweight fitness, gamification, and more.',
  alternates: { canonical: '/blog' },
}

export default function BlogIndex() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a', color: '#e5e5e5' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 24px 120px' }}>
        <Link href="/" style={{ color: '#00FF87', textDecoration: 'none', fontSize: '14px', fontWeight: 600, display: 'inline-block', marginBottom: '40px' }}>
          ← Back to fit.gg
        </Link>

        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '16px' }}>
          Blog
        </h1>
        <p style={{ color: '#888', fontSize: '1.1rem', marginBottom: '60px', lineHeight: 1.6 }}>
          The science of habit, the art of movement, and the game of getting stronger.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <article style={{
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid #222',
                background: '#111',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
              >
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '13px', color: '#888' }}>
                  <span style={{ color: '#00FF87', fontWeight: 600 }}>{post.category}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '8px', letterSpacing: '-0.02em' }}>
                  {post.title}
                </h2>
                <p style={{ color: '#999', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  {post.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
