import SectionLabel from "@/components/ui/SectionLabel";
import { IconMail, IconPhone, IconBrandFacebook } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Swell Music CIC",
  description: "Get in touch with Swell Music CIC.",
};

export default function ContactPage() {
  return (
    <>
      <section style={{ backgroundColor: "#1a1a1a" }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-5">
          <SectionLabel>Get in touch</SectionLabel>
          <h1 className="text-4xl sm:text-5xl font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>
            Contact us
          </h1>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <a href="mailto:info@swellmusic.org.uk" className="flex items-center gap-3 text-sm" style={{ color: "#1a1a1a" }}>
              <IconMail size={20} style={{ color: "#F5A623" }} />
              info@swellmusic.org.uk
            </a>
            <a href="tel:+447917799456" className="flex items-center gap-3 text-sm" style={{ color: "#1a1a1a" }}>
              <IconPhone size={20} style={{ color: "#F5A623" }} />
              07917 799456
            </a>
            <a
              href="https://www.facebook.com/Swell-Music-CIC-100595698557837"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm"
              style={{ color: "#1a1a1a" }}
            >
              <IconBrandFacebook size={20} style={{ color: "#F5A623" }} />
              Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
