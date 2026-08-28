import { Link } from 'wouter'
import { Hero } from '../components/Hero'
import { Reveal } from '../components/Reveal'
import { Photo } from '../components/Photo'
import { PageMeta } from '../components/PageMeta'
import {
  business, details, houseRule, manifesto, people, services, testimonials, work,
} from '../data/site'

export function HomePage() {
  return (
    <>
      <PageMeta
        title="AMP Cleaning Services — Warwick, RI"
        description="Belinda and Amber clean houses in Warwick and greater Rhode Island. Deep cleans, standing schedules, move-outs, listings, post-construction and offices. 5.0 on Google."
      />

      <Hero />

      {/* ---------------------------------------------- what they say */}
      <section className="manifesto">
        <Reveal>
          <blockquote className="display display--lg">
            {manifesto.quote}
          </blockquote>
          <p className="manifesto__tail">{manifesto.tail}</p>
          <p className="manifesto__attr fine">— {manifesto.attribution}</p>
        </Reveal>
      </section>

      {/* ---------------------------------------------- services */}
      <section id="services" className="section">
        <Reveal>
          <p className="eyebrow">What we do</p>
          <h2 className="display display--lg svc__title">Six kinds of clean.</h2>
        </Reveal>

        <ol className="svc">
          {services.map((s, i) => (
            <Reveal key={s.slug} as="li" delay={i * 40} className="svc__item">
              <span className="svc__num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="display display--md">{s.name}</h3>
                <p className="svc__sum">{s.summary}</p>
                <p className="svc__detail">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ---------------------------------------------- the detail argument */}
      <section id="detail" className="section detail">
        <Reveal>
          <p className="eyebrow">Attention to detail</p>
          <h2 className="display display--lg detail__title">
Three years of photos, and this is what we kept taking pictures of.
          </h2>
          <p className="lede">
            Burner grates. The seam behind a tap. The top of a fan blade.
            You don’t photograph this unless you care how it turns out.
          </p>
        </Reveal>

        <div className="detail__grid">
          {details.map((d, i) => (
            <Reveal key={d.src} delay={i * 50}>
              <figure className="tile">
                <Photo
                  src={d.src}
                  alt={d.alt}
                  sizes="(max-width: 40rem) 45vw, (max-width: 70rem) 30vw, 18vw"
                />
                <figcaption>
                  <span className="tile__label">{d.label}</span>
                  <span className="tile__note">{d.note}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------- house rule */}
      <section className="rule-note">
        <Reveal>
          <p className="eyebrow">How we work</p>
          <p className="rule-note__quote">{houseRule.quote}</p>
          <p className="fine">— {houseRule.attribution}</p>
        </Reveal>
      </section>

      {/* ---------------------------------------------- rooms */}
      <section className="section">
        <Reveal>
          <p className="eyebrow">Finished work</p>
          <h2 className="display display--lg">Ordinary Rhode Island homes.</h2>
          <p className="lede">
            Photographed on a phone, on the day, with nothing staged.
          </p>
        </Reveal>
        <div className="rooms">
          {work.map((w, i) => (
            <Reveal key={w.src} delay={i * 40}>
              <figure className="room">
                <Photo
                  src={w.src}
                  alt={w.alt}
                  sizes="(max-width: 40rem) 45vw, (max-width: 70rem) 30vw, 22vw"
                />
                <figcaption className="fine">{w.room}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------- reviews */}
      <section id="reviews" className="section reviews">
        <Reveal>
          <p className="eyebrow">What people said</p>
          <h2 className="display display--lg">Every word below is public.</h2>
        </Reveal>
        <div className="reviews__grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 40}>
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
          <div className="team__body">
            <p className="eyebrow">Who turns up</p>
            <h2 className="display display--lg">Belinda and Amber.</h2>
            <p className="lede">
              A mother and daughter, {business.yearsInBusiness} years in.
              Call either of us.
            </p>
            <ul className="team__list">
              {people.map((p) => (
                <li key={p.name}>
                  <span className="team__name">{p.name}</span>
                  <span className="fine">{p.role}</span>
                  <a className="team__phone" href={p.phoneHref}>{p.phone}</a>
                </li>
              ))}
            </ul>
          </div>
          <figure className="team__figure">
            <Photo
              src="/media/companion.webp"
              alt="A golden retriever resting on a bed in soft window light."
              sizes="(max-width: 60rem) 90vw, 40vw"
            />
            <figcaption className="fine">
              We work around whoever already lives there.
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* ---------------------------------------------- funnels */}
      <section className="section funnels">
        <Reveal>
          <div className="funnel funnel--primary">
            <h2 className="display display--md">Want a price?</h2>
            <p>
              Tell us the square footage, the rooms, and roughly when.
              Belinda or Amber will read it and get back to you.
            </p>
            <Link className="btn btn--solid" href="/estimate">Get a price</Link>
          </div>
        </Reveal>
        <Reveal delay={70}>
          <div className="funnel">
            <h2 className="display display--md">Want to clean with us?</h2>
            <p>
              We are taking on help. If you notice the things other people
              walk past, we would like to meet you.
            </p>
            <Link className="btn btn--ghost" href="/apply">Apply to join</Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
