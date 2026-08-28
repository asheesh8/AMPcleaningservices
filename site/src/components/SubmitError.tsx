import { business, people } from '../data/site'

/**
 * A failed submit must never look like a success. For a two-person business
 * whose whole pipeline arrives through this form, a swallowed error is a
 * lost customer nobody ever finds out about.
 */
export function SubmitError() {
  return (
    <div className="submit-error" role="alert">
      <p className="submit-error__head">That didn’t send.</p>
      <p className="fine">
        Something went wrong on our end, not yours. Please reach Belinda or
        Amber directly and we’ll pick it up straight away.
      </p>
      <ul>
        {people.map((p) => (
          <li key={p.name}>
            <a href={p.phoneHref}>{p.name} — {p.phone}</a>
          </li>
        ))}
        <li><a href={`mailto:${business.email}`}>{business.email}</a></li>
      </ul>
    </div>
  )
}
