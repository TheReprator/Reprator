import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { getAllPosts } from '../data/posts';

export const prerender = true;

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export const GET: APIRoute = ({ site: astroSite }) => {
  const base = astroSite ?? new URL(site.url);
  const posts = getAllPosts();
  const feedUrl = new URL('/feed.xml', base).href;
  const siteUrl = new URL('/', base).href;
  const lastBuildDate = posts[0]
    ? new Date(`${posts[0].date}T12:00:00Z`).toUTCString()
    : new Date().toUTCString();

  const items = posts
    .map((post) => {
      const url = new URL(`/posts/${post.slug}/`, base).href;
      const pubDate = new Date(`${post.date}T12:00:00Z`).toUTCString();

      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.title)}</title>
    <link>${escapeXml(siteUrl)}</link>
    <description>${escapeXml(site.description)}</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
    <image>
      <url>${escapeXml(new URL('/og.jpg', base).href)}</url>
      <title>${escapeXml(site.title)}</title>
      <link>${escapeXml(siteUrl)}</link>
    </image>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
