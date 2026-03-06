# fit.gg — PROJECT.md

## What Is This
RPG fitness app. Gamifies workouts with XP, streaks, levels, and character classes.

## Status: Active — needs domain + Convex deploy
- **URL:** https://fit.gg (domain not pointed yet)
- **Repo:** https://github.com/crylonblue/fit-gg
- **Stack:** Next.js, Tailwind, Convex, PWA
- **Analytics:** Umami `e4cb20f0-7ca2-4f14-a4e4-cf3a1216fb0a`
- **Traffic:** ~136 visitors/week (all homepage via Vercel preview URL)
- **Convex:** `dev:quirky-ptarmigan-790` (EU West) — deployed 2026-03-04

## What's Built
- Landing page with 3D hero, class selection, waitlist
- 31 SEO blog posts (workout guides, nutrition, stretching, recovery, mobility)
- App shell: dashboard, workout session player, progress page, profile
- 10 progressive workout sessions (JSON data)
- Streak + XP system
- PWA setup (manifest, service worker, icons)
- Push notifications (daily reminders, streak warnings)
- Featured Articles section on homepage
- Waitlist API (/api/waitlist) — stores to /tmp (needs real backend)

## Blocking
- **Till:** Point fit.gg domain to Vercel
- **Till:** Set `NEXT_PUBLIC_CONVEX_URL=https://quirky-ptarmigan-790.eu-west-1.convex.cloud` in Vercel env vars
- Waitlist needs persistent storage (Convex or Vercel KV)

## What's Needed
- Domain + Convex env var on Vercel (Till)
- Wire app pages to real Convex data (currently mock)
- Auth system (email/password via Convex)
- Real waitlist backend
