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
              style={{ color: "var(--color-secondary)", fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
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

        {/* Grid — bordered container with gaps */}
        <div
          className="border rounded-xl overflow-hidden p-3 sm:p-4"
          style={{ borderColor: `${config.colors.secondary}18` }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {config.products.map((p, i) => (
              <div
                key={p.name}
                className="reveal group flex flex-col rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-md"
                style={{
                  backgroundColor: "var(--color-bg)",
                  border: `1px solid ${config.colors.secondary}0d`,
                  transitionDelay: `${i * 0.06}s`,
                }}
              >
                {/* Tag */}
                <div className="px-4 pt-4">
                  {p.tag ? (
                    <span
                      className="inline-block text-[9px] sm:text-[10px] font-bold px-2.5 py-1 tracking-widest uppercase rounded"
                      style={{
                        color: "var(--color-primary)",
                        border: "1px solid var(--color-primary)",
                      }}
                    >
                      {p.tag}
                    </span>
                  ) : (
                    <div className="h-[22px]" />
                  )}
                </div>

                {/* Emoji */}
                <div className="flex items-center justify-center py-5 sm:py-7 text-4xl sm:text-5xl transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                  {p.emoji}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 px-4 pb-4">
                  <h3
                    className="font-display font-bold text-[14px] sm:text-lg leading-snug mb-1.5"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    {p.name}
                  </h3>
                  <p
                    className="text-[11px] sm:text-[13px] leading-relaxed flex-1 mb-4"
                    style={{ color: `${config.colors.text}55` }}
                  >
                    {p.desc}
                  </p>

                  {/* Price + button */}
                  <div
                    className="border-t pt-3"
                    style={{ borderColor: `${config.colors.secondary}08` }}
                  >
                    <div
                      className="font-display font-bold text-base sm:text-xl mb-3"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {p.price}
                    </div>
                    <button
                      className="w-full py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase rounded-lg transition-all duration-300"
                      style={{
                        backgroundColor: "var(--color-primary)",
                        color: "#fff",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.opacity = "0.85";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.opacity = "1";
                      }}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
