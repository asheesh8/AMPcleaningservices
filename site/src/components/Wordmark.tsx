/** The laurel ring from AMP's mark, redrawn flat so it reads at small sizes. */
export function Wordmark() {
  return (
    <span className="wordmark">
      <svg className="wordmark__mark" viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="17.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M13.4 27.6c-.5-4.9 1.6-9 5.9-11.7-.4 4.9-2.4 8.8-5.9 11.7Z"
          fill="currentColor"
        />
        <path d="M11.6 24.8c1.7-.5 3.2-1.4 4.5-2.7" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <span className="wordmark__type">
        <span className="wordmark__name">AMP Cleaning</span>
        <span className="wordmark__sub">Attention to Detail</span>
      </span>
    </span>
  )
}
