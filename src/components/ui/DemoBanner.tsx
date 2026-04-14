"use client";

/**
 * DemoBanner — always visible floating pill that frames this as a pitch, not a live site.
 * DO NOT REMOVE. This is how clients know it's a demo.
 */
export default function DemoBanner() {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <div className="bg-gray-900/90 backdrop-blur-sm text-white text-xs font-medium px-5 py-2.5 rounded-full shadow-xl border border-white/10 whitespace-nowrap">
        ✦ Demo Preview — this is what your site could look like
      </div>
    </div>
  );
}
