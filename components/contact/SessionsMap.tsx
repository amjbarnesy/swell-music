"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons broken by webpack
const icon = L.divIcon({
  html: `<div style="width:14px;height:14px;border-radius:50%;background:#F5A623;border:3px solid #ffffff;box-shadow:0 2px 6px rgba(0,0,0,0.35)"></div>`,
  className: "",
  iconSize:   [14, 14],
  iconAnchor: [7, 7],
  popupAnchor:[0, -10],
});

const LOCATIONS = [
  {
    name:    "The Seagull Theatre",
    address: "Morton Road, Lowestoft, NR32 2HY",
    note:    "Friday Music for Wellbeing · Open Access · Wired Sounds Festival",
    lat:  52.4757,
    lng:  1.7503,
  },
  {
    name:    "Reydon Sports & Community Centre",
    address: "Near Southwold",
    note:    "Singing for Lung Health — Tuesdays 10am–11.30am",
    lat:  52.3271,
    lng:  1.6612,
  },
  {
    name:    "Pavilion Theatre & Bandstand",
    address: "Gorleston",
    note:    "Singing for Lung Health — alternate Wednesdays",
    lat:  52.5716,
    lng:  1.7328,
  },
  {
    name:    "Shrublands Community Trust",
    address: "Gorleston",
    note:    "Singing for Lung Health & Open Access — alternate Wednesdays",
    lat:  52.5783,
    lng:  1.7246,
  },
  {
    name:    "First Light — Battery of Ideas",
    address: "London Road North, Lowestoft",
    note:    "Community singing pop-up sessions",
    lat:  52.4793,
    lng:  1.7452,
  },
  {
    name:    "Halesworth Community Centre",
    address: "Quay Street, Halesworth, IP19 8ET",
    note:    "Community singing & accessible carol services",
    lat:  52.3493,
    lng:  1.5068,
  },
];

// Centre the map roughly between Halesworth and Gorleston
const MAP_CENTRE: [number, number] = [52.46, 1.66];

export default function SessionsMap() {
  // Prevent hydration issues with Leaflet
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
      {LOCATIONS.map((loc) => (
        <Marker key={loc.name} position={[loc.lat, loc.lng]} icon={icon}>
          <Popup>
            <div style={{ fontFamily: "sans-serif", minWidth: "160px" }}>
              <p style={{ fontWeight: 700, fontSize: "13px", marginBottom: "2px", color: "#1a1a1a" }}>{loc.name}</p>
              <p style={{ fontSize: "12px", color: "#666", marginBottom: "4px" }}>{loc.address}</p>
              <p style={{ fontSize: "11px", color: "#F5A623", fontWeight: 600 }}>{loc.note}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
