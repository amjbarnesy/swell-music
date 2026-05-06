import Hero from "@/components/sections/Hero";
import ProgrammeGrid from "@/components/sections/ProgrammeGrid";
import ImpactDashboard from "@/components/sections/ImpactDashboard";
import ReferralStrip from "@/components/sections/ReferralStrip";
import GetInvolvedGrid from "@/components/sections/GetInvolvedGrid";
import FunderBar from "@/components/sections/FunderBar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProgrammeGrid />
      <ImpactDashboard />
      <ReferralStrip />
      <GetInvolvedGrid />
      <FunderBar />
    </>
  );
}
