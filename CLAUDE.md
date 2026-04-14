# CLAUDE.md — Freelance Client Demo Tool

## What This Project Is
A **Next.js 14 App Router** project used as a freelance sales tool by King.
When pitching a potential web dev client (skincare brand, food vendor, logistics company, etc.),
King sends them a link like `/demo?niche=skincare` — they see a fully designed website
that looks like it was *built for their business*, to show them what King can build.

**Stack:** Next.js 14 · TypeScript · Tailwind CSS · Vercel deployment

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              ← Root layout. Loads Google Fonts (Playfair Display + DM Sans).
│   ├── globals.css             ← Tailwind base + CSS custom properties + animations.
│   ├── page.tsx                ← Redirects / → /demo?niche=[DEFAULT_NICHE]
│   ├── not-found.tsx           ← 404 shown when ?niche= slug is unrecognised
│   └── demo/
│       └── page.tsx            ← Reads ?niche= param, fetches config, renders DemoPage
│
├── components/
│   ├── DemoPage.tsx            ← Client component. Injects CSS vars. Composes all sections.
│   ├── sections/
│   │   ├── Navbar.tsx          ← Sticky navbar with logo, nav links, mobile hamburger
│   │   ├── Hero.tsx            ← Full-width hero: badge, heading, subheading, CTA
│   │   ├── MarqueeStrip.tsx    ← Scrolling ticker strip between hero and products
│   │   ├── Products.tsx        ← 4-card product/service grid
│   │   ├── About.tsx           ← 2-col about section with stats (dark bg)
│   │   ├── Testimonials.tsx    ← 3-card testimonial grid
│   │   ├── CtaBanner.tsx       ← Full-width gradient CTA section
│   │   └── Footer.tsx          ← Footer with tagline, links, "Hire King" credit line
│   └── ui/
│       └── DemoBanner.tsx      ← Fixed floating pill: "Demo Preview — this is what your site could look like"
│
├── config/
│   └── niches/
│       ├── _TEMPLATE.ts        ← COPY THIS to create a new niche. Has all fields with guidance.
│       └── skincare.ts         ← Example: GlowCo Skincare demo
│
└── lib/
    ├── types/
    │   └── niche.ts            ← NicheConfig TypeScript interface. Single source of truth.
    ├── niches.ts               ← Registry. Import + register all niche configs here.
    └── hooks/
        └── useScrollReveal.ts  ← IntersectionObserver hook that adds .visible to .reveal elements
```

---

## How Niche Switching Works

The URL `/demo?niche=skincare` is the entry point.
1. `app/demo/page.tsx` reads `searchParams.niche`
2. Calls `getNiche(slug)` from `src/lib/niches.ts`
3. If found, passes the `NicheConfig` object to `<DemoPage config={niche} />`
4. `DemoPage` injects CSS custom properties (`--color-primary`, etc.) into the DOM root
5. All section components read from `config` props and render accordingly
6. If slug not found → `notFound()` → `app/not-found.tsx`

---

## How To Add A New Niche

### Step 1 — Create the config
```bash
cp src/config/niches/_TEMPLATE.ts src/config/niches/[slug].ts
```
Edit every field. The `slug` value **must match** the filename.

### Step 2 — Register it
Open `src/lib/niches.ts` and:
```ts
import fashion from "@/config/niches/fashion";   // add import

export const NICHES: Record<string, NicheConfig> = {
  skincare,
  fashion,   // add here
};
```

### Step 3 — Preview
```bash
npm run dev
# Visit: http://localhost:3000/demo?niche=fashion
```

That's it. No other files need to change.

---

## Color System

Colors live **only** in each niche config. They are never hardcoded in components.

| Variable              | Used for                                      |
|-----------------------|-----------------------------------------------|
| `--color-primary`     | Buttons, highlights, product prices, links    |
| `--color-secondary`   | Headings, dark backgrounds (About, Footer)    |
| `--color-accent`      | Tags/badges, subtle tinted backgrounds        |
| `--color-bg`          | Page background                               |
| `--color-text`        | Body text                                     |

In Tailwind, these map to:
- `text-primary` / `bg-primary`
- `text-secondary` / `bg-secondary`
- etc. (see `tailwind.config.ts`)

In inline styles (used when Tailwind can't handle dynamic values):
```tsx
style={{ color: "var(--color-primary)" }}
```

---

## Typography

| Font              | Variable           | Used for                        |
|-------------------|--------------------|---------------------------------|
| Playfair Display  | `--font-display`   | All headings (`font-display`)   |
| DM Sans           | `--font-body`      | All body text (`font-body`)     |

Loaded via `next/font/google` in `app/layout.tsx`. Never use `@import` in CSS.

---

## Animations

Two animation systems:
1. **Hero fade-up** — CSS keyframe `animate-fadeUp` with `delay-100/200/300` utility classes
2. **Scroll reveal** — add `className="reveal"` to any element; `useScrollReveal()` hook adds `.visible` on intersection

```tsx
// Usage:
<div className="reveal" style={{ transitionDelay: "0.1s" }}>
  ...
</div>
```

---

## Deployment

### Vercel (recommended)
```bash
# Push to GitHub, then:
# 1. Import repo on vercel.com
# 2. Framework: Next.js (auto-detected)
# 3. Deploy — done
```

### Per-client preview branches
```bash
git checkout -b demo/client-name-niche
# Edit DEFAULT_NICHE in src/lib/niches.ts OR set the niche in the Vercel preview URL
git push origin demo/client-name-niche
# Share the Vercel preview URL with the client
```

---

## Environment Variables

None required for base operation.

If you add contact form / analytics later, add to `.env.local`:
```
# Example future vars:
NEXT_PUBLIC_WA_NUMBER=234XXXXXXXXXX
RESEND_API_KEY=re_xxxx
```

---

## What NOT To Change

- `DemoBanner.tsx` — always keep visible; it frames this as a pitch, not a live site
- The `"Hire King →"` link in `Footer.tsx` — this is the lead capture / attribution
- `NicheConfig` interface in `src/lib/types/niche.ts` — if you change this, update `_TEMPLATE.ts` too

---

## Owner

**King (Ojo-Imoukhuede King)** — Full-stack developer & freelancer, Lagos NG
Built with Claude Code.
