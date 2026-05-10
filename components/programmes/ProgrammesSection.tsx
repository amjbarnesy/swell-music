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
      className="bg-paper px-6 py-7 text-ink md:px-10 md:py-10 lg:px-20 lg:py-12"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-5 md:mb-7">
          <p className="mb-3 font-mono text-xs font-semibold tracking-[0.18em] text-amber md:text-sm">
            {kicker}
          </p>
          <h2 className="font-serif text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-4xl">
            {title}
          </h2>
          {lede && (
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-black/65 sm:text-base">
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
