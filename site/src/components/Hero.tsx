import { Link } from 'wouter'
import { Photo } from './Photo'
import { business, primaryPhone, ratings } from '../data/site'

/**
 * A real room, photographed by AMP, next to what they actually say.
 * No film, no particles, no scroll runway — the previous hero was a
 * generated plate of a countertop that had nothing to do with this company.
 */
export function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <p className="eyebrow">{business.city}, Rhode Island · {business.yearsInBusiness} years</p>

        <h1 className="display display--xl">
          We’ll treat your home like it’s ours.
        </h1>

        <p className="lede hero__lede">
          We’re Belinda and Amber, a mother and daughter. Deep cleans,
          standing schedules, move-outs and handovers across{' '}
          {business.city} and greater Rhode Island.
        </p>

        <div className="hero__actions">
          <Link className="btn btn--solid" href="/estimate">Get a price</Link>
          <a className="btn btn--ghost" href={primaryPhone.phoneHref}>
            Call {primaryPhone.phone}
          </a>
        </div>

        <ul className="hero__proof">
          {ratings.map((r) => (
            <li key={r.source}>
              <strong>{r.value}</strong>
              <span>
                {'unit' in r ? `${r.unit}, ` : 'from '}
                {r.count} reviews on {r.source}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero__frame">
        <Photo
          src="/media/work/hearth.webp"
          alt="A living room with a stone fireplace and vaulted ceiling, photographed by AMP after a clean."
          sizes="(max-width: 60rem) 92vw, 42vw"
          priority
        />
        <p className="hero__caption fine">
A real client’s living room, photographed on the day.
        </p>
      </div>
    </section>
  )
}
