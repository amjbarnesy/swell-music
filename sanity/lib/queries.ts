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

// ─── Sessions ─────────────────────────────────────────────────────────────────
export const ALL_SESSIONS_QUERY = `
  *[_type == "session" && active == true] | order(programme asc, day asc){
    _id, programme, location, address, day, time, lat, lng, notes
  }
`;

export const SESSIONS_BY_PROGRAMME_QUERY = `
  *[_type == "session" && active == true && programme == $programme] | order(day asc){
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

// ─── News ─────────────────────────────────────────────────────────────────────
export const NEWS_INDEX_QUERY = `
  *[_type == "newsPost"] | order(publishedAt desc){
    _id, title, "slug": slug.current, publishedAt, excerpt, author,
    "coverImage": coverImage.asset->url,
    "coverImageAlt": coverImage.alt
  }
`;

export const NEWS_ARTICLE_QUERY = `
  *[_type == "newsPost" && slug.current == $slug][0]{
    title, "slug": slug.current, publishedAt, excerpt, author, body,
    "coverImage": coverImage.asset->url,
    "coverImageAlt": coverImage.alt
  }
`;

export const NEWS_SLUGS_QUERY = `
  *[_type == "newsPost"]{ "slug": slug.current }
`;
