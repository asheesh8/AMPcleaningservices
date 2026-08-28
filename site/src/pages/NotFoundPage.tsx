import { Link } from 'wouter'
import { PageMeta } from '../components/PageMeta'

export function NotFoundPage() {
  return (
    <>
      <PageMeta title="Page not found | AMP Cleaning Services" description="That page is not here." />
      <section className="section page-lead">
      <p className="eyebrow">404</p>
      <h1 className="display display--lg">That page isn’t here.</h1>
      <p className="lede">Which is the one thing we didn’t clean up.</p>
      <div className="page-lead__actions">
        <Link className="btn btn--solid" href="/">Back to the site</Link>
      </div>
    </section>
    </>
  )
}
