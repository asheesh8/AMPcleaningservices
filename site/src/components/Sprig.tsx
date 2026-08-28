/**
 * A decorative catalogue plate parked in the margin. Purely ornamental:
 * hidden from assistive tech, never interactive, and always behind content.
 *
 * `drift` staggers the float so no two sprigs move in sync — the giveaway
 * that would make them read as a widget rather than as illustration.
 */
export function Sprig({
  name, className, width = 190, drift = 17, delay = 0, flip = false,
}: {
  name: string
  className?: string
  width?: number
  drift?: number
  delay?: number
  flip?: boolean
}) {
  return (
    <img
      className={`sprig ${className ?? ''}`}
      src={`/sprigs/${name}.webp`}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      style={{
        width: `${width}px`,
        animationDuration: `${drift}s`,
        animationDelay: `${delay}s`,
        transform: flip ? 'scaleX(-1)' : undefined,
      }}
    />
  )
}
