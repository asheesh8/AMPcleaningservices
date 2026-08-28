import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import { Wordmark } from './Wordmark'
import { navLinks, primaryPhone } from '../data/site'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24)
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <Link href="/" className="site-header__brand" aria-label="AMP Cleaning Services — home">
        <Wordmark />
      </Link>

      <nav className="site-header__nav" aria-label="Primary">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </nav>

      <div className="site-header__actions">
        <a className="site-header__phone" href={primaryPhone.phoneHref}>{primaryPhone.phone}</a>
        <Link className="btn btn--gold btn--sm" href="/estimate">Estimate</Link>
      </div>

      <button
        className="site-header__toggle"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        <span aria-hidden="true" className={open ? 'is-open' : ''} />
      </button>

      {open && (
        <div className="mobile-menu">
          <nav aria-label="Mobile">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
            ))}
            <Link href="/estimate" onClick={close}>Request an estimate</Link>
            <Link href="/apply" onClick={close}>Work with us</Link>
          </nav>
          <a className="mobile-menu__phone" href={primaryPhone.phoneHref} onClick={close}>{primaryPhone.phone}</a>
        </div>
      )}
    </header>
  )
}
