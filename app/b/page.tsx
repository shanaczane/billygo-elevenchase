import type { Metadata } from "next";
import "./b.css";
import LatePayout from "@/components/LatePayout";
import { site, promises, steps, services, reviews, compare, membership, faqs, locations, areas } from "@/lib/site";

export const metadata: Metadata = { title: "Direction B · Fast. Fair. Fixed. — billyGO" };

export default function DirectionB() {
  const [lead, ...rest] = reviews;
  return (
    <div className="db">
      <a className="skip" href="#main">Skip to content</a>
      <header className="b-header">
        <div className="b-wrap b-header-in">
          <a href="https://www.billygo.com" className="b-logo"><img src={site.img.logoReverse} alt="billyGO Air Conditioning & Plumbing" width={160} height={46} /></a>
          <nav className="b-nav" aria-label="Main">
            <a href="#services">Services</a><a href="#guarantee">Guarantee</a><a href="#membership">Membership</a><a href={site.members}>Members</a>
          </nav>
          <a className="b-phone" href={site.tel}>{site.phone}</a>
          <a className="b-btn b-btn-primary b-btn-sm" href={site.schedule}>Schedule</a>
        </div>
      </header>

      <main id="main">
        <section className="b-hero">
          <img className="b-hero-img" src={site.img.hero} alt="billyGO technicians and service trucks in Dallas-Fort Worth" width={1920} height={1080} fetchPriority="high" />
          <div className="b-hero-shade" />
          <div className="b-wrap b-hero-in">
            <p className="b-kicker">HVAC &amp; Plumbing · Dallas-Fort Worth</p>
            <h1>Fast.<br />Fair.<br /><span>Fixed.</span></h1>
            <p className="b-hero-lede">Done right, on your schedule. A guaranteed one-hour window, a $0 trip fee, and a Texas family-owned team. It's about time.</p>
            <div className="b-hero-btns">
              <a className="b-btn b-btn-primary" href={site.schedule}>Schedule online</a>
              <a className="b-btn b-btn-ghost" href={site.tel}>Call {site.phone}</a>
            </div>
          </div>
        </section>

        <section className="b-strip" aria-label="Our promises">
          <div className="b-wrap b-strip-in">
            {promises.map((p) => (
              <div key={p.title}><strong>{p.title}</strong><span>{p.text}</span></div>
            ))}
            <div><strong>Family-Owned</strong><span>Decisions made local.</span></div>
          </div>
        </section>

        <section className="b-section">
          <div className="b-wrap b-statement">
            <p className="b-kicker">Sound familiar?</p>
            <h2>A day gone, money spent, and nothing fixed.</h2>
            <div className="b-cols">
              <p>You take off work, block out the whole day, and wait. The tech may show up at 9am or 1pm — if at all — and most companies charge a fee just for pulling into the driveway.</p>
              <p>That's what drove Billy crazy. Your time is worth as much as anyone's. So he built the company he'd want at his own house — one that <strong>earns your trust before it earns a dollar.</strong></p>
            </div>
          </div>
        </section>

        <section id="guarantee" className="b-section b-guarantee">
          <div className="b-wrap b-guarantee-grid">
            <div>
              <p className="b-kicker">The One-Hour Guarantee</p>
              <h2>It's about time.<br />Your time.</h2>
              <p className="b-muted">You pick the one-hour window. We show up on time — or we pay you $1 for every minute we're late, up to $60 off. Try it:</p>
              <a className="b-textlink" href={site.guarantee}>How the guarantee works →</a>
            </div>
            <LatePayout />
          </div>
        </section>

        <section id="services" className="b-services" aria-label="Services">
          {services.map((s, i) => (
            <article key={s.key} className="b-service">
              <img src={s.img} alt={s.alt} width={1920} height={900} loading="lazy" />
              <div className="b-service-shade" />
              <div className="b-wrap b-service-in">
                <span className="b-index">0{i + 1}</span>
                <h2><a href={s.href}>{s.title}</a></h2>
                <p>{s.text}</p>
                <ul className="b-links">
                  {s.links.map(([l, h]) => <li key={l}><a href={h}>{l}</a></li>)}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section className="b-section">
          <div className="b-wrap">
            <p className="b-kicker">How it works</p>
            <h2 className="b-h2">Booking to fixed, in four steps.</h2>
            <ol className="b-rows">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className="b-row-n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="b-row-tag">{s.tag}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="b-section b-surface">
          <div className="b-wrap">
            <p className="b-kicker">billyGO vs. the private equity chain</p>
            <h2 className="b-h2">Big enough to count on. Local enough to answer to you.</h2>
            <div className="b-table-wrap">
              <table className="b-table">
                <thead><tr><th scope="col"><span className="sr">Feature</span></th><th scope="col">billyGO</th><th scope="col">PE chain</th></tr></thead>
                <tbody>
                  {compare.map(([a, b]) => (
                    <tr key={a}><th scope="row">{a}</th><td className="yes">Yes</td><td className="no">{b}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="b-section">
          <div className="b-wrap">
            <p className="b-kicker">Recent Google reviews</p>
            <figure className="b-pull">
              <blockquote>“{lead.text}”</blockquote>
              <figcaption>{lead.name} · {lead.date}</figcaption>
            </figure>
            <div className="b-reviews">
              {rest.map((r) => (
                <figure key={r.name}>
                  <blockquote>{r.text}</blockquote>
                  <figcaption>{r.name} · {r.date}</figcaption>
                </figure>
              ))}
            </div>
            <a className="b-textlink" href={site.reviews}>More local reviews →</a>
          </div>
        </section>

        <section id="membership" className="b-member">
          <img src={site.img.techAtDoor} alt="billyGO technician arriving at a home" width={1920} height={1000} loading="lazy" />
          <div className="b-member-shade" />
          <div className="b-wrap b-member-in">
            <p className="b-kicker">Membership · $99 a year</p>
            <h2>Never pay retail again.</h2>
            <ul>
              {membership.map(([t, d]) => <li key={t}><strong>{t}</strong> <span>{d}</span></li>)}
            </ul>
            <a className="b-btn b-btn-primary" href={site.membership}>Join billyGO NOW</a>
          </div>
        </section>

        <section className="b-section">
          <div className="b-wrap b-faq-grid">
            <div>
              <p className="b-kicker">FAQ</p>
              <h2 className="b-h2">Straight answers.</h2>
              <a className="b-textlink" href={site.faqs}>All FAQs →</a>
            </div>
            <div className="b-faq">
              {faqs.map(([q, a]) => (
                <details key={q}><summary>{q}</summary><p>{a}</p></details>
              ))}
            </div>
          </div>
        </section>

        <section className="b-section b-surface">
          <div className="b-wrap">
            <p className="b-kicker">Service area</p>
            <h2 className="b-h2">32 cities across the metroplex.</h2>
            <ul className="b-areas">
              {areas.map((a) => <li key={a.name}><a href={a.href}>{a.name}</a></li>)}
            </ul>
          </div>
        </section>

        <section className="b-final">
          <div className="b-wrap">
            <h2>Techs available across DFW.</h2>
            <div className="b-hero-btns">
              <a className="b-btn b-btn-primary" href={site.schedule}>Book my 1-hour window</a>
              <a className="b-btn b-btn-ghost" href={site.tel}>Call {site.phone}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="b-footer">
        <div className="b-wrap b-footer-grid">
          {locations.map((l) => (
            <div key={l.city}>
              <h3>{l.href ? <a href={l.href}>{l.city}</a> : l.city}</h3>
              <p>{l.addr}</p>
              <p><a href={`tel:+1${l.phone.replace(/\D/g, "")}`}>{l.phone}</a></p>
            </div>
          ))}
        </div>
        <div className="b-wrap b-legal">
          <span>{site.social.map((s) => <a key={s.label} href={s.href}>{s.label}</a>)}</span>
          <span><a href={`mailto:${site.email}`}>{site.email}</a> · <a href={site.bbb}>BBB</a> · <a href={site.privacy}>Privacy</a></span>
          <span>{site.licenses} · © 2026 billyGO DFW LLC</span>
        </div>
      </footer>
    </div>
  );
}
