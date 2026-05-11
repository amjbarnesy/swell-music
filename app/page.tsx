import { sanityFetch } from "@/sanity/lib/client";
import { HERO_QUERY, FUNDERS_QUERY, FEATURED_TESTIMONIALS_QUERY, PROGRAMMES_QUERY, HOMEPAGE_IMAGE_PAIR_QUERY } from "@/sanity/lib/queries";
import HeroServer from "@/components/sections/HeroServer";
import { ProgrammesSectionServer } from "@/components/programmes/ProgrammesSectionServer";
import type { ProgrammeData } from "@/components/sections/ProgrammeGridServer";
import WiredSoundsStrip from "@/components/sections/WiredSoundsStrip";
import ImpactDashboard from "@/components/sections/ImpactDashboard";
import ReferralStrip from "@/components/sections/ReferralStrip";
import GetInvolvedGrid from "@/components/sections/GetInvolvedGrid";
import HomepageImagePair from "@/components/sections/HomepageImagePair";
import FunderBarServer from "@/components/sections/FunderBarServer";

export const revalidate = 60;

export default async function HomePage() {
  const [hero, funders, testimonials, programmes, imagePair] = await Promise.all([
    sanityFetch({ query: HERO_QUERY }),
    sanityFetch({ query: FUNDERS_QUERY }),
    sanityFetch({ query: FEATURED_TESTIMONIALS_QUERY }),
    sanityFetch({ query: PROGRAMMES_QUERY }),
    sanityFetch({ query: HOMEPAGE_IMAGE_PAIR_QUERY }),
  ]);

  return (
    <>
      <HeroServer hero={hero as Record<string, string> | null} />
      <ProgrammesSectionServer programmes={programmes as ProgrammeData[] | null} />
      <WiredSoundsStrip />
      <div style={{ height: "3px", backgroundColor: "#F5A623" }} />
      <ImpactDashboard testimonials={testimonials as Array<{ _id: string; quote: string; attribution: string }> | null} />
      <ReferralStrip />
      <GetInvolvedGrid />
      {(() => {
        const ip = imagePair as { leftUrl?: string; leftAlt?: string; leftCaption?: string; rightUrl?: string; rightAlt?: string; rightCaption?: string } | null;
        return ip?.leftUrl && ip?.rightUrl ? (
          <HomepageImagePair
            leftUrl={ip.leftUrl}
            leftAlt={ip.leftAlt ?? ""}
            leftCaption={ip.leftCaption}
            rightUrl={ip.rightUrl}
            rightAlt={ip.rightAlt ?? ""}
            rightCaption={ip.rightCaption}
          />
        ) : null;
      })()}
      <FunderBarServer funders={funders as Array<{ _id: string; name: string; url?: string; logoUrl?: string; logoAlt?: string }> | null} />
    </>
  );
}
