import Link from "next/link";
import { NicheConfig } from "@/lib/types/niche";

export default function Footer({ config }: { config: NicheConfig }) {
  return (
    <footer
      className="px-6 pt-20 pb-10"
      style={{ backgroundColor: "var(--color-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16 pb-16 border-b" style={{ borderColor: `${config.colors.bg}08` }}>

          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="w-7 h-7 rounded-md flex items-center justify-center text-white text-[10px] font-bold"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                {config.logoInitials}
              </span>
              <span className="font-display font-bold text-base text-white tracking-tight">
                {config.businessName}
              </span>
            </div>
            <p className="text-[13px] leading-relaxed" style={{ color: `${config.colors.bg}35` }}>
              {config.tagline}
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-10 gap-y-3">
            {config.footer.links.map(l => (
              <a
                key={l}
                href="#"
                className="text-[12px] font-medium tracking-wide transition-colors"
                style={{ color: `${config.colors.bg}35` }}
                onMouseEnter={e => (e.currentTarget.style.color = config.colors.primary)}
                onMouseLeave={e => (e.currentTarget.style.color = `${config.colors.bg}35`)}
              >
                {l}
              </a>
            ))}
            <Link
              href="/pricing"
              className="text-[12px] font-medium tracking-wide transition-colors"
              style={{ color: `${config.colors.bg}35` }}
            >
              Pricing
            </Link>
          </nav>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[11px]" style={{ color: `${config.colors.bg}20` }}>
            {config.footer.tagline}
          </p>
          {/* Attribution — DO NOT REMOVE */}
          <a
            href="https://wa.me/2349016529793"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold tracking-widest uppercase transition-opacity hover:opacity-60"
            style={{ color: "var(--color-primary)" }}
          >
            Hire King →
          </a>
        </div>

      </div>
    </footer>
  );
}
