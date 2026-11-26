import { TOPIC_META } from '../consts';
import type { Post } from './posts';

export interface TopicSummary {
  key: string;
  label: string;
  blurb: string;
  posts: Post[];
}

/**
 * Group published posts under the canonical topics, busiest first.
 * Topics with no posts are dropped so indexes never show empty threads.
 */
export function groupPostsByTopic(posts: Post[]): TopicSummary[] {
  return Object.entries(TOPIC_META)
    .map(([key, meta]) => ({
      key,
      ...meta,
      posts: posts.filter((post) => post.data.tags.includes(key)),
    }))
    .filter((topic) => topic.posts.length > 0)
    .sort((a, b) => b.posts.length - a.posts.length);
}
