import Link from "next/link";
import type { Metadata } from "next";
import BudgetCTA from "@/components/pricing/BudgetCTA";

export const metadata: Metadata = {
  title: "Pricing — @literally.king.dev",
  description: "Transparent pricing for landing pages, full websites, and ongoing maintenance. Built for Nigerian businesses.",
};

const C = {
  bg:     "#0a0a0f",
  surf:   "#0f0f16",
  gold:   "#c9a84c",
  white:  "#f0ede8",
  muted:  "rgba(240,237,232,0.4)",
  faint:  "rgba(240,237,232,0.06)",
  border: "rgba(201,168,76,0.1)",
  bord2:  "rgba(240,237,232,0.07)",
} as const;

const WA  = "2349016529793";
const IG  = "literally.king.dev";

const tiers = [
  {
    name: "Starter", range: "₦80k – ₦150k",
    pitch: "A sharp landing page that gets you online and converting — fast.",
    delivery: "3–5 days", highlight: false,
    features: ["Single landing page", "1 niche template customised", "Fully mobile responsive", "Basic contact form"],
  },
  {
    name: "Standard", range: "₦200k – ₦400k",
    pitch: "A full multi-page site — polished, optimised, and built to grow.",
    delivery: "1–2 weeks", highlight: true,
    features: ["Up to 5 pages", "Custom design & copy", "WhatsApp integration", "Basic SEO setup", "1 revision round"],
  },
  {
    name: "Premium", range: "₦500k – ₦1.2m",
    pitch: "A full custom build for serious brands that refuse to blend in.",
    delivery: "2–4 weeks", highlight: false,
    features: ["Full custom build", "CMS integration", "E-commerce ready", "Animations & interactions", "1 month post-launch support"],
  },
];

function Check({ bright }: { bright?: boolean }) {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7.5" stroke={C.gold} strokeOpacity={bright ? "0.45" : "0.2"} />
      <path d="M5 8.5l2 2 4-4" stroke={C.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: C.bg, color: C.white }}>

      {/* ── Navbar ── */}
      <header
        className="sticky top-0 z-40"
        style={{ backgroundColor: `${C.bg}f0`, backdropFilter: "blur(16px)", borderBottom: `1px solid ${C.bord2}` }}
      >
        <div className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between">
          <Link href="/" className="font-display font-bold text-[15px] tracking-tight transition-opacity hover:opacity-70" style={{ color: C.white }}>
            <span style={{ color: C.gold }}>@</span>literally.king.dev
          </Link>
          <div className="flex items-center gap-3">
            <a href={`https://instagram.com/${IG}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-60"
              style={{ border: `1px solid ${C.bord2}`, color: C.muted }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hi King, I'd like to discuss a website project.")}`}
              target="_blank" rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase transition-all hover:opacity-85"
              style={{ backgroundColor: C.gold, color: C.bg }}
            >
              Book a Call
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-48 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at top, rgba(201,168,76,0.08) 0%, transparent 70%)` }}
        />
        <div className="relative max-w-6xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-6" style={{ color: C.gold }}>
            Transparent Pricing
          </p>
          <h1
            className="font-display font-bold leading-[1.06] mb-6"
            style={{ color: C.white, fontSize: "clamp(2.8rem, 7vw, 5rem)", maxWidth: "16ch" }}
          >
            The Right Website<br />
            <span style={{ color: C.gold }}>at the Right Price.</span>
          </h1>
          <div className="w-14 h-px mb-8" style={{ backgroundColor: C.gold, opacity: 0.4 }} />
          <p className="text-[15px] leading-[1.85]" style={{ color: C.muted, maxWidth: "40ch" }}>
            No vague quotes. No hidden fees. Pick the package that fits
            your business and let&apos;s build something unforgettable.
          </p>
        </div>
      </section>

      {/* ── Tiers ── */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: C.bord2 }}>
            {tiers.map(t => (
              <div
                key={t.name}
                className="relative flex flex-col"
                style={{
                  backgroundColor: t.highlight ? C.surf : C.bg,
                  ...(t.highlight ? { boxShadow: `inset 0 0 0 1px rgba(201,168,76,0.25)` } : {}),
                }}
              >
                {t.highlight && (
                  <div className="text-center py-2 text-[10px] font-bold tracking-[0.2em] uppercase" style={{ backgroundColor: C.gold, color: C.bg }}>
                    Most Popular
                  </div>
                )}
                <div className="flex flex-col flex-1 p-8">
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: C.gold }}>{t.name}</p>
                  <div className="font-display font-bold text-[1.9rem] leading-none mb-4" style={{ color: C.white }}>
                    {t.range}
                  </div>
                  <p className="text-[13px] leading-relaxed mb-8" style={{ color: C.muted }}>{t.pitch}</p>

                  <ul className="flex flex-col gap-3 flex-1 mb-8">
                    {t.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check bright={t.highlight} />
                        <span className="text-[13px] leading-snug" style={{ color: t.highlight ? "rgba(240,237,232,0.8)" : C.muted }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-1.5 mb-7 text-[11px]" style={{ color: "rgba(240,237,232,0.22)" }}>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M8 4.5V8.5l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    Delivered in {t.delivery}
                  </div>

                  <a
                    href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hi King, I'm interested in the ${t.name} package.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="block text-center py-3.5 text-[12px] font-bold tracking-widest uppercase transition-all hover:opacity-80"
                    style={t.highlight
                      ? { backgroundColor: C.gold, color: C.bg, borderRadius: "6px" }
                      : { color: C.muted, border: `1px solid ${C.bord2}`, borderRadius: "6px" }
                    }
                  >
                    Get in Touch →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Retainer ── */}
      <section className="px-6 pb-4">
        <div className="max-w-6xl mx-auto">
          <div
            className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16 p-8 md:p-10"
            style={{ backgroundColor: C.surf, border: `1px solid ${C.border}` }}
          >
            <div className="flex-1">
              <p className="text-[10px] font-bold tracking-[0.28em] uppercase mb-4" style={{ color: C.gold }}>Monthly Retainer</p>
              <h3 className="font-display font-bold text-[1.6rem] mb-3" style={{ color: C.white }}>
                ₦30,000 – ₦80,000
                <span className="text-sm font-normal ml-2" style={{ color: C.muted }}>/month</span>
              </h3>
              <p className="text-[13px] leading-relaxed" style={{ color: C.muted }}>
                Maintenance, updates, performance monitoring, and priority support — your site stays fast, fresh, and always live.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-3 shrink-0">
              {["Monthly updates","Bug fixes","Speed optimisation","Priority support","Analytics reports","Content changes"].map(p => (
                <div key={p} className="flex items-center gap-2.5">
                  <Check />
                  <span className="text-[12px]" style={{ color: "rgba(240,237,232,0.5)" }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Budget CTA ── */}
      <BudgetCTA />

      {/* ── Footer ── */}
      <footer className="py-8 px-6 text-center" style={{ borderTop: `1px solid ${C.bord2}` }}>
        <p className="text-[11px]" style={{ color: "rgba(240,237,232,0.15)" }}>
          © {new Date().getFullYear()} King (Ojo-Imoukhuede King) · Full-stack developer · Lagos, NG
        </p>
      </footer>
    </div>
  );
}
