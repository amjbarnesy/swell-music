import { sanityFetch } from "@/sanity/lib/client";
import { NEWS_ARTICLE_QUERY, NEWS_SLUGS_QUERY } from "@/sanity/lib/queries";
import SectionLabel from "@/components/ui/SectionLabel";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 3600;

interface Params { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = await sanityFetch<Array<{ slug: string }>>({ query: NEWS_SLUGS_QUERY });
  return (slugs ?? []).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityFetch<{ title: string; excerpt: string }>({ query: NEWS_ARTICLE_QUERY, params: { slug } });
  return {
    title: post ? `${post.title} — Swell Music CIC` : "News — Swell Music CIC",
    description: post?.excerpt ?? "",
  };
}

export default async function NewsArticlePage({ params }: Params) {
  const { slug } = await params;
  const post = await sanityFetch<{
    title: string;
    slug: string;
    publishedAt: string;
    excerpt: string;
    author: string;
    body: unknown[];
    coverImage: string | null;
    coverImageAlt: string | null;
  }>({ query: NEWS_ARTICLE_QUERY, params: { slug } });

  if (!post) notFound();

  return (
    <>
      <section style={{ backgroundColor: "#1a1a1a" }} className="py-20 px-6">
        <div className="max-w-2xl mx-auto flex flex-col gap-4">
          <SectionLabel>News</SectionLabel>
          <h1 className="text-3xl sm:text-4xl font-black leading-snug" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>{post.title}</h1>
          <p className="text-sm" style={{ color: "#888888" }}>
            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : ""}
            {post.author ? ` · ${post.author}` : ""}
          </p>
        </div>
      </section>

      {post.coverImage && (
        <div className="relative w-full max-w-2xl mx-auto px-6" style={{ aspectRatio: "16/9" }}>
          <Image src={post.coverImage} alt={post.coverImageAlt ?? post.title} fill className="object-cover rounded-lg" />
        </div>
      )}

      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto prose prose-sm" style={{ color: "#1a1a1a" }}>
          {post.body && <PortableText value={post.body as Parameters<typeof PortableText>[0]["value"]} />}
        </div>
      </section>
    </>
  );
}
