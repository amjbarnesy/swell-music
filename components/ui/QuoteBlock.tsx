interface QuoteBlockProps {
  quote: string;
  attribution?: string;
  dark?: boolean;
}

export default function QuoteBlock({ quote, attribution, dark = false }: QuoteBlockProps) {
  return (
    <blockquote
      className="pl-5 py-1"
      style={{ borderLeft: "3px solid #F5A623" }}
    >
      <p
        className="text-lg leading-relaxed"
        style={{
          fontFamily: "var(--font-display)",
          color: dark ? "#ffffff" : "#1a1a1a",
          fontStyle: "italic",
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      {attribution && (
        <footer
          className="mt-3 text-sm font-medium"
          style={{ color: dark ? "#888888" : "#444444" }}
        >
          — {attribution}
        </footer>
      )}
    </blockquote>
  );
}
