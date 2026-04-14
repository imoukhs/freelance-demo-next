import { NicheConfig } from "@/lib/types/niche";

interface Props {
  config: NicheConfig;
}

export default function Hero({ config }: Props) {
  const { hero } = config;

  return (
    <section className="relative min-h-[88vh] flex flex-col items-center justify-center text-center px-5 pt-10 pb-20 overflow-hidden">
      {/* Layered background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
          style={{ backgroundColor: "var(--color-primary)" }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-[380px] h-[380px] rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "var(--color-accent)" }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, var(--color-secondary) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full text-[11px] font-semibold tracking-widest uppercase animate-fadeUp"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-primary)",
            border: "1px solid var(--color-primary)20",
          }}
        >
          {hero.badgeText}
        </div>

        {/* Heading */}
        <h1
          className="font-display font-bold text-[2.6rem] leading-[1.12] md:text-6xl md:leading-[1.1] mb-6 animate-fadeUp delay-100"
          style={{ color: "var(--color-secondary)" }}
        >
          {hero.heading}
        </h1>

        {/* Subheading */}
        <p
          className="text-[15px] md:text-lg leading-relaxed max-w-lg mx-auto mb-10 animate-fadeUp delay-200"
          style={{ color: `${config.colors.text}70` }}
        >
          {hero.subheading}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fadeUp delay-300">
          <a
            href={hero.ctaLink}
            className="px-8 py-3.5 rounded-full text-white font-semibold text-sm tracking-wide transition-all hover:opacity-85 hover:-translate-y-0.5 shadow-lg"
            style={{
              backgroundColor: "var(--color-primary)",
              boxShadow: "0 8px 28px var(--color-primary)45",
            }}
          >
            {hero.ctaText}
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 rounded-full font-medium text-sm tracking-wide transition-all hover:-translate-y-0.5"
            style={{
              color: "var(--color-secondary)",
              border: "1.5px solid var(--color-secondary)20",
            }}
          >
            Our Story
          </a>
        </div>

        {/* Social proof strip */}
        {config.stats && config.stats.length > 0 && (
          <div className="mt-14 flex items-center justify-center gap-8 animate-fadeUp delay-400">
            {config.stats.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span
                  className="font-display font-bold text-xl"
                  style={{ color: "var(--color-primary)" }}
                >
                  {stat.num}
                </span>
                <span
                  className="text-[11px] tracking-wide uppercase mt-0.5"
                  style={{ color: `${config.colors.text}55` }}
                >
                  {stat.label}
                </span>
                {i < (config.stats?.length ?? 0) - 1 && (
                  <div
                    className="absolute"
                    style={{ display: "none" }}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
