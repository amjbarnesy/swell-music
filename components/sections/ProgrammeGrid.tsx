import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import Badge from "@/components/ui/Badge";
import {
  IconLungs,
  IconAccessible,
  IconBrain,
  IconMusic,
} from "@tabler/icons-react";

const programmes = [
  {
    href: "/our-work/lung-health",
    colour: "#F5A623",
    textColour: "#412402",
    badgeColour: "amber" as const,
    icon: IconLungs,
    title: "Singing for Lung Health",
    description:
      "BLF-accredited group singing to strengthen breathing, reduce isolation, and improve quality of life for people with COPD and other lung conditions.",
    badge: "Lung conditions",
  },
  {
    href: "/our-work/parkinsons",
    colour: "#1D9E75",
    textColour: "#085041",
    badgeColour: "teal" as const,
    icon: IconAccessible,
    title: "Waveney Skylarks",
    description:
      "Sing to Beat Parkinson's sessions in Halesworth and Lowestoft — evidence-based singing to help manage motor symptoms and boost wellbeing.",
    badge: "Parkinson's disease",
  },
  {
    href: "/our-work/dementia",
    colour: "#7F77DD",
    textColour: "#3C3489",
    badgeColour: "purple" as const,
    icon: IconBrain,
    title: "Music & Dementia",
    description:
      "Weekly music sessions at The Seagull Theatre for people living with dementia and their carers — connecting through melody and memory.",
    badge: "Dementia",
  },
  {
    href: "/our-work/wired-sounds",
    colour: "#D85A30",
    textColour: "#712B13",
    badgeColour: "coral" as const,
    icon: IconMusic,
    title: "Wired Sounds Festival",
    description:
      "An annual neurodivergent-friendly music festival. 12 artists performed in 2025. Low-sensory, welcoming, and celebrating neurodiverse creativity.",
    badge: "Neurodivergent",
  },
];

export default function ProgrammeGrid() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 mb-10">
          <SectionLabel>What we do</SectionLabel>
          <h2
            className="text-3xl sm:text-4xl font-black"
            style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}
          >
            Our programmes
          </h2>
          <p className="text-base max-w-xl" style={{ color: "#444444" }}>
            Four specialised programmes, each designed around the unique needs of a different
            community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {programmes.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.href}
                href={p.href}
                className="flex flex-col rounded-lg overflow-hidden transition-opacity hover:opacity-90"
                style={{ border: "1px solid rgba(0,0,0,0.08)" }}
              >
                {/* Coloured header band */}
                <div
                  className="px-5 py-4 flex items-center gap-3"
                  style={{ backgroundColor: p.colour }}
                >
                  <Icon size={22} style={{ color: p.textColour }} />
                  <span
                    className="text-sm font-medium"
                    style={{ color: p.textColour, fontFamily: "var(--font-body)" }}
                  >
                    {p.title}
                  </span>
                </div>
                {/* Card body */}
                <div className="px-5 py-5 flex flex-col gap-3 flex-1 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#444444" }}>
                    {p.description}
                  </p>
                  <Badge colour={p.badgeColour}>{p.badge}</Badge>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
