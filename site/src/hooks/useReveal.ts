import { useEffect, useRef, useState } from 'react'

/** One-shot reveal when an element first enters the viewport. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  // Reduced motion means "already revealed" from the very first render,
  // so there is no state update on mount to cascade from.
  const [shown, setShown] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const el = ref.current
    if (!el || shown) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      // threshold 0 + a bottom margin fires for tall sections too, which a
      // fractional threshold never would.
      { threshold: 0, rootMargin: '0px 0px -12% 0px' }
    )
    io.observe(el)

    // Safety net: never leave content permanently invisible because an
    // observer did not fire.
    const failsafe = window.setTimeout(() => setShown(true), 3000)

    return () => {
      io.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [shown])

  return { ref, shown }
}
