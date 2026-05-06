import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "ghost" | "dark";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const styles: Record<Variant, React.CSSProperties> = {
  primary: {
    backgroundColor: "#F5A623",
    color: "#412402",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "#ffffff",
    border: "1px solid rgba(255,255,255,0.5)",
  },
  dark: {
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
  },
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  type = "button",
  disabled,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const combined = `${base} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={combined}
        style={styles[variant]}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combined}
      style={styles[variant]}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
