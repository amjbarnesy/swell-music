import SectionLabel from "@/components/ui/SectionLabel";

const FALLBACK_FUNDERS = [
  "Co-op", "East Suffolk Council", "Suffolk Community Foundation",
  "Youth Music", "Youth Music Incubator", "Adnams Community Trust",
  "Connected Communities", "Interreg",
];

interface Funder { _id: string; name: string; url?: string }

export default function FunderBarServer({ funders }: { funders: Funder[] | null }) {
  const list = funders && funders.length > 0
    ? funders
    : FALLBACK_FUNDERS.map((name, i) => ({ _id: String(i), name, url: undefined }));

  return (
    <section className="py-12 px-6" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <SectionLabel>Supported by</SectionLabel>
        <div className="flex flex-wrap gap-3">
          {list.map((f) => (
            <span
              key={f._id}
              className="px-3 py-1.5 text-xs font-medium rounded"
              style={{ backgroundColor: "#ffffff", color: "#444444", border: "1px solid rgba(0,0,0,0.12)" }}
            >
              {f.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
