import { sanityFetch } from "@/sanity/lib/client";
import { NEWS_ARTICLE_QUERY, NEWS_SLUGS_QUERY } from "@/sanity/lib/queries";
import SectionLabel from "@/components/ui/SectionLabel";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import GalleryLightbox from "@/components/ui/GalleryLightbox";
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
    categories: string[] | null;
    coverImage: string | null;
    coverImageAlt: string | null;
    gallery: Array<{ url: string; alt?: string }> | null;
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
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-1">
              {post.categories.map((cat) => (
                <span key={cat} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ backgroundColor: "rgba(245,166,35,0.15)", color: "#F5A623" }}>
                  {cat}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {post.coverImage && (
        <div className="relative w-full max-w-2xl mx-auto px-6 mt-10 mb-2" style={{ aspectRatio: "16/9" }}>
          <Image src={post.coverImage} alt={post.coverImageAlt ?? post.title} fill className="object-cover rounded-lg" />
        </div>
      )}

      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          {post.body && (
            <PortableText
              value={post.body as Parameters<typeof PortableText>[0]["value"]}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="mb-5 text-base leading-relaxed" style={{ color: "#444444" }}>{children}</p>
                  ),
                  h2: ({ children }) => (
                    <h2 className="mt-10 mb-4 text-2xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mt-8 mb-3 text-xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>{children}</h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="mt-6 mb-2 text-lg font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>{children}</h4>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="pl-5 py-1 my-6" style={{ borderLeft: "3px solid #F5A623" }}>
                      <p className="text-lg leading-relaxed italic" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>{children}</p>
                    </blockquote>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="mb-5 flex flex-col gap-2 pl-5">{children}</ul>
                  ),
                  number: ({ children }) => (
                    <ol className="mb-5 flex flex-col gap-2 pl-5 list-decimal">{children}</ol>
                  ),
                },
                listItem: {
                  bullet: ({ children }) => (
                    <li className="text-base leading-relaxed flex gap-2" style={{ color: "#444444" }}>
                      <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#F5A623" }} />
                      <span>{children}</span>
                    </li>
                  ),
                  number: ({ children }) => (
                    <li className="text-base leading-relaxed" style={{ color: "#444444" }}>{children}</li>
                  ),
                },
                marks: {
                  strong: ({ children }) => <strong className="font-medium" style={{ color: "#1a1a1a" }}>{children}</strong>,
                  em: ({ children }) => <em className="italic">{children}</em>,
                  link: ({ value, children }) => (
                    <a href={value?.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: "#F5A623" }}>
                      {children}
                    </a>
                  ),
                },
                types: {
                  image: ({ value }) => value?.asset?.url ? (
                    <div className="relative my-8 rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
                      <Image src={value.asset.url} alt={value.alt ?? ""} fill className="object-cover" />
                    </div>
                  ) : null,
                },
              }}
            />
          )}
        </div>
      </section>

      {/* Gallery */}
      {post.gallery && post.gallery.length > 0 && (
        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a1a" }}>
          <div className="max-w-2xl mx-auto flex flex-col gap-6">
            <SectionLabel>Photos</SectionLabel>
            <GalleryLightbox images={post.gallery} postTitle={post.title} columns={3} gridAspectRatio="4/3" />
          </div>
        </section>
      )}
    </>
  );
}
