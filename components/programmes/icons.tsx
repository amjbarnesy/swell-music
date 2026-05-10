import type { SVGProps } from "react";
import type { ProgrammeIconKey } from "./types";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  weight?: number;
};

function base({ size = 64, weight = 1.8, ...rest }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: weight,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...rest,
  };
}

export function LungIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M32 8v32" />
      <path d="M32 18c-2 5-5 7-9 8-6 1.5-9 5-9 12 0 5 3 8 8 8 6 0 10-4 10-10V18z" />
      <path d="M32 18c2 5 5 7 9 8 6 1.5 9 5 9 12 0 5-3 8-8 8-6 0-10-4-10-10V18z" />
    </svg>
  );
}

export function BirdIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M10 36c4-2 8-2 12 0 4-7 12-12 22-12 4 0 8 1 11 4-2 3-6 4-10 4 1 4 0 8-3 12-5 7-14 10-23 8-7-2-11-8-9-16z" />
      <circle cx="48" cy="22" r="1.4" fill="currentColor" stroke="none" />
      <path d="M52 26l8-2" />
      <path d="M22 50l4-8" />
      <path d="M30 52l3-8" />
    </svg>
  );
}

export function BrainIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M32 14c0-4 3-7 7-7 4 0 7 3 7 7 4 0 7 3 7 7s-2 6-5 7c2 2 3 5 2 8-1 4-5 6-9 5 0 4-3 7-7 7-3 0-6-2-7-5" />
      <path d="M32 14c0-4-3-7-7-7-4 0-7 3-7 7-4 0-7 3-7 7s2 6 5 7c-2 2-3 5-2 8 1 4 5 6 9 5 0 4 3 7 7 7 3 0 6-2 7-5" />
      <path d="M32 14v36" />
    </svg>
  );
}

export function NoteIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M22 46V14l24-4v32" />
      <circle cx="18" cy="46" r="6" />
      <circle cx="42" cy="42" r="6" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M32 52S10 38 10 24a10 10 0 0 1 18-6 10 10 0 0 1 18 6c0 14-22 28-22 28z" />
    </svg>
  );
}

export function VoiceIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="26" y="8" width="12" height="28" rx="6" />
      <path d="M16 30a16 16 0 0 0 32 0" />
      <path d="M32 46v8" />
      <path d="M24 54h16" />
    </svg>
  );
}

export const iconMap: Record<ProgrammeIconKey, (props: IconProps) => React.ReactElement> = {
  lung:  LungIcon,
  bird:  BirdIcon,
  brain: BrainIcon,
  note:  NoteIcon,
  heart: HeartIcon,
  voice: VoiceIcon,
};

export function ArrowIcon({ size = 18, weight = 2.2, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={weight}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}
