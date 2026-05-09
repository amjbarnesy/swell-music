"use client";

import { useState } from "react";

const REASONS = [
  "Finding a session near me",
  "Referring someone to a programme",
  "Wired Sounds Festival",
  "Press or media enquiry",
  "Partnership or funding opportunity",
  "General enquiry",
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name:    fd.get("name"),
      email:   fd.get("email"),
      phone:   fd.get("phone"),
      reason:  fd.get("reason"),
      message: fd.get("message"),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Something went wrong.");
      }
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg p-8 flex flex-col gap-4 items-start" style={{ backgroundColor: "#f0faf4", border: "1px solid rgba(29,158,117,0.25)" }}>
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1D9E75" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>Message sent!</h3>
        <p className="text-sm leading-relaxed" style={{ color: "#444444" }}>
          Thank you for getting in touch. We aim to respond within two working days. If your enquiry is urgent please call us on <a href="tel:+447917799456" className="underline">07917 799456</a>.
        </p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors";
  const inputStyle = { backgroundColor: "#f9f9f9", border: "1px solid rgba(0,0,0,0.12)", color: "#1a1a1a" };
  const labelStyle = { color: "#1a1a1a", fontFamily: "var(--font-body)" };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-name" className="text-sm font-medium" style={labelStyle}>
            Your name <span style={{ color: "#F5A623" }}>*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Helen Barnes"
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-email" className="text-sm font-medium" style={labelStyle}>
            Email address <span style={{ color: "#F5A623" }}>*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Phone + Reason */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-phone" className="text-sm font-medium" style={labelStyle}>
            Phone number <span className="text-xs font-normal" style={{ color: "#888888" }}>(optional)</span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="07700 900000"
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-reason" className="text-sm font-medium" style={labelStyle}>
            I&apos;m getting in touch about…
          </label>
          <select
            id="cf-reason"
            name="reason"
            className={inputClass}
            style={{ ...inputStyle, appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}
          >
            <option value="">Select a reason…</option>
            {REASONS.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="text-sm font-medium" style={labelStyle}>
          Your message <span style={{ color: "#F5A623" }}>*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={6}
          placeholder="Tell us a little about what you're looking for or what you'd like to know…"
          className={`${inputClass} resize-none`}
          style={inputStyle}
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <p className="text-sm px-4 py-3 rounded-lg" style={{ backgroundColor: "#fff0f0", color: "#b91c1c", border: "1px solid rgba(185,28,28,0.2)" }}>
          {errorMsg}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="self-start px-6 py-3 rounded-lg text-sm font-medium transition-opacity"
        style={{ backgroundColor: "#F5A623", color: "#412402", fontFamily: "var(--font-body)", opacity: status === "sending" ? 0.6 : 1 }}
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      <p className="text-xs" style={{ color: "#888888" }}>
        We aim to respond within two working days. Fields marked <span style={{ color: "#F5A623" }}>*</span> are required.
      </p>
    </form>
  );
}
