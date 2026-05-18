# js-rendering-comparison

Measuring the performance of modern JavaScript rendering schemes

| Framework | Schemes |
|-----------|------|
| Vite + React | CSR |
| Next.js | SSR, SSG (Full Hydration) |
| Astro | SSR, SSG (Partial Hydration) |

Using https://picsum.photos/ for intialy downloading unique images once

## Setup

**Generate items and download images**:

```bash
cd shared
npm run generate
```

Each app has a `predev`/`prebuild` script that automatically copies `items.json` and the images from `shared/` into the app:

The sync runs on first start (copies 500 images, ~1–2 sec) and skips on subsequent runs as long as `shared/images/` and `apps/*/public/images/` are in sync.

## Planned measurements

**Metrics:** FCP, LCP, TBT, CLS, INP, TTFB, Hydration-timestamps

**Variablen-Matrix:**
- App-Umfang: wenig vs. viele Inhalte, wenig vs. viel Interaktion
- Cache: Cold Load vs. Warm Load
- Serverdistanz: entfernter Server ohne CDN vs. Cloudflare-CDN
- Netzwerk: simulierte Bedingungen (3G/4G/Cable)

**Tools:** Lighthouse CI

## Status

- [x] projectstructure
- [x] item generation and image download
- [ ] Vite + React (CSR)
- [ ] Next.js (SSR, SSG)
- [ ] Astro (SSR, SSG, Partial Hydration)
- [ ] Benchmark-Setup
- [ ] Deployment