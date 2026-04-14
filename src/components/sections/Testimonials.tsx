import { NicheConfig } from "@/lib/types/niche";

export default function Testimonials({ config }: { config: NicheConfig }) {
  return (
    <section className="py-28 px-6" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-20 reveal">
          <div className="w-8 h-px" style={{ backgroundColor: "var(--color-primary)" }} />
          <p className="label">What They Say</p>
        </div>

        {/* Cards — editorial pull-quote style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: `${config.colors.secondary}08` }}>
          {config.testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal flex flex-col bg-[var(--color-bg)] p-8 sm:p-10"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Large open-quote */}
              <div
                className="font-display leading-none mb-6 select-none"
                style={{
                  fontSize: "5rem",
                  color: "var(--color-primary)",
                  opacity: 0.25,
                  lineHeight: 0.7,
                }}
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="w-3 h-3" viewBox="0 0 20 20" fill={j < t.stars ? "var(--color-primary)" : `${config.colors.secondary}15`}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <p
                className="text-[14px] sm:text-[15px] leading-[1.85] flex-1 mb-8"
                style={{ color: `${config.colors.text}70` }}
              >
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t" style={{ borderColor: `${config.colors.secondary}08` }}>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  {t.name[0]}
                </div>
                <span
                  className="text-[13px] font-semibold tracking-wide"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {t.name}
                </span>
                <span className="text-[11px] tracking-widest uppercase ml-auto" style={{ color: `${config.colors.text}30` }}>
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
