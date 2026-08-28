import { useRef, useState } from 'react'
import { Link } from 'wouter'
import { useSectionProgress } from '../hooks/useSectionProgress'
import { DustMotes } from './DustMotes'
import { business, primaryPhone } from '../data/site'

/** Opacity envelope: fade in, hold, fade out. */
function beat(p: number, start: number, inEnd: number, outStart: number, end: number) {
  if (p <= start || p >= end) return 0
  if (p < inEnd) return (p - start) / (inEnd - start)
  if (p <= outStart) return 1
  return 1 - (p - outStart) / (end - outStart)
}

export function CinematicHero() {
  const { ref, progress, reducedMotion } = useSectionProgress<HTMLElement>()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)
  const [hasVideo, setHasVideo] = useState(true)

  // Beat one is held at full opacity on load; the page must never open empty.
  const one = reducedMotion ? 0 : progress <= 0.14 ? 1 : Math.max(0, 1 - (progress - 0.14) / 0.10)
  const two = reducedMotion ? 0 : beat(progress, 0.26, 0.34, 0.46, 0.56)
  const brand = reducedMotion ? 1 : Math.min(1, Math.max(0, (progress - 0.56) / 0.13))
  const cue = reducedMotion ? 0 : Math.max(0, 1 - progress / 0.07)

  // The mark ring draws itself as the beats play.
  const ring = reducedMotion ? 1 : Math.min(1, Math.max(0, (progress - 0.04) / 0.50))

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) { v.play().catch(() => {}); setPaused(false) } else { v.pause(); setPaused(true) }
  }

  return (
    <section ref={ref} className="hero" aria-labelledby="hero-title">
      <div className="hero__sticky">
        <div className="hero__media" aria-hidden="true">
          {!reducedMotion && hasVideo ? (
            <video
              ref={videoRef}
              autoPlay muted loop playsInline preload="metadata"
              poster="/media/hero/hero-poster.webp"
            >
              <source
                src="/media/hero/amp-hero.mp4"
                type="video/mp4"
                onError={() => setHasVideo(false)}
              />
            </video>
          ) : (
            <img src="/media/hero/hero-poster.webp" alt="" />
          )}
          <div className="hero__veil" />
          <div className="hero__sweep" />
          <DustMotes />
        </div>

        <p className="hero__place">
          {business.city}, {business.stateShort}
          <span aria-hidden="true"> — </span>
          <span>{business.yearsInBusiness} years</span>
        </p>

        {/* The laurel ring from the mark, drawn by scroll. */}
        <svg className="hero__ring" viewBox="0 0 200 200" aria-hidden="true" style={{ opacity: 0.5 + ring * 0.5 }}>
          <defs>
            <linearGradient id="ringGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8a6a1c" />
              <stop offset="45%" stopColor="#f6e7b8" />
              <stop offset="100%" stopColor="#8a6a1c" />
            </linearGradient>
          </defs>
          <circle
            cx="100" cy="100" r="92"
            fill="none" stroke="url(#ringGold)" strokeWidth="1.4"
            strokeDasharray={578}
            strokeDashoffset={578 * (1 - ring)}
            transform="rotate(-90 100 100)"
          />
        </svg>

        <div className="hero__beat" style={{ opacity: one, visibility: one < 0.02 ? 'hidden' : 'visible' }}>
          <p className="display display--lg">Anyone can clean<br />the middle of a room.</p>
        </div>

        <div className="hero__beat" style={{ opacity: two, visibility: two < 0.02 ? 'hidden' : 'visible' }}>
          <p className="display display--lg">We were hired<br />for the <em>edges</em>.</p>
        </div>

        {/* Hidden AND inert until revealed: an opacity-0 overlay still takes
            clicks and keyboard focus, which sent people to /estimate from a
            blank-looking screen. */}
        <div
          className="hero__brand"
          style={{ opacity: brand, visibility: brand < 0.02 ? 'hidden' : 'visible' }}
          inert={brand < 0.02}
        >
          <p className="eyebrow">Attention to Detail</p>
          <h1 id="hero-title" className="display display--xl">
            AMP Cleaning<br />Services
          </h1>
          <p className="hero__sub">
            A mother and daughter cleaning homes, offices and handovers
            across {business.city} and greater {business.state}.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--gold" href="/estimate">Request an estimate</Link>
            <a className="btn btn--ghost" href={primaryPhone.phoneHref}>
              Call {primaryPhone.phone}
            </a>
          </div>
        </div>

        {!reducedMotion && hasVideo ? (
          <button className="hero__pause" type="button" onClick={toggle}>
            <span className="sr-only">{paused ? 'Play background film' : 'Pause background film'}</span>
            <span aria-hidden="true">{paused ? 'Play' : 'Pause'}</span>
          </button>
        ) : null}

        <div className="hero__cue" aria-hidden="true" style={{ opacity: cue }}>
          <span>Scroll</span>
          <i />
        </div>

        <div className="hero__progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${Math.max(0.02, progress)})` }} />
        </div>
      </div>
    </section>
  )
}
