import sharp from 'sharp'

/**
 * Hero poster = the film's own first frame, darkened and vignetted.
 * Cutting it from the film means there is no visible jump when the video
 * takes over from the poster. Regenerate the frame with:
 *   node_modules/ffmpeg-static/ffmpeg -y -i public/media/hero/amp-hero.mp4 \
 *     -frames:v 1 -q:v 2 raw-assets/generated/hero-frame.png
 */
const w = 2200, h = 1240

const veil = Buffer.from(
  `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
     <defs>
       <radialGradient id="vig" cx="52%" cy="46%" r="74%">
         <stop offset="40%"  stop-color="#0a0a0b" stop-opacity="0"/>
         <stop offset="100%" stop-color="#0a0a0b" stop-opacity="0.88"/>
       </radialGradient>
       <linearGradient id="base" x1="0" y1="0" x2="0" y2="1">
         <stop offset="0%"   stop-color="#0a0a0b" stop-opacity="0.60"/>
         <stop offset="45%"  stop-color="#0a0a0b" stop-opacity="0.52"/>
         <stop offset="100%" stop-color="#0a0a0b" stop-opacity="0.90"/>
       </linearGradient>
     </defs>
     <rect width="100%" height="100%" fill="url(#base)"/>
     <rect width="100%" height="100%" fill="url(#vig)"/>
   </svg>`
)

await sharp('../raw-assets/generated/hero-frame.png')
  .resize(w, h, { fit: 'cover', position: 'attention' })
  .modulate({ brightness: 0.92, saturation: 0.95 })
  .composite([{ input: veil, blend: 'over' }])
  .webp({ quality: 82 })
  .toFile('public/media/hero/hero-poster.webp')

console.log('hero-poster.webp rebuilt from the film first frame')
