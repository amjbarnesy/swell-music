import SectionLabel from "@/components/ui/SectionLabel";

const funders = [
  "Co-op",
  "East Suffolk Council",
  "Suffolk Community Foundation",
  "Youth Music",
  "Youth Music Incubator",
  "Adnams Community Trust",
  "Connected Communities",
  "Interreg",
];

export default function FunderBar() {
  return (
    <section className="py-12 px-6" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <SectionLabel>Supported by</SectionLabel>
        <div className="flex flex-wrap gap-3">
          {funders.map((funder) => (
            <span
              key={funder}
              className="px-3 py-1.5 text-xs font-medium rounded"
              style={{
                backgroundColor: "#ffffff",
                color: "#444444",
                border: "1px solid rgba(0,0,0,0.12)",
              }}
            >
              {funder}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
