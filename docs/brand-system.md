# AMP Cleaning Services — brand system

Version 1.0 · August 2026

## The idea

AMP already owned the right idea and put it on their logo: **Attention to
Detail**. The brand's job is to take that from a tagline to an argument.

The argument is simple and it is true of this company specifically:

> Anyone can clean the middle of a room. We were hired for the edges.

This is not a slogan invented for the site. It is what AMP's own photo
archive is *about*. Three years of posts and the overwhelming majority of
the photographs are burner grates, the seam behind a tap, the top edge of a
fan blade, the underside of an oven door. They photograph the parts of a
house nobody else photographs. Their customers then use the phrase back at
them — "attention to detail" is one of the keyword clusters on their own
Google reviews.

## Positioning

AMP is a two-person company: Belinda (owner) and her daughter Amber. The
brand must not imply a crew, a franchise, or a fleet. Its premium quality
comes from **the same two people every time**, not from scale.

AMP already prices and speaks as a premium operator. Their own post:

> Expecting perfection while paying bargain rates is wild behavior. You
> can't ask for premium results while shopping in the discount aisle.

That is the tone: warm to clients, unapologetic about standards, and
completely without corporate softening.

## Voice

**Is:** direct, plain, specific, quietly confident. Short sentences.
Concrete nouns — grate, seam, edge, basin. Willing to state a standard.

**Is not:** "sparkling", "spotless", "we go the extra mile", "your
satisfaction is our priority", "elevate", "transform", "pristine oasis".
Never sentimental about cleaning. Never uses "team" to mean two people.

**Test:** could a competitor in another state paste this line onto their
site unchanged? If yes, it is wrong.

## Colour

Sampled from the existing gold-gradient logo ring.

| Token | Value | Use |
|---|---|---|
| `--ink` | `#0a0a0b` | The ground. Nearly everything sits on this. |
| `--ink-raise` | `#131316` | Alternating sections. |
| `--ink-card` | `#17171b` | Cards, form panels. |
| `--gold-deep` | `#8a6a1c` | Hairlines, evidence captions, gradient ends. |
| `--gold` | `#c9a227` | Eyebrows, ticks, focus. |
| `--gold-light` | `#ecd28b` | Emphasis, italic display, links. |
| `--gold-pale` | `#f6e7b8` | Specular peak in gradients only. |
| `--bone` | `#f2eee6` | Primary text. |
| `--bone-dim` | `#cdc7bb` | Secondary text. |
| `--muted` | `#8e887c` | Meta text only, never body copy. |

**Restraint rule.** Gold is a hairline and an accent, never a fill. The only
gold areas on the site are the primary button and the specular sweeps.
If a screen has more than roughly 5% gold by area, it has gone gaudy.

## Type

- **Display — Cormorant Garamond**, weight 300, tight leading (0.94), very
  slightly negative tracking. Chosen because AMP's logotype is a classical
  Roman capital; Cormorant is the closest well-made variable face that
  harmonises with it rather than fighting it.
- **Interface — Instrument Sans**, 400–500. Quiet, neutral, no personality
  of its own. It exists so Cormorant can carry the personality.
- **Eyebrow micro-caps** — 0.6875rem, `letter-spacing: 0.34em`, uppercase,
  gold. This is lifted directly from `ATTENTION TO DETAIL` in the mark and
  is the single most identifying typographic gesture on the site. Use it to
  open sections; never for body copy.

Both faces are self-hosted, Latin subset only.

## Motion

Motion is **light behaving normally in a still room**. Everything is slow.

- **The hero ring.** The laurel circle from the mark draws itself as the
  scroll beats play, completing behind the wordmark. This is the brand's
  own asset animated, not a generic scroll effect.
- **Dust motes.** A canvas of ~60 gold specks drifting upward in the hero,
  brightening toward the centre where the light pool sits. Dust in a
  sunbeam is the literal subject of the business.
- **The sweep.** One wide specular pass across the hero every 13 seconds.
- **Shimmer.** Gold hairlines and the footer wordmark catch a slow pass.

Anything faster than these reads as decoration. Every one of them is
disabled under `prefers-reduced-motion`.

## Photography

Two distinct roles, and they must not be mixed:

1. **Evidence — AMP's own photographs.** Real phone photography of real
   client homes. Shown in controlled frames at controlled sizes, captioned
   with what was actually done. Never stretched full-bleed and never
   graded to pretend it is editorial interiors work. Its value is that it
   is true.
2. **Ground — the generated hero plate.** Abstract, near-black, a shaft of
   light and suspended dust. It carries no factual claim, so generating it
   costs the brand nothing in honesty. See `hero-film.md`.

**Never** use stock photography of models in aprons holding spray bottles.

## The honesty rule

Every factual claim on the site traces to AMP's own public presence, and
every one is annotated with its source in `src/data/site.ts`. Ratings from
Google and Facebook are cited **separately and never averaged into one
invented number**. Services list only what AMP has publicly said it does.

Absent by design, because nothing evidences them: licensing/bonding/
insurance badges, satisfaction guarantees, background-check claims, eco
certification, pricing, headcount, and awards. See `client-questions.md`.
