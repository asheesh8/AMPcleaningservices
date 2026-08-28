import { Link } from 'wouter'
import { business, people, ratings } from '../data/site'

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="foot__grid">
        <div>
          <p className="display display--md foot__mark">AMP Cleaning Services</p>
          <p className="fine foot__tag">Attention to Detail · {business.city}, Rhode Island</p>
        </div>

        <div>
          <h2 className="foot__h">Call us</h2>
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
          <h2 className="foot__h">Start here</h2>
          <ul>
            <li><Link href="/estimate">Get a price</Link></li>
            <li><Link href="/apply">Work with us</Link></li>
            <li><a href={business.facebook} target="_blank" rel="noreferrer">Facebook</a></li>
          </ul>
        </div>

        <div>
          <h2 className="foot__h">Rated</h2>
          <ul>
            {ratings.map((r) => (
              <li key={r.source}>
                {r.value} {'unit' in r ? r.unit : ''} · {r.count} reviews on {r.source}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="foot__base">
        <p className="fine">© {new Date().getFullYear()} {business.legalName}. {business.city}, {business.stateShort}.</p>
        <p className="fine">Every photograph on this site is AMP’s own work.</p>
      </div>
    </footer>
  )
}
