"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

export default function NewsCategoryFilter({ posts }: { posts: NewsPost[] }) {
  const [active, setActive] = useState<string | null>(null);

  // Collect unique categories across all posts, preserving first-seen order
  const categories = Array.from(
    new Set(posts.flatMap((p) => p.categories ?? [])),
  );

  const filtered = active
    ? posts.filter((p) => p.categories?.includes(active))
    : posts;

  return (
    <div className="flex flex-col gap-8">

      {/* Filter pills */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActive(null)}
            className="text-xs px-3 py-1.5 rounded-full font-medium transition-colors"
            style={{
              backgroundColor: active === null ? "#F5A623" : "#ffffff",
              color:           active === null ? "#412402" : "#444444",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(active === cat ? null : cat)}
              className="text-xs px-3 py-1.5 rounded-full font-medium transition-colors"
              style={{
                backgroundColor: active === cat ? "#F5A623" : "#ffffff",
                color:           active === cat ? "#412402" : "#444444",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Result count when filtering */}
      {active && (
        <p className="text-xs -mt-4" style={{ color: "#888888" }}>
          {filtered.length} {filtered.length === 1 ? "post" : "posts"} in <span style={{ color: "#1a1a1a", fontWeight: 600 }}>{active}</span>
          <button onClick={() => setActive(null)} className="ml-2 underline" style={{ color: "#F5A623" }}>
            Clear
          </button>
        </p>
      )}

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-sm" style={{ color: "#888888" }}>No posts in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Link
              key={post._id}
              href={`/news/${post.slug}`}
              className="flex flex-col rounded-lg overflow-hidden bg-white transition-opacity hover:opacity-90"
              style={{ border: "1px solid rgba(0,0,0,0.08)" }}
            >
              {post.coverImage && (
                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={post.coverImage}
                    alt={post.coverImageAlt ?? post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-5 flex flex-col gap-2">
                <p className="text-xs" style={{ color: "#888888" }}>
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString("en-GB", {
                        day: "numeric", month: "long", year: "numeric",
                      })
                    : ""}
                </p>
                <h2
                  className="text-base font-black leading-snug"
                  style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}
                >
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "#444444" }}>
                    {post.excerpt}
                  </p>
                )}
                {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {post.categories.slice(0, 2).map((cat) => (
                      <span
                        key={cat}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: "#FEF3D7", color: "#854F0B" }}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
