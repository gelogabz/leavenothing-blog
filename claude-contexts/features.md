# LeaveNothing — feature inventory

Current state of the rebuilt Astro site. Replaces the 2022 static HTML/Bootstrap site.

## Pages

| Feature | Status | Where |
|---|---|---|
| Home page with photographic hero | Done | `src/pages/index.astro` |
| Intro statement + stats (essays, photos, subjects) | Done | `src/pages/index.astro` |
| Featured essay block | Done | `src/pages/index.astro` |
| Recent essay cards | Done | `src/pages/index.astro` |
| Photo strip (6 featured images) | Done | `src/pages/index.astro` |
| Subject index with counts | Done | `src/pages/index.astro`, `/topics/` |
| About teaser + author section | Done | `src/pages/index.astro`, `/about/` |
| Journal archive | Done | `src/pages/journal/index.astro` |
| Essay template: hero, TOC, prose, gallery, tags, prev/next, related | Done | `src/pages/journal/[slug].astro` |
| Tag pages (one per used tag) | Done | `src/pages/tags/[tag].astro` |
| Photography archive with filters | Done | `src/pages/photography.astro`, `src/components/PhotoGallery.astro` |
| Photo lightbox | Done | Native `<dialog>` in `PhotoGallery.astro` |
| Resources / source list | Done | `src/pages/resources.astro` |
| Contact page + form | Done (readable mailto fallback) | `src/pages/contact.astro` |
| FAQ accordion | Done | `src/pages/faq.astro` |
| 404 page | Done | `src/pages/404.astro` |
| RSS feed | Done | `src/pages/rss.xml.ts` |
| Sitemap | Done | `@astrojs/sitemap` |
| Dark/light theme with system preference + toggle | Done | `src/layouts/BaseLayout.astro`, `Header.astro` |
| Mobile menu | Done | `Header.astro` |
| Reveal-on-scroll | Done | `BaseLayout.astro` |
| Footer cross-link to the portfolio | Done | `Footer.astro` — links to `gelogabz.github.io/gelobaring-intro/` |

## Content

- 10 essays, original copy; six carry a 3-image gallery, the rest carry one, seven, eight, and nine.
- 69 photographs with alt text, captions, and topic classification.
- Topic metadata for 8 subjects: forests, coasts, wildlife, climate, people, photography,
  philippines, architecture.
- Photography filters for 11 subjects: mountains, forest, coast, water, plants, people, pets,
  flowers, built, churches, sky.
- Resources: 16 external links across government, data, organisations, and practice.

## Removed from the legacy site

- Bootstrap 5 + Bootstrap 4 + jQuery + Materialize (conflicting stacks)
- Fake member authentication and localStorage CRUD (`MembersLounge.js`)
- Fake testimonials and Unsplash portraits
- Partner logos without documented permission
- Placeholder addresses, phone numbers, and emails
- Dead links (`Accounts.html`) and Google Drive video embeds
- Newsletter and contact forms that posted nowhere

## Deployment

- GitHub Pages project site: `https://gelogabz.github.io/leavenothing-blog/`
- `astro.config.mjs`: `site: 'https://gelogabz.github.io'`, `base: '/leavenothing-blog'`
- Workflow: `.github/workflows/deploy.yml` — `withastro/action@v6` + `actions/deploy-pages@v5`
- Triggers on push to `main` and manual dispatch
- GitHub Pages source must be set to **GitHub Actions**
- All internal links go through `src/lib/url.ts` (`url()`), which prefixes the base

## Configuration points

- `SITE` in `src/consts.ts`: name, domain, title, description, author, email, OG image.
- `NAV` in `src/consts.ts`: primary navigation.
- `TOPIC_META` in `src/consts.ts`: topic labels and blurbs.
- `PUBLIC_NEWSLETTER_ENDPOINT`: enables the real newsletter form.
- `PUBLIC_CONTACT_ENDPOINT`: enables the real contact form POST.

## Known gaps

- Newsletter endpoint is not configured; it uses a mailto fallback.
- Contact endpoint is not configured; the form composes a `mailto:` with subject and body.
- Email is a personal Gmail address.
- Seed post dates are illustrative.
- No analytics (intentional).
- No comments (intentional).
- Search (Pagefind) not implemented.

## Verification

- `npm run check`: 0 errors, 0 warnings.
- `npm run build`: 22 pages + RSS + sitemap.
- Built output uses `/leavenothing-blog/` for every internal link and asset.
- Chromium crawl at 390px and 1440px: no horizontal overflow, no console errors, no broken links.
- Light and dark themes checked on home, journal, essay, and archive.
- Contact submit triggers a `mailto:` with encoded subject and body.
