import { NicheConfig } from "@/lib/types/niche";

interface Props {
  config: NicheConfig;
}

export default function MarqueeStrip({ config }: Props) {
  const items = [
    config.businessName,
    "·",
    config.tagline,
    "·",
    config.category,
    "·",
    config.businessName,
    "·",
    config.tagline,
    "·",
    config.category,
    "·",
  ];

  const repeated = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-4 text-[11px] font-semibold tracking-[0.18em] uppercase"
      style={{
        backgroundColor: "var(--color-secondary)",
        color: `${config.colors.bg}80`,
      }}
    >
      <div className="flex gap-8 animate-marquee whitespace-nowrap w-max">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="shrink-0"
            style={item === "·" ? { color: config.colors.primary } : {}}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
