// ─────────────────────────────────────────────────────────────────────────────
// config/niches/_TEMPLATE.ts
// HOW TO ADD A NEW NICHE:
//   1. Copy this file → rename to [your-niche].ts  (e.g. fashion.ts)
//   2. Fill in every field below
//   3. Set `slug` to match the filename (without .ts)
//   4. Open src/lib/niches.ts → import your config → add it to NICHES
//   5. Visit /demo?niche=[your-niche] to preview
// ─────────────────────────────────────────────────────────────────────────────

import { NicheConfig } from "@/lib/types/niche";

const template: NicheConfig = {
  // ── Metadata ────────────────────────────────────────────────────────────
  slug:          "your-niche",          // MUST match filename
  businessName:  "Client Business Name",
  tagline:       "Short punchy tagline.",
  description:   "1-2 sentence description of what the business does.",
  logoInitials:  "CB",                  // 2 letters
  category:      "Your Industry",

  // ── Colors ──────────────────────────────────────────────────────────────
  colors: {
    primary:   "#000000",
    secondary: "#111111",
    accent:    "#EEEEEE",
    bg:        "#FFFFFF",
    text:      "#111111",
  },

  // ── Navigation ──────────────────────────────────────────────────────────
  navLinks: ["Home", "Services", "About", "Contact", "Get Started"],

  // ── Hero ────────────────────────────────────────────────────────────────
  hero: {
    heading:    "Your Powerful Headline Here.",
    subheading: "Supporting sentence that gives more context. Keep it to 1-2 lines.",
    ctaText:    "Get Started",
    ctaLink:    "#products",
    badgeText:  "New arrival or exciting update here",
  },

  // ── Products / Services (exactly 4) ────────────────────────────────────
  // icon: use a Lucide icon name — e.g. "Sparkles", "Truck", "Package", "Gift"
  // Full list at lucide.dev
  products: [
    { name: "Product One",   price: "0,000", tag: "Bestseller", icon: "Flame",  desc: "One sentence about this product." },
    { name: "Product Two",   price: "0,000", tag: "New",        icon: "Zap",    desc: "One sentence about this product." },
    { name: "Product Three", price: "0,000", tag: "",           icon: "Target", desc: "One sentence about this product." },
    { name: "Product Four",  price: "0,000", tag: "Top Rated",  icon: "Gem",    desc: "One sentence about this product." },
  ],

  // ── Testimonials (exactly 3) ────────────────────────────────────────────
  testimonials: [
    { name: "Customer A.", text: "This is what the customer said about the business.", stars: 5 },
    { name: "Customer B.", text: "Another review. Keep it authentic and specific.",    stars: 5 },
    { name: "Customer C.", text: "Third review. Short and punchy works best.",          stars: 5 },
  ],

  // ── About ────────────────────────────────────────────────────────────────
  about: {
    heading: "A Meaningful Headline About The Business.",
    body:
      "2-3 sentences about the business story, mission, or what makes it different. " +
      "Write it as if you're the founder speaking. Keep it warm and human.",
  },

  // ── Stats (optional) ────────────────────────────────────────────────────
  stats: [
    { num: "100+",  label: "Customers Served" },
    { num: "4.8",   label: "Average Rating" },
    { num: "1yr+",  label: "In Business" },
  ],

  // ── CTA Banner ──────────────────────────────────────────────────────────
  ctaBanner: {
    heading: "Strong closing headline that drives action.",
    sub:     "One supporting line - offer, urgency, or social proof.",
    btnText: "Take Action Now",
  },

  // ── Footer ──────────────────────────────────────────────────────────────
  footer: {
    tagline: "Short sign-off line.",
    links:   ["Privacy Policy", "Terms", "Instagram", "WhatsApp"],
  },
};

export default template;
