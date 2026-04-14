"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NicheConfig } from "@/lib/types/niche";

export default function Testimonials({ config }: { config: NicheConfig }) {
  const [active, setActive] = useState(0);
  const total = config.testimonials.length;

  const prev = () => setActive(i => (i - 1 + total) % total);
  const next = () => setActive(i => (i + 1) % total);

  return (
    <section className="py-28 px-6 overflow-hidden" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header row */}
        <div className="flex items-center justify-between mb-16 reveal">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px" style={{ backgroundColor: "var(--color-primary)" }} />
            <p className="label">What They Say</p>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-70"
              style={{
                border: `1.5px solid ${config.colors.secondary}20`,
                color: "var(--color-secondary)",
              }}
              aria-label="Previous"
            >
              <ChevronLeft size={16} strokeWidth={2} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-70"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "#fff",
              }}
              aria-label="Next"
            >
              <ChevronRight size={16} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {config.testimonials.map((t, i) => (
              <div key={t.name} className="w-full shrink-0 md:w-1/2 lg:w-1/3 pr-4 sm:pr-6" aria-hidden={i !== active}>
                <div
                  className="flex flex-col h-full p-8 sm:p-10 rounded-xl"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    border: `1px solid ${config.colors.secondary}08`,
                  }}
                >
                  {/* Open quote */}
                  <div
                    className="font-display select-none mb-4"
                    style={{ fontSize: "4.5rem", color: "var(--color-primary)", opacity: 0.2, lineHeight: 0.75 }}
                  >
                    &ldquo;
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} className="w-3 h-3" viewBox="0 0 20 20"
                        fill={j < t.stars ? "var(--color-primary)" : `${config.colors.secondary}15`}>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[14px] sm:text-[15px] leading-[1.85] flex-1 mb-8" style={{ color: `${config.colors.text}70` }}>
                    {t.text}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-6 border-t" style={{ borderColor: `${config.colors.secondary}08` }}>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    >
                      {t.name[0]}
                    </div>
                    <span className="text-[13px] font-semibold tracking-wide" style={{ color: "var(--color-secondary)" }}>
                      {t.name}
                    </span>
                    <span className="text-[11px] tracking-widest uppercase ml-auto" style={{ color: `${config.colors.text}30` }}>
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2 mt-8 justify-center">
          {config.testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width:  i === active ? "24px" : "6px",
                height: "6px",
                backgroundColor: i === active ? "var(--color-primary)" : `${config.colors.secondary}20`,
              }}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
