"use client";

import { useEffect } from "react";
import { NicheConfig } from "@/lib/types/niche";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import Products from "@/components/sections/Products";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/sections/Footer";
import DemoBanner from "@/components/ui/DemoBanner";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

interface Props {
  config: NicheConfig;
}

export default function DemoPage({ config }: Props) {
  // Inject niche colors as CSS custom properties on the root element
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary",   config.colors.primary);
    root.style.setProperty("--color-secondary", config.colors.secondary);
    root.style.setProperty("--color-accent",    config.colors.accent);
    root.style.setProperty("--color-bg",        config.colors.bg);
    root.style.setProperty("--color-text",      config.colors.text);
    document.body.style.backgroundColor = config.colors.bg;
    document.body.style.color = config.colors.text;
  }, [config.colors]);

  // Activate scroll reveal on all .reveal elements
  useScrollReveal();

  return (
    <>
      <Navbar config={config} />
      <main>
        <Hero config={config} />
        <MarqueeStrip config={config} />
        <Products config={config} />
        <About config={config} />
        <Testimonials config={config} />
        <CtaBanner config={config} />
      </main>
      <Footer config={config} />
      <DemoBanner />
    </>
  );
}
