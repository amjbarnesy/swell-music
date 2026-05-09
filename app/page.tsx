import { sanityFetch } from "@/sanity/lib/client";
import { HERO_QUERY, FUNDERS_QUERY, FEATURED_TESTIMONIALS_QUERY, PROGRAMMES_QUERY } from "@/sanity/lib/queries";
import HeroServer from "@/components/sections/HeroServer";
import ProgrammeGridServer from "@/components/sections/ProgrammeGridServer";
import type { ProgrammeData } from "@/components/sections/ProgrammeGridServer";
import WiredSoundsStrip from "@/components/sections/WiredSoundsStrip";
import ImpactDashboard from "@/components/sections/ImpactDashboard";
import ReferralStrip from "@/components/sections/ReferralStrip";
import GetInvolvedGrid from "@/components/sections/GetInvolvedGrid";
import FunderBarServer from "@/components/sections/FunderBarServer";

export const revalidate = 60;

export default async function HomePage() {
  const [hero, funders, testimonials, programmes] = await Promise.all([
    sanityFetch({ query: HERO_QUERY }),
    sanityFetch({ query: FUNDERS_QUERY }),
    sanityFetch({ query: FEATURED_TESTIMONIALS_QUERY }),
    sanityFetch({ query: PROGRAMMES_QUERY }),
  ]);

  return (
    <>
      <HeroServer hero={hero as Record<string, string> | null} />
      <ProgrammeGridServer programmes={programmes as ProgrammeData[] | null} />
      <WiredSoundsStrip />
      <div style={{ height: "3px", backgroundColor: "#F5A623" }} />
      <ImpactDashboard testimonials={testimonials as Array<{ _id: string; quote: string; attribution: string }> | null} />
      <ReferralStrip />
      <GetInvolvedGrid />
      <FunderBarServer funders={funders as Array<{ _id: string; name: string; url?: string; logoUrl?: string; logoAlt?: string }> | null} />
    </>
  );
}
