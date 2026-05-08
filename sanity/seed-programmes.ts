/**
 * Seeds the three core programmes into Sanity (including all page content).
 * Safe to re-run — uses createOrReplace.
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

function block(text: string) {
  return {
    _type: "block",
    _key: Math.random().toString(36).slice(2),
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: Math.random().toString(36).slice(2), text, marks: [] }],
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const programmes: any[] = [
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
    pageTitle:        "Breathe better. Live better.",
    pageDescription:  "BLF-accredited group singing sessions that strengthen breathing, reduce isolation, and improve quality of life for people living with COPD and other lung conditions.",
    accreditation:    "BLF Accredited",
    features: [
      { _type: "feature", _key: "f1", title: "Breathing exercises through song",  description: "Specially designed vocal exercises strengthen the respiratory muscles and improve breath control." },
      { _type: "feature", _key: "f2", title: "Peer support and community",        description: "Share experiences with others who understand. Many participants say the friendships are as valuable as the music." },
      { _type: "feature", _key: "f3", title: "Weekly, drop-in format",            description: "No commitment, no booking. Come when you can. Each session stands alone." },
    ],
    whoFor: [
      "People with COPD or bronchiectasis",
      "Anyone with a long-term lung condition",
      "Those recovering from chest surgery or illness",
      "Carers and family members are welcome",
    ],
    evidenceHeading: "Clinically grounded",
    evidenceBody: [
      block("The Singing for Lung Health programme is accredited by the British Lung Foundation (BLF). Clinical studies have shown group singing can improve lung function, exercise capacity, and psychological wellbeing in people with COPD (Lord et al., 2010; Skingley et al., 2014). Helen Hayes is a fully trained BLF Singing for Lung Health practitioner."),
    ],
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
    pageTitle:        "Music that moves with you.",
    pageDescription:  "Evidence-based group singing sessions for people living with Parkinson's disease, led by a certified Sing to Beat Parkinson's practitioner. Running in Halesworth and Lowestoft.",
    accreditation:    "Sing to Beat Parkinson's",
    features: [
      { _type: "feature", _key: "f1", title: "Rhythmic entrainment",  description: "Music with a strong beat helps the brain regulate movement — a proven approach for managing Parkinson's motor symptoms." },
      { _type: "feature", _key: "f2", title: "Group vocal work",       description: "Singing strengthens the voice, improves swallowing function, and builds lung capacity — areas often affected by Parkinson's." },
      { _type: "feature", _key: "f3", title: "Peer connection",        description: "A community of people who truly understand. Carers and partners are warmly welcome." },
    ],
    whoFor: [],
    evidenceHeading: "Clinically grounded",
    evidenceBody: [
      block("Sing to Beat Parkinson's is a programme developed with leading Parkinson's researchers. Studies show group singing can improve vocal loudness, breath support, and motor function (Haneishi, 2001; Elefant et al., 2012). Helen Hayes is a trained and certified Sing to Beat Parkinson's leader."),
    ],
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
    pageTitle:        "Music holds what memory can't.",
    pageDescription:  "Weekly sessions at The Seagull Theatre in Lowestoft for people living with dementia and their carers. Connecting through the songs that last a lifetime.",
    accreditation:    undefined,
    features: [
      { _type: "feature", _key: "f1", title: "Music and memory",     description: "Familiar songs unlock memories and emotions that other therapies cannot reach — a well-established benefit of music for dementia." },
      { _type: "feature", _key: "f2", title: "Emotional wellbeing",  description: "Music reduces agitation and anxiety. Participants often arrive withdrawn and leave with smiles — every single week." },
      { _type: "feature", _key: "f3", title: "Carers included",      description: "Sessions are designed for the person and their carer together, offering respite, joy, and shared connection." },
    ],
    whoFor: [],
    evidenceHeading: "Why music works for dementia",
    evidenceBody: [
      block("Music for dementia is supported by extensive research showing that musical memory is preserved even in advanced dementia (Jacobsen et al., 2015). The Music & Memory and Music for Dementia campaigns have brought this evidence to national attention. Helen Hayes is a trained dementia music specialist who adapts each session to the group's needs."),
    ],
  },
];

async function run() {
  console.log("Seeding programmes into project:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  const tx = client.transaction();
  programmes.forEach((p) => tx.createOrReplace(p));
  await tx.commit();
  console.log("✓ Programmes seeded with full page content");
}

run().catch((err) => { console.error(err); process.exit(1); });
