import { cn } from "@/lib/utils";

type PlaceholderProps = {
  label: string;
  tone?: "warm" | "cool" | "paper";
  className?: string;
};

const TONES: Record<NonNullable<PlaceholderProps["tone"]>, [string, string]> = {
  warm:  ["#d8d2c2", "#cfc8b6"],
  cool:  ["#cfd6d4", "#c2cbc8"],
  paper: ["#e8e3d6", "#ddd6c4"],
};

/**
 * Striped placeholder used when a programme record has no `image` set.
 * Drop in for development; production records should always supply a real photo.
 */
export function Placeholder({ label, tone = "warm", className }: PlaceholderProps) {
  const [a, b] = TONES[tone];
  return (
    <div
      className={cn("relative w-full overflow-hidden rounded-sm", className)}
      style={{
        background: `repeating-linear-gradient(135deg, ${a} 0 14px, ${b} 14px 28px)`,
      }}
    >
      <div className="absolute bottom-0 left-0 p-4 font-mono text-[11px] uppercase tracking-[0.08em] text-black/55">
        ▢ {label}
      </div>
    </div>
  );
}
