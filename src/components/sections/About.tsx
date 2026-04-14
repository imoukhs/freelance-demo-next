import { NicheConfig } from "@/lib/types/niche";

export default function About({ config }: { config: NicheConfig }) {
  const stats = config.stats ?? [];

  return (
    <section
      id="about"
      className="py-28 px-6 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-secondary)" }}
    >
      {/* Subtle corner dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-bg) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Top label row */}
        <div className="flex items-center gap-4 mb-16 reveal">
          <span
            className="text-[10px] font-bold tracking-[0.3em] uppercase"
            style={{ color: "var(--color-primary)" }}
          >
            Our Story
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: `${config.colors.bg}10` }} />
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-20">

          {/* Heading */}
          <div className="reveal">
            <h2
              className="font-display font-bold leading-[1.1]"
              style={{
                color:    "var(--color-bg)",
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
              }}
            >
              {config.about.heading}
            </h2>
          </div>

          {/* Body */}
          <div className="reveal" style={{ transitionDelay: "0.12s" }}>
            <p
              className="text-[15px] leading-[1.95]"
              style={{ color: `${config.colors.bg}55` }}
            >
              {config.about.body}
            </p>
          </div>
        </div>

        {/* Stats — editorial big numbers */}
        {stats.length > 0 && (
          <div
            className="grid grid-cols-3 gap-0 border-t reveal"
            style={{
              borderColor: `${config.colors.bg}10`,
              transitionDelay: "0.18s",
            }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="pt-10 pr-8"
                style={{
                  borderRight: i < stats.length - 1 ? `1px solid ${config.colors.bg}10` : "none",
                  paddingLeft: i > 0 ? "2rem" : "0",
                }}
              >
                <div
                  className="font-display font-bold leading-none mb-2"
                  style={{
                    color:    "var(--color-primary)",
                    fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                  }}
                >
                  {s.num}
                </div>
                <div
                  className="text-[11px] font-medium tracking-widest uppercase"
                  style={{ color: `${config.colors.bg}35` }}
                >
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
