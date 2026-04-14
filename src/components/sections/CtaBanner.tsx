import { NicheConfig } from "@/lib/types/niche";

interface Props {
  config: NicheConfig;
}

export default function CtaBanner({ config }: Props) {
  const { ctaBanner } = config;

  return (
    <section className="py-6 px-5" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-6xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-16 sm:px-14 sm:py-20 text-center reveal"
          style={{
            background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)`,
          }}
        >
          {/* Background circles */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10 bg-white pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full opacity-10 bg-white pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-snug mb-4">
              {ctaBanner.heading}
            </h2>
            <p className="text-white/65 text-sm sm:text-base mb-10 leading-relaxed">
              {ctaBanner.sub}
            </p>
            <a
              href="#"
              className="inline-block bg-white font-bold text-sm tracking-wide px-9 py-4 rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-xl"
              style={{
                color: "var(--color-primary)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
              }}
            >
              {ctaBanner.btnText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
