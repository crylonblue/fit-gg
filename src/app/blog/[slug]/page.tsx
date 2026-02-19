import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts } from '../posts'

const articles: Record<string, { content: React.ReactNode }> = {
  '5-minute-workout-daily-habit': {
    content: (
      <>
        <p>Here&apos;s a truth the fitness industry doesn&apos;t want you to hear: <strong>you don&apos;t need to work out for an hour to get fit.</strong></p>
        <p>In fact, those marathon gym sessions might be the reason you keep quitting.</p>

        <h2>The Consistency Paradox</h2>
        <p>A 2024 study published in the <em>British Journal of Sports Medicine</em> found that people who exercised for just 5-10 minutes daily had <strong>better long-term health outcomes</strong> than those who did 45-60 minute sessions 2-3 times per week.</p>
        <p>Why? Because the daily exercisers actually stuck with it. The gym warriors burned bright for 6 weeks, then ghosted their membership.</p>

        <h2>The Math of Tiny Habits</h2>
        <p>Let&apos;s do some simple math:</p>
        <ul>
          <li><strong>Plan A:</strong> 1 hour, 3x/week = 156 hours/year (but realistically, you skip half → 78 hours)</li>
          <li><strong>Plan B:</strong> 5 minutes, daily = 30 hours/year (and you actually do it → 30 hours)</li>
        </ul>
        <p>Plan B isn&apos;t far behind — and the <strong>daily habit formation</strong> is what creates lasting change. Your body responds to consistent stimulus, not occasional intensity.</p>

        <h2>Why Short Workouts Work</h2>
        <h3>1. Zero Decision Fatigue</h3>
        <p>A 5-minute workout requires no planning. No &quot;what should I do today?&quot; No gym bag. No commute. You open the app and go. The friction is so low that your brain can&apos;t talk you out of it.</p>

        <h3>2. The Streak Effect</h3>
        <p>Once you&apos;ve built a 30-day streak, skipping a day feels physically wrong. This is the same psychology Duolingo uses to keep 37 million people learning languages daily. <strong>Streaks create identity</strong> — you go from &quot;someone who should work out&quot; to &quot;someone who works out every day.&quot;</p>

        <h3>3. Compound Gains</h3>
        <p>5 minutes of push-ups today seems insignificant. But 5 minutes × 365 days = a completely transformed upper body. Progressive overload works at any timescale — as long as you keep showing up.</p>

        <h2>How to Start a 5-Minute Habit</h2>
        <ol>
          <li><strong>Anchor it</strong> — Attach your workout to something you already do daily (after brushing teeth, before lunch)</li>
          <li><strong>Make it stupidly easy</strong> — Day 1 should feel laughably simple. 10 squats. 5 push-ups. Done.</li>
          <li><strong>Track it visually</strong> — A streak counter, a calendar with X&apos;s, anything that shows your consistency</li>
          <li><strong>Never miss twice</strong> — Miss one day? Fine. Miss two? Your habit is dying. Get back on it.</li>
        </ol>

        <h2>The Bottom Line</h2>
        <p>The best workout plan is the one you actually follow. For most people, that&apos;s not a complex periodized program — it&apos;s something short, guided, and daily.</p>
        <p>That&apos;s exactly what we&apos;re building at fit.gg. 5 minutes. Every day. No excuses.</p>
      </>
    ),
  },
  'bodyweight-exercises-no-equipment': {
    content: (
      <>
        <p>You don&apos;t need a gym. You don&apos;t need dumbbells. You don&apos;t even need a pull-up bar (yet). <strong>Your body is the only equipment you need</strong> to build real strength.</p>
        <p>Here are the 10 bodyweight exercises that form the foundation of every great home workout — ranked by bang-for-your-buck.</p>

        <h2>1. Push-Ups</h2>
        <p>The king of upper body exercises. Chest, shoulders, triceps, core — all in one movement. Can&apos;t do a full push-up yet? Start on your knees or against a wall. The progression path goes all the way to one-arm push-ups.</p>

        <h2>2. Squats</h2>
        <p>The foundation of lower body strength. Air squats seem simple, but proper depth and form are harder than most people think. Master these before moving to jump squats or pistol squats.</p>

        <h2>3. Planks</h2>
        <p>The ultimate core exercise. Start with 20 seconds. Work up to 60. Then try side planks, plank shoulder taps, and dynamic variations. A strong core improves literally everything else.</p>

        <h2>4. Lunges</h2>
        <p>Unilateral leg training — meaning each leg works independently. This builds balance and catches strength imbalances. Forward, reverse, walking, Bulgarian — endless variations.</p>

        <h2>5. Burpees</h2>
        <p>The exercise everyone loves to hate. A push-up, a squat, and a jump combined into one brutal full-body movement. Incredible for cardio and conditioning in minimal time.</p>

        <h2>6. Mountain Climbers</h2>
        <p>Core, cardio, and hip mobility in one move. Keep your hips low, drive your knees to your chest, and try to maintain a steady rhythm. 30 seconds of these will humble anyone.</p>

        <h2>7. Glute Bridges</h2>
        <p>Don&apos;t skip your posterior chain. Glute bridges target the muscles that sitting all day destroys. Single-leg variations add serious difficulty without any equipment.</p>

        <h2>8. Pike Push-Ups</h2>
        <p>The stepping stone to handstand push-ups. By putting your hips high and pressing vertically, you shift the emphasis to your shoulders. A game-changer for upper body development.</p>

        <h2>9. Hollow Body Hold</h2>
        <p>A gymnastics staple. Lie on your back, arms overhead, legs straight, and lift everything off the ground. This teaches total body tension — the secret to advanced calisthenics.</p>

        <h2>10. Jump Squats</h2>
        <p>Once you&apos;ve mastered air squats, add explosiveness. Jump squats build power, burn calories, and spike your heart rate. Just 10 reps will leave you breathless.</p>

        <h2>Building a Routine</h2>
        <p>Pick 4-5 of these. Do 3 sets each. Rest 30-60 seconds between sets. The whole thing takes 10-15 minutes and works your entire body.</p>
        <p>Or let fit.gg program it for you — our skill tree guides you through these movements progressively, from complete beginner to advanced athlete.</p>
      </>
    ),
  },
  'gamification-fitness-streaks': {
    content: (
      <>
        <p>Duolingo has 37 million daily active users learning languages. Not because learning French grammar is inherently fun — but because <strong>the app makes it feel like a game</strong>.</p>
        <p>What if fitness worked the same way?</p>

        <h2>Why Gamification Works (The Science)</h2>
        <p>Gamification taps into three core psychological drives:</p>
        <ul>
          <li><strong>Autonomy</strong> — You choose when and how to play</li>
          <li><strong>Competence</strong> — You see yourself improving through levels and XP</li>
          <li><strong>Relatedness</strong> — Leagues and leaderboards connect you to others</li>
        </ul>
        <p>This is Self-Determination Theory in action. When all three drives are satisfied, intrinsic motivation skyrockets.</p>

        <h2>The Streak: Your Most Powerful Motivator</h2>
        <p>Duolingo&apos;s streak counter is arguably worth billions. Here&apos;s why:</p>
        <p>Once you hit day 7, something shifts. You&apos;re no longer deciding whether to work out — you&apos;re protecting your streak. The psychological cost of breaking a streak <strong>increases exponentially</strong> the longer it gets.</p>
        <p>At day 30, skipping feels physically painful. At day 100, it&apos;s unthinkable. The streak has become part of your identity.</p>

        <h2>XP and Levels: Progress You Can See</h2>
        <p>Fitness progress is slow and invisible. You can&apos;t see your muscles growing day by day. You can&apos;t measure a 2% improvement in cardiovascular health.</p>
        <p>But you CAN see your XP bar filling up. You CAN see &quot;Level 12 → Level 13.&quot; This <strong>artificial progress layer</strong> gives your brain the reward signal it craves while the real physical changes happen underneath.</p>

        <h2>Leagues: Social Competition Without the Gym</h2>
        <p>Most people don&apos;t want to compete in a CrossFit box. But a weekly leaderboard where you&apos;re ranked against 30 strangers? That&apos;s the perfect amount of competitive pressure.</p>
        <p>You&apos;re not trying to be the best in the world — you&apos;re just trying to not get relegated from Gold League. The stakes are low, but the motivation is real.</p>

        <h2>Skill Trees: The RPG Element</h2>
        <p>In a video game, you don&apos;t start with the best weapons. You unlock them. There&apos;s a clear path from noob to powerful, and each step feels earned.</p>
        <p>Apply this to fitness: you don&apos;t start with handstand push-ups. You start with wall push-ups. Then regular push-ups. Then diamond push-ups. Then pike push-ups. Each node in the tree is a mini-achievement that leads to the next.</p>
        <p>This structured progression is what separates fit.gg from random YouTube workout videos.</p>

        <h2>Why No One Has Done This Right (Yet)</h2>
        <p>Most fitness apps bolt on a single gamification element — maybe a streak counter or badges. But they miss the system:</p>
        <ul>
          <li>Streaks without XP lack visible progress</li>
          <li>XP without leagues lacks social motivation</li>
          <li>Leagues without skill trees lack a sense of mastery</li>
          <li>Skill trees without streaks lack daily consistency</li>
        </ul>
        <p>You need <strong>all four working together</strong> to create the loop that makes Duolingo addictive. That&apos;s what fit.gg is building.</p>

        <h2>The Future of Fitness Is Fun</h2>
        <p>Working out shouldn&apos;t feel like punishment. It should feel like playing a game where the side effect is getting stronger. Streaks, XP, leagues, and skill trees aren&apos;t gimmicks — they&apos;re proven behavioral tools that make good habits stick.</p>
      </>
    ),
  },
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — fit.gg`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  const article = articles[params.slug]
  if (!post || !article) notFound()

  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a', color: '#e5e5e5' }}>
      <article style={{ maxWidth: '680px', margin: '0 auto', padding: '80px 24px 120px' }}>
        <Link href="/blog" style={{ color: '#00FF87', textDecoration: 'none', fontSize: '14px', fontWeight: 600, display: 'inline-block', marginBottom: '40px' }}>
          ← All Posts
        </Link>

        <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', fontSize: '13px', color: '#888' }}>
          <span style={{ color: '#00FF87', fontWeight: 600 }}>{post.category}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '40px' }}>
          {post.title}
        </h1>

        <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#ccc' }}>
          {article.content}
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #222', margin: '60px 0 40px' }} />

        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#888', marginBottom: '20px' }}>Ready to build the workout habit that sticks?</p>
          <Link href="/#waitlist" style={{
            display: 'inline-block',
            padding: '14px 36px',
            background: '#00FF87',
            color: '#000',
            borderRadius: '50px',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '15px',
          }}>
            Join the Waitlist →
          </Link>
        </div>
      </article>

      <style>{`
        .blog-content h2 { font-size: 1.5rem; font-weight: 700; margin: 40px 0 16px; color: #e5e5e5; letter-spacing: -0.02em; }
        .blog-content h3 { font-size: 1.2rem; font-weight: 600; margin: 28px 0 12px; color: #e5e5e5; }
        .blog-content p { margin-bottom: 16px; }
        .blog-content ul, .blog-content ol { margin: 0 0 16px 24px; }
        .blog-content li { margin-bottom: 8px; }
        .blog-content strong { color: #e5e5e5; }
        .blog-content em { color: #aaa; }
      `}</style>
    </main>
  )
}
