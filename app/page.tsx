import "./overview.css";
import Link from "next/link";

const directions = [
  {
    href: "/a", letter: "A", name: "On the Clock",
    style: "Light, booking-first. Modeled on clean scheduling products: white page, rounded cards, one booking card as the hero's focus.",
    points: ["Interactive one-hour window picker in the hero", "Wide service photos with every real service link", "Comparison table, reviews, membership and FAQ"],
  },
  {
    href: "/b", letter: "B", name: "Fast. Fair. Fixed.",
    style: "Dark, editorial. Modeled on industrial brand sites: oversized condensed type, full-bleed photography, thin rules instead of cards.",
    points: ["Brand line as a giant hero headline", "Late-arrival payout slider for the 1-hour guarantee", "Full-bleed HVAC, plumbing and drain sections"],
  },
];

export default function Overview() {
  return (
    <main className="ov">
      <header className="ov-head">
        <p className="ov-by">Prepared by ElevenChase</p>
        <img className="ov-logo" src="https://www.billygo.com/wp-content/uploads/2025/04/billygo-logo.svg" alt="billyGO Air Conditioning & Plumbing" width={200} height={58} />
        <h1>Two homepage directions for billyGO</h1>
        <p className="ov-lede">Both use billyGO's real copy, services, phone number, Google reviews, photos and links, and keep the navy and orange brand. They differ in layout, type and mood.</p>
      </header>
      <div className="ov-grid">
        {directions.map((d) => (
          <Link key={d.href} href={d.href} className="ov-card">
            <div className="ov-frame" aria-hidden="true">
              <iframe src={d.href} title={`Preview of Direction ${d.letter}`} tabIndex={-1} loading="lazy" />
            </div>
            <div className="ov-body">
              <p className="ov-letter">Direction {d.letter}</p>
              <h2>{d.name}</h2>
              <p>{d.style}</p>
              <ul>{d.points.map((p) => <li key={p}>{p}</li>)}</ul>
              <span className="ov-open">Open Direction {d.letter} →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
