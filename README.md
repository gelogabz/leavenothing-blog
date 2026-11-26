# LeaveNothing

A personal field journal about Philippine nature — forests, coasts, wildlife, climate, and the
people looking after them. Built as a static site with Astro, hand-written CSS, and the author's
own photography.

**Live URL:** `https://gelogabz.github.io/leavenothing-blog/`
**Repository:** `https://github.com/gelogabz/leavenothing-blog`

The site is a GitHub Pages **project site**, so Astro is configured with
`site: 'https://gelogabz.github.io'` and `base: '/leavenothing-blog'`. Every internal link goes
through `url()` in `src/lib/url.ts`, which prefixes the base.

## Stack

| Piece | Choice |
|---|---|
| Framework | Astro 7 (static output, zero client framework) |
| Content | Astro content collections, Markdown |
| Images | `astro:assets` → responsive WebP via Sharp |
| Fonts | Self-hosted Newsreader (display) + Inter (UI) via Fontsource |
| Feeds | `@astrojs/rss`, `@astrojs/sitemap` |
| JS | Small inline scripts only: theme toggle, mobile menu, gallery filter/lightbox, reveal-on-scroll |

No Bootstrap, no jQuery, no analytics, no tracking pixels, no comment system.

## Commands

```bash
npm install
npm run dev        # local dev server
npm run build      # production build to dist/
npm run preview    # preview the built site
npm run check      # Astro + TypeScript diagnostics
```

When using the background dev server pattern:

```bash
astro dev --background
astro dev status
astro dev logs
astro dev stop
```

## Structure

```
src/
  assets/photography/     full-size source photographs (35)
  components/             Header, Footer, Newsletter, SEO, PostCard, JournalRow, PhotoGallery
  content/journal/           Markdown essays (one file per post)
  content.config.ts       journal collection schema
  data/photos.ts          photo metadata: alt text, caption, topic
  layouts/BaseLayout.astro
  lib/format.ts           date, reading time, tag helpers
  lib/posts.ts            published-post queries and ordering
  lib/topics.ts           topic grouping for indexes
  lib/url.ts              base-aware internal link helper
  pages/                  routes
  styles/global.css       design tokens + all component styles
public/                   favicon, OG image
.github/workflows/        GitHub Pages deploy workflow
```

## Writing a post

Add `src/content/journal/<slug>.md`. The filename becomes the URL: `/journal/<slug>/`.

```yaml
---
title: "What the fog hides"
description: "One or two sentences used for cards, meta tags, and the RSS feed."
pubDate: 2026-11-24
# updatedDate: 2026-12-01
# author: "Gelo Baring"          # defaults to Gelo Baring
heroImage: ../../assets/photography/05-pines-in-fog.jpg
heroAlt: "Describe the image for screen readers."
tags: ["forests", "philippines", "climate"]
draft: false
gallery:                         # optional
  - src: ../../assets/photography/11-morning-sun.jpg
    alt: "Sun through morning cloud."
    caption: "Optional caption."
---
```

Known tags live in `src/consts.ts` (`TOPIC_META`) and get labels, blurbs, and `/tags/<slug>/`
pages automatically. Unknown tags still work but fall back to a generated label.

Set `draft: true` to keep a post out of the build, the archive, the RSS feed, and the sitemap.

## Photography

Source images live in `src/assets/photography/` and are imported through `astro:assets`, which
generates responsive WebP variants at build time.

Alt text and captions for the archive live in `src/data/photos.ts`. When adding a photo:

1. Drop the JPG into `src/assets/photography/`.
2. Add an entry to `meta` in `src/data/photos.ts` with `file`, `alt`, `caption`, `topic`.
3. Optionally set `featured: true` to include it in the home-page strip.

The gallery filter and lightbox are in `src/components/PhotoGallery.astro`.

## Configuration

Optional environment variables (set in the host's dashboard, not committed):

| Variable | Effect |
|---|---|
| `PUBLIC_NEWSLETTER_ENDPOINT` | Enables the footer signup form. Without it, the footer shows a mailto fallback. |
| `PUBLIC_CONTACT_ENDPOINT` | Enables the contact form POST. Without it, the form opens the visitor's mail app. |

Site name, description, email, navigation, and topic metadata are in `src/consts.ts`.

## Deployment

Static output, no adapter. GitHub Pages via GitHub Actions.

- Workflow: `.github/workflows/deploy.yml` (uses `withastro/action` and `actions/deploy-pages`)
- Repo settings → **Pages** → **Source: GitHub Actions**
- Every push to `main` builds and deploys

Expected URL: `https://gelogabz.github.io/leavenothing-blog/`

### Internal links and assets

Because this is a project site, root-relative links must include `/leavenothing-blog`. Use the
helper instead of hard-coding paths:

```ts
import { url } from '../lib/url';

url('/journal/'); // "/leavenothing-blog/journal/"
```

`astro:assets` already prefixes generated image URLs. If you add a hard-coded `href="/..."` or
`src="/..."`, it will break in production even though it works in dev.

### Custom domain later

1. Add `public/CNAME` containing the domain.
2. Set `site` to the domain and remove `base` in `astro.config.mjs`.
3. Remove the `url()` prefixes — or keep `url()` and set the base to `''`.

### Other hosts

Cloudflare Pages / Netlify work unchanged if `base` is removed. GitHub Pages is the configured
target right now.
