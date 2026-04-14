"use client";

import { useState, useEffect } from "react";
import { NicheConfig } from "@/lib/types/niche";

export default function Navbar({ config }: { config: NicheConfig }) {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links  = config.navLinks;
  const cta    = links[links.length - 1];
  const navItems = links.slice(0, -1);

  return (
    <header
      className="sticky top-0 z-40 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? `${config.colors.bg}f2` : config.colors.bg,
        backdropFilter:  scrolled ? "blur(16px)" : "none",
        borderBottom:    `1px solid ${scrolled ? config.colors.secondary + "10" : "transparent"}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between">

        {/* Logo mark */}
        <div className="flex items-center gap-3">
          <span
            className="w-7 h-7 rounded-md flex items-center justify-center text-white text-[10px] font-bold tracking-wider"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            {config.logoInitials}
          </span>
          <span
            className="font-display font-bold text-[15px] tracking-tight"
            style={{ color: "var(--color-secondary)" }}
          >
            {config.businessName}
          </span>
        </div>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((l) => (
            <a
              key={l}
              href="#"
              className="text-[12px] font-medium tracking-widest uppercase transition-colors duration-200"
              style={{ color: `${config.colors.text}55` }}
              onMouseEnter={e => (e.currentTarget.style.color = config.colors.primary)}
              onMouseLeave={e => (e.currentTarget.style.color = `${config.colors.text}55`)}
            >
              {l}
            </a>
          ))}
          <a
            href="#products"
            className="text-[12px] font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full transition-all hover:opacity-80"
            style={{
              border: `1.5px solid var(--color-primary)`,
              color: "var(--color-primary)",
            }}
          >
            {cta}
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setOpen(v => !v)}
          aria-label="Menu"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="block w-5 h-[1.5px] transition-all duration-300 origin-center"
              style={{
                backgroundColor: config.colors.secondary,
                opacity:    i === 1 && open ? 0 : 1,
                transform:  i === 0 && open ? "rotate(45deg) translate(4px, 4px)"
                          : i === 2 && open ? "rotate(-45deg) translate(4px, -4px)"
                          : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "260px" : "0" }}
      >
        <div className="px-6 pb-6 pt-1 flex flex-col gap-1 border-t" style={{ borderColor: `${config.colors.secondary}08` }}>
          {navItems.map(l => (
            <a key={l} href="#" className="py-2.5 text-[12px] font-medium tracking-widest uppercase" style={{ color: `${config.colors.text}60` }}>
              {l}
            </a>
          ))}
          <a
            href="#products"
            className="mt-3 py-3 rounded-full text-[12px] font-semibold tracking-widest uppercase text-center border-[1.5px]"
            style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
          >
            {cta}
          </a>
        </div>
      </div>
    </header>
  );
}
