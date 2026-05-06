import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News — Swell Music CIC",
};

export default function NewsArticlePage() {
  return (
    <section style={{ backgroundColor: "#1a1a1a" }} className="py-20 px-6 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <p style={{ color: "#888888" }}>Article content will load from Sanity CMS.</p>
      </div>
    </section>
  );
}
