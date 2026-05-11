import type { MetadataRoute } from "next";

// Blocks all crawlers until the site is live on its real domain.
// When ready to go live: change disallow to "" and add sitemap URL.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
