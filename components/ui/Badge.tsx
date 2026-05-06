import { type ReactNode } from "react";

type Colour = "amber" | "teal" | "purple" | "coral" | "default";

const colourMap: Record<Colour, { bg: string; text: string }> = {
  amber:   { bg: "#FEF3D7", text: "#854F0B" },
  teal:    { bg: "#E1F5EE", text: "#085041" },
  purple:  { bg: "#EEEDFE", text: "#3C3489" },
  coral:   { bg: "#FAECE7", text: "#712B13" },
  default: { bg: "#F3F4F6", text: "#1a1a1a" },
};

interface BadgeProps {
  children: ReactNode;
  colour?: Colour;
  className?: string;
}

export default function Badge({ children, colour = "default", className = "" }: BadgeProps) {
  const { bg, text } = colourMap[colour];
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded ${className}`}
      style={{ backgroundColor: bg, color: text }}
    >
      {children}
    </span>
  );
}
