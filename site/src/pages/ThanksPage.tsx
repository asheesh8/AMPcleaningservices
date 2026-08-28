import { Link } from 'wouter'
import { PageMeta } from '../components/PageMeta'
import { people } from '../data/site'

export function ThanksPage() {
  return (
    <>
      <PageMeta title="Thank you | AMP Cleaning Services" description="Your message is with Belinda and Amber." />
      <section className="section page-lead">
      <p className="eyebrow">Received</p>
      <h1 className="display display--lg">Thank you.<br />That’s with us now.</h1>
      <p className="lede">
        Belinda or Amber will reply personally. If it is urgent,
        calling is faster than waiting for a reply.
      </p>
      <div className="page-lead__actions">
        {people.map((p) => (
          <a key={p.name} className="btn btn--ghost" href={p.phoneHref}>
            {p.name} — {p.phone}
          </a>
        ))}
        <Link className="btn btn--gold" href="/">Back to the site</Link>
      </div>
    </section>
    </>
  )
}
