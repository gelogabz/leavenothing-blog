import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

import { SITE } from '../consts';
import { getPublishedPosts } from '../lib/posts';
import { url } from '../lib/url';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  const site = new URL(import.meta.env.BASE_URL, context.site ?? SITE.url);

  return rss({
    title: SITE.title,
    description: SITE.description,
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: url(`/journal/${post.id}/`),
      categories: post.data.tags,
      author: SITE.email,
    })),
    customData: '<language>en-ph</language>',
  });
}
