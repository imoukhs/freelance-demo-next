"use client";

import { useState, useEffect } from "react";
import { NicheConfig } from "@/lib/types/niche";

interface Props {
  config: NicheConfig;
}

export default function Navbar({ config }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = config.navLinks;
  const ctaLink = links[links.length - 1];
  const navLinks = links.slice(0, -1);

  return (
    <header
      className="sticky top-0 z-40 w-full transition-all duration-300"
      style={{
        backgroundColor: scrolled ? `${config.colors.bg}f5` : config.colors.bg,
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${config.colors.secondary}10` : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold tracking-wide"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            {config.logoInitials}
          </div>
          <span
            className="font-display font-bold text-[17px] tracking-tight"
            style={{ color: "var(--color-secondary)" }}
          >
            {config.businessName}
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: `${config.colors.text}90` }}
              onMouseEnter={e => (e.currentTarget.style.color = config.colors.primary)}
              onMouseLeave={e => (e.currentTarget.style.color = `${config.colors.text}90`)}
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="px-5 py-2 rounded-full text-white text-sm font-medium tracking-wide transition-opacity hover:opacity-85"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            {ctaLink}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-[1.5px] transition-all duration-200 origin-center"
            style={{
              backgroundColor: config.colors.secondary,
              transform: open ? "rotate(45deg) translateY(3.5px)" : "none",
            }}
          />
          <span
            className="block w-5 h-[1.5px] transition-all duration-200"
            style={{
              backgroundColor: config.colors.secondary,
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-[1.5px] transition-all duration-200 origin-center"
            style={{
              backgroundColor: config.colors.secondary,
              transform: open ? "rotate(-45deg) translateY(-3.5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "300px" : "0" }}
      >
        <div
          className="px-5 pb-5 pt-2 flex flex-col gap-1 border-t"
          style={{ borderColor: `${config.colors.secondary}10` }}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="py-2.5 text-sm font-medium"
              style={{ color: `${config.colors.text}80` }}
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="mt-2 py-3 rounded-full text-white text-sm font-medium text-center"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            {ctaLink}
          </a>
        </div>
      </div>
    </header>
  );
}
