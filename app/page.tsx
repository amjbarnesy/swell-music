import { sanityFetch } from "@/sanity/lib/client";
import { HERO_QUERY, FUNDERS_QUERY, FEATURED_TESTIMONIALS_QUERY } from "@/sanity/lib/queries";
import HeroServer from "@/components/sections/HeroServer";
import ProgrammeGrid from "@/components/sections/ProgrammeGrid";
import ImpactDashboard from "@/components/sections/ImpactDashboard";
import ReferralStrip from "@/components/sections/ReferralStrip";
import GetInvolvedGrid from "@/components/sections/GetInvolvedGrid";
import FunderBarServer from "@/components/sections/FunderBarServer";

export const revalidate = 3600;

export default async function HomePage() {
  const [hero, funders, testimonials] = await Promise.all([
    sanityFetch({ query: HERO_QUERY }),
    sanityFetch({ query: FUNDERS_QUERY }),
    sanityFetch({ query: FEATURED_TESTIMONIALS_QUERY }),
  ]);

  return (
    <>
      <HeroServer hero={hero as Record<string, string> | null} />
      <ProgrammeGrid />
      <ImpactDashboard testimonials={testimonials as Array<{ _id: string; quote: string; attribution: string }> | null} />
      <ReferralStrip />
      <GetInvolvedGrid />
      <FunderBarServer funders={funders as Array<{ _id: string; name: string; url?: string }> | null} />
    </>
  );
}
