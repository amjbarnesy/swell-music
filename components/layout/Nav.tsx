"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react";
import { DONATE_URL } from "@/lib/donate";

// ─── Nav structure ────────────────────────────────────────────────────────────
type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; href: string; children: { label: string; href: string }[] };

const NAV: NavItem[] = [
  {
    label: "Our work",
    href: "/our-work",
    children: [
      { label: "Our work",      href: "/our-work" },
      { label: "Refer someone", href: "/get-involved/refer" },
    ],
  },
  { label: "Our impact", href: "/our-impact" },
  {
    label: "About us",
    href: "/about",
    children: [
      { label: "About us",   href: "/about" },
      { label: "Support us", href: "/support-us" },
    ],
  },
  { label: "News",    href: "/news" },
  { label: "Contact", href: "/contact" },
];

// ─── Desktop dropdown item ────────────────────────────────────────────────────
function DropdownItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="text-sm font-medium transition-colors"
        style={{ color: "#cccccc", fontFamily: "var(--font-body)" }}
        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F5A623")}
        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#cccccc")}
      >
        {item.label}
      </Link>
    );
  }

  function handleMouseEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }
  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <button
        className="flex items-center gap-1 text-sm font-medium transition-colors"
        style={{ color: open ? "#F5A623" : "#cccccc", fontFamily: "var(--font-body)" }}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <IconChevronDown
          size={14}
          style={{
            transition: "transform 0.15s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          className="absolute top-full left-0 mt-2 min-w-[180px] rounded-lg py-1.5 z-50"
          style={{
            backgroundColor: "#242424",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          }}
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2.5 text-sm transition-colors"
              style={{ color: "#cccccc", fontFamily: "var(--font-body)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#F5A623";
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#cccccc";
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main nav ─────────────────────────────────────────────────────────────────
export default function Nav() {
  const [open, setOpen] = useState(false);

  // Flat list of all links for mobile menu
  const mobileLinks = NAV.flatMap((item) =>
    item.children
      ? item.children
      : [{ label: item.label, href: item.href }]
  );

  return (
    <header style={{ backgroundColor: "#1a1a1a" }} className="sticky top-0 z-50 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" aria-label="Swell Music — home">
          <Image
            src="/logo/SWELL-MUSIC-logo.svg"
            alt="Swell Music CIC"
            width={120}
            height={48}
            priority
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV.map((item) => (
            <DropdownItem key={item.href} item={item} />
          ))}
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium rounded transition-colors"
            style={{
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#cccccc",
              fontFamily: "var(--font-body)",
            }}
          >
            Donate
          </a>
          <Link
            href="/get-involved/find-a-session"
            className="px-4 py-2 text-sm font-medium rounded transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#F5A623", color: "#412402", fontFamily: "var(--font-body)" }}
          >
            Find a session
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>

      {/* Mobile overlay — flat list, no nested dropdowns */}
      {open && (
        <div
          className="md:hidden fixed inset-0 top-16 z-40 flex flex-col px-6 py-8 gap-5"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          {mobileLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xl font-medium"
              style={{ color: "#cccccc", fontFamily: "var(--font-body)" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/get-involved/find-a-session"
              className="inline-block px-6 py-3 text-base font-medium rounded text-center"
              style={{ backgroundColor: "#F5A623", color: "#412402", fontFamily: "var(--font-body)" }}
              onClick={() => setOpen(false)}
            >
              Find a session
            </Link>
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-base font-medium rounded text-center"
              style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#cccccc", fontFamily: "var(--font-body)" }}
            >
              Donate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
