import { applyBase, removeBase } from './base-path';

/**
 * Base-aware link helpers.
 *
 * `import.meta.env.BASE_URL` is `/` in local dev unless a base is configured,
 * and always ends with a slash. The pure logic lives in `base-path.ts`.
 */
const BASE = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');

export function url(path: string): string {
  return applyBase(BASE, path);
}

/** Strip the configured base from a pathname so route comparisons stay simple. */
export function stripBase(pathname: string): string {
  return removeBase(BASE, pathname);
}
