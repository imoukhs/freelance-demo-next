import { NicheConfig } from "@/lib/types/niche";

export default function MarqueeStrip({ config }: { config: NicheConfig }) {
  const items = [
    config.businessName, "—",
    config.tagline, "—",
    config.category, "—",
    config.businessName, "—",
    config.tagline, "—",
    config.category, "—",
  ];
  const all = [...items, ...items];

  return (
    <div
      className="overflow-hidden border-y"
      style={{
        borderColor: `${config.colors.secondary}12`,
        backgroundColor: config.colors.bg,
      }}
    >
      <div className="flex gap-10 animate-marquee whitespace-nowrap w-max py-4">
        {all.map((item, i) => (
          <span
            key={i}
            className="shrink-0 text-[11px] font-semibold tracking-[0.2em] uppercase"
            style={{
              color: item === "—"
                ? `${config.colors.primary}60`
                : `${config.colors.text}35`,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
