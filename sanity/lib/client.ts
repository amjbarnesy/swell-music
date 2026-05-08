import { createClient, type SanityClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

// Only instantiate the client when a project ID is available.
// This allows the site to build and run without Sanity configured —
// all pages fall back to their hardcoded content.
export const client: SanityClient | null = projectId
  ? createClient({ projectId, dataset, apiVersion: "2024-01-01", useCdn: true })
  : null;

/** Typed fetch with revalidation — returns null if Sanity isn't configured */
export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60,
}: {
  query: string;
  params?: Record<string, string | number | boolean>;
  revalidate?: number;
}): Promise<T | null> {
  if (!client) return null;
  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate },
    });
  } catch {
    return null;
  }
}
