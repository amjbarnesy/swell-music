"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export interface SessionLocation {
  _id:     string;
  name:    string;
  address: string;
  note:    string;
  lat:     number;
  lng:     number;
}

const icon = L.divIcon({
  html: `<div style="width:14px;height:14px;border-radius:50%;background:#F5A623;border:3px solid #ffffff;box-shadow:0 2px 6px rgba(0,0,0,0.35)"></div>`,
  className:   "",
  iconSize:    [14, 14],
  iconAnchor:  [7, 7],
  popupAnchor: [0, -10],
});

// Centre roughly between all locations
const MAP_CENTRE: [number, number] = [52.46, 1.66];

export default function SessionsMap({ locations }: { locations: SessionLocation[] }) {
  useEffect(() => {}, []);

  return (
    <MapContainer
      center={MAP_CENTRE}
      zoom={10}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", borderRadius: "0.5rem" }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc) => (
        <Marker key={loc._id} position={[loc.lat, loc.lng]} icon={icon}>
          <Popup>
            <div style={{ fontFamily: "sans-serif", minWidth: "160px" }}>
              <p style={{ fontWeight: 700, fontSize: "13px", marginBottom: "2px", color: "#1a1a1a" }}>{loc.name}</p>
              {loc.address && <p style={{ fontSize: "12px", color: "#666", marginBottom: "4px" }}>{loc.address}</p>}
              {loc.note    && <p style={{ fontSize: "11px", color: "#F5A623", fontWeight: 600 }}>{loc.note}</p>}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
