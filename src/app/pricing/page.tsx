import Link from "next/link";
import type { Metadata } from "next";
import BudgetCTA from "@/components/pricing/BudgetCTA";

export const metadata: Metadata = {
  title: "Pricing — @literally.king.dev",
  description:
    "Transparent pricing for landing pages, full websites, and ongoing maintenance. Built for Nigerian businesses.",
};

// ── Design tokens (dark & premium) ────────────────────────────────────────────
const C = {
  bg:           "#0a0a0f",
  surface:      "#111118",
  surfaceHover: "#16161f",
  gold:         "#c9a84c",
  goldMuted:    "rgba(201,168,76,0.15)",
  goldGlow:     "rgba(201,168,76,0.08)",
  white:        "#f0ede8",
  muted:        "rgba(240,237,232,0.45)",
  faint:        "rgba(240,237,232,0.12)",
  border:       "rgba(201,168,76,0.12)",
  borderStrong: "rgba(201,168,76,0.35)",
} as const;

const WA_NUMBER  = "2349016529793";
const IG_HANDLE  = "literally.king.dev";

const tiers = [
  {
    name:     "Starter",
    range:    "₦80k – ₦150k",
    pitch:    "A sharp landing page that gets you online and converting fast.",
    delivery: "3–5 days",
    highlight: false,
    features: [
      "Single landing page",
      "1 niche template customised",
      "Fully mobile responsive",
      "Basic contact form",
    ],
  },
  {
    name:     "Standard",
    range:    "₦200k – ₦400k",
    pitch:    "A full multi-page site — polished, optimised, and built to grow.",
    delivery: "1–2 weeks",
    highlight: true,
    features: [
      "Up to 5 pages",
      "Custom design & copy",
      "WhatsApp integration",
      "Basic SEO setup",
      "1 revision round",
    ],
  },
  {
    name:     "Premium",
    range:    "₦500k – ₦1.2m",
    pitch:    "A full custom build for serious brands that refuse to blend in.",
    delivery: "2–4 weeks",
    highlight: false,
    features: [
      "Full custom build",
      "CMS integration",
      "E-commerce ready",
      "Animations & interactions",
      "1 month post-launch support",
    ],
  },
];

