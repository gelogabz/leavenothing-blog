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

## Automation

Two primary agents and one skill support the editorial workflow. They are configuration, not
code — do not inline their rules elsewhere.

These live in the **global OpenCode config**, not in this repo. Nothing is committed, and
the project has no `.opencode/` directory by design.

| Artifact | Path | Purpose |
|---|---|---|
| `leavenothing-essay` skill | `~/.config/opencode/skills/leavenothing-essay/SKILL.md` | Voice, standards, fact discipline, output contract. Single source of truth for essay writing |
| `journal-writer` agent | `~/.config/opencode/agents/journal-writer.md` | End-to-end post workflow: read photos, research, draft, catalogue, verify |
| `site-maintainer` agent | `~/.config/opencode/agents/site-maintainer.md` | Site upkeep: components, styles, routes, build health, docs |

Because they are global, both agents load in every project. Each opens with a scope check
that stops if the working directory is not this site. Keep that guard if the prompts are
ever edited.

Both agents deny all `git` shell commands, and neither may edit `.github/workflows/`. The
essay skill is loaded by the writer agent at runtime; when editing prose in the main thread,
load it directly rather than paraphrasing it.

The writing standards derive from *The Blogsmith Style Guide*, craft chapters only, with the
journal's own rejections recorded at the end of the skill file (no second person, no closing
call to action, sentence case, no SEO keyword structure).

## Structure

```
src/pages/            routes (file-based)
src/layouts/          BaseLayout.astro (head, header, footer, theme bootstrap)
src/components/       Header, Footer, Newsletter, SEO, PostCard, JournalRow, PhotoGallery
src/content/journal/     one Markdown file per essay
src/content.config.ts journal schema
src/data/photos.ts    photo metadata (alt, caption, topic, featured)
src/lib/format.ts     dates, reading time, tag slugs/labels
src/lib/posts.ts      published-post queries (single source for drafts + ordering)
src/lib/topics.ts     topic grouping for home and topics index
src/styles/global.css design tokens + all styles
src/assets/photography/ 69 source JPGs
```

## Design system (overrides the workspace Suger system)

This project intentionally does **not** use the Suger navy/orange/Lexend palette. It is a nature
journal: warm paper, forest ink, oxidised-green accent, serif display type.

| Token         | Light     | Dark      |
| ------------- | --------- | --------- |
| `--bg`        | `#f5f2e9` | `#0d1310` |
| `--surface`   | `#fbf9f3` | `#131b16` |
| `--text`      | `#161c18` | `#eef1e8` |
| `--muted`     | `#5a665d` | `#9aa79b` |
| `--brand`     | `#1e3a2c` | `#b7d3b8` |
| `--accent`    | `#2f6b5a` | `#86c9aa` |
| `--footer-bg` | `#14251b` | `#080d0a` |

Rules:

- All colours go through tokens in `src/styles/global.css`. No hard-coded hex in components except
  the light-on-image text in the hero/lightbox, which uses fixed cream values by design.
- Type scale uses `--step-*` clamps. Do not add ad-hoc font sizes.
- Every heading needs an explicit `--step-*` size. A bare `h1`–`h4` falls back to the browser's
  1.5em default, which silently breaks the scale.
- `.prose` sets `grid-column: 2` for the post layout. Any single-column container that reuses it
  must reset the column explicitly.
- Spacing uses `--gutter`, `--section-y`, and rem increments.
- Radius is 2px. Do not add rounded cards.
- Labels are sentence case. No uppercase micro-labels, no letter-spacing on labels, and no
  coloured single word inside a headline. Hierarchy comes from size, weight, and space.
- Motion is one orchestrated entrance on the home hero, and nothing else. No per-section
  reveal or fade-up patterns.
- Every interactive element needs a visible focus state and a ≥44px touch target where it is a
  primary control.
- Motion must be disabled or neutralised under `prefers-reduced-motion: reduce`.
- Numbered markers are only used where the content is genuinely ordered (topic rank, the
  working-principles list). Do not number sections just to number them.

## Internal links

GitHub Pages serves this project from a subpath (`/leavenothing-blog/`), so never hard-code a
root-relative link. Import the helper:

```astro
import { url } from '../lib/url';

<a href={url('/journal/')}>Journal</a>
```

`url()` prefixes `import.meta.env.BASE_URL`. `astro:assets` already handles image URLs. If the
site moves to a custom domain, remove `base` from `astro.config.mjs`; `url()` keeps working
because the base becomes `''`.

## Content conventions

- One essay per Markdown file in `src/content/journal/`; filename = URL slug.
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

## Cross-links

- The footer links out to the portfolio at `https://gelogabz.github.io/gelobaring-intro/`
  (Off the Clock page). This is the one deliberate exception to the site's standalone rule:
  a plain personal link, no Suger logo, masthead, or nav pattern.
- Keep it in `src/components/Footer.astro`, in `.footer-bottom`. It opens in a new tab with
  `rel="noopener noreferrer"` and a `sr-only` new-tab note.

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
