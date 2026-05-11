"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { DONATE_URL } from "@/lib/donate";

const navLinks = [
  { label: "Our work",   href: "/our-work" },
  { label: "Our impact", href: "/our-impact" },
  { label: "About us",   href: "/about" },
  { label: "News",       href: "/news" },
  { label: "Contact",    href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

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
      )}
    </header>
  );
}
