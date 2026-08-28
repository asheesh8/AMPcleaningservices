/** Text lockup echoing the classical Roman caps of the AMP mark. */
export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`wordmark${compact ? ' wordmark--compact' : ''}`}>
      <span className="wordmark__ring" aria-hidden="true">
        <svg viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.1" />
          <path
            d="M12 27c0-5 2.6-9 7-11.4-1 4.6-3 8.6-7 11.4Z"
            fill="currentColor" opacity="0.9"
          />
        </svg>
      </span>
      <span className="wordmark__type">
        <span className="wordmark__name">AMP Cleaning</span>
        {!compact && <span className="wordmark__sub">Attention to Detail</span>}
      </span>
    </span>
  )
}
