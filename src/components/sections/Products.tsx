import { NicheConfig } from "@/lib/types/niche";
import {
  Sparkles, Droplets, Sun, Gift, Zap, Truck, Warehouse, Package,
  Bus, PlaneLanding, Car, Crown, Shirt, ShoppingBag, Footprints,
  Flame, Target, Gem, Box, type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Sparkles, Droplets, Sun, Gift, Zap, Truck, Warehouse, Package,
  Bus, PlaneLanding, Car, Crown, Shirt, ShoppingBag, Footprints,
  Flame, Target, Gem, Box,
};

function ProductIcon({ name, color }: { name: string; color: string }) {
  const Icon = ICON_MAP[name] ?? Box;
  return <Icon size={36} strokeWidth={1.5} color={color} />;
}

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

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {config.products.map((p, i) => (
            <div
              key={p.name}
              className="reveal group flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "var(--color-bg)",
                border: `1px solid ${config.colors.secondary}12`,
                transitionDelay: `${i * 0.06}s`,
              }}
            >
              {/* Tag */}
              <div className="px-4 pt-4 min-h-[34px] flex items-start">
                {p.tag && (
                  <span
                    className="text-[9px] sm:text-[10px] font-bold px-2.5 py-1 tracking-widest uppercase rounded"
                    style={{ color: "var(--color-primary)", border: "1px solid var(--color-primary)" }}
                  >
                    {p.tag}
                  </span>
                )}
              </div>

              {/* Icon area */}
              <div
                className="flex items-center justify-center py-6 sm:py-8 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-0.5"
              >
                <ProductIcon name={p.icon} color={`${config.colors.primary}`} />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-4 pb-4">
                <h3
                  className="font-display font-bold text-[14px] sm:text-[17px] leading-snug mb-1.5"
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

                <div className="border-t pt-3" style={{ borderColor: `${config.colors.secondary}08` }}>
                  <div
                    className="font-display font-bold text-base sm:text-xl mb-3"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {p.price}
                  </div>
                  <button
                    className="w-full py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase rounded-lg transition-opacity duration-200 hover:opacity-80"
                    style={{ backgroundColor: "var(--color-primary)", color: "#fff" }}
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
