// ─── Page headers ────────────────────────────────────────────────────────────
export const PAGE_HEADER_QUERY = `
  *[_type == "pageHeader" && page == $page][0]{
    eyebrow, heading, highlightWord, subheading
  }
`;

// ─── Homepage hero ────────────────────────────────────────────────────────────
export const HERO_QUERY = `
  *[_type == "heroContent"][0]{
    heroHeading, heroHighlightWord, heroSubheading,
    heroPrimaryCTA, heroPrimaryURL,
    heroSecondaryCTA, heroSecondaryURL,
    heroVideoUrl, heroVideoCaption
  }
`;

// ─── Funders ──────────────────────────────────────────────────────────────────
export const FUNDERS_QUERY = `
  *[_type == "funder" && active == true] | order(order asc){
    _id, name, url,
    "logoUrl": logo.asset->url,
    "logoAlt": logo.alt
  }
`;

// ─── Programmes ───────────────────────────────────────────────────────────────
export const PROGRAMMES_QUERY = `
  *[_type == "programme" && active != false] | order(order asc){
    _id, title, "slug": slug.current,
    shortDescription, badgeLabel, theme, iconName, locationSummary,
    "featuredImageUrl": featuredImage.asset->url,
    "featuredImageAlt": featuredImage.alt
  }
`;

export const PROGRAMME_SLUGS_QUERY = `
  *[_type == "programme"]{ "slug": slug.current }
`;

export const PROGRAMME_PAGE_QUERY = `
  *[_type == "programme" && slug.current == $slug][0]{
    _id, title, "slug": slug.current,
    shortDescription, badgeLabel, theme, iconName, accreditation,
    pageTitle, pageDescription,
    features[]{ title, description },
    whoFor,
    evidenceHeading, evidenceBody,
    bodyHeading, body,
    "gallery": gallery[]{
      "url": asset->url,
      alt
    }
  }
`;

// ─── Wired Sounds page ────────────────────────────────────────────────────────
export const WIRED_SOUNDS_PAGE_QUERY = `
  *[_type == "wiredSoundsPage"][0]{
    videoUrl,
    "gallery": gallery[]{
      "url": asset->url,
      alt
    },
    bodyHeading,
    body
  }
`;

// ─── Sessions ─────────────────────────────────────────────────────────────────
export const ALL_SESSIONS_QUERY = `
  *[_type == "session" && active != false] | order(order asc, programme asc, day asc){
    _id, programme, location, address, day, time, lat, lng, notes
  }
`;

export const SESSIONS_BY_PROGRAMME_QUERY = `
  *[_type == "session" && active != false && programme == $programme] | order(order asc, day asc){
    _id, programme, location, address, day, time, lat, lng, notes
  }
`;

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const FEATURED_TESTIMONIALS_QUERY = `
  *[_type == "testimonial" && approved == true && featured == true][0...3]{
    _id, quote, attribution, programme
  }
`;

export const TESTIMONIALS_BY_PROGRAMME_QUERY = `
  *[_type == "testimonial" && approved == true && programme == $programme][0...2]{
    _id, quote, attribution
  }
`;

// ─── Impact stats ─────────────────────────────────────────────────────────────
export const OUTCOME_BARS_QUERY = `
  *[_type == "impactStat" && category == "outcome-bar"] | order(order asc){
    _id, label, value, unit, description, programme
  }
`;

export const COUNTERS_QUERY = `
  *[_type == "impactStat" && category == "counter"] | order(order asc){
    _id, label, value, unit
  }
`;

export const REACH_CARDS_QUERY = `
  *[_type == "impactStat" && category == "reach-card"] | order(order asc){
    _id, label, value, unit
  }
`;

// ─── Session locations — derived from sessions for the map ────────────────────
// Each session with lat/lng set appears as a map pin.
// Popup text is derived from programme label + day + time.
export const SESSION_LOCATIONS_QUERY = `
  *[_type == "session" && active != false && defined(lat) && defined(lng)] | order(order asc, location asc){
    _id,
    "name": location,
    address,
    "note": select(
      programme == "lung-health"   => "Singing for Lung Health",
      programme == "parkinsons"    => "Waveney Skylarks (Parkinson's)",
      programme == "dementia"      => "Music & Dementia",
      programme == "wellbeing"     => "Music for Wellbeing",
      programme == "open-access"   => "Open Access",
      programme == "wired-sounds"  => "Wired Sounds",
      programme
    ) + select(defined(day) => " · " + day, "") + select(defined(time) => " · " + time, ""),
    lat,
    lng
  }
`;

// ─── News ─────────────────────────────────────────────────────────────────────
export const NEWS_INDEX_QUERY = `
  *[_type == "newsPost"] | order(publishedAt desc){
    _id, title, "slug": slug.current, publishedAt, excerpt, author, categories,
    "coverImage": coverImage.asset->url,
    "coverImageAlt": coverImage.alt
  }
`;

export const NEWS_ARTICLE_QUERY = `
  *[_type == "newsPost" && slug.current == $slug][0]{
    title, "slug": slug.current, publishedAt, excerpt, author, body, categories,
    "coverImage": coverImage.asset->url,
    "coverImageAlt": coverImage.alt,
    "gallery": gallery[]{
      "url": asset->url,
      alt
    }
  }
`;

export const NEWS_SLUGS_QUERY = `
  *[_type == "newsPost"]{ "slug": slug.current }
`;
