import { TOPIC_META } from '../consts';

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-PH', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

export function formatLongDate(date: Date): string {
  return new Intl.DateTimeFormat('en-PH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function readingTime(body: string | undefined): number {
  const words = body?.trim().split(/\s+/).filter(Boolean).length ?? 0;
  return Math.max(1, Math.round(words / 220));
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
