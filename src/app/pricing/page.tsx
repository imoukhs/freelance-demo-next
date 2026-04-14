import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — King's Web Dev Services",
  description:
    "Transparent pricing for landing pages, full websites, and ongoing maintenance. Built for Nigerian businesses.",
};

const tiers = [
  {
    name: "Starter",
    range: "₦80,000 – ₦150,000",
    pitch: "Perfect for new businesses that need a sharp online presence fast.",
    delivery: "3–5 days",
    features: [
      "Landing page",
      "1 niche template customised",
      "Mobile responsive",
      "Basic contact form",
    ],
    highlight: false,
    cta: "Get Started",
  },
  {
    name: "Standard",
    range: "₦200,000 – ₦400,000",
    pitch: "For businesses ready to grow — multi-page, polished, and optimised.",
    delivery: "1–2 weeks",
    features: [
      "Multi-page site (up to 5 pages)",
      "Custom design & copy",
      "WhatsApp integration",
      "Basic SEO setup",
      "1 revision round",
    ],
    highlight: true,
    cta: "Most Popular",
  },
  {
    name: "Premium",
    range: "₦500,000 – ₦1,200,000",
    pitch: "A full custom build for serious brands that want to stand out.",
    delivery: "2–4 weeks",
    features: [
      "Full custom build",
      "CMS integration",
      "E-commerce ready",
      "Animations & micro-interactions",
      "1 month post-launch support",
    ],
    highlight: false,
    cta: "Let's Talk",
  },
];

