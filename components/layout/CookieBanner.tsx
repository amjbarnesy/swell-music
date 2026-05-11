"use client";

import Link from "next/link";
import Script from "next/script";
import { useState, useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function CookieBanner() {
  const [consent, setConsent] = useState<"accepted" | "rejected" | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("swell-cookie-consent");
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored as "accepted" | "rejected");
    } else {
      // Small delay so it doesn't flash immediately on page load
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem("swell-cookie-consent", "accepted");
    setConsent("accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem("swell-cookie-consent", "rejected");
    setConsent("rejected");
    setVisible(false);
  }

  return (
    <>
      {/* ── Google Analytics — only loads after explicit acceptance ── */}
      {consent === "accepted" && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { anonymize_ip: true });
          `}</Script>
        </>
      )}

      {/* ── Cookie banner ── */}
      {visible && (
        <div
          role="dialog"
          aria-label="Cookie preferences"
          className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div
            className="mx-auto max-w-4xl rounded-lg px-5 py-4 sm:flex sm:items-center sm:gap-6 sm:px-6"
            style={{
              backgroundColor: "#1a1a1a",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 -4px 32px rgba(0,0,0,0.4)",
            }}
          >
            {/* Text */}
            <p className="flex-1 text-sm leading-relaxed" style={{ color: "#aaaaaa" }}>
              We use essential cookies to keep the site working, and optional analytics
              cookies (Google Analytics) to understand how visitors find and use our
              sessions — helping us reach more people.{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-2 transition-colors"
                style={{ color: "#F5A623" }}
              >
                Privacy policy
              </Link>
            </p>

            {/* Actions */}
            <div className="mt-3 flex flex-wrap gap-2 sm:mt-0 sm:shrink-0">
              <button
                onClick={reject}
                className="rounded px-4 py-2 text-sm font-medium transition-colors"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#888888",
                }}
              >
                Essential only
              </button>
              <button
                onClick={accept}
                className="rounded px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#F5A623", color: "#412402" }}
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
