import { Link } from 'wouter'
import { PageMeta } from '../components/PageMeta'
import { CinematicHero } from '../components/CinematicHero'
import { Reveal } from '../components/Reveal'
import { Photo } from '../components/Photo'
import { business, details, manifesto, people, ratings, services, testimonials, work } from '../data/site'

export function HomePage() {
  return (
    <>
      <PageMeta
        title="AMP Cleaning Services — Attention to Detail | Warwick, RI"
        description="Deep cleans, recurring service, listings and closings, move-outs, post-construction and offices across Warwick and greater Rhode Island. Belinda and Amber, rated 5.0 on Google."
      />
      <CinematicHero />

      {/* ---------------------------------------------- the standard */}
      <section id="standard" className="section standard">
        <Reveal>
          <p className="eyebrow">The standard</p>
          <blockquote className="display display--lg standard__claim">
            You can’t ask for premium results<br />
            while shopping in the <em>discount aisle</em>.
          </blockquote>
          <p className="fine standard__attr">— {manifesto.attribution}</p>
        </Reveal>

        <Reveal delay={80}>
          <div className="standard__body">
            <p className="lede">
              AMP is Belinda and her daughter Amber. Two people, {business.yearsInBusiness} years,
              working out of {business.city} across greater {business.state}. The people who
              quote your home are the people who clean it.
            </p>
            <p className="lede">
              That is the whole model, and it is why the reviews keep using the
              same phrase the company put on its own logo.
            </p>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <ul className="ratings">
            {ratings.map((r) => (
              <li key={r.source}>
                <span className="ratings__value display">{r.value}</span>
                <span className="ratings__meta">
                  {'unit' in r ? `${r.unit} · ` : ''}{r.count} reviews
                  <br />on {r.source}
                </span>
              </li>
            ))}
            <li>
              <span className="ratings__value display">{business.yearsInBusiness}</span>
              <span className="ratings__meta">years<br />in business</span>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* ---------------------------------------------- detail grid */}
      <section id="detail" className="section detail">
        <Reveal>
          <div className="detail__head">
            <p className="eyebrow">Attention to detail</p>
            <h2 className="display display--lg">
              These are the photographs<br />they chose to take.
            </h2>
            <p className="lede">
              The underside of a burner grate. The seam behind a tap. The top edge
              of a fan blade. Three years of posts, and this is what AMP chose to
              photograph — which tells you where their attention goes.
            </p>
          </div>
        </Reveal>

        <div className="detail__grid">
          {details.map((d, i) => (
            <Reveal key={d.src} delay={i * 70}>
              <figure className="detail__item">
                <Photo src={d.src} alt={d.alt} sizes="(max-width: 40rem) 90vw, (max-width: 70rem) 45vw, 20vw" />
                <figcaption>
                  <span className="detail__label">{d.label}</span>
                  <span className="detail__note">{d.note}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------- services */}
      <section id="services" className="section services">
        <Reveal>
          <div className="services__head">
            <p className="eyebrow">What we’re called for</p>
            <h2 className="display display--lg">Six kinds of work.</h2>
          </div>
        </Reveal>

        <ol className="services__list">
          {services.map((s, i) => (
            <Reveal key={s.slug} as="li" delay={i * 50} className="service">
              <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
              <div className="service__body">
                <h3 className="display display--md">{s.name}</h3>
                <p className="service__summary">{s.summary}</p>
                <p className="service__detail">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ---------------------------------------------- rooms */}
      <section className="section rooms">
        <Reveal>
          <div className="rooms__head">
            <p className="eyebrow">After service</p>
            <h2 className="display display--md">Real rooms, real homes.</h2>
            <p className="fine">
              Photographed by AMP on the day, on a phone, with no styling.
              Ordinary Rhode Island homes, finished.
            </p>
          </div>
        </Reveal>
        <div className="rooms__grid">
          {work.map((w, i) => (
            <Reveal key={w.src} delay={i * 50}>
              <figure className="room">
                <Photo src={w.src} alt={w.alt} sizes="(max-width: 40rem) 90vw, (max-width: 70rem) 45vw, 22vw" />
                <figcaption className="fine">{w.room}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------- companion */}
      <section className="section companion">
        <Reveal>
          <figure className="companion__figure">
            <Photo
              src="/media/companion.webp"
              alt="A golden retriever resting on a bed in soft window light."
              sizes="(max-width: 58rem) 90vw, 45vw"
            />
          </figure>
        </Reveal>
        <Reveal delay={90}>
          <div className="companion__body">
            <p className="eyebrow">In your home</p>
            <h2 className="display display--md">
              We work around whoever<br />is already living there.
            </h2>
            <p className="lede">
              Pets, kids, night shifts, a house that is being packed or unpacked.
              Belinda and Amber have cleaned around all of it.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ---------------------------------------------- reviews */}
      <section id="reviews" className="section reviews">
        <Reveal>
          <div className="reviews__head">
            <p className="eyebrow">In their words</p>
            <h2 className="display display--lg">
              Every quote below<br />is public and verbatim.
            </h2>
          </div>
        </Reveal>

        <div className="reviews__grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 55}>
              <figure className="review">
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <span className="review__name">{t.name}</span>
                  <span className="fine">{t.context}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------- the two of them */}
      <section className="section team">
        <Reveal>
          <p className="eyebrow">Who turns up</p>
          <h2 className="display display--lg">Belinda and Amber.<br />That’s the company.</h2>
        </Reveal>
        <Reveal delay={80}>
          <ul className="team__list">
            {people.map((p) => (
              <li key={p.name}>
                <span className="team__name display display--md">{p.name}</span>
                <span className="team__role">{p.role}</span>
                <a className="team__phone" href={p.phoneHref}>{p.phone}</a>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ---------------------------------------------- funnels */}
      <section className="section funnels">
        <Reveal>
          <div className="funnel funnel--primary">
            <p className="eyebrow">For your home or office</p>
            <h2 className="display display--md">Request an estimate</h2>
            <p className="lede">
              Tell us the square footage, the rooms and roughly when.
              Belinda or Amber will read it and reply themselves.
            </p>
            <Link className="btn btn--gold" href="/estimate">Start your estimate</Link>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div className="funnel">
            <p className="eyebrow">For cleaners</p>
            <h2 className="display display--md">Work with us</h2>
            <p className="lede">
              AMP is growing. If you clean to this standard and want steady,
              respectful work in {business.city} and nearby, apply here.
            </p>
            <Link className="btn btn--ghost" href="/apply">Apply to join</Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
