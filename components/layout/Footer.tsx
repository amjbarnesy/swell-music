import Link from "next/link";
import Image from "next/image";
import { IconBrandFacebook, IconMail, IconPhone } from "@tabler/icons-react";

const navigate = [
  { label: "Our work",    href: "/our-work" },
  { label: "Our impact",  href: "/our-impact" },
  { label: "About us",    href: "/about" },
  { label: "News",        href: "/news" },
  { label: "Find a session", href: "/get-involved/find-a-session" },
  { label: "Refer someone",  href: "/get-involved/refer" },
  { label: "Volunteer",      href: "/get-involved/volunteer" },
  { label: "Support us",     href: "/support-us" },
  { label: "Contact",        href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#111111", borderTop: "2px solid #F5A623" }}
      className="text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand column */}
        <div className="flex flex-col gap-4">
          <Link href="/" aria-label="Swell Music — home">
            <Image
              src="/logo/SWELL-MUSIC-logo.svg"
              alt="Swell Music CIC"
              width={120}
              height={48}
              className="h-12 w-auto"
            />
          </Link>
          <p className="text-sm leading-relaxed" style={{ color: "#888888", maxWidth: "22ch" }}>
            Free weekly music sessions for people living with lung conditions, Parkinson&rsquo;s,
            dementia, and neurodivergent communities.
          </p>
          <p className="text-xs" style={{ color: "#444444" }}>
            Swell Music CIC · Company No. 12789454
          </p>
          <a
            href="https://www.facebook.com/Swell-Music-CIC-100595698557837"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: "#888888" }}
            aria-label="Swell Music on Facebook"
          >
            <IconBrandFacebook size={18} />
            Facebook
          </a>
        </div>

        {/* Navigate column */}
        <div>
          <h3
            className="text-xs font-medium tracking-widest uppercase mb-5"
            style={{ color: "#F5A623" }}
          >
            Navigate
          </h3>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
            {navigate.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors"
                  style={{ color: "#888888" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <h3
            className="text-xs font-medium tracking-widest uppercase mb-5"
            style={{ color: "#F5A623" }}
          >
            Contact
          </h3>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="mailto:info@swellmusic.org.uk"
                className="flex items-center gap-2 text-sm"
                style={{ color: "#888888" }}
              >
                <IconMail size={16} />
                info@swellmusic.org.uk
              </a>
            </li>
            <li>
              <a
                href="tel:+447917799456"
                className="flex items-center gap-2 text-sm"
                style={{ color: "#888888" }}
              >
                <IconPhone size={16} />
                07917 799456
              </a>
            </li>
            <li className="mt-4 flex flex-col gap-2">
              <Link href="/policies" className="text-xs" style={{ color: "#444444" }}>
                Policies
              </Link>
              <Link href="/privacy" className="text-xs" style={{ color: "#444444" }}>
                Privacy policy
              </Link>
              <Link href="/accessibility" className="text-xs" style={{ color: "#444444" }}>
                Accessibility statement
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 max-w-7xl mx-auto"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <p className="text-xs" style={{ color: "#444444" }}>
          &copy; {new Date().getFullYear()} Swell Music CIC. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: "#F5A623" }}>
          Music in tune with health and wellbeing
        </p>
      </div>
    </footer>
  );
}
