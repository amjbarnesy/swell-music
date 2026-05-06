import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { IconMapPin, IconUserPlus, IconHeart } from "@tabler/icons-react";

const cards = [
  {
    href: "/get-involved/find-a-session",
    icon: IconMapPin,
    title: "Join a session",
    description:
      "Find a free session near you. No experience needed, no booking required — just turn up and sing.",
  },
  {
    href: "/get-involved/refer",
    icon: IconUserPlus,
    title: "Refer someone",
    description:
      "Health or social care professional? Complete our simple referral form and we&rsquo;ll make contact within 48 hours.",
  },
  {
    href: "/support-us",
    icon: IconHeart,
    title: "Support our work",
    description:
      "Help us keep sessions free for everyone. Donate, fundraise, or find out about volunteering.",
  },
];

export default function GetInvolvedGrid() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 mb-10">
          <SectionLabel>Get involved</SectionLabel>
          <h2
            className="text-3xl sm:text-4xl font-black"
            style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}
          >
            Three ways in
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.href}
                href={card.href}
                className="flex flex-col gap-4 rounded-lg p-6 transition-opacity hover:opacity-90"
                style={{
                  border: "1px solid rgba(0,0,0,0.08)",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center"
                  style={{ backgroundColor: "#FEF3D7" }}
                >
                  <Icon size={20} style={{ color: "#854F0B" }} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3
                    className="text-base font-black"
                    style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#444444" }}
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
