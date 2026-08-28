# AMP Cleaning Services — brand system

Version 2.0 · August 2026

## What changed from v1, and why

The first version of this site was dark, gold, and set in a thin
high-contrast serif, with a generated cinematic hero and drifting dust
motes. It looked expensive and it was wrong.

It was wrong because it dressed a warm, funny, blunt mother-and-daughter
business in a luxury costume that belonged to a different company. The
hero was an AI-generated countertop — a fake photograph on the site of a
business whose entire argument is that they do real work carefully. Every
line of copy defined the company against an unnamed inferior competitor,
which is a rhetorical tic, not a voice.

Version 2 starts from who they actually are.

## Who they are

Belinda and her daughter Amber. Warwick, Rhode Island. Three-plus years.
5.0 from 19 Google reviews, 98% from 28 on Facebook.

Their own words, unedited:

> Expecting perfection while paying bargain rates is wild behavior.

> Cleaning is hard physical work, and when there's no airflow and the
> temperature keeps rising, it can become exhausting very quickly. A
> little cool air makes a huge difference for your cleaning girls.

> We will treat your home like it is ours!

Warm, direct, funny, and completely unembarrassed about standards. That
is the brand. Nothing needs inventing.

## Voice

**Is:** first person plural. Short sentences. Concrete nouns — grate,
seam, edge, basin, deposit. Says the awkward thing plainly. Occasionally
funny. Never apologises for charging properly.

**Is not:** aphorisms. Anything that could be a LinkedIn caption. The
construction "not X — Y". Defining the company against competitors.
"Elevate", "transform", "seamless", "pristine", "spotless oasis".

**Test:** would Belinda say this out loud to a client standing in their
kitchen? If not, cut it.

## Colour

The ground is **light**. A cleaning company's website should feel like a
room with the curtains open. Dark is used deliberately and sparingly —
the manifesto block and the footer — which is also where their gold logo
actually belongs.

| Token | Value | Use |
|---|---|---|
| `--paper` | `#f7f4ee` | The ground. Warm, not clinical. |
| `--paper-warm` | `#efe9de` | Alternating sections, cards. |
| `--paper-deep` | `#e5ddcd` | The house-rule block. |
| `--ink` | `#191713` | Warm near-black. All primary text. |
| `--ink-soft` | `#4a453c` | Body copy. |
| `--ink-faint` | `#5a544b` | Meta and captions only. |
| `--gold` | `#755610` | Eyebrows, numerals, phone links on light. |
| `--gold-bright` | `#c9a227` | The logo gold. **Dark grounds only.** |
| `--gold-pale` | `#f0e4c4` | The primary funnel card. |

Every text colour clears **4.5:1 on every ground it is used on**, verified
by computation, not eye. `--gold` is the logo gold darkened until it
passed; `--gold-bright` is the true logo colour and fails on light, so it
is restricted to the dark blocks.

## Type

- **Bricolage Grotesque** for display, weight 600, tight tracking
  (-0.032em). It has warmth and a slight irregularity that keeps it from
  reading as corporate. It is emphatically not a luxury serif.
- **Instrument Sans** for interface and body.

Both self-hosted, Latin subset, weight axis only.

## Motion

Almost none. A short fade-and-rise as sections enter, and nothing else.
No parallax, no particles, no scroll-jacked hero, no shimmer. Content is
visible by default and only hidden once JavaScript confirms it can
reveal it again, so nothing depends on JS to be readable.

## Photography

**Every photograph on the site is AMP's own**, taken on a phone at real
jobs. That is the whole point and the footer says so plainly.

Two roles:

1. **Rooms** — finished work, shown at controlled sizes, captioned as
   what they are. Never graded to imitate interiors photography.
2. **Details** — grates, seams, fan blades. This is the argument. They
   photographed these things for three years because they care about
   them, and no competitor's stock library contains anything like it.

Never use stock photography of models in aprons holding spray bottles.
Never generate a photograph and present it as their work.

## The honesty rule

Every factual claim traces to AMP's public presence and is annotated with
its source in `src/data/site.ts`. Google and Facebook ratings are cited
separately and never averaged. Absent by design: licensing, bonding,
insurance, guarantees, background checks, eco certification, pricing,
headcount, awards. See `client-questions.md`.
