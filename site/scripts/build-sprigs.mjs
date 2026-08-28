import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

/**
 * Decorative sprigs — generated catalogue-plate illustrations, matted to
 * transparency so one asset serves both themes.
 *
 * The plates were drawn on textured paper, which no corner-sampling
 * threshold could remove without eating the ink linework, so the mattes
 * come from Higgsfield's background remover. This script only trims and
 * packs them.
 */

const RAW = '../raw-assets/sprigs/cut'
const OUT = 'public/sprigs'

const items = ['spray', 'sponge', 'cloths', 'pail', 'brush', 'lemon', 'eucalyptus', 'gloves']

await mkdir(OUT, { recursive: true })

for (const name of items) {
  await sharp(`${RAW}/${name}.png`)
    .trim({ threshold: 6 })
    .resize(560, 560, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 86, alphaQuality: 92, effort: 5 })
    .toFile(`${OUT}/${name}.webp`)

  const m = await sharp(`${OUT}/${name}.webp`).metadata()
  console.log(`${name.padEnd(11)} ${m.width}x${m.height}  alpha=${m.hasAlpha}`)
}
