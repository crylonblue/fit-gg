'use client'
import Link from 'next/link'
import { ClipboardList, Activity, Dumbbell, Salad } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'

const featured = [
  {
    slug: 'how-to-build-a-workout-routine',
    title: 'How to Build a Workout Routine You\'ll Actually Stick To',
    category: 'Beginner',
    readTime: '10 min read',
    icon: <ClipboardList size={28} strokeWidth={1.5} style={{ color: '#00FF87' }} />,
  },
  {
    slug: 'yoga-for-beginners-at-home',
    title: 'Yoga for Beginners at Home: A 15-Minute Daily Flow',
    category: 'Beginner',
    readTime: '9 min read',
    icon: <Activity size={28} strokeWidth={1.5} style={{ color: '#A855F7' }} />,
  },
  {
    slug: 'calisthenics-workout-plan-no-equipment',
    title: 'Calisthenics Workout Plan: Build Muscle With Zero Equipment',
    category: 'Workouts',
    readTime: '11 min read',
    icon: <Dumbbell size={28} strokeWidth={1.5} style={{ color: '#F97316' }} />,
  },
  {
    slug: 'simple-meal-prep-for-fitness-beginners',
    title: 'Simple Meal Prep for Fitness Beginners',
    category: 'Nutrition',
    readTime: '9 min read',
    icon: <Salad size={28} strokeWidth={1.5} style={{ color: '#FBBF24' }} />,
  },
]

export default function FeaturedArticles() {
  const ref = useReveal()
  return (
    <section id="blog" style={{ padding: '120px 24px' }}>
      <div className="container">
        <div ref={ref} className="reveal">
          <p style={{ fontSize: '13px', fontWeight: 700, color: '#00FF87', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '20px', textAlign: 'center' }}>
            From the Blog
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', textAlign: 'center', marginBottom: '16px' }}>
            START <span className="text-gradient">LEARNING.</span>
          </h2>
          <p style={{ color: '#888', fontSize: '1.05rem', textAlign: 'center', marginBottom: '56px', maxWidth: '480px', margin: '0 auto 56px' }}>
            Science-backed guides to help you move better, eat smarter, and build habits that last.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            maxWidth: '960px',
            margin: '0 auto',
          }}>
            {featured.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <article style={{
                  padding: '28px 24px',
                  borderRadius: '16px',
                  border: '1px solid #1a1a1a',
                  background: '#111',
                  transition: 'border-color 0.2s, transform 0.2s',
                  height: '100%',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#00FF87'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#1a1a1a'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
                >
                  <div style={{ marginBottom: '16px' }}>{post.icon}</div>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', fontSize: '12px' }}>
                    <span style={{ color: '#00FF87', fontWeight: 600 }}>{post.category}</span>
                    <span style={{ color: '#555' }}>·</span>
                    <span style={{ color: '#666' }}>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.35, letterSpacing: '-0.01em' }}>
                    {post.title}
                  </h3>
                </article>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/blog" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#00FF87',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '15px',
              padding: '12px 28px',
              borderRadius: '12px',
              border: '1px solid rgba(0,255,135,0.2)',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(0,255,135,0.05)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
            >
              Browse All Articles →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
