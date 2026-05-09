"use client";

import dynamic from "next/dynamic";
import type { SessionLocation } from "./SessionsMap";

const SessionsMap = dynamic(() => import("./SessionsMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-lg flex items-center justify-center" style={{ backgroundColor: "#2a2a2a" }}>
      <p className="text-sm" style={{ color: "#888888" }}>Loading map…</p>
    </div>
  ),
});

export default function MapWrapper({ locations }: { locations: SessionLocation[] }) {
  return <SessionsMap locations={locations} />;
}
