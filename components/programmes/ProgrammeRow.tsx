"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Programme } from "./types";
import { iconMap, ArrowIcon } from "./icons";
import { Placeholder } from "./Placeholder";

type ProgrammeRowProps = {
  programme: Programme;
  index: number;
  total: number;
};

const PLACEHOLDER_TONES = ["warm", "cool", "paper"] as const;

export function ProgrammeRow({ programme, index, total }: ProgrammeRowProps) {
  const Icon = iconMap[programme.iconKey];
  const number = String(index + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");
  const href = programme.href ?? `/get-involved/find-a-session?p=${programme.id}`;
  const tone = PLACEHOLDER_TONES[index % PLACEHOLDER_TONES.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
      className="
        grid items-stretch gap-5 border-b border-black/15 py-4
        md:grid-cols-[auto_1fr] md:items-center md:gap-7 md:py-5
        lg:grid-cols-[120px_1fr_420px] lg:gap-12 lg:py-7
      "
      style={
        {
          ["--prog" as never]: programme.color,
          ["--prog-soft" as never]: programme.colorSoft,
          ["--prog-deep" as never]: programme.colorDeep,
        } as React.CSSProperties
      }
    >
      {/* Number + icon column ─────────────────────────────────────────── */}
      <div className="flex items-center justify-between md:flex-col md:items-start md:justify-start md:gap-5">
        <div className="order-2 md:order-1">
          <span className="font-mono text-xs tracking-[0.14em] text-black/55">
            {number} / {totalStr}
          </span>
        </div>

        <div
          className="
            order-1 grid place-items-center rounded-sm
            md:order-2
            h-[72px] w-[72px]
            md:h-24 md:w-24
            lg:h-[120px] lg:w-[120px]
          "
          style={{
            background: "var(--prog)",
            color: "var(--prog-deep)",
          }}
          aria-hidden
        >
          {programme.iconSrc ? (
            <img
              src={programme.iconSrc}
              alt=""
              className="h-[44px] w-[44px] object-contain md:h-[58px] md:w-[58px] lg:h-[72px] lg:w-[72px]"
            />
          ) : (
            <Icon
              size={44}
              weight={1.8}
              className="md:[&]:h-[58px] md:[&]:w-[58px] lg:[&]:h-[72px] lg:[&]:w-[72px]"
            />
          )}
        </div>
      </div>

      {/* Content column ───────────────────────────────────────────────── */}
      <div>
        <span
          className="inline-block rounded-full px-3 py-1.5 text-[13px] font-semibold"
          style={{ background: "var(--prog-soft)", color: "var(--prog-deep)" }}
        >
          {programme.tag}
        </span>

        <h3
          className="
            mt-4 font-serif font-bold tracking-[-0.02em] leading-tight
            text-2xl
            sm:text-3xl
          "
        >
          {programme.name}
        </h3>

        <p className="mt-3 max-w-[540px] text-sm leading-relaxed text-black/70 sm:text-base">
          {programme.blurb}
        </p>

        {/* image — inline on mobile/tablet, own column on desktop */}
        <div className="mt-6 lg:hidden">
          <ProgrammeImage programme={programme} tone={tone} aspect="aspect-[16/9] md:aspect-[16/7]" />
        </div>

        {programme.onHold && (
          <div
            className="mt-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs"
            style={{ backgroundColor: "#FEF3D7", color: "#854F0B", border: "1px solid rgba(245,166,35,0.4)" }}
          >
            <span>⏸</span>
            <span>{programme.onHoldMessage || "Not currently running — we hope to restart soon"}</span>
          </div>
        )}

        <div className="mt-6 flex flex-col gap-3 md:mt-7 md:flex-row md:items-center md:gap-6">
          <Link
            href={href}
            className="
              inline-flex items-center justify-center gap-2
              rounded-sm bg-black px-5 py-3.5 text-sm font-semibold text-paper
              transition-colors hover:bg-black/85
              md:py-3
            "
          >
            Find a session
            <ArrowIcon size={16} />
          </Link>
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-black/55">
            {programme.location}
          </span>
        </div>
      </div>

      {/* Photo column (desktop only) ─────────────────────────────────── */}
      <div className="hidden lg:block">
        <ProgrammeImage programme={programme} tone={tone} aspect="aspect-[4/3]" />
      </div>
    </motion.article>
  );
}

function ProgrammeImage({
  programme,
  tone,
  aspect,
}: {
  programme: Programme;
  tone: (typeof PLACEHOLDER_TONES)[number];
  aspect: string;
}) {
  if (programme.image) {
    return (
      <div className={`relative w-full overflow-hidden rounded-sm ${aspect}`}>
        <Image
          src={programme.image.src}
          alt={programme.image.alt}
          fill
          sizes="(min-width: 1024px) 420px, 100vw"
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <Placeholder
      label={`${programme.name.toUpperCase()} — PHOTO`}
      tone={tone}
      className={aspect}
    />
  );
}
