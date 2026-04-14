"use client";

export default function DemoBanner() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <div
        className="flex items-center gap-2.5 px-5 py-2.5 text-[11px] font-medium tracking-wide whitespace-nowrap"
        style={{
          backgroundColor: "rgba(10,10,10,0.88)",
          color: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(12px)",
          borderRadius: "100px",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        <span style={{ color: "var(--color-primary)" }}>✦</span>
        Demo Preview — this is what your site could look like
      </div>
    </div>
  );
}
