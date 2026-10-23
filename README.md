# billygo0-elevenchase

Two homepage redesign directions for billyGO Air Conditioning & Plumbing (billygo.com), prepared by ElevenChase.

- `/` Overview with live previews of both directions
- `/a` Direction A, "On the Clock": light, booking-first, interactive one-hour window picker
- `/b` Direction B, "Fast. Fair. Fixed.": dark editorial, full-bleed photos, late-arrival payout slider

Every page has the Overview / Direction A / Direction B switcher. Copy, services, phone numbers, reviews,
locations and links come from billygo.com; photos and logos load from billygo.com's own media library.
Design tokens for both directions are in `DESIGN.md`. All content lives in `lib/site.ts`.

## Run locally
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Push to GitHub
```bash
git init
git add .
git commit -m "billyGO redesign directions A and B"
git branch -M main
git remote add origin https://github.com/<your-username>/billygo0-elevenchase.git
git push -u origin main
```
(Create the empty repo `billygo0-elevenchase` on github.com first, without a README.)

## Deploy on Vercel
1. vercel.com → Add New → Project → import `billygo0-elevenchase`.
2. Framework preset: Next.js (auto-detected). Leave build settings as default.
3. Deploy. Share `/` for the overview, or `/a` and `/b` directly.

Pages are marked `noindex` so the pitch doesn't show up in search.
