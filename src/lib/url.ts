/**
 * Prefix a root-relative path with the Astro `base` value.
 *
 * GitHub Pages project sites are served from `/<repo>/`, so every internal
 * link must include that prefix. `import.meta.env.BASE_URL` is `/` in local
 * dev unless a base is configured, and always ends with a slash.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path: string): string {
  if (!path.startsWith('/')) return path;
  return `${BASE}${path}`;
}

/** Strip the configured base from a pathname so route comparisons stay simple. */
export function stripBase(pathname: string): string {
  if (!BASE || !pathname.startsWith(BASE)) return pathname;
  return pathname.slice(BASE.length) || '/';
}
