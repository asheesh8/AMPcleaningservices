import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const RAW = '../raw-assets/fb'
const OUT = 'public/media'

/**
 * Two widths per image. The grids render these between ~240px and ~600px
 * CSS, so a 1200px master was 3-4x oversized on every tile.
 * [source, dir, name, aspect(w/h), quality]
 */
const jobs = [
  ['p13.jpg', 'work', 'kitchen', 4 / 5, 76],
  ['p60.jpg', 'work', 'hearth',  4 / 5, 76],
  ['p61.jpg', 'work', 'bath',    4 / 5, 76],
  ['p15.jpg', 'work', 'bedroom', 4 / 5, 76],
  ['p17.jpg', 'work', 'living',  4 / 5, 76],
  ['p58.jpg', 'work', 'sunroom', 4 / 5, 78],
  ['p33.jpg', 'detail', 'range',   4 / 5, 78],
  ['p81.jpg', 'detail', 'faucet',  4 / 5, 78],
  ['p67.jpg', 'detail', 'fan',     4 / 5, 78],
  ['p75.jpg', 'detail', 'cooktop', 4 / 5, 78],
  ['p40.jpg', 'detail', 'basin',   4 / 5, 78],
]

const WIDTHS = [480, 900]

await mkdir(`${OUT}/work`, { recursive: true })
await mkdir(`${OUT}/detail`, { recursive: true })

for (const [src, dir, name, aspect, q] of jobs) {
  for (const w of WIDTHS) {
    const h = Math.round(w / aspect)
    const suffix = w === WIDTHS[0] ? '' : `@${w}`
    await sharp(`${RAW}/${src}`)
      .rotate()
      .resize(w, h, { fit: 'cover', position: 'attention' })
      .withMetadata({ density: 96 })
      .webp({ quality: q })
      .toFile(`${OUT}/${dir}/${name}${suffix}.webp`)
  }
  console.log(`${dir}/${name}  ${WIDTHS.join(', ')}`)
}

// The one genuinely beautiful photograph in the archive — shown larger.
for (const w of [640, 1200]) {
  const suffix = w === 640 ? '' : `@${w}`
  await sharp(`${RAW}/p08.jpg`)
    .rotate()
    .resize(w, Math.round(w / (4 / 5)), { fit: 'cover', position: 'attention' })
    .withMetadata({ density: 96 })
    .webp({ quality: 80 })
    .toFile(`${OUT}/companion${suffix}.webp`)
}
console.log('companion  640, 1200')
