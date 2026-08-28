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
  public/media/           optimised imagery (webp)
  public/fonts/           self-hosted Latin-only variable fonts
raw-assets/fb/            full-resolution photos pulled from AMP's Facebook
raw-assets/generated/     generated hero plates
docs/brand-system.md      the identity, the voice, and why v2 replaced v1
docs/client-questions.md  what Belinda must confirm before launch
```

## The one rule in this repo

**Nothing on the site is invented.** Every number, quote, service and claim
traces to AMP's own public presence, and each is annotated with its source
in `src/data/site.ts`. Anything that could not be verified was left off —
see `docs/client-questions.md` for the list and the reasoning.

## Deployment (Vercel)

`vercel.json` at the repository root configures everything — leave the
Vercel project's Root Directory blank and import the repo as-is:

- Install `npm --prefix site install`, build `npm --prefix site run build`
- Output `site/dist`
- SPA rewrite excludes `/api` and every static prefix, so a missing
  endpoint returns a real 404 rather than HTML with a 200
- Security and cache headers are set in `vercel.json`

### Forms need one env var before they deliver

Both funnels POST to `/api/submit` (`api/submit.js`). Until these are set
in the Vercel project, that endpoint returns **501** and the site shows
the visitor AMP's phone numbers instead of a false confirmation:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | A [Resend](https://resend.com) API key |
| `NOTIFY_EMAIL` | Where enquiries should land |

This is deliberate. The endpoint never reports success it cannot prove —
a silently dropped enquiry is a lost customer nobody finds out about.
