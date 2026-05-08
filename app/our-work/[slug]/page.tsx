import { sanityFetch } from "@/sanity/lib/client";
import {
  PROGRAMME_PAGE_QUERY,
  PROGRAMME_SLUGS_QUERY,
  SESSIONS_BY_PROGRAMME_QUERY,
  TESTIMONIALS_BY_PROGRAMME_QUERY,
} from "@/sanity/lib/queries";
import ProgrammeHero from "@/components/programme/ProgrammeHero";
import SectionLabel from "@/components/ui/SectionLabel";
import QuoteBlock from "@/components/ui/QuoteBlock";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { IconCalendar, IconMapPin } from "@tabler/icons-react";
import type { Metadata } from "next";

export const revalidate = 60;

// ─── Types ────────────────────────────────────────────────────────────────────
type Theme = "amber" | "teal" | "purple" | "coral" | "blue" | "green";
type PBadgeColour = "amber" | "teal" | "purple" | "coral" | "default";

interface ThemeTokens {
  header: string;
  text: string;
  badge: PBadgeColour;
  iconBg: string;
  iconText: string;
}

const THEME: Record<Theme, ThemeTokens> = {
  amber:  { header: "#F5A623", text: "#412402", badge: "amber",   iconBg: "#FEF3D7", iconText: "#854F0B" },
  teal:   { header: "#1D9E75", text: "#085041", badge: "teal",    iconBg: "#E1F5EE", iconText: "#085041" },
  purple: { header: "#7F77DD", text: "#3C3489", badge: "purple",  iconBg: "#EEEDFE", iconText: "#3C3489" },
  coral:  { header: "#D85A30", text: "#712B13", badge: "coral",   iconBg: "#FAECE7", iconText: "#712B13" },
  blue:   { header: "#3B82F6", text: "#1e3a8a", badge: "default", iconBg: "#EFF6FF", iconText: "#1e3a8a" },
  green:  { header: "#22C55E", text: "#14532d", badge: "teal",    iconBg: "#F0FDF4", iconText: "#14532d" },
};

interface ProgrammeDoc {
  _id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  badgeLabel?: string;
  theme?: string;
  iconName?: string;
  accreditation?: string;
  pageTitle?: string;
  pageDescription?: string;
  features?: Array<{ title: string; description: string }>;
  whoFor?: string[];
  evidenceHeading?: string;
  evidenceBody?: unknown[];
  body?: unknown[];
  gallery?: Array<{ url: string; alt?: string }>;
}

interface SessionDoc {
  _id: string;
  day: string;
  time: string;
  location: string;
  address: string;
}

interface TestimonialDoc {
  _id: string;
  quote: string;
  attribution: string;
}

