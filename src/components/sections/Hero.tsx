import { NicheConfig } from "@/lib/types/niche";

export default function Hero({ config }: { config: NicheConfig }) {
  const { hero } = config;

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center px-6 pt-10 pb-24 overflow-hidden">

      {/* Ambient glow — top right */}
      <div
        className="absolute top-0 right-0 w-[55vw] h-[55vw] max-w-[640px] max-h-[640px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at top right, var(--color-accent) 0%, transparent 65%)",
        }}
      />

      {/* Thin vertical rule — left edge */}
      <div
        className="absolute left-6 top-1/4 bottom-1/4 w-px hidden md:block"
        style={{ backgroundColor: "var(--color-primary)", opacity: 0.2 }}
      />

      <div className="relative max-w-6xl mx-auto w-full">

        {/* Badge line */}
        <div className="flex items-center gap-3 mb-8 animate-fadeUp">
          <span className="label">{hero.badgeText}</span>
        </div>

        {/* Headline — editorial scale */}
        <h1
          className="font-display font-bold leading-[1.06] mb-8 animate-fadeUp delay-100"
          style={{
            color:    "var(--color-secondary)",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            maxWidth: "16ch",
          }}
        >
          {hero.heading}
        </h1>

        {/* Hairline separator */}
        <div className="w-16 h-px mb-8 animate-fadeUp delay-200" style={{ backgroundColor: "var(--color-primary)" }} />

        {/* Subheading */}
        <p
          className="text-[15px] md:text-base leading-[1.85] mb-12 animate-fadeUp delay-200"
          style={{ color: `${config.colors.text}65`, maxWidth: "42ch" }}
        >
          {hero.subheading}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 animate-fadeUp delay-300">
          <a
            href={hero.ctaLink}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-[13px] font-semibold tracking-wide transition-all hover:opacity-85"
            style={{
              backgroundColor: "var(--color-primary)",
              boxShadow: "0 8px 32px var(--color-primary)35",
            }}
          >
            {hero.ctaText}
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a
            href="#about"
            className="text-[13px] font-medium tracking-wide transition-all"
            style={{ color: `${config.colors.text}55` }}
            onMouseEnter={e => (e.currentTarget.style.color = config.colors.primary)}
            onMouseLeave={e => (e.currentTarget.style.color = `${config.colors.text}55`)}
          >
            Our story →
          </a>
        </div>

        {/* Stats row — only if stats exist */}
        {config.stats && config.stats.length > 0 && (
          <div
            className="mt-20 pt-8 flex flex-wrap gap-x-12 gap-y-5 border-t animate-fadeUp delay-400"
            style={{ borderColor: `${config.colors.secondary}10` }}
          >
            {config.stats.map(s => (
              <div key={s.label}>
                <div
                  className="font-display font-bold text-2xl leading-none mb-1"
                  style={{ color: "var(--color-primary)" }}
                >
                  {s.num}
                </div>
                <div className="text-[11px] tracking-widest uppercase" style={{ color: `${config.colors.text}45` }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
