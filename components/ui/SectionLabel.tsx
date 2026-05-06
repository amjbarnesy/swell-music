interface SectionLabelProps {
  children: string;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-xs tracking-widest uppercase font-medium ${className}`}
      style={{ color: "#F5A623", fontFamily: "var(--font-body)" }}
    >
      {children}
    </p>
  );
}
