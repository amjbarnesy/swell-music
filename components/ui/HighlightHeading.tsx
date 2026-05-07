interface HighlightHeadingProps {
  heading: string;
  highlightWord?: string | null;
  as?: "h1" | "h2" | "h3";
  className?: string;
  style?: React.CSSProperties;
}

export default function HighlightHeading({
  heading,
  highlightWord,
  as: Tag = "h1",
  className = "",
  style,
}: HighlightHeadingProps) {
  if (!highlightWord) {
    return <Tag className={className} style={style}>{heading}</Tag>;
  }

  const parts = heading.split(new RegExp(`(${highlightWord})`, "i"));

  return (
    <Tag className={className} style={style}>
      {parts.map((part, i) =>
        part.toLowerCase() === highlightWord.toLowerCase() ? (
          <span key={i} style={{ color: "#F5A623" }}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </Tag>
  );
}
