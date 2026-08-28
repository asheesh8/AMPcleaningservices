import { useEffect, useRef } from 'react'

/**
 * Dust caught in a shaft of light — the thing you only see when the light
 * is right, which is the whole subject of this business. Canvas rather than
 * DOM nodes so 60 particles cost one paint, and it only runs while visible.
 */
export function DustMotes() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0
    let h = 0
    let raf = 0
    let visible = true

    type Mote = { x: number; y: number; r: number; a: number; vy: number; vx: number; p: number; sp: number }
    let motes: Mote[] = []

    const seed = () => {
      const count = Math.round(Math.min(70, Math.max(24, (w * h) / 26000)))
      motes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.35 + Math.random() * 1.5,
        a: 0.05 + Math.random() * 0.3,
        vy: -(0.05 + Math.random() * 0.18),
        vx: (Math.random() - 0.5) * 0.09,
        p: Math.random() * Math.PI * 2,
        sp: 0.004 + Math.random() * 0.012,
      }))
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const m of motes) {
        m.p += m.sp
        m.y += m.vy
        m.x += m.vx + Math.sin(m.p) * 0.14
        if (m.y < -6) { m.y = h + 6; m.x = Math.random() * w }
        if (m.x < -6) m.x = w + 6
        if (m.x > w + 6) m.x = -6

        // Motes brighten toward the middle of the frame, where the light pool sits.
        const centre = 1 - Math.min(1, Math.abs(m.x - w / 2) / (w * 0.6))
        const alpha = m.a * (0.25 + centre * 0.75) * (0.6 + Math.sin(m.p) * 0.4)
        if (alpha <= 0.01) continue

        ctx.beginPath()
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(236, 210, 139, ${alpha.toFixed(3)})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      if (visible && !raf) raf = requestAnimationFrame(draw)
      if (!visible && raf) { cancelAnimationFrame(raf); raf = 0 }
    }, { threshold: 0 })
    io.observe(canvas)

    raf = requestAnimationFrame(draw)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="dust" aria-hidden="true" />
}
