import Link from "next/link";
import { NicheConfig } from "@/lib/types/niche";

interface Props {
  config: NicheConfig;
}

export default function Footer({ config }: Props) {
  return (
    <footer
      className="pt-16 pb-10 px-5"
      style={{ backgroundColor: "var(--color-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              {config.logoInitials}
            </div>
            <span className="font-display font-bold text-base text-white tracking-tight">
              {config.businessName}
            </span>
          </div>
          <p
            className="text-xs"
            style={{ color: `${config.colors.bg}40` }}
          >
            {config.tagline}
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-x-7 gap-y-3 mb-12">
          {config.footer.links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs font-medium transition-colors hover:text-white"
              style={{ color: `${config.colors.bg}45` }}
            >
              {link}
            </a>
          ))}
          <Link
            href="/pricing"
            className="text-xs font-medium transition-colors hover:text-white"
            style={{ color: `${config.colors.bg}45` }}
          >
            Pricing
          </Link>
        </nav>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: `1px solid ${config.colors.bg}10` }}
        >
          <p className="text-[11px]" style={{ color: `${config.colors.bg}30` }}>
            {config.footer.tagline}
          </p>
          {/* Attribution — DO NOT REMOVE */}
          <a
            href="https://wa.me/2349016529793"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold tracking-wide transition-opacity hover:opacity-70"
            style={{ color: "var(--color-primary)" }}
          >
            Hire King →
          </a>
        </div>
      </div>
    </footer>
  );
}
