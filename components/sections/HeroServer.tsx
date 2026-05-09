import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import HighlightHeading from "@/components/ui/HighlightHeading";
import { IconPlayerPlay } from "@tabler/icons-react";

interface HeroData {
  heroHeading?: string;
  heroHighlightWord?: string;
  heroSubheading?: string;
  heroPrimaryCTA?: string;
  heroPrimaryURL?: string;
  heroSecondaryCTA?: string;
  heroSecondaryURL?: string;
  heroVideoUrl?: string;
  heroVideoCaption?: string;
}

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    let id: string | null = null;
    if (u.hostname === "youtu.be") {
      id = u.pathname.slice(1);
    } else if (u.hostname.includes("youtube.com")) {
      id = u.searchParams.get("v");
    }
    return id
      ? `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&color=white`
      : null;
  } catch {
    return null;
  }
}

const DEFAULTS: HeroData = {
  heroHeading:       "Music that heals, connects, and changes lives.",
  heroHighlightWord: "heals",
  heroSubheading:    "Free weekly sessions for people living with lung conditions, Parkinson's, dementia, and neurodivergent communities across Suffolk and Norfolk. No experience needed. Always free.",
  heroPrimaryCTA:    "Find a session near me",
  heroPrimaryURL:    "/get-involved/find-a-session",
  heroSecondaryCTA:  "See our impact",
  heroSecondaryURL:  "/our-impact",
  heroVideoCaption:  "Real session footage",
};

export default function HeroServer({ hero }: { hero: HeroData | null }) {
  const d = { ...DEFAULTS, ...hero };

  return (
    <section style={{ backgroundColor: "#1a1a1a" }} className="px-6 pt-16 pb-0">
      <div className="max-w-7xl mx-auto py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <SectionLabel>East Suffolk · Free for all</SectionLabel>
          <HighlightHeading
            heading={d.heroHeading!}
            highlightWord={d.heroHighlightWord}
            as="h1"
            className="text-4xl sm:text-5xl font-black leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
          />
          <p className="text-base leading-relaxed max-w-md" style={{ color: "#888888" }}>
            {d.heroSubheading}
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <Button href={d.heroPrimaryURL!} variant="primary">{d.heroPrimaryCTA}</Button>
            <Button href={d.heroSecondaryURL!} variant="ghost">{d.heroSecondaryCTA}</Button>
          </div>
        </div>

        {/* Right — video */}
        {(() => {
          const embedUrl = d.heroVideoUrl ? getYouTubeEmbedUrl(d.heroVideoUrl) : null;
          if (embedUrl) {
            return (
              <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <iframe
                  src={embedUrl}
                  title={d.heroVideoCaption ?? "Swell Music session video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            );
          }
          return (
            <div
              className="relative flex items-center justify-center rounded-lg overflow-hidden"
              style={{ aspectRatio: "16/9", border: "2px dashed #F5A623", backgroundColor: "#2a2a2a" }}
            >
              <div className="flex flex-col items-center gap-3 text-center px-8">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F5A623" }}>
                  <IconPlayerPlay size={24} style={{ color: "#412402" }} />
                </div>
                <p className="text-sm font-medium" style={{ color: "#888888" }}>{d.heroVideoCaption}</p>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Stat bar */}
      <div className="w-full py-4 px-6" style={{ backgroundColor: "#F5A623" }}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {["5+ free weekly sessions", "4 health conditions", "Free always, no booking", "Founded 2020"].map((stat) => (
            <p key={stat} className="text-sm font-medium" style={{ color: "#412402", fontFamily: "var(--font-body)" }}>
              {stat}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
