import "dotenv/config";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  token:     process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const locations: any[] = [
  {
    _id:     "location-seagull",
    _type:   "sessionLocation",
    name:    "The Seagull Theatre",
    address: "Morton Road, Lowestoft, NR33 0JH",
    note:    "Friday Music for Wellbeing · Open Access · Wired Sounds Festival",
    lat:     52.4548,
    lng:     1.7352,
    active:  true,
    order:   1,
  },
  {
    _id:     "location-reydon",
    _type:   "sessionLocation",
    name:    "Reydon Sports & Community Centre",
    address: "Near Southwold",
    note:    "Singing for Lung Health — Tuesdays 10am–11.30am",
    lat:     52.3271,
    lng:     1.6612,
    active:  true,
    order:   2,
  },
  {
    _id:     "location-pavilion",
    _type:   "sessionLocation",
    name:    "Pavilion Theatre & Bandstand",
    address: "Gorleston",
    note:    "Singing for Lung Health — alternate Wednesdays",
    lat:     52.5716,
    lng:     1.7328,
    active:  true,
    order:   3,
  },
  {
    _id:     "location-shrublands",
    _type:   "sessionLocation",
    name:    "Shrublands Community Trust",
    address: "Gorleston",
    note:    "Singing for Lung Health & Open Access — alternate Wednesdays",
    lat:     52.5783,
    lng:     1.7246,
    active:  true,
    order:   4,
  },
  {
    _id:     "location-battery",
    _type:   "sessionLocation",
    name:    "First Light — Battery of Ideas",
    address: "London Road North, Lowestoft",
    note:    "Community singing pop-up sessions",
    lat:     52.4793,
    lng:     1.7452,
    active:  true,
    order:   5,
  },
  {
    _id:     "location-halesworth",
    _type:   "sessionLocation",
    name:    "Halesworth Community Centre",
    address: "Quay Street, Halesworth, IP19 8ET",
    note:    "Community singing & accessible carol services",
    lat:     52.3493,
    lng:     1.5068,
    active:  true,
    order:   6,
  },
];

console.log(`Seeding ${locations.length} session locations into project: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`);

async function seed() {
  const tx = client.transaction();
  for (const loc of locations) {
    tx.createOrReplace(loc);
  }
  await tx.commit();
  console.log("✓ All locations seeded");
}

seed().catch((err) => { console.error(err); process.exit(1); });
