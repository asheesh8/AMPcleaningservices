# AMP Cleaning Services — brand and site

Premium brand and marketing site for AMP Cleaning Services, LLC — Belinda
and Amber, Warwick, Rhode Island.

## Running it

```bash
cd site
npm install
npm run dev
```

Production checks:

```bash
npm run build
npm run lint
```

## Layout

```text
site/                     the Vite + React + TypeScript app
  src/data/site.ts        every fact on the site, with its source
  src/components/         hero, header, footer, ambient light, form field
  src/pages/              home, estimate funnel, hiring funnel, thanks, 404
  src/styles/global.css   the whole visual system
  scripts/build-media.mjs regenerates web images from raw-assets
  scripts/build-hero.mjs  regenerates the hero poster from the plate
  public/media/           optimised imagery (webp)
  public/fonts/           self-hosted Latin-only variable fonts
raw-assets/fb/            full-resolution photos pulled from AMP's Facebook
raw-assets/generated/     generated hero plates
docs/brand-system.md      the identity and how to use it
docs/hero-film.md         hero plate + the exact prompts to regenerate it
docs/client-questions.md  what Belinda must confirm before launch
```

## The one rule in this repo

**Nothing on the site is invented.** Every number, quote, service and claim
traces to AMP's own public presence, and each is annotated with its source
in `src/data/site.ts`. Anything that could not be verified was left off —
see `docs/client-questions.md` for the list and the reasoning.

## Deployment

Static build. On Netlify:

- Build command `npm run build`, publish directory `dist`, base `site`
- Enable Forms; two forms are defined, `estimate-request` and
  `cleaner-application`, both honeypot-protected
- `public/_redirects` provides the SPA fallback
