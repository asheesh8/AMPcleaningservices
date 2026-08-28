/**
 * AMP's real mark. It is drawn gold-on-charcoal, so on the light ground it
 * sits in its own dark badge rather than being cut out — gold lettering on
 * cream would be unreadable, and redrawing it would be inventing a logo they
 * did not ask for.
 */
export function Wordmark() {
  return (
    <span className="wordmark">
      <img
        className="wordmark__mark"
        src="/brand/amp-mark-96.webp"
        srcSet="/brand/amp-mark-96.webp 96w, /brand/amp-mark-192.webp 192w"
        sizes="44px"
        width={96}
        height={96}
        alt=""
        decoding="async"
      />
      <span className="wordmark__type">
        <span className="wordmark__name">AMP Cleaning Services</span>
        <span className="wordmark__sub">Attention to Detail</span>
      </span>
    </span>
  )
}
