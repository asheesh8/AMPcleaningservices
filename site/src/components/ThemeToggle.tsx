import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function current(): Theme {
  const set = document.documentElement.dataset.theme
  if (set === 'light' || set === 'dark') return set
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(current)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('amp-theme', theme)
    } catch {
      // Private browsing and blocked site data both throw here. The toggle
      // still works for this visit; it just will not be remembered.
    }
  }, [theme])

  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        {theme === 'dark' ? (
          <>
            <circle cx="12" cy="12" r="4.6" fill="currentColor" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((d) => (
              <line
                key={d}
                x1="12" y1="2.4" x2="12" y2="5"
                stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"
                transform={`rotate(${d} 12 12)`}
              />
            ))}
          </>
        ) : (
          <path
            d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z"
            fill="currentColor"
          />
        )}
      </svg>
    </button>
  )
}
