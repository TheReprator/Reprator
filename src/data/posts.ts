/**
 * Blog content lives in `/blog/posts`, one folder per post.
 *
 * blog/posts/my-post/index.astro
 * → /posts/my-post/
 *
 * A post is a normal Astro component: write HTML, import images, and export
 * its title, date, and excerpt from the frontmatter. No Markdown or JSON.
 */
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  Content: AstroComponentFactory;
}

type PostSource = Omit<Post, 'slug' | 'Content'>;
type PostModule = PostSource & { default: AstroComponentFactory };

export const POSTS_PER_PAGE = 10;

const postModules = import.meta.glob<PostModule>('../../blog/posts/*/index.astro', {
  eager: true
});

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim().length > 0;

function validatePost(source: unknown, path: string): PostSource {
  if (!source || typeof source !== 'object') {
    throw new Error(`${path}: a post must be an Astro component.`);
  }

  const candidate = source as Record<string, unknown>;

  if (!isNonEmptyString(candidate.title)) {
    throw new Error(`${path}: export a non-empty "title".`);
  }

  if (!isNonEmptyString(candidate.date)) {
    throw new Error(`${path}: export a "date" in YYYY-MM-DD format.`);
  }

  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(candidate.date) ||
    Number.isNaN(new Date(`${candidate.date}T12:00:00Z`).getTime()) ||
    new Date(`${candidate.date}T12:00:00Z`).toISOString().slice(0, 10) !==
      candidate.date
  ) {
    throw new Error(`${path}: "date" must be a valid YYYY-MM-DD date.`);
  }

  if (!isNonEmptyString(candidate.excerpt)) {
    throw new Error(`${path}: export a non-empty "excerpt".`);
  }

  if (typeof candidate.default !== 'function') {
    throw new Error(`${path}: the post component could not be loaded.`);
  }

  return {
    title: candidate.title,
    date: candidate.date,
    excerpt: candidate.excerpt
  };
}

const postsWithSlugs = Object.entries(postModules).map(([path, module]) => {
  const segments = path.split('/');
  const fileSlug = segments[segments.length - 2] ?? '';

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(fileSlug)) {
    throw new Error(
      `${path}: the post folder must be a lowercase, hyphenated slug.`
    );
  }

  return {
    ...validatePost(module, path),
    slug: fileSlug,
    Content: module.default
  };
});

const duplicate = postsWithSlugs.find(
  (post, index) =>
    postsWithSlugs.findIndex((candidate) => candidate.slug === post.slug) !==
    index
);

if (duplicate) {
  throw new Error(`Duplicate post slug: ${duplicate.slug}`);
}

const sortedPosts = [...postsWithSlugs].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getAllPosts(): Post[] {
  return sortedPosts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return sortedPosts.find((post) => post.slug === slug);
}

export function getPageCount(): number {
  return Math.max(1, Math.ceil(sortedPosts.length / POSTS_PER_PAGE));
}

export function getPostsForPage(page: number): Post[] {
  const start = (page - 1) * POSTS_PER_PAGE;
  return sortedPosts.slice(start, start + POSTS_PER_PAGE);
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(`${date}T12:00:00Z`));
}

export function getAdjacentPosts(slug: string): { previous?: Post; next?: Post } {
  const index = sortedPosts.findIndex((post) => post.slug === slug);
  if (index === -1) return {};

  return {
    previous: sortedPosts[index - 1],
    next: sortedPosts[index + 1]
  };
}
