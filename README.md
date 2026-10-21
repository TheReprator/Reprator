# Mara Voss — a HEY World-inspired Astro blog

A static, editorial personal blog built with Astro. The design follows the
quiet, centered reading experience of [HEY World](https://world.hey.com/dhh):
system typography, a narrow column, paper-like post cards, automatic dark mode,
and a focused article layout.

## Requirements met

- **Built with Astro.** Static output, no client framework.
- **No Markdown for blogging.** Every post is a folder in `blog/posts/` with an
  `index.astro` file. Posts are written as HTML, not `.md` files, and can import
  images directly.
- **Pagination after 10 posts.** There are 14 sample posts, so `/` shows the
  first 10 and `/page/2/` shows the remaining 4. Pagination controls only appear
  when there is more than one page.

## Commands

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
npm run check
```

## Writing a new post

Create a folder in `blog/posts/` with an `index.astro` file. The folder name
becomes the URL slug:

```text
blog/posts/a-new-post/index.astro
→ /posts/a-new-post/
```

Each post starts with three exports, followed by normal HTML:

```astro
---
export const title = "A new post";
export const date = "2026-10-24";
export const excerpt = "The short version shown on the index and in RSS.";
---

<p>The first paragraph.</p>

<h2>A section</h2>

<blockquote>
  <p>A useful line.</p>
</blockquote>

<ul>
  <li>One</li>
  <li>Two</li>
</ul>
```

The loader in `src/data/posts.ts` discovers every post folder automatically. The
new post page is generated, the RSS feed updates, and pagination recalculates
itself during the build.

The date must be `YYYY-MM-DD`, and folder names must be lowercase and hyphenated.
See `blog/README.txt` for the full authoring notes.

### Adding images

Put images beside the post and import them. Astro optimizes them at build time:

```text
blog/posts/a-new-post/
  index.astro
  images/studio.jpg
```

```astro
---
import { Image } from 'astro:assets';
import studio from './images/studio.jpg';

export const title = "A new post";
export const date = "2026-10-24";
export const excerpt = "A post with a photograph.";
---

<p>Some text before the image.</p>

<Image src={studio} alt="A studio desk in afternoon light." />

<p>Some text after the image.</p>
```

A regular `<img>` tag also works with `studio.src` if you do not want Astro's
image optimization.

## Customizing

- Author name, bio, email, and site URL: `src/data/site.ts`
- Production domain: set `SITE_URL` on Vercel (falls back to Vercel's
  production domain automatically)
- Visual system and dark mode: `src/styles/global.css`
- Avatar and social card: `public/avatar.svg`, `public/og.jpg`

The subscribe form is a front-end demo: it validates the address and shows a
confirmation without sending data anywhere. Connect it to your newsletter
provider by replacing the form action and removing the demo script in
`src/components/SubscribeForm.astro`.

## Deploying with GitHub + Vercel

Everything lives in GitHub — code, posts, styles, and images. Vercel connects
to that repository, builds the static site, and hosts it at a free
`https://<project>.vercel.app` address. GitHub is the source of truth; Vercel is
the host.

> A `*.vercel.app` domain belongs to Vercel and can only serve a Vercel
> deployment. It cannot be pointed at GitHub Pages. This project therefore uses
> GitHub for version control and Vercel for hosting; no GitHub Pages workflow is
> needed.

### 1. Push the repository to GitHub

Create an empty repository on GitHub (no README, no `.gitignore`), then run:

```sh
git remote add origin git@github.com:<your-username>/<your-repo>.git
git push -u origin main --tags
```

The included `.github/workflows/ci.yml` runs `astro check` and a production
build on every push and pull request.

### 2. Import the repository into Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Choose **Import Git Repository** and select this repository.
3. Vercel detects Astro automatically. Confirm:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Install command:** `npm install`
4. Choose a project name. The free domain will be
   `https://<project-name>.vercel.app`.
5. Click **Deploy**.

No environment variables are required. Optionally set `SITE_URL` to a custom
domain later; canonical URLs, Open Graph metadata, and the RSS feed will use it
at build time.

### 3. Publish future posts

Add or edit a post folder in `blog/posts/`, then commit and push:

```sh
git add blog/posts
git commit -m "Add a new post"
git push
```

Vercel rebuilds and deploys on every push to `main`. Pull requests get their own
preview URLs automatically.

### Alternative: Vercel CLI

If you prefer the command line, run this from the project root after the GitHub
repository exists:

```sh
npx vercel link
npx vercel --prod
```

The Git integration is still recommended so every GitHub push deploys
automatically.

## Structure

```
blog/
  posts/            One folder per post, with index.astro and optional images
  README.txt        Authoring guide (plain text, not Markdown)
src/
  components/       Author header, cards, pagination, footer
  data/             Site metadata and the blog loader
  layouts/          Document shell and metadata
  pages/            Home, paginated archive, posts, about, RSS, 404
  styles/           Global CSS
public/             Avatar, social image
```
