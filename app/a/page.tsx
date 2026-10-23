import type { Metadata } from "next";
import "./a.css";
import WindowPicker from "@/components/WindowPicker";
import { site, promises, steps, services, reviews, compare, membership, faqs, locations, areas } from "@/lib/site";

export const metadata: Metadata = { title: "Direction A · On the Clock — billyGO" };

export default function DirectionA() {
  return (
    <div className="da">
      <a className="skip" href="#main">Skip to content</a>
      <div className="a-topbar">
        <div className="a-wrap a-topbar-in">
          <span>1-Hour Windows · $0 Trip Fee · 24/7 Emergency Service</span>
          <span className="a-topbar-links">
            <a href={site.members}>Members</a><a href={site.financing}>Financing</a><a href={site.careers}>Careers</a>
          </span>
        </div>
      </div>
      <header className="a-header">
        <div className="a-wrap a-header-in">
          <a href="https://www.billygo.com" className="a-logo"><img src={site.img.logo} alt="billyGO Air Conditioning & Plumbing" width={168} height={48} /></a>
          <nav className="a-nav" aria-label="Main">
            <a href="#services">Services</a><a href="#how">How it works</a><a href="#membership">Membership</a><a href="#reviews">Reviews</a>
          </nav>
          <div className="a-header-cta">
            <a className="a-phone" href={site.tel}>{site.phone}</a>
            <a className="a-btn a-btn-primary" href={site.schedule}>Book online</a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="a-hero">
          <div className="a-wrap a-hero-grid">
            <div className="a-hero-copy">
              <p className="a-eyebrow">HVAC · Plumbing · Drains — Dallas-Fort Worth</p>
              <h1>Fast HVAC &amp; plumbing service, in a one-hour window.</h1>
              <p className="a-lede">Done right, on your schedule. If your tech is late, we pay you $1 for every minute, up to $60. Fast. Fair. Fixed. It's about time.</p>
              <ul className="a-checks">
                <li>1-Hour Window</li><li>$0 Trip Fee</li><li>Family-Owned</li>
              </ul>
              <p className="a-callline">Prefer to talk? <a href={site.tel}>Call {site.phone}</a> — booked in under 2 minutes.</p>
            </div>
            <WindowPicker scheduleUrl={site.schedule} />
          </div>
          <div className="a-wrap">
            <img className="a-hero-photo" src={site.img.hero} alt="billyGO Air Conditioning & Plumbing trucks and technicians serving Dallas-Fort Worth" width={1600} height={640} fetchPriority="high" />
          </div>
        </section>

        <section className="a-promises" aria-label="Our promises">
          <div className="a-wrap a-promise-row">
            {promises.map((p) => (
              <div key={p.title} className="a-promise"><strong>{p.title}</strong><span>{p.text}</span></div>
            ))}
            <a className="a-bbb" href={site.bbb}>BBB Business Profile →</a>
          </div>
        </section>

        <section className="a-section a-problem">
          <div className="a-wrap a-split">
            <div>
              <p className="a-eyebrow">Sound familiar?</p>
              <h2>You shouldn't lose a whole day to a home repair.</h2>
            </div>
            <div className="a-prose">
              <p>You take off work, block out the whole day, and wait. The tech may show up at 9am or 1pm — if at all — and most companies charge a fee just for pulling into the driveway. <strong>A day gone, money spent, and nothing fixed.</strong></p>
              <p>That's what drove Billy crazy. So he built the company he'd want at his own house: a one-hour appointment window, no trip fee, licensed techs and upfront, flat-rate pricing.</p>
            </div>
          </div>
        </section>

        <section id="how" className="a-section a-band">
          <div className="a-wrap">
            <h2 className="a-h2">How it works</h2>
            <ol className="a-steps">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className="a-step-n">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="a-tag">{s.tag}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="services" className="a-section">
          <div className="a-wrap">
            <h2 className="a-h2">Services across Dallas-Fort Worth</h2>
            <div className="a-services">
              {services.map((s) => (
                <article key={s.key} className="a-service">
                  <img src={s.img} alt={s.alt} width={1200} height={600} loading="lazy" />
                  <div className="a-service-body">
                    <h3><a href={s.href}>{s.title}</a></h3>
                    <p>{s.text}</p>
                    <ul className="a-chips">
                      {s.links.map(([l, h]) => <li key={l}><a href={h}>{l}</a></li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="a-section a-band">
          <div className="a-wrap a-split">
            <div>
              <p className="a-eyebrow">It's about time. Your time.</p>
              <h2>Late? We pay you.</h2>
              <p className="a-prose">You pick the one-hour window. We show up on time — or we pay you back $1 for every minute we're late, up to $60 off. Backed by upfront pricing, no commissioned salespeople, and technicians ready to fix it on the spot.</p>
              <a className="a-btn a-btn-secondary" href={site.guarantee}>Read the 1-Hour Guarantee</a>
            </div>
            <img className="a-rounded" src={site.img.drainServices} alt="billyGO plumber working on a drain repair" width={1000} height={620} loading="lazy" />
          </div>
        </section>

        <section className="a-section">
          <div className="a-wrap">
            <h2 className="a-h2">The middle you actually want</h2>
            <p className="a-sub">Big enough to count on, local and accountable to you.</p>
            <div className="a-table-wrap">
              <table className="a-table">
                <thead><tr><th scope="col">What you get</th><th scope="col">billyGO</th><th scope="col">Private equity chain</th></tr></thead>
                <tbody>
                  {compare.map(([a, b]) => (
                    <tr key={a}><th scope="row">{a}</th><td className="yes">✓ Yes</td><td className="no">{b}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="reviews" className="a-section a-band">
          <div className="a-wrap">
            <h2 className="a-h2">What DFW homeowners are saying</h2>
            <p className="a-sub">Recent Google reviews.</p>
            <div className="a-reviews">
              {reviews.map((r) => (
                <figure key={r.name} className="a-review">
                  <div className="a-stars" aria-label="5 out of 5 stars">★★★★★</div>
                  <blockquote>{r.text}</blockquote>
                  <figcaption><strong>{r.name}</strong> · Google · {r.date}</figcaption>
                </figure>
              ))}
            </div>
            <a className="a-link" href={site.reviews}>Read more local reviews →</a>
          </div>
        </section>

        <section id="membership" className="a-section">
          <div className="a-wrap a-member">
            <img className="a-rounded" src={site.img.techAtDoor} alt="billyGO technician arriving at a home for service" width={1000} height={620} loading="lazy" />
            <div>
              <p className="a-eyebrow">billyGO Membership · $99/year</p>
              <h2>Become a member and never pay retail again.</h2>
              <ul className="a-benefits">
                {membership.map(([t, d]) => <li key={t}><strong>{t}</strong><span>{d}</span></li>)}
              </ul>
              <a className="a-btn a-btn-primary" href={site.membership}>See membership plans</a>
            </div>
          </div>
        </section>

        <section className="a-section a-band">
          <div className="a-wrap a-faq-grid">
            <div>
              <h2 className="a-h2">Straight answers</h2>
              <p className="a-sub">Pricing, scheduling, and what to expect.</p>
              <a className="a-link" href={site.faqs}>See all FAQs →</a>
            </div>
            <div className="a-faq">
              {faqs.map(([q, a]) => (
                <details key={q}><summary>{q}</summary><p>{a}</p></details>
              ))}
            </div>
          </div>
        </section>

        <section className="a-section">
          <div className="a-wrap">
            <h2 className="a-h2">Serving homeowners across the metroplex</h2>
            <ul className="a-areas">
              {areas.map((a) => <li key={a.name}><a href={a.href}>{a.name}</a></li>)}
            </ul>
          </div>
        </section>

        <section className="a-cta">
          <div className="a-wrap a-cta-in">
            <h2>Techs available across DFW today.</h2>
            <div className="a-cta-btns">
              <a className="a-btn a-btn-primary" href={site.schedule}>Book my 1-hour window</a>
              <a className="a-btn a-btn-light" href={site.tel}>Call {site.phone}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="a-footer">
        <div className="a-wrap a-footer-grid">
          <div>
            <img src={site.img.logoReverse} alt="billyGO" width={160} height={46} loading="lazy" />
            <p>Texas family-owned HVAC &amp; plumbing. <a href={`mailto:${site.email}`}>{site.email}</a></p>
            <p className="a-social">{site.social.map((s) => <a key={s.label} href={s.href}>{s.label}</a>)}</p>
          </div>
          {locations.map((l) => (
            <div key={l.city} className="a-loc">
              <h3>{l.href ? <a href={l.href}>{l.city}, TX</a> : `${l.city}, TX`}</h3>
              <p>{l.addr}</p>
              <p><a href={`tel:+1${l.phone.replace(/\D/g, "")}`}>{l.phone}</a></p>
            </div>
          ))}
        </div>
        <div className="a-wrap a-legal">
          <span>{site.licenses}</span>
          <span><a href={site.privacy}>Privacy Policy</a> · © 2026 billyGO DFW LLC</span>
        </div>
      </footer>
    </div>
  );
}
