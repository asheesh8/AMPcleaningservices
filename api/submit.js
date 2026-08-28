/**
 * Form intake for both funnels.
 *
 * Deliberately fails loudly. The previous Netlify wiring POSTed to "/", which
 * on Vercel hits the SPA rewrite and returns 200 — so every enquiry would have
 * looked successful and gone nowhere. For a two-person business whose whole
 * pipeline is this form, a silent success is the worst possible failure.
 *
 * Set RESEND_API_KEY and NOTIFY_EMAIL in the Vercel project to turn delivery
 * on. Until then this returns 501 and the UI shows AMP's phone numbers.
 */

const FORMS = {
  'estimate-request': 'New estimate request',
  'cleaner-application': 'New cleaner application',
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = req.body ?? {}

  // Honeypot: real people never fill this.
  if (body['company-website']) return res.status(200).json({ ok: true })

  const subject = FORMS[body['form-name']]
  if (!subject) return res.status(400).json({ error: 'Unknown form' })

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.NOTIFY_EMAIL
  if (!apiKey || !to) {
    return res.status(501).json({
      error: 'No form delivery configured',
      hint: 'Set RESEND_API_KEY and NOTIFY_EMAIL in the Vercel project.',
    })
  }

  const lines = Object.entries(body)
    .filter(([k, v]) => k !== 'form-name' && k !== 'company-website' && v)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'AMP Website <onboarding@resend.dev>',
        to: [to],
        reply_to: body.email || undefined,
        subject: `${subject} — ${body.name || 'no name'}`,
        text: lines,
      }),
    })
    if (!r.ok) throw new Error(`Resend ${r.status}`)
    return res.status(200).json({ ok: true })
  } catch {
    return res.status(502).json({ error: 'Delivery failed' })
  }
}
