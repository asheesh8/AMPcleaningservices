/**
 * Every photograph on the site goes through here so that srcset, intrinsic
 * dimensions and lazy-loading are impossible to forget. Intrinsic width and
 * height are what stop the grids reflowing as images arrive.
 */
export function Photo({
  src, alt, sizes, className, priority = false,
}: {
  src: string           // the 480w (or 640w) default, e.g. /media/detail/range.webp
  alt: string
  sizes: string
  className?: string
  priority?: boolean
}) {
  const large = src.replace(/\.webp$/, '@900.webp')
  const isCompanion = src.includes('companion')
  const base = isCompanion ? 640 : 480
  const wide = isCompanion ? 1200 : 900
  const largeSrc = isCompanion ? src.replace(/\.webp$/, '@1200.webp') : large

  return (
    <img
      className={className}
      src={src}
      srcSet={`${src} ${base}w, ${largeSrc} ${wide}w`}
      sizes={sizes}
      alt={alt}
      width={base}
      height={Math.round(base / (4 / 5))}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      {...(priority ? { fetchPriority: 'high' as const } : {})}
    />
  )
}
