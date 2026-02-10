# fit.gg Landing Page v5 — The One That Actually Slaps

## Design Philosophy
Typography IS the hero. No images in hero. No AI art. No 3D.
Think: Stripe, Linear, Vercel landing pages — but with gaming energy.
Every section earns its space. If it doesn't make someone go "oh shit", cut it.

## Visual System
- **Background:** Pure black #000000 
- **Primary accent:** Electric green #00FF87
- **Secondary:** Purple #A855F7, Blue #3B82F6
- **Text:** White #FFFFFF, muted #888888
- **Font:** Plus Jakarta Sans 800 for headers, Inter for body
- **Key effect:** Animated gradient text, glowing borders, subtle CSS particles
- **Section transitions:** Gradient lines + generous spacing

## Page Flow (each section = one viewport height or less)

### 1. NAV (fixed, minimal)
- "fit.gg" logo left (neon green)
- "Join Waitlist" button right (only CTA in nav)
- Transparent → solid on scroll

### 2. HERO (full viewport, centered)
- Massive centered text: "YOUR BODY." (white) / "YOUR GAME." (animated gradient green→purple→blue, shifting)
- Subtitle below: "5-minute workouts with RPG progression. Build streaks. Climb leagues. Level up."
- Single CTA: [JOIN THE WAITLIST] big green button
- Below button: animated counter "🔥 47 day streak" "⚡ Level 12" "🏆 Gold League" cycling through with typewriter effect
- Background: subtle animated gradient mesh (CSS only)
- NO images

### 3. PROBLEM (scroll reveal)
- Left-aligned big text: "YOU'VE TRIED EVERYTHING."
- Three lines that appear one by one:
  - "Downloaded 12 fitness apps." (strikethrough, faded)
  - "Watched 47 YouTube workouts." (strikethrough, faded)
  - "Made 52 Monday promises." (strikethrough, faded)
- Then: "None of them stuck." (bright white, bold)
- Then: "Because they weren't designed to." (neon green)
- Clean, no cards, no emojis. Just typography hitting hard.

### 4. THE LOOP (how it works)
- Horizontal scroll or sticky section
- Three massive numbers: 01 / 02 / 03
- Each with one word + one line:
  - 01 OPEN → "Your daily session is ready."
  - 02 MOVE → "5 minutes. Bodyweight. Anywhere."  
  - 03 LEVEL UP → "XP. Streaks. Leagues. Repeat."
- Connected by an animated line/path
- Minimal, impactful

### 5. THE ENGINE (features, the meat)
- "POWERED BY ADDICTION SCIENCE" header
- 6 features in a bento grid layout (different sized cards):
  - Large card: STREAKS (big fire emoji + streak counter animation)
  - Large card: SKILL TREE (CSS-drawn node tree with glowing connections)
  - Small: LEAGUES (rank badges)
  - Small: HEARTS (heart counter)
  - Small: ADAPTIVE AI
  - Small: XP SYSTEM (XP bar animation)
- Cards have subtle border glow on hover
- Dark cards with slight gradient backgrounds

### 6. SOCIAL PROOF / VISION
- "BUILT FOR PEOPLE WHO QUIT EVERY FITNESS APP"
- Maybe a manifesto-style paragraph
- Or key numbers (when we have them)

### 7. WAITLIST (final CTA)
- Big: "READY?"
- Email input + button
- Minimal, high contrast
- Subtle background pulse

### 8. FOOTER (one line)

## Technical
- CSS animations only (no framer-motion, no JS animation libs)
- CSS @keyframes for gradient shifts, glow pulses
- Intersection Observer for scroll reveals (tiny custom hook)
- No images at all (pure CSS + text + emoji)
- Static export, fast as hell
