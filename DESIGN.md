# billyGO redesign — design systems

Both directions keep billyGO's own logo and its navy + orange brand colors. UXKIN wasn't connected,
so the directions are based on the brand and on well-known site patterns named below, not on a pulled
reference library.

## Shared brand tokens
| Token | Value | Role |
|---|---|---|
| navy | #0B2545 | Brand ink: headings, nav, dark surfaces |
| orange | #F47920 | Primary action fill (with navy text, 6.4:1) |
| orange-ink | #B4500A | Orange used as text on white (4.9:1) |

## Direction A — "On the Clock" (light, booking-first)
Pattern: clean scheduling/booking products (Calendly, Airbnb-style booking cards): white page, one booking
card as the hero's focus, soft gray bands, rounded cards.
- Color: bg #FFFFFF, surface #F4F6F9, line #E2E7EE, text #0B2545, muted #4A5872; primary = orange fill/navy text.
- Type: Plus Jakarta Sans 400/600/800. Scale 14/16/18/22/28/40/56, body 17px, line-height 1.6.
- Spacing: 8px base; sections 96px desktop / 64px phone; content width 1200px.
- Shape: radius 12 / 20 / 999 (pills); one shadow `0 10px 30px rgba(11,37,69,.10)`.
- Components: pill buttons (primary orange, secondary navy outline), time-slot chips, service cards with wide photos.
- Imagery: landscape photos at full container width, 16:9 or wider, never cropped to squares.

## Direction B — "Fast. Fair. Fixed." (dark, editorial)
Pattern: industrial/editorial brand sites (Rivian, Patagonia-style): dark ground, oversized condensed
uppercase type, full-bleed photography, square edges, thin rules instead of cards.
- Color: bg #07111F, surface #0F1D33, rule rgba(255,255,255,.14), text #F3F5F8, muted #A9B4C6; accent orange #F47920 (text on dark 6.9:1).
- Type: Archivo 800 (display, uppercase, tight tracking) + Inter 400/600 body. Scale 14/16/18/24/36/64/112, body 17px.
- Spacing: 8px base; sections 120px desktop / 72px phone; content width 1280px.
- Shape: radius 2; no shadows; 1px rules.
- Components: square orange primary, ghost secondary, numbered rows, range slider for the late-payout guarantee.
- Imagery: full-bleed landscape photos edge to edge, darkened with a navy gradient where text sits on top.
