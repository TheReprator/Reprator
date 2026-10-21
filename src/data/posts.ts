/**
 * Blog content lives in `/blog/posts`, one JSON file per post.
 *
 * The file name becomes the URL slug. Adding a new JSON file is all that is
 * needed for Astro to generate its page, include it in the archive and RSS
 * feed, and recalculate pagination.
 */
export type PostBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'heading'; content: string }
  | { type: 'quote'; content: string; cite?: string }
  | { type: 'list'; items: string[] };

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: PostBlock[];
}

type PostSource = Omit<Post, 'slug'>;

export const POSTS_PER_PAGE = 10;

const postModules = import.meta.glob<PostSource>('../../blog/posts/*.json', {
  eager: true,
  import: 'default'
});

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim().length > 0;

function validateBlock(block: unknown, path: string, index: number): PostBlock {
  if (!block || typeof block !== 'object') {
    throw new Error(`${path}: body[${index}] must be an object.`);
  }

  const candidate = block as Record<string, unknown>;
  const type = candidate.type;

  if (type === 'paragraph' || type === 'heading' || type === 'quote') {
    if (!isNonEmptyString(candidate.content)) {
      throw new Error(`${path}: body[${index}].content is required.`);
    }

    if (type === 'quote' && candidate.cite !== undefined) {
      if (!isNonEmptyString(candidate.cite)) {
        throw new Error(`${path}: body[${index}].cite must be a non-empty string.`);
      }

      return { type, content: candidate.content, cite: candidate.cite };
    }

    return { type, content: candidate.content };
  }

  if (type === 'list') {
    if (
      !Array.isArray(candidate.items) ||
      candidate.items.length === 0 ||
      !candidate.items.every(isNonEmptyString)
    ) {
      throw new Error(
        `${path}: body[${index}].items must be a non-empty array of strings.`
      );
    }

    return { type, items: candidate.items };
  }

  throw new Error(
    `${path}: body[${index}].type must be "paragraph", "heading", "quote", or "list".`
  );
}

function validatePost(source: unknown, path: string): PostSource {
  if (!source || typeof source !== 'object') {
    throw new Error(`${path}: a post must be a JSON object.`);
  }

  const candidate = source as Record<string, unknown>;

  if (!isNonEmptyString(candidate.title)) {
    throw new Error(`${path}: "title" is required.`);
  }

  const parsedDate = isNonEmptyString(candidate.date)
    ? new Date(`${candidate.date}T12:00:00Z`)
    : null;

  if (
    !isNonEmptyString(candidate.date) ||
    !/^\d{4}-\d{2}-\d{2}$/.test(candidate.date) ||
    !parsedDate ||
    Number.isNaN(parsedDate.getTime()) ||
    parsedDate.toISOString().slice(0, 10) !== candidate.date
  ) {
    throw new Error(`${path}: "date" must be a valid YYYY-MM-DD date.`);
  }

  if (!isNonEmptyString(candidate.excerpt)) {
    throw new Error(`${path}: "excerpt" is required.`);
  }

  if (!Array.isArray(candidate.body) || candidate.body.length === 0) {
    throw new Error(`${path}: "body" must be a non-empty array of blocks.`);
  }

  return {
    title: candidate.title,
    date: candidate.date,
    excerpt: candidate.excerpt,
    body: candidate.body.map((block, index) =>
      validateBlock(block, path, index)
    )
  };
}

const postsWithSlugs = Object.entries(postModules).map(([path, source]) => {
  const fileSlug = path.split('/').pop()?.replace(/\.json$/, '') ?? '';

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(fileSlug)) {
    throw new Error(
      `${path}: the file name must be a lowercase, hyphenated slug.`
    );
  }

  return { ...validatePost(source, path), slug: fileSlug };
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
    previous: sortedPosts[index + 1],
    next: sortedPosts[index - 1]
  };
}
