# Hero film — plate, prompt, and how to regenerate

## The idea

The hero is not a picture of cleaning. It is a picture of **light finding
what is there** — a shaft of dawn sun crossing a dark stone counter, with
dust suspended in the beam. That is the literal subject of AMP's tagline,
"Attention to Detail", and it is the one hero that does not require
pretending their real client homes are Architectural Digest interiors.

It also solves a practical problem. AMP's photo library is honest phone
photography of ordinary Rhode Island homes. Those images are excellent as
*evidence* and poor as a full-bleed cinematic backdrop. So the backdrop is
generated and abstract; every other image on the site is real.

## The still (feed this to the video model)

Selected plate: `raw-assets/generated/hero-b.png` (2752×1536)

### Image prompt

> Cinematic macro photograph. Extreme low-angle raking light travelling
> across a dark honed-stone kitchen countertop in a quiet luxury home at
> dawn. A single narrow shaft of warm golden sunlight cuts diagonally across
> the frame from the upper right, catching a slow drift of fine dust motes
> suspended in the still air. The stone surface is flawless and faintly
> damp-clean; a thin specular highlight runs along its polished front edge
> like a drawn gold line. Deep shadow occupies most of the frame and the
> background falls away into near-black, with only the faintest suggestion
> of a dark cabinet edge and a window frame. Absolutely no people, no hands,
> no bottles, no cloths, no products, no text, no logos, no clutter.
> Full-frame camera, 85mm lens at f/1.8, shallow depth of field, natural
> light only. Palette strictly warm gold and near-black. High dynamic range
> with rich inky blacks, delicate film grain, extreme restraint, editorial
> luxury interiors photography, negative space in the lower left for
> typography.

- Model used: `nano_banana_pro` (Higgsfield), aspect `16:9`, 2 credits.
- The negative-space instruction matters: the display type sits centre-left.

## The film

### Video prompt

> Extremely slow, steady cinematic dolly gliding left to right along the
> dark stone countertop. The shaft of warm dawn light sweeps gradually
> across the polished surface, and the thin gold specular highlight on the
> counter edge travels with it. Fine dust motes drift and turn slowly in the
> beam, catching the light. Nothing else moves. No people, no hands, no
> objects entering frame, no text. Locked, elegant, almost still — the
> motion of light in a quiet empty room. Deep inky blacks maintained
> throughout, warm gold and near-black palette only, shallow depth of field,
> subtle film grain, seamless and loopable.

- Model: `cinematic_studio_video_v2` (Higgsfield Cinema Studio v2)
- Settings: `duration 5`, `mode pro`, `genre intimate`, `speedramp slowmo`,
  `sound off`, `cfg_scale 0.65`, `start_image` = the plate above.
- Higgsfield offers to swap in its **IN THE DARK** preset for this prompt.
  It was declined deliberately: presets add dramatic camera moves that
  compete with the display type. Try it only if you want a bolder hero.

### Installing the film

```bash
# from site/
cp /path/to/render.mp4 public/media/hero/amp-hero.mp4
```

The hero already looks for `/media/hero/amp-hero.mp4` and falls back to
`hero-poster.webp` if the file is missing or fails to load, so the site is
never broken by its absence.

Keep the file under ~2.5 MB. Encode hint:

```bash
ffmpeg -i render.mp4 -vf "scale=1600:-2" -c:v libx264 -crf 26 -preset slow -an -movflags +faststart public/media/hero/amp-hero.mp4
```

`-an` is important: the film must be silent, and a silent track lets the
video autoplay on every browser.

## Regenerating the poster

The poster is derived from the plate, not stored by hand:

```bash
cd site && node scripts/build-hero.mjs
```
