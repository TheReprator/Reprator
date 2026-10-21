BLOG DATA
=========

Every post is a folder with an index.astro file. No Markdown, no JSON.


Folder name = URL slug
----------------------

blog/posts/the-case-for-a-smaller-internet/index.astro
becomes
https://your-site.com/posts/the-case-for-a-smaller-internet/


Post format
-----------

---
export const title = "The case for a smaller internet";
export const date = "2026-10-18";
export const excerpt = "The short version shown on the index and in RSS.";
---

<p>A paragraph.</p>

<h2>A section heading</h2>

<blockquote>
  <p>A pull quote.</p>
</blockquote>

<ul>
  <li>First point</li>
  <li>Second point</li>
</ul>

The three exports are required. Everything below the second "---" is normal
HTML. Links, emphasis, figures, and captions all work as usual.


Adding an image
---------------

Put the image beside the post:

blog/posts/the-case-for-a-smaller-internet/
  index.astro
  images/studio.jpg

Import it in the post frontmatter and render it with Astro's Image component:

---
import { Image } from "astro:assets";
import studio from "./images/studio.jpg";

export const title = "A post with an image";
export const date = "2026-10-24";
export const excerpt = "A short description.";
---

<p>Text before the image.</p>

<Image src={studio} alt="A studio desk in afternoon light." />

<p>Text after the image.</p>

Astro optimizes the image at build time and gives it the correct URL. A normal
<img> tag also works:

<img src={studio.src} alt="A studio desk in afternoon light." />


Rules
-----

- The date must be YYYY-MM-DD.
- The excerpt is required.
- Folder names must be lowercase and hyphenated.
- Add a folder and the post appears automatically.
- Ten posts per page; pagination recalculates itself.
- Images are recommended at 1600px wide or larger.
- Use descriptive alt text for every image.

To make a new post, copy an existing folder, rename it, and replace the content.
