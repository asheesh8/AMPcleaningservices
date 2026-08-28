import { Link } from 'wouter'
import { business, people, ratings } from '../data/site'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div>
          <p className="eyebrow">{business.tagline}</p>
          <p className="display display--md site-footer__mark">
            AMP Cleaning<br />Services
          </p>
          <img
            className="site-footer__logo"
            src="/brand/amp-logo.webp"
            alt="The AMP Cleaning Services gold laurel mark."
            width="160" height="160" loading="lazy" decoding="async"
          />
        </div>

        <div className="site-footer__cols">
          <div>
            <h2 className="site-footer__h">Speak to us</h2>
            <ul>
              {people.map((p) => (
                <li key={p.name}>
                  <a href={p.phoneHref}>{p.name} — {p.phone}</a>
                </li>
              ))}
              <li><a href={`mailto:${business.email}`}>{business.email}</a></li>
            </ul>
          </div>

          <div>
            <h2 className="site-footer__h">Start here</h2>
            <ul>
              <li><Link href="/estimate">Request an estimate</Link></li>
              <li><Link href="/apply">Work with us</Link></li>
              <li><a href={business.facebook} target="_blank" rel="noreferrer">Facebook</a></li>
            </ul>
          </div>

          <div>
            <h2 className="site-footer__h">Rated</h2>
            <ul>
              {ratings.map((r) => (
                <li key={r.source}>
                  {r.value} {'unit' in r ? r.unit : ''} · {r.count} reviews on {r.source}
                </li>
              ))}
              <li>{business.city}, {business.state}</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="rule" />

      <div className="site-footer__base">
        <p className="fine">
          © {new Date().getFullYear()} {business.legalName}. {business.city}, {business.stateShort}.
        </p>
        <p className="fine">
          Room and detail photography is AMP’s own work, from their Facebook page.
          The hero backdrop is a generated abstract plate.
        </p>
      </div>
    </footer>
  )
}
