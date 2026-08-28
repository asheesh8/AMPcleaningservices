import { useRef, useState } from 'react'
import { useLocation } from 'wouter'
import { PageMeta } from '../components/PageMeta'
import { Field } from '../components/Field'
import { SubmitError } from '../components/SubmitError'
import { business, primaryPhone, services } from '../data/site'

const STEPS = ['The property', 'The work', 'You'] as const

export function EstimatePage() {
  const [step, setStep] = useState(0)
  const [, navigate] = useLocation()
  const [sending, setSending] = useState(false)
  const [failed, setFailed] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  /**
   * Validate only the visible step before advancing. Fields on the other
   * steps are deliberately not `required` while hidden, because a hidden
   * required field blocks submit with an error the user cannot see.
   */
  const advance = () => {
    const current = formRef.current?.querySelector<HTMLFieldSetElement>(
      `fieldset[data-step="${step}"]`
    )
    if (current) {
      for (const el of current.querySelectorAll<HTMLInputElement>('input, select, textarea')) {
        if (!el.checkValidity()) {
          el.reportValidity()
          return
        }
      }
    }
    setStep((s) => s + 1)
    queueMicrotask(() => {
      formRef.current
        ?.querySelector<HTMLElement>(`fieldset[data-step="${step + 1}"] h2`)
        ?.focus()
    })
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setFailed(false)
    // Netlify picks the POST up from the static form skeleton at build time.
    const form = e.currentTarget
    const data = new FormData(form)
    fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(data)),
    })
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status))
        navigate('/thanks')
      })
      .catch(() => {
        setSending(false)
        setFailed(true)
      })
  }

  return (
    <>
      <PageMeta title="Request an estimate | AMP Cleaning Services" description="Tell us the square footage, rooms and timing. Belinda or Amber will reply personally. No commitment, no card." />
      <section className="section form-page">
      <div className="form-page__intro">
        <p className="eyebrow">Request an estimate</p>
        <h1 className="display display--lg">
          Three questions,<br />then a real answer.
        </h1>
        <p className="lede">
          Square footage, rooms and how often. Nothing here is a
          commitment, and no card is involved.
        </p>
        <p className="fine">
          Prefer to speak to someone? Call {primaryPhone.name} on{' '}
          <a href={primaryPhone.phoneHref}>{primaryPhone.phone}</a> or email{' '}
          <a href={`mailto:${business.email}`}>{business.email}</a>.
        </p>
      </div>

      <div className="form-panel">
        <ol className="steps" aria-label="Progress">
          {STEPS.map((s, i) => (
            <li
              key={s}
              className={i === step ? 'is-current' : i < step ? 'is-done' : ''}
              aria-current={i === step ? 'step' : undefined}
            >
              <span className="steps__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="steps__label">{s}</span>
            </li>
          ))}
        </ol>

        <form
          name="estimate-request"
          method="POST"
          onSubmit={onSubmit}
          ref={formRef}
        >
          <input type="hidden" name="form-name" value="estimate-request" />
          <p hidden>
            <label>
              Leave this empty
              <input name="company-website" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          {/* ------------------------------------ step 1 */}
          <fieldset hidden={step !== 0} data-step="0">
            <h2 className="sr-only" tabIndex={-1}>Step 1 of 3 — the property</h2>

            <Field label="Approximate square footage" htmlFor="sqft" required
                   hint="A rough number is fine — it is the single biggest factor in the quote.">
              <input id="sqft" name="sqft" type="text" inputMode="numeric" placeholder="e.g. 2,100" required={step === 0} />
            </Field>

            <div className="field-row">
              <Field label="Bedrooms" htmlFor="beds">
                <input id="beds" name="beds" type="number" min="0" max="20" placeholder="3" />
              </Field>
              <Field label="Bathrooms" htmlFor="baths">
                <input id="baths" name="baths" type="text" placeholder="2.5" />
              </Field>
            </div>

            <Field label="Town" htmlFor="town" required hint={`${business.city} and greater ${business.state}.`}>
              <input id="town" name="town" type="text" placeholder="Warwick" required={step === 0} />
            </Field>

            <Field label="Pets in the home" htmlFor="pets"
                   hint="Not a problem — it just helps us plan the visit.">
              <select id="pets" name="pets" defaultValue="">
                <option value="">Select</option>
                <option>No pets</option>
                <option>Dog(s)</option>
                <option>Cat(s)</option>
                <option>Both</option>
                <option>Other</option>
              </select>
            </Field>
          </fieldset>

          {/* ------------------------------------ step 2 */}
          <fieldset hidden={step !== 1} data-step="1">
            <h2 className="sr-only" tabIndex={-1}>Step 2 of 3 — the work</h2>

            <Field label="What kind of clean?" htmlFor="service" required>
              <select id="service" name="service" defaultValue="" required={step === 1}>
                <option value="">Select</option>
                {services.map((s) => <option key={s.slug}>{s.name}</option>)}
              </select>
            </Field>

            <Field label="How often?" htmlFor="frequency">
              <select id="frequency" name="frequency" defaultValue="">
                <option value="">Select</option>
                <option>One-off</option>
                <option>Weekly</option>
                <option>Biweekly</option>
                <option>Monthly</option>
                <option>Not sure yet</option>
              </select>
            </Field>

            <Field label="When do you need it?" htmlFor="timing"
                   hint="If there is a closing or a listing date, tell us — those come first.">
              <input id="timing" name="timing" type="text" placeholder="e.g. before 12 Sept listing" />
            </Field>

            <Field label="Anything we should know?" htmlFor="notes"
                   hint="Vintage tile, a basement, post-construction dust, a room to skip.">
              <textarea id="notes" name="notes" rows={4} />
            </Field>
          </fieldset>

          {/* ------------------------------------ step 3 */}
          <fieldset hidden={step !== 2} data-step="2">
            <h2 className="sr-only" tabIndex={-1}>Step 3 of 3 — your details</h2>

            <Field label="Name" htmlFor="name" required>
              <input id="name" name="name" type="text" autoComplete="name" required={step === 2} />
            </Field>

            <div className="field-row">
              <Field label="Email" htmlFor="email" required>
                <input id="email" name="email" type="email" autoComplete="email" required={step === 2} />
              </Field>
              <Field label="Phone" htmlFor="phone">
                <input id="phone" name="phone" type="tel" autoComplete="tel" />
              </Field>
            </div>

            <Field label="Best way to reach you" htmlFor="contact-pref">
              <select id="contact-pref" name="contact-pref" defaultValue="">
                <option value="">Select</option>
                <option>Email</option>
                <option>Phone call</option>
                <option>Text</option>
              </select>
            </Field>

            <p className="fine form-note">
              Your details go to Belinda and Amber only. No mailing list, no third parties.
            </p>
          </fieldset>

          {failed && <SubmitError />}

          <div className="form-nav">
            {step > 0 && (
              <button type="button" className="btn btn--ghost" onClick={() => setStep((s) => s - 1)}>
                Back
              </button>
            )}
            {step < STEPS.length - 1 ? (
              <button type="button" className="btn btn--gold" onClick={advance}>
                Continue
              </button>
            ) : (
              <button type="submit" className="btn btn--gold" disabled={sending}>
                {sending ? 'Sending…' : 'Send request'}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
    </>
  )
}
