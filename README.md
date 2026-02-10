# 🎮 fit.gg Landing Page

**Your Body Is The Controller.** The RPG where real workouts level up your character.

A stunning dark-mode gaming landing page built with Next.js 15, featuring 3D graphics, smooth animations, and a premium gaming aesthetic designed for the .gg domain audience.

## ✨ Features

### 🎯 Interactive Sections
- **Hero Section** — Full viewport with 3D rotating warrior character
- **How It Works** — 3-step process cards with hover effects
- **Avatar Evolution** — Interactive slider showing character progression (Level 1→50→100)
- **Class Selection** — 4 character classes with stats and popularity tracking
- **Features Showcase** — Streaks, Guilds, PvP Duels, Boss Fights
- **Waitlist Signup** — Email + class + hero name collection with localStorage
- **Footer** — Complete links, socials, and legal pages

### 🎨 Design System
- **Dark Gaming Aesthetic** — Purple (#7C3AED) and emerald (#10B981) theme
- **Typography** — Inter for body text, JetBrains Mono for stats/XP
- **Animations** — Smooth Framer Motion scroll effects and micro-interactions
- **3D Graphics** — React Three Fiber with geometric warrior character
- **Particle Effects** — Floating background particles and sparkles
- **Responsive** — Mobile-first design with gaming-grade polish

### 🛠 Tech Stack
- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS v4** (with inline theme configuration)
- **React Three Fiber** + @react-three/drei for 3D graphics
- **Framer Motion** for animations and scroll effects
- **@heroicons/react** for UI icons
- **localStorage** for waitlist data persistence

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production
```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & design system
├── components/
│   ├── 3d/
│   │   ├── RotatingWarrior.tsx    # Interactive 3D character
│   │   └── ParticleField.tsx      # Background particle effects
│   └── sections/
│       ├── HeroSection.tsx        # Main hero with 3D character  
│       ├── HowItWorksSection.tsx  # 3-step process
│       ├── AvatarEvolutionSection.tsx  # Character progression
│       ├── ClassSelectionSection.tsx   # 4 character classes
│       ├── FeaturesSection.tsx    # Gaming features showcase
│       ├── WaitlistSection.tsx    # Signup form
│       └── Footer.tsx             # Complete footer
```

## 🎮 Gaming Features

### Character Classes
- **⚔️ Warrior** — Strength specialists (34% popular)
- **🏹 Ranger** — Endurance athletes (28% popular) 
- **🧙 Mage** — Flexibility masters (18% popular)
- **🛡️ Paladin** — Balanced heroes (20% popular)

### Waitlist System
- Email collection with validation
- Character class selection
- Hero name reservation
- Position tracking with localStorage
- Social sharing integration
- "First 1,000 get Founder's Armor" urgency

## 🎨 Design System Colors

```css
/* Primary Colors */
--bg-primary: #0A0A0F      /* Near black background */
--surface: #13131A         /* Card/panel surface */
--primary: #7C3AED         /* Electric purple (actions) */
--secondary: #10B981       /* Emerald (success/XP) */
--accent: #F59E0B          /* Amber (gold/coins) */

/* Text Colors */  
--text-primary: #F1F5F9    /* Main text */
--text-secondary: #94A3B8  /* Secondary text */
--text-muted: #475569      /* Muted text */
```

## 🚀 Deployment

Ready for deployment to:
- **Vercel** (recommended) — Zero config deployment
- **Netlify** — Static site hosting
- **Any hosting** supporting Node.js

### Environment Variables
No environment variables needed for the landing page. Waitlist data is stored in localStorage for demo purposes.

## 📊 Performance

- **LCP < 2.5s** — 3D loads async, text/CTA visible immediately
- **Mobile Optimized** — Touch gestures for 3D rotation
- **SEO Ready** — Complete meta tags and structured data
- **Accessibility** — Semantic HTML and keyboard navigation

## 🔮 Future Enhancements

- Connect to real backend (Convex recommended)
- Add referral system with position tracking  
- Implement email nurture sequences
- Add more 3D character animations
- Create custom 3D models for each class
- Add sound effects and music
- Implement analytics (Umami)

## 🏆 Built for Heroes

This landing page is designed for the gaming audience that expects premium polish. Every detail has been crafted to create excitement and drive conversions for the fitness RPG that makes working out addictive.

**Made for heroes who never quit.** 💪

---

© 2026 fit.gg | Your body. Your game.