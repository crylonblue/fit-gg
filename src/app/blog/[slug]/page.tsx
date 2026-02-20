import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts } from '../posts'

const articles: Record<string, { content: React.ReactNode }> = {
  'morning-workout-routine-5-minutes': {
    content: (
      <>
        <p>Your alarm goes off. You grab your phone. 20 minutes of scrolling later, you&apos;re already behind. Sound familiar?</p>
        <p>What if those first 5 minutes looked different? <strong>A short morning workout rewires your entire day</strong> — more energy, better focus, and a win before most people hit snooze.</p>

        <h2>Why Morning Workouts Hit Different</h2>
        <p>A 2025 study in the <em>Journal of Physiology</em> found that morning exercisers had <strong>48% better adherence rates</strong> than evening exercisers. The reason is simple: willpower is highest in the morning, and nothing competes for your time at 6 AM.</p>
        <p>Morning movement also triggers a cortisol spike (the good kind) that replaces the groggy caffeine dependency most people live with. You&apos;re essentially telling your body: &quot;We&apos;re awake. Let&apos;s go.&quot;</p>

        <h2>The 5-Minute Morning Routine</h2>
        <p>No warmup needed — these movements ARE the warmup. Do each for 50 seconds, rest 10 seconds between.</p>

        <h3>Minute 1: Jumping Jacks</h3>
        <p>Gets blood flowing everywhere. Wakes up your cardiovascular system and loosens your joints. Start at whatever pace feels right — the goal is movement, not intensity.</p>

        <h3>Minute 2: Bodyweight Squats</h3>
        <p>Fires up the largest muscles in your body. Go deep, keep your chest up, and focus on controlled reps. Aim for 12-15 in the 50 seconds.</p>

        <h3>Minute 3: Push-Ups</h3>
        <p>Upper body activation. Do them on your knees if needed — there&apos;s zero shame in scaling. 8-12 good reps beats 20 sloppy ones.</p>

        <h3>Minute 4: Mountain Climbers</h3>
        <p>Now your heart rate is up. Mountain climbers hit your core, hip flexors, and cardio simultaneously. Keep your hips low and drive those knees.</p>

        <h3>Minute 5: Plank Hold</h3>
        <p>Finish strong. Hold a solid plank for the full 50 seconds. Squeeze everything — glutes, core, quads. This is your &quot;I did it&quot; moment.</p>

        <h2>The Science of Morning Movement</h2>
        <p>Exercise triggers a cascade of neurochemicals:</p>
        <ul>
          <li><strong>Endorphins</strong> — Natural mood boost that lasts 2-4 hours</li>
          <li><strong>BDNF</strong> — Brain-Derived Neurotrophic Factor, which improves learning and memory</li>
          <li><strong>Norepinephrine</strong> — Sharpens attention and focus</li>
          <li><strong>Serotonin</strong> — Regulates mood and reduces anxiety</li>
        </ul>
        <p>All of this from 5 minutes. You&apos;d need 2-3 cups of coffee to get half these effects — and caffeine doesn&apos;t build muscle.</p>

        <h2>How to Actually Make It Happen</h2>
        <h3>The Night-Before Setup</h3>
        <p>Put your workout clothes next to your bed. Seriously. Removing even one decision makes the morning easier. When you wake up, put them on before your brain can negotiate.</p>

        <h3>The 3-Second Rule</h3>
        <p>When your alarm goes off, count 3-2-1 and stand up. Don&apos;t think. Don&apos;t check your phone. The longer you lie there, the louder the &quot;skip it&quot; voice gets.</p>

        <h3>Stack It</h3>
        <p>Workout → shower → coffee. Make it a non-negotiable sequence. After 2 weeks, it&apos;ll feel automatic. After 30 days, skipping will feel wrong.</p>

        <h2>Level It Up</h2>
        <p>Once 5 minutes feels easy, you have two options:</p>
        <ol>
          <li><strong>Increase intensity</strong> — Swap jumping jacks for burpees, squats for jump squats</li>
          <li><strong>Add a second round</strong> — Go from 5 minutes to 10</li>
        </ol>
        <p>fit.gg handles this progression automatically. Our skill tree adapts as you get stronger, swapping in harder movements at exactly the right time.</p>

        <h2>Your Morning, Upgraded</h2>
        <p>5 minutes. No equipment. No gym. No excuses. Tomorrow morning, try it once. Feel the difference. Then try to stop.</p>
      </>
    ),
  },
  'how-to-start-working-out-at-home-beginner': {
    content: (
      <>
        <p>You want to start working out. You&apos;ve wanted to for a while. But every time you look up a program, it&apos;s <strong>12-week periodized hypertrophy splits</strong> designed for people who already go to the gym.</p>
        <p>This guide is for everyone else. The true beginners. The people starting from zero.</p>

        <h2>Step 1: Forget Everything You Think You Know</h2>
        <p>You don&apos;t need:</p>
        <ul>
          <li>A gym membership</li>
          <li>Protein powder</li>
          <li>A workout plan from some influencer</li>
          <li>60 minutes of free time</li>
          <li>To be &quot;in shape&quot; before starting</li>
        </ul>
        <p>You need: a body, a floor, and 5 minutes. That&apos;s it.</p>

        <h2>Step 2: Start Embarrassingly Small</h2>
        <p>This is the most important principle in fitness and the one everyone ignores: <strong>start so small it feels ridiculous.</strong></p>
        <p>Day 1 should be:</p>
        <ul>
          <li>5 wall push-ups</li>
          <li>10 bodyweight squats</li>
          <li>20-second plank</li>
        </ul>
        <p>That&apos;s roughly 90 seconds of actual exercise. Feels like nothing? Good. You&apos;ll actually do it tomorrow. And the day after. And the day after that.</p>
        <p>The person who does 90 seconds every day for a year will be in better shape than the person who does an intense hour-long workout for two weeks and quits.</p>

        <h2>Step 3: Build the Habit Before the Body</h2>
        <p>Your goal for the first 30 days is NOT to get fit. It&apos;s to <strong>prove to yourself that you&apos;re someone who works out.</strong></p>
        <p>Identity drives behavior. Once you see yourself as &quot;someone who exercises daily,&quot; the workouts get easier — not because your body changed, but because your brain did.</p>
        <p>How to build the habit:</p>
        <ol>
          <li><strong>Same time every day</strong> — Morning works best (nothing competes for your attention)</li>
          <li><strong>Track your streak</strong> — Mark an X on a calendar, use an app, whatever makes the chain visible</li>
          <li><strong>Never miss twice</strong> — One skip is fine. Two in a row kills momentum. Get back on it.</li>
        </ol>

        <h2>Step 4: The Beginner Progression</h2>
        <p>Here&apos;s a realistic timeline for someone starting from zero:</p>

        <h3>Weeks 1-2: Foundation</h3>
        <ul>
          <li>Wall push-ups → 3 sets of 10</li>
          <li>Bodyweight squats → 3 sets of 10</li>
          <li>Plank → 3 × 20 seconds</li>
          <li>Total time: ~5 minutes</li>
        </ul>

        <h3>Weeks 3-4: Building</h3>
        <ul>
          <li>Knee push-ups → 3 sets of 8</li>
          <li>Squats (deeper) → 3 sets of 15</li>
          <li>Plank → 3 × 30 seconds</li>
          <li>Add: Glute bridges → 3 sets of 12</li>
          <li>Total time: ~8 minutes</li>
        </ul>

        <h3>Weeks 5-8: Leveling Up</h3>
        <ul>
          <li>Full push-ups → 3 sets of 5-8</li>
          <li>Squats + Lunges → 3 sets of 12 each</li>
          <li>Plank → 3 × 45 seconds</li>
          <li>Add: Mountain climbers → 3 × 20 seconds</li>
          <li>Total time: ~12 minutes</li>
        </ul>

        <h3>Weeks 9-12: Intermediate</h3>
        <ul>
          <li>Push-ups → 3 sets of 10-15</li>
          <li>Jump squats, Bulgarian split squats</li>
          <li>Pike push-ups → 3 sets of 5</li>
          <li>Hollow body holds → 3 × 20 seconds</li>
          <li>Total time: ~15 minutes</li>
        </ul>

        <h2>Step 5: Common Beginner Mistakes</h2>

        <h3>❌ Doing Too Much Too Soon</h3>
        <p>The #1 reason beginners quit. You feel motivated on day 1, do an intense 45-minute workout, can&apos;t walk for 3 days, and never do it again. Start small. Build up.</p>

        <h3>❌ Chasing Soreness</h3>
        <p>Soreness is NOT a sign of a good workout. It&apos;s a sign your body isn&apos;t adapted yet. As you get consistent, soreness decreases. That&apos;s progress, not failure.</p>

        <h3>❌ Skipping Rest Days (At First)</h3>
        <p>Beginners: take 1-2 rest days per week. Your muscles grow during recovery. As your workouts get shorter and more habitual (like a 5-minute daily session), daily training becomes fine.</p>

        <h3>❌ Comparing Yourself to Fitness Influencers</h3>
        <p>They&apos;ve been training for years. You&apos;re on week 1. Compare yourself to yesterday-you. That&apos;s the only benchmark that matters.</p>

        <h2>Step 6: Nutrition (Keep It Simple)</h2>
        <p>Don&apos;t overhaul your diet on day 1. That&apos;s two habits at once, and both will fail. Focus on exercise first.</p>
        <p>When you&apos;re ready, the basics are:</p>
        <ul>
          <li><strong>Eat enough protein</strong> — 0.7g per pound of body weight is a good target</li>
          <li><strong>Drink water</strong> — Most people are chronically dehydrated</li>
          <li><strong>Eat real food</strong> — If it grew from the ground or had a face, it&apos;s probably fine</li>
        </ul>
        <p>That&apos;s it. No counting calories. No meal prep. Not yet.</p>

        <h2>Why fit.gg Is Built for Beginners</h2>
        <p>Most fitness apps assume you already know what you&apos;re doing. fit.gg doesn&apos;t. Our skill tree starts with the absolute basics and guides you through progressions automatically. You don&apos;t need to plan anything — just open the app and follow along.</p>
        <p>Think Duolingo, but for your body. Start easy. Build streaks. Unlock harder moves. Before you know it, you&apos;re doing things you never thought possible.</p>

        <h2>Start Today. Not Monday.</h2>
        <p>The best time to start was a year ago. The second best time is right now. Not Monday. Not January 1st. Now.</p>
        <p>5 wall push-ups. 10 squats. 20-second plank. Do it right now. Seriously. We&apos;ll wait.</p>
        <p>Welcome to day 1. 💪</p>
      </>
    ),
  },
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
