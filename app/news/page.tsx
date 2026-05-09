import { sanityFetch } from "@/sanity/lib/client";
import { NEWS_INDEX_QUERY, PAGE_HEADER_QUERY } from "@/sanity/lib/queries";
import SectionLabel from "@/components/ui/SectionLabel";
import HighlightHeading from "@/components/ui/HighlightHeading";
import NewsCategoryFilter from "@/components/news/NewsCategoryFilter";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "News — Swell Music CIC",
  description: "Latest news and updates from Swell Music CIC.",
};

interface NewsPost {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  author: string;
  categories: string[] | null;
  coverImage: string | null;
  coverImageAlt: string | null;
}

const HEADER_FALLBACK = { eyebrow: "Latest", heading: "News", highlightWord: null, subheading: null };

export default async function NewsPage() {
  const [header, posts] = await Promise.all([
    sanityFetch<typeof HEADER_FALLBACK>({ query: PAGE_HEADER_QUERY, params: { page: "news" } }),
    sanityFetch<NewsPost[]>({ query: NEWS_INDEX_QUERY }),
  ]);

  const h = header ?? HEADER_FALLBACK;

  return (
    <>
      <section style={{ backgroundColor: "#1a1a1a" }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-5">
          {h.eyebrow && <SectionLabel>{h.eyebrow}</SectionLabel>}
          <HighlightHeading
            heading={h.heading}
            highlightWord={h.highlightWord ?? undefined}
            as="h1"
            className="text-4xl sm:text-5xl font-black"
            style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
          />
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto">
          {!posts || posts.length === 0 ? (
            <p className="text-sm" style={{ color: "#888888" }}>No news posts yet — check back soon.</p>
          ) : (
            <NewsCategoryFilter posts={posts} />
          )}
        </div>
      </section>
    </>
  );
}
