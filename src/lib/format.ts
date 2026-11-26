import { TOPIC_META } from '../consts';

const WORDS_PER_MINUTE = 220;

const shortDate = new Intl.DateTimeFormat('en-PH', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

const longDate = new Intl.DateTimeFormat('en-PH', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export function formatDate(date: Date): string {
  return shortDate.format(date);
}

export function formatLongDate(date: Date): string {
  return longDate.format(date);
}

/** Reading time in whole minutes, never less than one. */
export function readingTime(body: string | undefined): number {
  const words = body?.trim().split(/\s+/).filter(Boolean).length ?? 0;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function tagSlug(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function tagLabel(tag: string): string {
  return TOPIC_META[tag]?.label ?? tag.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}
