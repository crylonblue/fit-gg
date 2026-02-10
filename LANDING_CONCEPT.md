# fit.gg Landing Page Concept v2

## Direction: "Modern App with RPG Soul"
Clean, bright, credible. The RPG mechanics are the hook but wrapped in approachable design.
Duolingo's addictiveness meets fitness. Not a fantasy game — a real product that happens to be incredibly addictive.

---

## Brand

### Palette
- **Primary:** Energetic green `#34D399` (growth, health, go)
- **Secondary:** Deep purple `#7B6CF6` (premium, progression)
- **Accent:** Warm amber `#FBBF24` (streaks, achievements, XP)
- **Background:** White `#FFFFFF` / Light gray `#F9FAFB`
- **Text:** Dark gray `#111827` / Medium `#6B7280`
- **Cards:** White with subtle shadow, rounded corners (16px)

### Typography
- **Headings:** Plus Jakarta Sans (bold, rounded, friendly)
- **Body:** Inter (clean, readable)
- Font sizes generous, lots of whitespace

### Tone
- Encouraging, not drill-sergeant
- Casual, not corporate
- Honest — no "get abs in 30 days" BS
- Playful but credible — this is a real product

### Visual Style
- Clean illustrations or abstract shapes (no fantasy art)
- App UI mockups as hero visuals (show the actual product experience)
- Subtle gradients (green→teal, purple→indigo)
- Generous whitespace, nothing cramped
- Micro-interactions: hover effects, subtle animations on scroll

---

## Landing Page Sections

### 1. Nav (sticky)
- Logo: "fit.gg" in bold, with a small green dot or flame icon
- Links: How It Works / Why It Works / Pricing
- CTA button: "Join Waitlist" (green, rounded)
- Clean white/glass background

### 2. Hero
- **Headline:** "The 5-minute workout habit that actually sticks."
- **Subhead:** "Duolingo-style progression for bodyweight fitness. Build streaks, unlock skills, get stronger — 5 minutes at a time."
- **CTA:** "Join the Waitlist" (big green button) + "See How It Works" (text link)
- **Visual:** Right side — stylized app mockup or illustration showing:
  - A skill tree with some nodes unlocked
  - A streak counter (🔥 47 days)
  - XP bar filling up
  - Keep it abstract/illustrative, not a literal phone screenshot
- **Trust line below:** "Join 0 others building the workout habit" (honest count, updates live)
- Background: White with subtle green/purple gradient blob shapes

### 3. The Problem (emotional hook)
- **Headline:** "Sound familiar?"
- Three cards, each with an emoji + short relatable pain point:
  - 😩 "Download fitness app → do 2 workouts → forget it exists"
  - 😰 "Watch a 45-min YouTube workout → give up at minute 8"  
  - 🫠 "Tell yourself 'I'll start Monday' every Sunday night"
- **Punchline:** "It's not your fault. Most fitness apps are built for people who already work out."
- Light gray background section

### 4. How It Works (the core loop)
- **Headline:** "Dead simple. Stupidly effective."
- Three steps, horizontal on desktop, vertical on mobile:
  1. **Open** → "Get today's 5-minute session, picked for your level" (icon: phone/app)
  2. **Move** → "Follow along with guided exercises. No equipment needed." (icon: person moving)
  3. **Progress** → "Earn XP, extend your streak, unlock new skills." (icon: chart going up)
- Clean illustrations or icons for each step
- Maybe a subtle connecting line/arrow between them

### 5. The Secret Sauce (why it works — RPG mechanics)
- **Headline:** "Everything that makes Duolingo addictive. But for your body."
- Feature grid (2x2 or 2x3):
  - 🔥 **Streaks** — "Your streak is sacred. One day at a time, watch it grow."
  - 🌳 **Skill Tree** — "Progressive path from basics to advanced. No skipping ahead."
  - 🏆 **Leagues** — "Weekly leaderboards. Compete, get promoted, talk trash."
  - ❤️ **Hearts** — "Skip exercises = lose hearts. It keeps you honest."
  - 📊 **Adaptive** — "Too easy? We'll push you. Struggling? We'll dial it back."
  - ⚡ **XP System** — "Every rep counts. Watch your level climb."
- Each feature in a clean card with icon, title, one-liner
- White background, cards have subtle borders/shadows

### 6. Social Proof / Credibility (when we have it)
- For now: "Built by people who quit every fitness app and finally figured out why."
- Later: testimonials, beta user stats, press logos
- Can skip this section for v1 or keep it minimal

### 7. Waitlist CTA (bottom)
- **Headline:** "Ready to build the habit?"
- **Subhead:** "Join the waitlist. We'll let you know when fit.gg launches."
- Email input + "Count me in" button (green)
- Small text: "No spam. Just launch updates."
- Background: Subtle gradient (green/purple) or light colored section to stand out

### 8. Footer
- Minimal: fit.gg logo, © 2026, maybe Twitter/Instagram links
- "Made with 💪 and code"

---

## What We're NOT Doing
- ❌ Dark theme / navy backgrounds
- ❌ Fantasy character art / RPG illustrations
- ❌ "Choose your class" — there are no classes, there's a skill tree
- ❌ Fake waitlist numbers
- ❌ Heavy animations that break on mobile
- ❌ 3D anything
- ❌ Walls of text

## What We ARE Doing
- ✅ Clean, bright, trustworthy design
- ✅ Emotional hook (the problem) before the solution
- ✅ Show the RPG mechanics as features, not theme
- ✅ One clear CTA: join the waitlist
- ✅ Mobile-first responsive
- ✅ Fast — static export, no heavy JS
- ✅ Honest — real waitlist count, real promises

---

## Technical
- Next.js static export (keep current setup)
- Tailwind CSS (no inline styles this time — proper utility classes)
- No framer-motion (simple CSS transitions only)
- No Three.js / R3F
- Google Fonts: Plus Jakarta Sans + Inter
- Images: SVG illustrations or lightweight PNGs
- Deploy: Vercel via GitHub push
