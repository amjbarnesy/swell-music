/**
 * Seeds the three core programmes into Sanity.
 * Run from the project root:
 *
 *   npx tsx sanity/seed-programmes.ts
 */

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset:   "production",
  apiVersion: "2024-01-01",
  token:     process.env.SANITY_API_TOKEN,
  useCdn:    false,
});

const programmes = [
  {
    _id:              "programme-lung-health",
    _type:            "programme",
    title:            "Singing for Lung Health",
    slug:             { _type: "slug", current: "lung-health" },
    shortDescription: "BLF-accredited group singing to strengthen breathing, reduce isolation, and improve quality of life for people with COPD and other lung conditions.",
    badgeLabel:       "Lung conditions",
    theme:            "amber",
    iconName:         "lungs",
    order:            1,
    active:           true,
  },
  {
    _id:              "programme-parkinsons",
    _type:            "programme",
    title:            "Waveney Skylarks",
    slug:             { _type: "slug", current: "parkinsons" },
    shortDescription: "Sing to Beat Parkinson's sessions in Halesworth and Lowestoft — evidence-based singing to help manage motor symptoms and boost wellbeing.",
    badgeLabel:       "Parkinson's disease",
    theme:            "teal",
    iconName:         "accessible",
    order:            2,
    active:           true,
  },
  {
    _id:              "programme-dementia",
    _type:            "programme",
    title:            "Music & Dementia",
    slug:             { _type: "slug", current: "dementia" },
    shortDescription: "Weekly music sessions at The Seagull Theatre for people living with dementia and their carers — connecting through melody and memory.",
    badgeLabel:       "Dementia",
    theme:            "purple",
    iconName:         "brain",
    order:            3,
    active:           true,
  },
];

async function run() {
  console.log("Seeding programmes into project:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  const tx = client.transaction();
  programmes.forEach((p) => tx.createOrReplace(p));
  await tx.commit();
  console.log("✓ Programmes seeded");
}

run().catch((err) => { console.error(err); process.exit(1); });
