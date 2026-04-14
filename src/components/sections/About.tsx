import { NicheConfig } from "@/lib/types/niche";

interface Props {
  config: NicheConfig;
}

export default function About({ config }: Props) {
  const stats = config.stats ?? [];

  return (
    <section
      id="about"
      className="relative py-24 px-5 overflow-hidden"
      style={{ backgroundColor: "var(--color-secondary)" }}
    >
      {/* Decorative circle */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.06] pointer-events-none"
        style={{ backgroundColor: "var(--color-primary)" }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div className="reveal">
            <p
              className="text-[10px] font-bold tracking-[0.2em] uppercase mb-5"
              style={{ color: "var(--color-primary)" }}
            >
              Our Story
            </p>
            <h2
              className="font-display font-bold text-3xl md:text-[2.5rem] leading-[1.2] mb-6"
              style={{ color: "var(--color-bg)" }}
            >
              {config.about.heading}
            </h2>
            <p
              className="text-[15px] leading-[1.85]"
              style={{ color: `${config.colors.bg}60` }}
            >
              {config.about.body}
            </p>
          </div>

          {/* Right — stats */}
          {stats.length > 0 && (
            <div
              className="reveal grid grid-cols-1 gap-3"
              style={{ transitionDelay: "0.15s" }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-5 rounded-2xl px-6 py-5"
                  style={{
                    backgroundColor: `${config.colors.bg}08`,
                    border: `1px solid ${config.colors.bg}10`,
                    transitionDelay: `${0.15 + i * 0.08}s`,
                  }}
                >
                  <div
                    className="font-display font-bold text-3xl shrink-0 w-20"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {stat.num}
                  </div>
                  <div
                    className="text-sm leading-snug"
                    style={{ color: `${config.colors.bg}55` }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
