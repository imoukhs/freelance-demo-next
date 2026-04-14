// ─────────────────────────────────────────────────────────────────────────────
// types/niche.ts
// The single source of truth for what every niche config must look like.
// When adding a new niche, make sure it satisfies this type.
// ─────────────────────────────────────────────────────────────────────────────

export interface NicheColors {
  primary: string;    // main brand color (buttons, highlights)
  secondary: string;  // dark/contrast color (headings, backgrounds)
  accent: string;     // light/warm color (tags, subtle backgrounds)
  bg: string;         // page background
  text: string;       // body text color
}

export interface NicheHero {
  heading: string;        // big headline — keep under 8 words for impact
  subheading: string;     // supporting line — 1–2 sentences
  ctaText: string;        // button label
  ctaLink: string;        // button href (usually "#products")
  badgeText: string;      // small pill above heading (e.g. "✦ New arrival")
}

export interface NicheProduct {
  name: string;     // product/service name
  price: string;    // formatted price string e.g. "₦12,500" or "From ₦1,500"
  tag: string;      // badge label e.g. "Bestseller", "New", "" for none
  emoji: string;    // single emoji representing the item
  desc: string;     // 1 short sentence description
}

export interface NicheTestimonial {
  name: string;   // customer name
  text: string;   // review text (1–2 sentences)
  stars: number;  // 1–5
}

export interface NicheAbout {
  heading: string;  // section headline
  body: string;     // 2–3 sentence paragraph about the business
}

export interface NicheCtaBanner {
  heading: string;  // bold CTA headline
  sub: string;      // supporting sub-line
  btnText: string;  // button label
}

export interface NicheFooter {
  tagline: string;    // short brand sign-off
  links: string[];    // footer nav link labels
}

// ─────────────────────────────────────────────────────────────────────────────
// Main config shape — every niche config exports this as default
// ─────────────────────────────────────────────────────────────────────────────
export interface NicheConfig {
  // Metadata
  slug: string;           // URL slug — must match filename e.g. "skincare"
  businessName: string;   // Example client business name shown on demo
  tagline: string;        // One-line brand tagline
  description: string;    // 1–2 sentence business description
  logoInitials: string;   // 2 letters for the logo mark e.g. "GC"
  category: string;       // Human label e.g. "Skincare & Beauty"

  // Design
  colors: NicheColors;

  // Content sections
  navLinks: string[];           // 3–5 nav items, last one becomes the CTA button
  hero: NicheHero;
  products: NicheProduct[];     // exactly 4 items
  testimonials: NicheTestimonial[]; // exactly 3 items
  about: NicheAbout;
  ctaBanner: NicheCtaBanner;
  footer: NicheFooter;

  // Optional: per-niche stats shown in about section
  stats?: { num: string; label: string }[];
}
