import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'journal'>;

type DateOrder = 'oldest-first' | 'newest-first';

interface GetPostsOptions {
  order?: DateOrder;
}

/**
 * Published essays from the journal collection.
 *
 * Drafts are excluded here so no page has to remember the filter, and every
 * listing gets the same deterministic ordering.
 */
export async function getPublishedPosts({ order = 'newest-first' }: GetPostsOptions = {}) {
  const posts = await getCollection('journal', ({ data }) => !data.draft);
  const direction = order === 'newest-first' ? -1 : 1;

  return posts.sort(
    (a, b) => direction * (a.data.pubDate.valueOf() - b.data.pubDate.valueOf())
  );
}
