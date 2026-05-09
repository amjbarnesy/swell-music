"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const inputClass = "w-full px-4 py-3 rounded-lg text-sm outline-none";
const inputStyle = { backgroundColor: "#f9f9f9", border: "1px solid rgba(0,0,0,0.12)", color: "#1a1a1a" };
const labelStyle = { color: "#1a1a1a", fontFamily: "var(--font-body)" };

export default function ReferralForm() {
  const [status, setStatus]   = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const payload = {
      referrerName:         fd.get("referrerName"),
      referrerRole:         fd.get("referrerRole"),
      referrerOrganisation: fd.get("referrerOrganisation"),
      referrerEmail:        fd.get("referrerEmail"),
      referrerPhone:        fd.get("referrerPhone"),
      participantName:      fd.get("participantName"),
      condition:            fd.get("condition"),
      location:             fd.get("location"),
      notes:                fd.get("notes"),
    };
    try {
      const res = await fetch("/api/refer", {
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
      <div className="rounded-lg p-8 flex flex-col gap-4" style={{ backgroundColor: "#f0faf4", border: "1px solid rgba(29,158,117,0.25)" }}>
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1D9E75" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>Referral received</h3>
        <p className="text-sm leading-relaxed" style={{ color: "#444444" }}>
          Thank you — we will be in touch within 48 hours to follow up. If you need to speak to someone sooner please call us on <a href="tel:+447917799456" className="underline">07917 799456</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">

      {/* About the referrer */}
      <fieldset className="flex flex-col gap-5">
        <legend className="text-xs font-medium tracking-widest uppercase pb-1" style={{ color: "#888888", borderBottom: "1px solid rgba(0,0,0,0.08)", width: "100%" }}>
          About you
        </legend>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="referrerName" className="text-sm font-medium" style={labelStyle}>
              Your name <span style={{ color: "#F5A623" }}>*</span>
            </label>
            <input id="referrerName" name="referrerName" type="text" required autoComplete="name"
              placeholder="Dr Jane Smith" className={inputClass} style={inputStyle} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="referrerRole" className="text-sm font-medium" style={labelStyle}>
              Your role <span style={{ color: "#F5A623" }}>*</span>
            </label>
            <input id="referrerRole" name="referrerRole" type="text" required
              placeholder="e.g. GP, Occupational Therapist, Social Worker" className={inputClass} style={inputStyle} />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="referrerOrganisation" className="text-sm font-medium" style={labelStyle}>
            Organisation <span style={{ color: "#F5A623" }}>*</span>
          </label>
          <input id="referrerOrganisation" name="referrerOrganisation" type="text" required
            placeholder="e.g. Sole Bay Health, Norfolk & Suffolk NHS" className={inputClass} style={inputStyle} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="referrerEmail" className="text-sm font-medium" style={labelStyle}>
              Your email <span style={{ color: "#F5A623" }}>*</span>
            </label>
            <input id="referrerEmail" name="referrerEmail" type="email" required autoComplete="email"
              placeholder="you@example.com" className={inputClass} style={inputStyle} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="referrerPhone" className="text-sm font-medium" style={labelStyle}>
              Your phone <span className="text-xs font-normal" style={{ color: "#888888" }}>(optional)</span>
            </label>
            <input id="referrerPhone" name="referrerPhone" type="tel" autoComplete="tel"
              placeholder="07700 900000" className={inputClass} style={inputStyle} />
          </div>
        </div>
      </fieldset>

      {/* About the participant */}
      <fieldset className="flex flex-col gap-5">
        <legend className="text-xs font-medium tracking-widest uppercase pb-1" style={{ color: "#888888", borderBottom: "1px solid rgba(0,0,0,0.08)", width: "100%" }}>
          About the person you&apos;re referring
        </legend>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="participantName" className="text-sm font-medium" style={labelStyle}>
            Their first name <span style={{ color: "#F5A623" }}>*</span>
          </label>
          <input id="participantName" name="participantName" type="text" required
            placeholder="First name only is fine" className={inputClass} style={inputStyle} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="condition" className="text-sm font-medium" style={labelStyle}>
              Programme most suitable for them <span style={{ color: "#F5A623" }}>*</span>
            </label>
            <select id="condition" name="condition" required className={inputClass}
              style={{ ...inputStyle, appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}>
              <option value="">Select a programme…</option>
              <option value="Singing for Lung Health">Singing for Lung Health (lung conditions &amp; breathlessness)</option>
              <option value="Waveney Skylarks">Waveney Skylarks (Parkinson&apos;s)</option>
              <option value="Music & Dementia">Music &amp; Dementia</option>
              <option value="Music for Wellbeing">Music for Wellbeing (general wellbeing)</option>
              <option value="Open Access">Open Access (neurodivergent adults)</option>
              <option value="Not sure">Not sure — please advise</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="location" className="text-sm font-medium" style={labelStyle}>
              Preferred location
            </label>
            <select id="location" name="location" className={inputClass}
              style={{ ...inputStyle, appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}>
              <option value="">No preference</option>
              <option value="Lowestoft — The Seagull Theatre">Lowestoft — The Seagull Theatre</option>
              <option value="Gorleston — Pavilion Theatre">Gorleston — Pavilion Theatre</option>
              <option value="Gorleston — Shrublands Community Trust">Gorleston — Shrublands Community Trust</option>
              <option value="Southwold — Reydon Sports Centre">Southwold/Reydon — Reydon Sports Centre</option>
              <option value="Halesworth — Community Centre">Halesworth — Community Centre</option>
              <option value="Online">Online (national)</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="notes" className="text-sm font-medium" style={labelStyle}>
            Additional notes <span className="text-xs font-normal" style={{ color: "#888888" }}>(optional)</span>
          </label>
          <textarea id="notes" name="notes" rows={5} className={`${inputClass} resize-none`} style={inputStyle}
            placeholder="Anything that would help us support this person well — mobility, communication needs, carer involvement, best time to call, etc." />
        </div>
      </fieldset>

      {status === "error" && (
        <p className="text-sm px-4 py-3 rounded-lg" style={{ backgroundColor: "#fff0f0", color: "#b91c1c", border: "1px solid rgba(185,28,28,0.2)" }}>
          {errorMsg}
        </p>
      )}

      <button type="submit" disabled={status === "sending"}
        className="self-start px-6 py-3 rounded-lg text-sm font-medium transition-opacity"
        style={{ backgroundColor: "#F5A623", color: "#412402", fontFamily: "var(--font-body)", opacity: status === "sending" ? 0.6 : 1 }}>
        {status === "sending" ? "Submitting…" : "Submit referral"}
      </button>

      <p className="text-xs" style={{ color: "#888888" }}>
        We respond within 48 hours. All sessions are free with no waiting list. Data held in accordance with our{" "}
        <a href="/privacy" className="underline">privacy policy</a>.
        Fields marked <span style={{ color: "#F5A623" }}>*</span> are required.
      </p>
    </form>
  );
}
