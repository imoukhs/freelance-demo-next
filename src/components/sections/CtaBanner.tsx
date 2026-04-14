import { NicheConfig } from "@/lib/types/niche";

export default function CtaBanner({ config }: { config: NicheConfig }) {
  const { ctaBanner } = config;

  return (
    <section
      className="py-32 px-6 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-accent)" }}
    >
      {/* Decorative oversized text — faint watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-display font-bold whitespace-nowrap"
          style={{
            fontSize: "clamp(6rem, 20vw, 18rem)",
            color: "var(--color-primary)",
            opacity: 0.04,
            lineHeight: 1,
          }}
        >
          {config.businessName}
        </span>
      </div>

      <div className="relative max-w-4xl mx-auto text-center reveal">

        <p className="label mb-6">{config.category}</p>

        <h2
          className="font-display font-bold leading-[1.05] mb-8"
          style={{
            color:    "var(--color-secondary)",
            fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
            maxWidth: "18ch",
            margin:   "0 auto 2rem",
          }}
        >
          {ctaBanner.heading}
        </h2>

        <p
          className="text-[15px] leading-relaxed mb-12 mx-auto"
          style={{ color: `${config.colors.text}60`, maxWidth: "42ch" }}
        >
          {ctaBanner.sub}
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-white text-[13px] font-semibold tracking-wide transition-all hover:opacity-85"
          style={{
            backgroundColor: "var(--color-secondary)",
            boxShadow: "0 10px 40px var(--color-secondary)25",
          }}
        >
          {ctaBanner.btnText}
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </div>
    </section>
  );
}
