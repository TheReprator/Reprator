import { defineConfig } from 'astro/config';

/**
 * The public URL is resolved in this order:
 *   1. SITE_URL (set this to a custom domain)
 *   2. Vercel's production domain, when built on Vercel
 *   3. A sensible local fallback
 *
 * GitHub stores the source; Vercel builds it and serves the free
 * `<project>.vercel.app` address.
 */
const vercelHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const site =
  process.env.SITE_URL ??
  (vercelHost ? `https://${vercelHost}` : 'https://mara-voss.vercel.app');

export default defineConfig({
  site,
  output: 'static',
  build: {
    format: 'directory'
  }
});
