import SectionLabel from "@/components/ui/SectionLabel";
import QuoteBlock from "@/components/ui/QuoteBlock";

interface Testimonial { _id: string; quote: string; attribution: string }

const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    _id: "1",
    quote: "I never thought singing could make me feel this way. I breathe better, I sleep better, and I have friends again.",
    attribution: "Margaret, 72 · Singing for Lung Health",
  },
];

const metrics = [
  { value: "£283", label: "raised at Wired Sounds 2025" },
  { value: "12",   label: "artists showcased" },
  { value: "5+",   label: "free weekly sessions" },
];

export default function ImpactDashboard({
  testimonials,
}: {
  testimonials?: Testimonial[] | null;
}) {
  const quotes =
    testimonials && testimonials.length > 0 ? testimonials : FALLBACK_TESTIMONIALS;

  return (
    <section style={{ backgroundColor: "#1a1a1a" }} className="py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <SectionLabel>Real-world difference</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>
            Impact snapshot
          </h2>
        </div>

        {quotes.slice(0, 1).map((t) => (
          <QuoteBlock key={t._id} quote={t.quote} attribution={t.attribution} dark />
        ))}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-lg px-6 py-6 flex flex-col gap-1" style={{ backgroundColor: "#2a2a2a", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="text-4xl font-black" style={{ fontFamily: "var(--font-display)", color: "#F5A623" }}>{m.value}</p>
              <p className="text-sm" style={{ color: "#888888" }}>{m.label}</p>
            </div>
          ))}
        </div>

        <div className="inline-flex items-center gap-3 px-4 py-3 rounded" style={{ backgroundColor: "#2a2a2a", border: "1px solid rgba(255,255,255,0.08)", alignSelf: "flex-start" }}>
          <span className="text-xs font-black px-2 py-0.5 rounded" style={{ backgroundColor: "#F5A623", color: "#412402" }}>BBC</span>
          <p className="text-sm" style={{ color: "#888888" }}>Featured on BBC Look East and BBC News, December 2025</p>
        </div>
      </div>
    </section>
  );
}
