# The Get Booked Kit · Otova

A responsive resource hub built with Next.js App Router, TypeScript, and React. The page includes the four Profit Pipeline steps, eight Google Docs/Sheets resources, a browser-saved setup checklist, and office-hours and agency-support links.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Validate changes with `npm run lint` and `npm run build`. Run the production build with `npm start`.

## Content and assets

- `src/app/page.tsx`: all supplied resource titles, descriptions, links, support copy, and the native responsive photo collage.
- `src/app/globals.css`: warm editorial design, responsive layouts, visible focus states, and reduced-motion support.
- `src/components/kit/KitNavigation.tsx`: scroll-aware navigation; compact horizontal navigation on mobile.
- `src/components/kit/KitChecklist.tsx`: six setup steps, saved locally under `otova-kit-checklist-v1`. No account or server sync; storage failures fall back to in-memory progress.
- `public/images/`: the three supplied photos. Next Image handles responsive sizing and optimized delivery without modifying the originals.

## Walkthrough video

The walkthrough is the Vimeo video "Get Booked Kit Setup and Resource Guide". To swap it, set `WALKTHROUGH_EMBED_URL` in `src/components/VSLPlayer.tsx` to the new video's Vimeo player URL (`https://player.vimeo.com/video/VIDEO_ID`), not the public watch URL. Set it to `null` to show the coming-soon placeholder. The player supports fullscreen and does not autoplay.

## Colors

The palette matches otovaagency.com: brown `#5c3325` for text, peach `#eda18a` for accents and primary buttons, and blush `#fff3f0` for the page background. The core tokens are at the top of `src/app/globals.css`.

The setup checklist intentionally puts positioning and talk titles before opportunity research, matching the supplied walkthrough plan. Update those steps if the recording changes that order.

## Deployment

Build with `npm run build` and serve with `npm start`, or deploy as a Next.js project on your hosting provider. This checkout is not connected to a Git repository or deployment project. No deployment was performed.

Search engines and AI crawlers are kept out of this customer resource hub three ways: `src/app/robots.ts` disallows every path, `next.config.ts` sends an `X-Robots-Tag: noindex` header on every response, and `src/app/layout.tsx` sets the matching robots meta tag. Keep all three; the public sales page and its SEO live on Squarespace (see `squarespace/`). This is not authentication; apply the client's chosen access control at the hosting/application layer if access must be restricted. Google resource permissions are managed by their owners. The resource destinations are preserved exactly as supplied, including the Speaker's Vault shared-sheet URL.

The legacy sales-page components remain in `src/components/` for reference but are not rendered by this hub. No checkout or purchase flow is included on this page.
