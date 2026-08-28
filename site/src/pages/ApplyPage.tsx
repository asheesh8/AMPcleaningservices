import { useState } from 'react'
import { useLocation } from 'wouter'
import { PageMeta } from '../components/PageMeta'
import { Field } from '../components/Field'
import { SubmitError } from '../components/SubmitError'
import { business } from '../data/site'

export function ApplyPage() {
  const [sending, setSending] = useState(false)
  const [failed, setFailed] = useState(false)
  const [, navigate] = useLocation()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setFailed(false)
    const data = new FormData(e.currentTarget)
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
      <PageMeta title="Work with us | AMP Cleaning Services" description="AMP Cleaning Services is hiring cleaners in Warwick, Rhode Island. Steady scheduled work alongside Belinda and Amber." />
      <section className="section form-page">
      <div className="form-page__intro">
        <p className="eyebrow">Work with us</p>
        <h1 className="display display--lg">
We’re looking for people who notice things.
        </h1>
        <p className="lede">
          {business.yearsInBusiness} years of work, built on doing the parts
          most people skip. If that is already how you clean, we would like
          to meet you.
        </p>

        <ul className="apply-notes">
          <li>Steady, scheduled work in {business.city} and nearby towns.</li>
          <li>You work alongside Belinda and Amber, not alone on a list.</li>
          <li>Reliable transport and your own way to get to homes.</li>
          <li>No experience requirement — standards requirement.</li>
        </ul>
      </div>

      <div className="form-panel">
        <form
          name="cleaner-application"
          method="POST"
          onSubmit={onSubmit}
        >
          <input type="hidden" name="form-name" value="cleaner-application" />
          <p hidden>
            <label>
              Leave this empty
              <input name="company-website" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          <Field label="Name" htmlFor="a-name" required>
            <input id="a-name" name="name" type="text" autoComplete="name" required />
          </Field>

          <div className="field-row">
            <Field label="Email" htmlFor="a-email" required>
              <input id="a-email" name="email" type="email" autoComplete="email" required />
            </Field>
            <Field label="Phone" htmlFor="a-phone" required>
              <input id="a-phone" name="phone" type="tel" autoComplete="tel" required />
            </Field>
          </div>

          <Field label="Town you live in" htmlFor="a-town" required>
            <input id="a-town" name="town" type="text" required />
          </Field>

          <Field label="Do you have your own transport?" htmlFor="a-transport" required>
            <select id="a-transport" name="transport" defaultValue="" required>
              <option value="">Select</option>
              <option>Yes — my own vehicle</option>
              <option>Yes — reliable alternative</option>
              <option>Not currently</option>
            </select>
          </Field>

          <Field label="Cleaning experience" htmlFor="a-experience">
            <select id="a-experience" name="experience" defaultValue="">
              <option value="">Select</option>
              <option>None yet</option>
              <option>Under a year</option>
              <option>1–3 years</option>
              <option>3+ years</option>
            </select>
          </Field>

          <Field label="Availability" htmlFor="a-availability"
                 hint="Which days and roughly what hours suit you.">
            <input id="a-availability" name="availability" type="text" placeholder="e.g. Mon–Thu, 9–4" />
          </Field>

          <Field
            label="Tell us about a time you noticed something nobody asked you to"
            htmlFor="a-detail"
            hint="Any job, any kind of work. This is the question we actually read."
            required
          >
            <textarea id="a-detail" name="detail" rows={5} required />
          </Field>

          <p className="fine form-note">
            Your application goes to Belinda and Amber only.
          </p>

          {failed && <SubmitError />}

          <div className="form-nav">
            <button type="submit" className="btn btn--solid" disabled={sending}>
              {sending ? 'Sending…' : 'Send application'}
            </button>
          </div>
        </form>
      </div>
    </section>
    </>
  )
}
