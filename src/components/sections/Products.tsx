import { NicheConfig } from "@/lib/types/niche";

interface Props {
  config: NicheConfig;
}

export default function Products({ config }: Props) {
  return (
    <section id="products" className="py-20 px-5" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-12 reveal">
          <p
            className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3"
            style={{ color: "var(--color-primary)" }}
          >
            {config.category}
          </p>
          <h2
            className="font-display font-bold text-3xl md:text-4xl leading-tight"
            style={{ color: "var(--color-secondary)" }}
          >
            Our Products
          </h2>
        </div>

        {/* 2-col on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {config.products.map((product, i) => (
            <div
              key={product.name}
              className="reveal group relative flex flex-col rounded-2xl overflow-hidden"
              style={{
                backgroundColor: "var(--color-accent)",
                transitionDelay: `${i * 0.07}s`,
                border: "1px solid var(--color-primary)15",
              }}
            >
              {/* Tag */}
              {product.tag && (
                <div className="absolute top-3 right-3 z-10">
                  <span
                    className="text-[9px] sm:text-[10px] font-bold px-2 py-1 rounded-full tracking-wide uppercase"
                    style={{
                      backgroundColor: "var(--color-primary)",
                      color: "#fff",
                    }}
                  >
                    {product.tag}
                  </span>
                </div>
              )}

              {/* Emoji area */}
              <div
                className="flex items-center justify-center py-7 sm:py-9 text-4xl sm:text-5xl transition-transform duration-300 group-hover:scale-110"
              >
                {product.emoji}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-3.5 sm:px-5 pb-4 sm:pb-5">
                <h3
                  className="font-display font-bold text-[13px] sm:text-base leading-snug mb-1.5"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-[11px] sm:text-xs leading-relaxed flex-1 mb-4"
                  style={{ color: `${config.colors.text}65` }}
                >
                  {product.desc}
                </p>

                {/* Price + CTA stacked */}
                <div className="flex flex-col gap-2">
                  <span
                    className="font-display font-bold text-base sm:text-lg"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {product.price}
                  </span>
                  <button
                    className="w-full py-2.5 rounded-xl text-[11px] sm:text-xs font-bold tracking-wide uppercase text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                    style={{ backgroundColor: "var(--color-secondary)" }}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