const WA_NUMBER = "2349016529793";
const IG_HANDLE = "literally.king.dev";

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 shrink-0 mt-0.5"
      viewBox="0 0 16 16"
      fill="none"
      style={{ color: "var(--color-primary)" }}
    >
      <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.25" />
      <path
        d="M5 8.5l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}
    >
      {/* ── Nav bar ───────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{
          backgroundColor: "var(--color-bg)",
          borderColor: "var(--color-secondary)10",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-display font-bold text-[17px] tracking-tight"
            style={{ color: "var(--color-secondary)" }}
          >
            King<span style={{ color: "var(--color-primary)" }}>.</span>dev
          </Link>
          <div className="flex items-center gap-2.5">
            <a
              href={`https://instagram.com/${IG_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-70 border"
              style={{ borderColor: "var(--color-secondary)20", color: "var(--color-secondary)" }}
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-white text-sm font-medium transition-opacity hover:opacity-85"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              Book a Call
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-16 px-5 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, var(--color-accent) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto">
          <p
            className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            Transparent Pricing
          </p>
          <h1
            className="font-display font-bold text-4xl md:text-5xl leading-tight mb-5"
            style={{ color: "var(--color-secondary)" }}
          >
            The Right Website at the Right Price
          </h1>
          <p
            className="text-[15px] md:text-base leading-relaxed"
            style={{ color: `var(--color-text)` + "99" }}
          >
            No vague quotes. No hidden fees. Pick the package that fits your business
            and let&apos;s build something your customers will love.
          </p>
        </div>
      </section>

      {/* ── Tier cards ────────────────────────────────────────── */}
      <section className="px-5 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="relative flex flex-col rounded-2xl overflow-hidden"
              style={
                tier.highlight
                  ? {
                      backgroundColor: "var(--color-secondary)",
                      boxShadow: "0 24px 60px var(--color-secondary)30",
                    }
                  : {
                      backgroundColor: "var(--color-accent)",
                      border: "1px solid var(--color-primary)15",
                    }
              }
            >
              {/* Highlighted badge */}
              {tier.highlight && (
                <div
                  className="text-center py-2 text-[10px] font-bold tracking-[0.15em] uppercase text-white"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  Most Popular
                </div>
              )}

              <div className="flex flex-col flex-1 p-7">
                {/* Tier name + price */}
                <div className="mb-6">
                  <p
                    className="text-[11px] font-bold tracking-widest uppercase mb-2"
                    style={{
                      color: tier.highlight
                        ? "var(--color-primary)"
                        : "var(--color-primary)",
                    }}
                  >
                    {tier.name}
                  </p>
                  <div
                    className="font-display font-bold text-2xl leading-tight mb-3"
                    style={{ color: tier.highlight ? "#fff" : "var(--color-secondary)" }}
                  >
                    {tier.range}
                  </div>
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{
                      color: tier.highlight ? "rgba(255,255,255,0.55)" : `var(--color-text)70`,
                    }}
                  >
                    {tier.pitch}
                  </p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <svg
                        className="w-4 h-4 shrink-0 mt-0.5"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <circle
                          cx="8" cy="8" r="7.5"
                          stroke="var(--color-primary)"
                          strokeOpacity={tier.highlight ? "0.4" : "0.25"}
                        />
                        <path
                          d="M5 8.5l2 2 4-4"
                          stroke="var(--color-primary)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className="text-[13px] leading-snug"
                        style={{
                          color: tier.highlight ? "rgba(255,255,255,0.75)" : `var(--color-text)`,
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Delivery */}
                <div
                  className="flex items-center gap-2 mb-6 text-[12px] font-medium"
                  style={{ color: tier.highlight ? "rgba(255,255,255,0.4)" : `var(--color-text)50` }}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 4.5V8.5l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Delivered in {tier.delivery}
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=Hi King, I'm interested in the ${tier.name} package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 rounded-xl text-sm font-semibold tracking-wide transition-all hover:opacity-85 hover:-translate-y-0.5"
                  style={
                    tier.highlight
                      ? {
                          backgroundColor: "var(--color-primary)",
                          color: "#fff",
                        }
                      : {
                          backgroundColor: "var(--color-secondary)",
                          color: "#fff",
                        }
                  }
                >
                  {tier.name === "Standard" ? "Book a Call →" : "Get in Touch →"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Retainer ──────────────────────────────────────────── */}
      <section className="px-5 pb-16">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl px-8 py-8 md:px-10 md:py-9 flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
            style={{
              backgroundColor: "var(--color-accent)",
              border: "1px solid var(--color-primary)20",
            }}
          >
            {/* Left */}
            <div className="flex-1">
              <p
                className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2"
                style={{ color: "var(--color-primary)" }}
              >
                Monthly Retainer
              </p>
              <h3
                className="font-display font-bold text-2xl mb-2"
                style={{ color: "var(--color-secondary)" }}
              >
                ₦30,000 – ₦80,000
                <span
                  className="text-base font-normal ml-1"
                  style={{ color: `var(--color-text)50` }}
                >
                  / month
                </span>
              </h3>
              <p
                className="text-[13px] leading-relaxed"
                style={{ color: `var(--color-text)70` }}
              >
                Ongoing maintenance, content updates, performance monitoring, and priority
                support — so your site stays fast, fresh, and always live.
              </p>
            </div>

            {/* Right — perks */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 shrink-0">
              {[
                "Monthly updates",
                "Bug fixes",
                "Speed optimisation",
                "Priority support",
                "Analytics reports",
                "Content changes",
              ].map((perk) => (
                <div key={perk} className="flex items-center gap-2">
                  <CheckIcon />
                  <span
                    className="text-[12px]"
                    style={{ color: "var(--color-text)" }}
                  >
                    {perk}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Book a Call CTA ───────────────────────────────────── */}
      <section className="px-5 pb-24">
        <div className="max-w-5xl mx-auto">
          <div
            className="relative rounded-3xl px-8 py-16 text-center overflow-hidden"
            style={{
              background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
            }}
          >
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white opacity-[0.04] pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white opacity-[0.04] pointer-events-none" />
            <div className="relative max-w-xl mx-auto">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-snug mb-4">
                Not sure which plan fits?
              </h2>
              <p className="text-white/60 text-sm md:text-base mb-10 leading-relaxed">
                Hit me up on WhatsApp or slide into my DMs on Instagram — whichever
                works for you. No pressure, no commitment.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=Hi King, I'd like to discuss building a website for my business.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white font-bold text-sm px-8 py-4 rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-xl w-full sm:w-auto justify-center"
                  style={{
                    color: "var(--color-primary)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
                  }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Me
                </a>
                <a
                  href={`https://instagram.com/${IG_HANDLE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-bold text-sm px-8 py-4 rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                  style={{
                    color: "#fff",
                    border: "1.5px solid rgba(255,255,255,0.3)",
                  }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                  </svg>
                  @literally.king.dev
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer
        className="py-8 px-5 text-center border-t"
        style={{
          borderColor: "var(--color-secondary)08",
          color: `var(--color-text)`,
        }}
      >
        <p className="text-[12px]" style={{ color: `var(--color-text)40` }}>
          © {new Date().getFullYear()} King (Ojo-Imoukhuede King) · Full-stack developer · Lagos, NG
        </p>
      </footer>
    </div>
  );
}
