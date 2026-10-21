import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { getAllPosts, type PostBlock } from '../data/posts';

export const prerender = true;

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const renderBlocks = (blocks: PostBlock[]) =>
  blocks
    .map((block) => {
      if (block.type === 'paragraph') return `<p>${block.content}</p>`;
      if (block.type === 'heading') return `<h2>${block.content}</h2>`;
      if (block.type === 'quote') {
        const cite = block.cite ? `<cite>${block.cite}</cite>` : '';
        return `<blockquote><p>${block.content}</p>${cite}</blockquote>`;
      }
      if (block.type === 'list') {
        return `<ul>${block.items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
      }
      return '';
    })
    .join('\n');

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
      <content:encoded><![CDATA[${renderBlocks(post.body)}]]></content:encoded>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
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
