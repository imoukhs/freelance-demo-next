import { NicheConfig } from "@/lib/types/niche";

export default function Products({ config }: { config: NicheConfig }) {
  return (
    <section id="products" className="py-28 px-6" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 reveal">
          <div>
            <p className="label mb-3">{config.category}</p>
            <h2
              className="font-display font-bold leading-tight"
              style={{
                color:    "var(--color-secondary)",
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
              }}
            >
              Products &amp; Services
            </h2>
          </div>
          <p
            className="text-[13px] leading-relaxed md:text-right md:max-w-[28ch]"
            style={{ color: `${config.colors.text}50` }}
          >
            Crafted with intention.<br className="hidden md:block" />Every detail considered.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: `${config.colors.secondary}08` }}>
          {config.products.map((p, i) => (
            <div
              key={p.name}
              className="reveal group flex flex-col bg-[var(--color-bg)] p-5 sm:p-7 transition-colors duration-300 hover:bg-[var(--color-accent)]"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              {/* Tag */}
              {p.tag && (
                <span
                  className="self-start mb-4 text-[9px] sm:text-[10px] font-bold px-2.5 py-1 tracking-widest uppercase"
                  style={{
                    color: "var(--color-primary)",
                    border: "1px solid var(--color-primary)",
                    borderRadius: "4px",
                  }}
                >
                  {p.tag}
                </span>
              )}
              {!p.tag && <div className="mb-4 h-[26px]" />}

              {/* Emoji */}
              <div className="text-4xl sm:text-5xl mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                {p.emoji}
              </div>

              {/* Name */}
              <h3
                className="font-display font-bold text-[15px] sm:text-lg leading-snug mb-2"
                style={{ color: "var(--color-secondary)" }}
              >
                {p.name}
              </h3>

              {/* Desc */}
              <p
                className="text-[12px] sm:text-[13px] leading-relaxed flex-1 mb-6"
                style={{ color: `${config.colors.text}55` }}
              >
                {p.desc}
              </p>

              {/* Bottom */}
              <div className="border-t pt-5" style={{ borderColor: `${config.colors.secondary}08` }}>
                <div
                  className="font-display font-bold text-lg sm:text-xl mb-3"
                  style={{ color: "var(--color-primary)" }}
                >
                  {p.price}
                </div>
                <button
                  className="w-full py-2.5 text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300"
                  style={{
                    color: "var(--color-secondary)",
                    border: "1px solid var(--color-secondary)20",
                    borderRadius: "6px",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = "var(--color-secondary)";
                    e.currentTarget.style.color = "var(--color-bg)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = "";
                    e.currentTarget.style.color = "var(--color-secondary)";
                  }}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
