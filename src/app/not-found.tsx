import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-6 text-center">
      <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
        404
      </h1>
      <p className="text-lg text-gray-500 mb-8">
        That niche doesn&apos;t exist yet. Try one of the available demos.
      </p>
      <Link
        href="/demo?niche=skincare"
        className="px-6 py-3 rounded-full text-white text-sm font-medium bg-gray-800 hover:bg-gray-700 transition"
      >
        View Skincare Demo →
      </Link>
    </div>
  );
}
