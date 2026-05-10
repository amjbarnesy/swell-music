import type { Programme } from "./types";
import { ProgrammeRow } from "./ProgrammeRow";

type ProgrammesSectionProps = {
  programmes: Programme[];
  /** Section eyebrow — defaults to "WHAT WE DO" */
  kicker?: string;
  /** Section heading — defaults to "Our programmes" */
  title?: string;
  /** Optional lede paragraph under the heading */
  lede?: string;
  /** id for in-page anchoring */
  id?: string;
};

export function ProgrammesSection({
  programmes,
  kicker = "WHAT WE DO",
  title = "Our programmes",
  lede = "Specialised programmes, each designed around the unique needs of a different community.",
  id = "programmes",
}: ProgrammesSectionProps) {
  return (
    <section
      id={id}
      className="bg-paper px-6 py-14 text-ink md:px-10 md:py-20 lg:px-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 md:mb-14">
          <p className="mb-3 font-mono text-xs font-semibold tracking-[0.18em] text-amber md:text-sm">
            {kicker}
          </p>
          <h2 className="font-serif text-[48px] font-extrabold leading-[0.95] tracking-[-0.025em] md:text-[64px] lg:text-[84px]">
            {title}
          </h2>
          {lede && (
            <p className="mt-4 max-w-xl text-[15.5px] leading-[1.5] text-black/65 md:text-lg">
              {lede}
            </p>
          )}
        </header>

        <div className="border-t border-black/15">
          {programmes.map((programme, i) => (
            <ProgrammeRow
              key={programme.id}
              programme={programme}
              index={i}
              total={programmes.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
