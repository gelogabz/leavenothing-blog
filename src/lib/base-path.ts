/**
 * Pure base-path helpers.
 *
 * GitHub Pages project sites are served from `/<repo>/`, so every internal
 * link must include that prefix. Kept separate from `url.ts` so the logic can
 * be tested without Astro's `import.meta.env`.
 */

/** Prefix a root-relative path with a base. Anything else passes through. */
export function applyBase(base: string, path: string): string {
  if (!path.startsWith('/')) return path;
  return `${base}${path}`;
}

/** Remove a base prefix from a pathname so route comparisons stay simple. */
export function removeBase(base: string, pathname: string): string {
  if (!base) return pathname;
  if (pathname !== base && !pathname.startsWith(`${base}/`)) return pathname;
  return pathname.slice(base.length) || '/';
}