function CheckIcon({ gold }: { gold?: boolean }) {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7.5" stroke={C.gold} strokeOpacity={gold ? "0.5" : "0.25"} />
      <path d="M5 8.5l2 2 4-4" stroke={C.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 4.5V8.5l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const IGIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

export default function PricingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: C.bg, color: C.white }}>

      {/* ── Navbar ──────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-40"
        style={{
          backgroundColor: `${C.bg}f0`,
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 font-display font-bold text-[16px] tracking-tight transition-opacity hover:opacity-80"
            style={{ color: C.white }}
          >
            <span style={{ color: C.gold }}>@</span>literally.king.dev
          </Link>

          {/* Nav actions */}
          <div className="flex items-center gap-2.5">
            <a
              href={`https://instagram.com/${IG_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-70"
              style={{ border: `1px solid ${C.border}`, color: C.muted }}
            >
              <IGIcon />
            </a>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Hi King, I'd like to discuss a website project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all hover:opacity-85"
              style={{ backgroundColor: C.gold, color: C.bg }}
            >
              Book a Call
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-5 text-center overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at top, ${C.goldGlow} 0%, transparent 70%)` }}
        />
        <div className="relative max-w-2xl mx-auto">
          <p
            className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase mb-5 px-3 py-1.5 rounded-full"
            style={{ color: C.gold, backgroundColor: C.goldMuted, border: `1px solid ${C.border}` }}
          >
            Transparent Pricing
          </p>
          <h1
            className="font-display font-bold text-4xl md:text-[3.25rem] leading-[1.1] mb-5"
            style={{ color: C.white }}
          >
            The Right Website<br />
            <span style={{ color: C.gold }}>at the Right Price.</span>
          </h1>
          <p className="text-[15px] md:text-base leading-relaxed max-w-lg mx-auto" style={{ color: C.muted }}>
            No vague quotes. No hidden fees. Pick the package that fits your business
            and let&apos;s build something your customers will love.
          </p>
        </div>
      </section>

      {/* ── Tier cards ──────────────────────────────────────────── */}
      <section className="px-5 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
              style={
                tier.highlight
                  ? {
                      backgroundColor: C.surface,
                      border: `1px solid ${C.borderStrong}`,
                      boxShadow: `0 0 40px ${C.goldGlow}, 0 20px 60px rgba(0,0,0,0.4)`,
                    }
                  : {
                      backgroundColor: C.surface,
                      border: `1px solid ${C.border}`,
                    }
              }
            >
              {/* Popular banner */}
              {tier.highlight && (
                <div
                  className="text-center py-2 text-[10px] font-bold tracking-[0.18em] uppercase"
                  style={{ backgroundColor: C.gold, color: C.bg }}
                >
                  Most Popular
                </div>
              )}

              <div className="flex flex-col flex-1 p-7">
                {/* Label + price */}
                <div className="mb-7">
                  <p
                    className="text-[10px] font-bold tracking-[0.22em] uppercase mb-3"
                    style={{ color: C.gold }}
                  >
                    {tier.name}
                  </p>
                  <div
                    className="font-display font-bold text-[1.7rem] leading-tight mb-3"
                    style={{ color: C.white }}
                  >
                    {tier.range}
                  </div>
                  <p className="text-[13px] leading-relaxed" style={{ color: C.muted }}>
                    {tier.pitch}
                  </p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1 mb-7">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckIcon gold={tier.highlight} />
                      <span className="text-[13px] leading-snug" style={{ color: tier.highlight ? C.white : "rgba(240,237,232,0.75)" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Delivery */}
                <div
                  className="flex items-center gap-1.5 mb-6 text-[12px]"
                  style={{ color: "rgba(240,237,232,0.3)" }}
                >
                  <ClockIcon />
                  Delivered in {tier.delivery}
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi King, I'm interested in the ${tier.name} package.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all hover:opacity-85 hover:-translate-y-0.5"
                  style={
                    tier.highlight
                      ? { backgroundColor: C.gold, color: C.bg }
                      : { backgroundColor: C.faint, color: C.white, border: `1px solid ${C.border}` }
                  }
                >
                  Get in Touch →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Retainer ────────────────────────────────────────────── */}
      <section className="px-5 pb-16">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl px-8 py-8 md:px-10 md:py-9 flex flex-col md:flex-row md:items-center gap-8 md:gap-12"
            style={{
              backgroundColor: C.surface,
              border: `1px solid ${C.border}`,
            }}
          >
            {/* Left */}
            <div className="flex-1">
              <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-3" style={{ color: C.gold }}>
                Monthly Retainer
              </p>
              <h3 className="font-display font-bold text-2xl mb-2" style={{ color: C.white }}>
                ₦30,000 – ₦80,000
                <span className="text-base font-normal ml-1.5" style={{ color: C.muted }}>/month</span>
              </h3>
              <p className="text-[13px] leading-relaxed" style={{ color: C.muted }}>
                Ongoing maintenance, content updates, performance monitoring, and priority
                support — so your site stays fast, fresh, and always live.
              </p>
            </div>

            {/* Right — perks */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 shrink-0">
              {["Monthly updates", "Bug fixes", "Speed optimisation", "Priority support", "Analytics reports", "Content changes"].map((perk) => (
                <div key={perk} className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-[12px]" style={{ color: "rgba(240,237,232,0.65)" }}>{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Budget CTA (client component) ───────────────────────── */}
      <BudgetCTA />

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer
        className="py-8 px-5 text-center"
        style={{ borderTop: `1px solid ${C.border}` }}
      >
        <p className="text-[12px]" style={{ color: "rgba(240,237,232,0.2)" }}>
          © {new Date().getFullYear()} King (Ojo-Imoukhuede King) · Full-stack developer · Lagos, NG
        </p>
      </footer>
    </div>
  );
}
