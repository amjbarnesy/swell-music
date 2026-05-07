/**
 * Seed script — creates initial Sanity documents from hardcoded content.
 * Run ONCE after you've set up your Sanity project:
 *
 *   npx tsx sanity/seed.ts
 *
 * Requires NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_TOKEN in .env.local
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

// ─── Page headers ─────────────────────────────────────────────────────────────
const pageHeaders = [
  { page: "homepage",       eyebrow: "East Suffolk · Free for all",        heading: "Music that heals, connects, and changes lives.", highlightWord: "heals",   subheading: "Free weekly sessions for people living with lung conditions, Parkinson's, dementia, and neurodivergent communities across Suffolk and Norfolk. No experience needed. Always free." },
  { page: "about",          eyebrow: "Who we are",                          heading: "About Swell Music CIC",                          highlightWord: null,      subheading: "Swell Music CIC is a Community Interest Company founded in 2020 and based in East Suffolk. We run free weekly music sessions for people living with lung conditions, Parkinson's disease, dementia, and neurodivergent communities across Suffolk and Norfolk." },
  { page: "our-work",       eyebrow: "What we do",                          heading: "Our work",                                        highlightWord: null,      subheading: "Four specialist programmes, grounded in clinical evidence, delivered by trained practitioners across Suffolk and Norfolk." },
  { page: "lung-health",    eyebrow: "Singing for Lung Health",             heading: "Breathe better. Live better.",                    highlightWord: null,      subheading: "BLF-accredited group singing sessions that strengthen breathing, reduce isolation, and improve quality of life for people living with COPD and other lung conditions." },
  { page: "parkinsons",     eyebrow: "Waveney Skylarks",                    heading: "Music that moves with you.",                      highlightWord: null,      subheading: "Evidence-based group singing for people living with Parkinson's disease. Running in Halesworth and Lowestoft." },
  { page: "dementia",       eyebrow: "Music & Dementia",                    heading: "Music holds what memory can't.",                  highlightWord: null,      subheading: "Weekly sessions at The Seagull Theatre in Lowestoft for people living with dementia and their carers." },
  { page: "wired-sounds",   eyebrow: "Wired Sounds Festival",               heading: "Music made differently.",                         highlightWord: null,      subheading: "An annual neurodivergent-friendly music festival celebrating the creativity and talent of neurodiverse musicians." },
  { page: "our-impact",     eyebrow: "Evidenced outcomes",                  heading: "Our impact",                                      highlightWord: null,      subheading: null },
  { page: "get-involved",   eyebrow: "Take part",                           heading: "Get involved",                                    highlightWord: null,      subheading: null },
  { page: "find-a-session", eyebrow: "Free, drop-in, no booking",           heading: "Find a session",                                  highlightWord: null,      subheading: "All sessions are free. No booking required — just turn up. If you're unsure which session is right for you, call us on 07917 799456." },
  { page: "refer",          eyebrow: "For health & social care professionals", heading: "Refer someone to our sessions.",              highlightWord: null,      subheading: "Free for all participants. No waiting list. Sessions are drop-in." },
  { page: "volunteer",      eyebrow: "Give your time",                      heading: "Volunteer with us",                               highlightWord: null,      subheading: "We're always looking for warm, enthusiastic volunteers to help at sessions. No musical experience needed." },
  { page: "support-us",     eyebrow: "Make a difference",                   heading: "Support our work",                                highlightWord: null,      subheading: "Every session is free because of the generosity of funders and supporters like you. Help us keep it that way." },
  { page: "news",           eyebrow: "Latest",                              heading: "News",                                            highlightWord: null,      subheading: null },
  { page: "contact",        eyebrow: "Get in touch",                        heading: "Contact us",                                      highlightWord: null,      subheading: null },
];

// ─── Hero content ─────────────────────────────────────────────────────────────
const heroContent = {
  _type: "heroContent",
  heroHeading:       "Music that heals, connects, and changes lives.",
  heroHighlightWord: "heals",
  heroSubheading:    "Free weekly sessions for people living with lung conditions, Parkinson's, dementia, and neurodivergent communities across Suffolk and Norfolk. No experience needed. Always free.",
  heroPrimaryCTA:    "Find a session near me",
  heroPrimaryURL:    "/get-involved/find-a-session",
  heroSecondaryCTA:  "See our impact",
  heroSecondaryURL:  "/our-impact",
  heroVideoCaption:  "Real session footage",
};

// ─── Funders ──────────────────────────────────────────────────────────────────
const funders = [
  { name: "Co-op",                        order: 1 },
  { name: "East Suffolk Council",          order: 2 },
  { name: "Suffolk Community Foundation",  order: 3 },
  { name: "Youth Music",                   order: 4 },
  { name: "Youth Music Incubator",         order: 5 },
  { name: "Adnams Community Trust",        order: 6 },
  { name: "Connected Communities",         order: 7 },
  { name: "Interreg",                      order: 8 },
];

// ─── Sessions ─────────────────────────────────────────────────────────────────
const sessions = [
  { programme: "lung-health", location: "The Seagull Theatre", address: "Morton Road, Lowestoft, NR32 2HY", day: "Tuesday",   time: "2:00pm – 3:30pm",   lat: 52.475, lng: 1.755, notes: "Free, drop-in. No booking needed.", active: true },
  { programme: "parkinsons",  location: "Halesworth Community Centre", address: "Quay Street, Halesworth, IP19 8ET", day: "Wednesday", time: "11:00am – 12:30pm", lat: 52.349, lng: 1.503, notes: "Carers and partners welcome.", active: true },
  { programme: "parkinsons",  location: "The Seagull Theatre", address: "Morton Road, Lowestoft, NR32 2HY", day: "Friday",    time: "2:00pm – 3:30pm",   lat: 52.475, lng: 1.755, notes: "Carers and partners welcome.", active: true },
  { programme: "dementia",    location: "The Seagull Theatre", address: "Morton Road, Lowestoft, NR32 2HY", day: "Thursday",  time: "10:30am – 12:00pm", lat: 52.475, lng: 1.755, notes: "People with dementia and their carers.", active: true },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  { quote: "I never thought singing could make me feel this way. I breathe better, I sleep better, and I have friends again.", attribution: "Margaret, 72 · Singing for Lung Health", programme: "lung-health", approved: true, featured: true },
  { quote: "Coming to Skylarks is the highlight of my week. The music helps my body in ways my medication just can't.",         attribution: "Robert, 68 · Waveney Skylarks",          programme: "parkinsons",  approved: true, featured: true },
  { quote: "Mum lights up the moment the music starts. She remembers songs she's known for decades. It's magical to witness.", attribution: "Family carer · Music & Dementia at The Seagull", programme: "dementia", approved: true, featured: true },
];

// ─── Impact stats ─────────────────────────────────────────────────────────────
const impactStats = [
  { label: "Felt less isolated",        value: 91, unit: "%", description: "Singing for Lung Health participant survey", category: "outcome-bar", programme: "lung-health", order: 1 },
  { label: "Improved mood",             value: 87, unit: "%", description: "All programmes combined",                   category: "outcome-bar", programme: "all",         order: 2 },
  { label: "Would recommend to others", value: 96, unit: "%", description: "All programmes combined",                   category: "outcome-bar", programme: "all",         order: 3 },
  { label: "Easier breathing",          value: 78, unit: "%", description: "Singing for Lung Health cohort",            category: "outcome-bar", programme: "lung-health", order: 4 },
  { label: "Counties",          value: 2,  unit: "",  description: null, category: "reach-card", programme: null, order: 1 },
  { label: "Session locations", value: 6,  unit: "+", description: null, category: "reach-card", programme: null, order: 2 },
  { label: "Sessions per week", value: 5,  unit: "+", description: null, category: "reach-card", programme: null, order: 3 },
];

// ─── Main ─────────────────────────────────────────────────────────────────────
async function seed() {
  console.log("Seeding Sanity project:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

  const tx = client.transaction();

  pageHeaders.forEach((h) => tx.createOrReplace({ _type: "pageHeader", _id: `pageHeader-${h.page}`, ...h }));
  tx.createOrReplace({ _type: "heroContent", _id: "heroContent-homepage", ...heroContent });
  funders.forEach((f, i) => tx.createOrReplace({ _type: "funder", _id: `funder-${i}`, active: true, ...f }));
  sessions.forEach((s, i) => tx.createOrReplace({ _type: "session", _id: `session-${i}`, ...s }));
  testimonials.forEach((t, i) => tx.createOrReplace({ _type: "testimonial", _id: `testimonial-${i}`, ...t }));
  impactStats.forEach((s, i) => tx.createOrReplace({ _type: "impactStat", _id: `impactStat-${i}`, ...s }));

  await tx.commit();
  console.log("✓ Seed complete");
}

seed().catch((err) => { console.error(err); process.exit(1); });
