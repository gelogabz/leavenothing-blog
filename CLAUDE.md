# LeaveNothing — project instructions

A personal nature-conservation journal for the Philippines. Astro static site, hand-written CSS,
the author's own photography. This file covers working conventions; product state lives in
`claude-contexts/features.md`.

## Stack

- Astro 7, static output, no UI framework, no adapter
- Content collections + Markdown for essays
- `astro:assets` + Sharp for responsive WebP
- Self-hosted Fontsource variable fonts: Newsreader (display), Inter (UI)
- `@astrojs/rss`, `@astrojs/sitemap`
- Plain TypeScript for helpers; small inline scripts only
- Deployed to GitHub Pages at `/leavenothing-blog/` via `.github/workflows/deploy.yml`

Do not reintroduce Bootstrap, jQuery, Materialize, client-side auth, or localStorage CRUD.

## Structure

```
src/pages/            routes (file-based)
src/layouts/          BaseLayout.astro (head, header, footer, reveal observer)
src/components/       Header, Footer, Newsletter, SEO, PostCard, JournalRow, PhotoGallery
src/content/blog/     one Markdown file per essay
src/content.config.ts blog schema
src/data/photos.ts    photo metadata (alt, caption, topic, featured)
src/lib/format.ts     dates, reading time, tag slugs/labels
src/styles/global.css design tokens + all styles
src/assets/photography/ 35 source JPGs
```

## Design system (overrides the workspace Suger system)

This project intentionally does **not** use the Suger navy/orange/Lexend palette. It is a nature
journal: warm paper, forest ink, rust accent, serif display type.

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#f5f2e9` | `#0d1310` |
| `--surface` | `#fbf9f3` | `#131b16` |
| `--text` | `#161c18` | `#eef1e8` |
| `--muted` | `#5a665d` | `#9aa79b` |
| `--brand` | `#1e3a2c` | `#b7d3b8` |
| `--accent` | `#9c4623` | `#e3a07c` |
| `--footer-bg` | `#14251b` | `#080d0a` |

Rules:

- All colours go through tokens in `src/styles/global.css`. No hard-coded hex in components except
  the light-on-image text in the hero/lightbox, which uses fixed cream values by design.
- Type scale uses `--step-*` clamps. Do not add ad-hoc font sizes.
- Spacing uses `--gutter`, `--section-y`, and rem increments.
- Radius is 2px. Do not add rounded cards.
- Every interactive element needs a visible focus state and a ≥44px touch target where it is a
  primary control.
- Motion must be disabled or neutralised under `prefers-reduced-motion: reduce`.

## Internal links

GitHub Pages serves this project from a subpath (`/leavenothing-blog/`), so never hard-code a
root-relative link. Import the helper:

```astro
import { url } from '../lib/url';

<a href={url('/blog/')}>Journal</a>
```

`url()` prefixes `import.meta.env.BASE_URL`. `astro:assets` already handles image URLs. If the
site moves to a custom domain, remove `base` from `astro.config.mjs`; `url()` keeps working
because the base becomes `''`.

## Content conventions
- One essay per Markdown file in `src/content/blog/`; filename = URL slug.
- Frontmatter is validated in `src/content.config.ts`. Required: `title`, `description`,
  `pubDate`, `heroImage`, `heroAlt`, `tags`.
- Use `draft: true` to exclude a post everywhere (build, RSS, sitemap).
- Tags must be lowercase slugs. Canonical topics live in `TOPIC_META` in `src/consts.ts`; unknown
  tags still build but get a generated label.
- Hero and gallery images are imported from `src/assets/photography/` with relative paths.
- Alt text is mandatory and describes the image, not the caption. Captions are optional and
  editorial.

## Writing style

- First person, plain, specific. No marketing voice, no "untouched paradise".
- Prefer concrete nouns and named places over abstractions.
- Do not invent statistics, quotes, or sources. If a claim needs a source, link a real one.
- No fake testimonials, partner logos, or contact details.

## Photography rules

- Photos are the author's. Do not substitute stock or Unsplash imagery.
- No AI-generated imagery on this site.
- Do not add exact coordinates or geotags for fragile locations.
- New photos: add the file to `src/assets/photography/`, then add an entry to `meta` in
  `src/data/photos.ts` (alt, caption, topic, optional `featured`).

## Accessibility and performance baseline

- No horizontal overflow at 320–1440px.
- One `<h1>` per page; heading levels do not skip.
- All images have width/height or an aspect ratio to prevent layout shift.
- Below-the-fold images lazy-load; the hero is eager with `fetchpriority="high"`.
- Keep client JS small and inline. No new runtime dependencies without a clear reason.

## Placeholders

- `SITE.email` is a personal Gmail address; replace before launch.
- Newsletter falls back to mailto until `PUBLIC_NEWSLETTER_ENDPOINT` is configured.
- Contact form builds a readable `mailto:` (subject + body) until `PUBLIC_CONTACT_ENDPOINT` is set.
- Seed essays carry illustrative 2026 dates.

## Deployment

- GitHub Pages project site: `https://gelogabz.github.io/leavenothing-blog/`
- `site` and `base` are set in `astro.config.mjs`; Pages source must be **GitHub Actions**
- Workflow: `.github/workflows/deploy.yml`, runs on push to `main`

## Maintenance

After any change:

1. Update this file if conventions, structure, or stack change.
2. Update `claude-contexts/features.md` if a feature is added, removed, or changed.
3. Copy both to `../claude-md-files-backup/` using the filenames in the workspace CLAUDE.md table.
4. Run `npm run check` and `npm run build` before declaring the work done.
