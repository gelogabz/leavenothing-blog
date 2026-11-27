# Site details

Reference for the current LeaveNothing prototype: routes, content, design decisions, and what is
still placeholder.

## Routes

All routes are served under the GitHub Pages base path: `https://gelogabz.github.io/leavenothing-blog/`.
Internal links are generated with `url()` from `src/lib/url.ts`.

| Route | File | Notes |
|---|---|---|
| `/` | `src/pages/index.astro` | Hero, intro, featured post, recent posts, photo strip, topics, about teaser |
| `/journal/` | `src/pages/journal/index.astro` | Lead essay + archive list + subject split |
| `/journal/[slug]/` | `src/pages/journal/[slug].astro` | Essay: hero image, TOC, prose, gallery, tags, prev/next, related |
| `/tags/[tag]/` | `src/pages/tags/[tag].astro` | One page per tag used by a published post |
| `/topics/` | `src/pages/topics/index.astro` | Topic index with counts + latest essays |
| `/photography/` | `src/pages/photography.astro` | Filterable 69-photo archive with lightbox |
| `/about/` | `src/pages/about.astro` | Author, purpose, working principles, collaboration |
| `/resources/` | `src/pages/resources.astro` | Government, data, organisations, practice |
| `/contact/` | `src/pages/contact.astro` | Email + form; without an endpoint, the form composes a readable mailto |
| `/faq/` | `src/pages/faq.astro` | 10 questions, native `<details>` accordion |
| `/404` | `src/pages/404.astro` | Static not-found page |
| `/rss.xml` | `src/pages/rss.xml.ts` | Published posts, newest first |
| `/sitemap-index.xml` | generated | `@astrojs/sitemap` |

## Content inventory

Ten essays, all illustrated with the author's photographs:

| Post | Date | Tags | Hero |
|---|---|---|---|
| `the-dogs-never-asked-permission` | 2026-11-28 | people, philippines, coasts | 46-dog-beach-walk-sunset |
| `a-flower-is-a-tool` | 2026-11-27 | wildlife, philippines, photography | 64-morning-glory-catanduanes |
| `the-walls-are-made-of-weather` | 2026-11-26 | architecture, philippines, people, climate | 40-daraga-church-mayon |
| `the-geometry-of-shelter` | 2026-11-26 | architecture, philippines, people, climate | 13-nmnh-tree-of-life |
| `what-the-fog-hides` | 2026-11-24 | forests, philippines, climate | 05-pines-in-fog |
| `a-mountain-is-not-a-backdrop` | 2026-11-18 | photography, people, philippines | 30-mayon-clear |
| `the-shoreline-remembers` | 2026-11-10 | coasts, climate, people | 23-low-tide |
| `terraces-are-a-technology` | 2026-10-28 | people, philippines, climate | 06-terraces |
| `small-flowers-whole-systems` | 2026-10-14 | wildlife, philippines, photography | 27-rain-lilies |
| `leave-nothing-but-attention` | 2026-09-30 | photography, people, climate | 34-branches-at-dusk |

Six posts carry a three-image gallery from the same photo library. The others vary: `the-geometry-of-shelter` uses one gallery image, `the-dogs-never-asked-permission` seven, `the-walls-are-made-of-weather` eight, `a-flower-is-a-tool` nine. All copy is original
prototype content; no legacy text was carried over verbatim except the name and general mission.

## Photography

69 photographs from the author's own archive. Subjects:
mountain ridges and cloud inversions, pine forest, rice terraces, crater and volcanic lakes,
Mayon, tidal flats, beaches, rain lilies and water lilies, hikers, and a few built scenes
(the Tree of Life dome at the National Museum of Natural History, the Sorsogon Sports Arena), nine churches across Cebu, Cagayan, Siquijor, Albay, and Sorsogon, and a growing set of pets and flowers.

Alt text and captions are stored in `src/data/photos.ts`. Gallery topics: mountains, forest,
coast, water, plants, people, pets, flowers, built, churches, sky.

## Design system

Deliberately overrides the workspace Suger palette. This is a nature journal, not a SaaS product.

| Token | Light | Dark |
|---|---|---|
| Background | `#f5f2e9` (warm paper) | `#0d1310` |
| Surface | `#fbf9f3` | `#131b16` |
| Text | `#161c18` | `#eef1e8` |
| Muted text | `#5a665d` | `#9aa79b` |
| Brand green | `#1e3a2c` | `#b7d3b8` |
| Accent (rust) | `#9c4623` | `#e3a07c` |
| Footer | `#14251b` | `#080d0a` |

- Display type: **Newsreader** (variable, self-hosted)
- UI/body type: **Inter** (variable, self-hosted)
- Layout: 78rem shell, 92rem wide shell, 68ch measure, Swiss rule lines, generous section rhythm
- Radius: 2px (near-square, editorial)
- Motion: reveal-on-scroll, image scale on hover, all disabled under `prefers-reduced-motion`
- Theme: light by default, follows system preference, manual toggle stored in `localStorage`

## Accessibility and performance notes

- Skip link, visible focus rings, semantic landmarks, `aria-current` on nav
- All photographs have descriptive alt text; decorative thumbnails use empty alt
- Lightbox is a native `<dialog>` with Escape support and click-outside close
- Mobile menu closes on link click, Escape, and viewport resize
- No horizontal overflow at 320–1440px (checked in Chromium at 390 and 1440)
- Images served as responsive WebP with width descriptors; hero image is eager + high priority
- Fonts self-hosted, no third-party requests at runtime

## Deployment

- Target: GitHub Pages project site, repo `gelogabz/leavenothing-blog`
- URL: `https://gelogabz.github.io/leavenothing-blog/`
- `astro.config.mjs`: `site: 'https://gelogabz.github.io'`, `base: '/leavenothing-blog'`
- Workflow: `.github/workflows/deploy.yml` (`withastro/action` + `actions/deploy-pages`)
- GitHub setup: **Settings → Pages → Source: GitHub Actions**

## Placeholders and open items

- `SITE.email` is a personal Gmail address. The contact form opens a mail app with a readable
  subject and body; swap in a form endpoint if a hosted form is preferred.
- Newsletter form is a mailto fallback until `PUBLIC_NEWSLETTER_ENDPOINT` is set.
- Contact form posts to `PUBLIC_CONTACT_ENDPOINT` when set; otherwise it builds a `mailto:` URL.
- Social links: GitHub only. Add real profiles or remove.
- Seed essays use illustrative dates in late 2026; adjust to real publication dates.
- No analytics by design. If added, prefer a privacy-first, cookieless option.
