"use client";

import { useState } from "react";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";

const navLinks = [
  { label: "Our work",   href: "/our-work" },
  { label: "Our impact", href: "/our-impact" },
  { label: "About us",   href: "/about" },
  { label: "News",       href: "/news" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#1a1a1a" }} className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" aria-label="Swell Music — home">
          <div
            className="flex flex-col items-center justify-center w-14 h-12 leading-none select-none"
            style={{ backgroundColor: "#F5A623" }}
          >
            <span
              className="text-[11px] font-black tracking-widest uppercase"
              style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}
            >
              SWELL
            </span>
            <div className="w-full h-px" style={{ backgroundColor: "#1a1a1a", opacity: 0.35 }} />
            <span
              className="text-[11px] font-black tracking-widest uppercase"
              style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}
            >
              MUSIC
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors"
              style={{ color: "#cccccc", fontFamily: "var(--font-body)" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F5A623")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#cccccc")}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/get-involved/find-a-session"
            className="px-4 py-2 text-sm font-medium rounded transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#F5A623",
              color: "#412402",
              fontFamily: "var(--font-body)",
            }}
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

      {/* Mobile overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 top-16 z-40 flex flex-col px-6 py-8 gap-6"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          {navLinks.map((link) => (
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
          <Link
            href="/get-involved/find-a-session"
            className="mt-4 inline-block px-6 py-3 text-base font-medium rounded text-center"
            style={{ backgroundColor: "#F5A623", color: "#412402", fontFamily: "var(--font-body)" }}
            onClick={() => setOpen(false)}
          >
            Find a session
          </Link>
        </div>
      )}
    </header>
  );
}
