import SectionLabel from "@/components/ui/SectionLabel";
import Image from "next/image";

const FALLBACK_FUNDERS = [
  "Co-op", "East Suffolk Council", "Suffolk Community Foundation",
  "Youth Music", "Youth Music Incubator", "Adnams Community Trust",
  "Connected Communities", "Interreg",
];

interface Funder {
  _id: string;
  name: string;
  url?: string;
  logoUrl?: string;
  logoAlt?: string;
}

function FunderItem({ funder }: { funder: Funder }) {
  const inner = funder.logoUrl ? (
    <div className="relative w-full h-full">
      <Image
        src={funder.logoUrl}
        alt={funder.logoAlt ?? `${funder.name} logo`}
        fill
        className="object-contain"
        sizes="(max-width: 640px) 50vw, 200px"
      />
    </div>
  ) : (
    <span
      className="text-xs font-medium text-center px-2 leading-snug"
      style={{ color: "#444444" }}
    >
      {funder.name}
    </span>
  );

  const box = (
    <div
      className="flex items-center justify-center rounded-lg bg-white w-full aspect-square sm:w-[200px] sm:h-[200px]"
      style={{
        border: "1px solid rgba(0,0,0,0.08)",
        padding: funder.logoUrl ? 16 : 12,
      }}
    >
      {inner}
    </div>
  );

  if (funder.url) {
    return (
      <a
        href={funder.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={funder.name}
        className="transition-opacity hover:opacity-75"
      >
        {box}
      </a>
    );
  }

  return box;
}

export default function FunderBarServer({ funders }: { funders: Funder[] | null }) {
  const hasSanityFunders = funders && funders.length > 0;

  // If no Sanity funders yet, show text-only fallback pills
  if (!hasSanityFunders) {
    return (
      <section className="py-12 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <SectionLabel>Supported by</SectionLabel>
          <div className="flex flex-wrap gap-3">
            {FALLBACK_FUNDERS.map((name) => (
              <span
                key={name}
                className="px-3 py-1.5 text-xs font-medium rounded"
                style={{ backgroundColor: "#ffffff", color: "#444444", border: "1px solid rgba(0,0,0,0.12)" }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <SectionLabel>Supported by</SectionLabel>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {funders.map((f) => (
            <FunderItem key={f._id} funder={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