// ─── Portable text components ─────────────────────────────────────────────────
const ptComponents = {
  block: {
    normal:      ({ children }: any) => <p className="text-sm leading-relaxed mb-3" style={{ color: "#444444" }}>{children}</p>,
    h2:          ({ children }: any) => <h2 className="text-xl font-black mt-6 mb-2" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>{children}</h2>,
    h3:          ({ children }: any) => <h3 className="text-base font-bold mt-4 mb-1" style={{ color: "#1a1a1a" }}>{children}</h3>,
    blockquote:  ({ children }: any) => <blockquote className="border-l-4 pl-4 italic my-4 text-sm" style={{ borderColor: "#F5A623", color: "#444444" }}>{children}</blockquote>,
  },
  list: {
    bullet:   ({ children }: any) => <ul className="list-disc list-inside space-y-1 mb-3 text-sm" style={{ color: "#444444" }}>{children}</ul>,
    number:   ({ children }: any) => <ol className="list-decimal list-inside space-y-1 mb-3 text-sm" style={{ color: "#444444" }}>{children}</ol>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em:     ({ children }: any) => <em className="italic">{children}</em>,
    link:   ({ value, children }: any) => (
      <a href={value?.href} className="underline hover:opacity-75" style={{ color: "#F5A623" }} target={value?.href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

// ─── Static params ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  const slugs = await sanityFetch<Array<{ slug: string }>>({ query: PROGRAMME_SLUGS_QUERY });
  return (slugs ?? []).map((s) => ({ slug: s.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
interface Params { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const prog = await sanityFetch<ProgrammeDoc>({ query: PROGRAMME_PAGE_QUERY, params: { slug } });
  if (!prog) return { title: "Programme — Swell Music CIC" };
  return {
    title: `${prog.title} — Swell Music CIC`,
    description: prog.shortDescription ?? prog.pageDescription ?? "",
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ProgrammePage({ params }: Params) {
  const { slug } = await params;

  const [prog, sessions, testimonials] = await Promise.all([
    sanityFetch<ProgrammeDoc>({ query: PROGRAMME_PAGE_QUERY, params: { slug } }),
    sanityFetch<SessionDoc[]>({ query: SESSIONS_BY_PROGRAMME_QUERY, params: { programme: slug } }),
    sanityFetch<TestimonialDoc[]>({ query: TESTIMONIALS_BY_PROGRAMME_QUERY, params: { programme: slug } }),
  ]);

  if (!prog) notFound();

  const themeKey = (prog.theme ?? "amber") as Theme;
  const colours = THEME[themeKey] ?? THEME.amber;

  const hasFeatures    = prog.features && prog.features.length > 0;
  const hasWhoFor      = prog.whoFor && prog.whoFor.length > 0;
  const hasEvidence    = prog.evidenceHeading || (prog.evidenceBody && prog.evidenceBody.length > 0);
  const hasGallery     = prog.gallery && prog.gallery.length > 0;
  const hasBody        = prog.body && prog.body.length > 0;
  const hasSessions    = sessions && sessions.length > 0;
  const hasTestimonials = testimonials && testimonials.length > 0;

  return (
    <>
      {/* Hero */}
      <ProgrammeHero
        eyebrow={prog.title}
        title={prog.pageTitle ?? prog.title}
        description={prog.pageDescription ?? prog.shortDescription ?? ""}
        accentColour={colours.header}
        accentText={colours.text}
        badgeLabel={prog.badgeLabel ?? ""}
        badgeColour={colours.badge as "amber" | "teal" | "purple" | "coral"}
        accreditation={prog.accreditation}
      />

      {/* Feature cards */}
      {hasFeatures && (
        <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <SectionLabel>The sessions</SectionLabel>
              <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
                What happens in a session
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {prog.features!.map((f, i) => (
                <div key={i} className="flex flex-col gap-3 p-5 rounded-lg bg-white" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colours.header }} />
                  <h3 className="text-sm font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#444444" }}>{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Who it's for */}
      {hasWhoFor && (
        <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <SectionLabel>Who it&rsquo;s for</SectionLabel>
              <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
                Everyone is welcome
              </h2>
            </div>
            <ul className="flex flex-col gap-3">
              {prog.whoFor!.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "#444444" }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: colours.header }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Evidence */}
      {hasEvidence && (
        <section className="py-16 px-6" style={{ backgroundColor: hasWhoFor ? "#f9f9f9" : "#ffffff" }}>
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <SectionLabel>The evidence</SectionLabel>
              {prog.evidenceHeading && (
                <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
                  {prog.evidenceHeading}
                </h2>
              )}
            </div>
            {prog.evidenceBody && prog.evidenceBody.length > 0 && (
              <div className="max-w-2xl">
                <PortableText value={prog.evidenceBody as any} components={ptComponents} />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Gallery */}
      {hasGallery && (
        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a1a" }}>
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <SectionLabel>In the room</SectionLabel>
              <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>
                See the sessions
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {prog.gallery!.map((img, i) => (
                <div key={i} className="relative rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={img.url}
                    alt={img.alt ?? `${prog.title} session photo ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Additional body content */}
      {hasBody && (
        <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
          <div className="max-w-2xl mx-auto">
            <PortableText value={prog.body as any} components={ptComponents} />
          </div>
        </section>
      )}

      {/* Sessions */}
      {hasSessions && (
        <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <SectionLabel>Find us</SectionLabel>
              <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
                Session times &amp; locations
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {sessions!.map((s) => (
                <div key={s._id} className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-lg" style={{ border: "1px solid rgba(0,0,0,0.08)", backgroundColor: "#f9f9f9" }}>
                  <div className="flex items-center gap-2 shrink-0">
                    <IconCalendar size={16} style={{ color: colours.header }} />
                    <span className="text-sm font-medium" style={{ color: "#1a1a1a" }}>{s.day} · {s.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconMapPin size={16} style={{ color: "#888888" }} />
                    <span className="text-sm" style={{ color: "#444444" }}>{s.location} — {s.address}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quotes */}
      {hasTestimonials && (
        <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials!.map((t) => (
              <QuoteBlock key={t._id} quote={t.quote} attribution={t.attribution} />
            ))}
          </div>
        </section>
      )}

      {/* CTAs */}
      <section className="py-10 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
          <Button href="/get-involved/find-a-session" variant="primary">Join this session</Button>
          <Button href="/get-involved/refer" variant="ghost" className="!text-ink !border-ink/30">Refer someone</Button>
        </div>
      </section>
    </>
  );
}
