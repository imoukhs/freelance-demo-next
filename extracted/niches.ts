// ─────────────────────────────────────────────────────────────────────────────
// lib/niches.ts
// Central registry. Import all niche configs here.
// The slug in each config must match the key in this map AND the filename.
// ─────────────────────────────────────────────────────────────────────────────

import { NicheConfig } from "@/lib/types/niche";

// ── Import niche configs ──────────────────────────────────────────────────────
// When adding a new niche:
//   1. Create src/config/niches/[slug].ts
//   2. Import it here
//   3. Add it to NICHES below
// That's it. The demo page at /demo?niche=[slug] will work automatically.

import skincare from "@/config/niches/skincare";
// import food      from "@/config/niches/food";       // ← uncomment when ready
// import transport from "@/config/niches/transport";  // ← uncomment when ready

// ── Registry ──────────────────────────────────────────────────────────────────
export const NICHES: Record<string, NicheConfig> = {
  skincare,
  // food,
  // transport,
};

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Get a niche config by slug. Returns undefined if not found. */
export function getNiche(slug: string): NicheConfig | undefined {
  return NICHES[slug];
}

/** Get all registered niche slugs */
export function getAllNicheSlugs(): string[] {
  return Object.keys(NICHES);
}

/** Get all niche configs as an array */
export function getAllNiches(): NicheConfig[] {
  return Object.values(NICHES);
}

/** Default niche slug — used as fallback if no ?niche= param is provided */
export const DEFAULT_NICHE = "skincare";
