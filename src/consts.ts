export const SITE = {
  name: "LeaveNothing",
  domain: "leavenothing.org",
  title: "LeaveNothing — Field notes on Philippine nature",
  description:
    "A personal journal about the forests, coasts, wildlife, and people of the Philippines — and the quiet work of keeping them.",
  url: "https://gelogabz.github.io",
  locale: "en_PH",
  author: "Gelo Baring",
  email: "gelobaring19@gmail.com",
  ogImage: "/og-default.jpg",
} as const;

export const NAV = [
  { href: "/blog/", label: "Journal" },
  { href: "/photography/", label: "Photography" },
  { href: "/topics/", label: "Topics" },
  { href: "/resources/", label: "Resources" },
  { href: "/about/", label: "About" },
] as const;

export const SOCIAL = [
  { href: "https://github.com/gelogabz", label: "GitHub" },
] as const;

/** Set PUBLIC_NEWSLETTER_ENDPOINT to enable the footer signup form. */
export const NEWSLETTER_ENDPOINT =
  import.meta.env.PUBLIC_NEWSLETTER_ENDPOINT ?? "";

/** Set PUBLIC_CONTACT_ENDPOINT to enable the contact form. */
export const CONTACT_ENDPOINT = import.meta.env.PUBLIC_CONTACT_ENDPOINT ?? "";

export const TOPIC_META: Record<string, { label: string; blurb: string }> = {
  forests: {
    label: "Forests",
    blurb:
      "Montane pine stands, dipterocarp lowlands, watersheds, and the fog that keeps them alive.",
  },
  coasts: {
    label: "Coasts",
    blurb:
      "Shorelines, tidal flats, reefs, and the thin strip where most Filipinos meet the sea.",
  },
  wildlife: {
    label: "Wildlife",
    blurb:
      "Birds, bats, corals, and the small neighbours we share these islands with.",
  },
  climate: {
    label: "Climate",
    blurb: "How a warming ocean and a changing monsoon reshape everyday life.",
  },
  people: {
    label: "People",
    blurb:
      "Volunteers, rangers, farmers, and communities doing the unglamorous, long-term work.",
  },
  photography: {
    label: "Photography",
    blurb:
      "Field notes on looking closely, travelling lightly, and leaving no trace.",
  },
  philippines: {
    label: "Philippines",
    blurb: "Place, history, and the particular ecology of these 7,600 islands.",
  },
};
