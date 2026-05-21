@AGENTS.md

# SuperDecor — Context for Claude

> Read this first. AGENTS.md (above) is also active and has critical Next.js 16 warnings.

## What this is

**SuperDecor Brașov** — site oficial pentru o afacere locală din Brașov care vinde și montează **perdele, draperii, sine și galerii, jaluzele, rolete, lenjerii de pat și mobilă la comandă**. Public țintă: clienți rezidențiali din Brașov și județ, plus comenzi în toată România.

Limba site-ului: **Română**. Toate copy-urile vizibile utilizatorilor sunt în română.

## Goals (non-negociabile)

- **Lighthouse 100/100/100/100** (Performance, Accessibility, Best Practices, SEO).
- Top SEO local pentru "perdele Brașov", "mobilă la comandă Brașov" și termeni adiacenți.
- Conversie clară: vizitatorul ajunge la `/contact` sau formă de ofertă în max 2 click-uri.

## Performance Budget

Refuză să adaugi cod care încalcă bugetul. Dacă o feature cere depășire, semnalează compromisul utilizatorului înainte.

| Metric | Buget |
| --- | --- |
| Lighthouse (toate categoriile) | **100/100/100/100** |
| First-load JS (initial bundle) | **< 50 KB** gzipped |
| LCP | **< 1.5 s** |
| CLS | **< 0.1** |
| INP | **< 200 ms** |
| Total page weight (homepage) | **< 250 KB** transfer |
| Fonts | Self-host via `next/font`, **max 2 families**, `display: swap` |
| Images | `next/image` obligatoriu, AVIF/WebP, dimensiuni explicite |
| 3rd-party scripts | Doar Vercel Analytics + Speed Insights (oficial) |

Reguli de bloat:
- Nicio bibliotecă mare (lodash, moment, animate.css, etc.) — folosește utilitare native sau echivalent shadcn.
- Niciun framework de animație greu (framer-motion doar dacă e justificat și tree-shaken).
- Nicio iconografie încărcată în vrac — `lucide-react` are tree-shaking, importă punctual.

## Stack & versiuni

| | |
| --- | --- |
| Framework | Next.js **16** (App Router) — **vezi `AGENTS.md`: API-uri diferite față de versiunile anterioare** |
| UI | React 19, TypeScript strict |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"`), shadcn/ui (preset **Nova**), `tw-animate-css` |
| Componente | Radix UI primitives, `lucide-react` iconițe |
| Conținut | MDX (`next-mdx-remote`, `gray-matter`, `reading-time`) |
| SEO | `schema-dts` typed JSON-LD, Metadata API |
| Analytics | `@vercel/analytics`, `@vercel/speed-insights` |
| Node | **22** (pin în `.nvmrc`) |
| Deploy | Vercel (auto din `main`) |

## Structură de foldere

```
.
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx          # Root layout: <html lang="ro">, metadata, JSON-LD global, Analytics
│  │  ├─ page.tsx            # Homepage
│  │  ├─ globals.css         # Token-uri Nova + brand teal
│  │  ├─ sitemap.ts          # Sitemap programatic (din src/lib/site.ts)
│  │  ├─ robots.ts           # Robots
│  │  ├─ favicon.ico
│  │  └─ <route>/page.tsx    # O pagină per slug (mobila-la-comanda, perdele-draperii, etc.)
│  ├─ components/
│  │  └─ ui/                 # Componente shadcn (Button, Card, etc.) — nu le edita manual
│  └─ lib/
│     ├─ site.ts             # SINGLE SOURCE OF TRUTH pentru date despre business
│     ├─ seo.ts              # Generatori JSON-LD tipați (schema-dts)
│     └─ utils.ts            # `cn()` helper (clsx + tailwind-merge)
├─ public/                   # Imagini statice, favicon, OG image
├─ next.config.ts            # Security headers + image config
├─ prettier.config.js
├─ AGENTS.md                 # ⚠️ Avertisment Next.js 16 (citește înaintea oricărei modificări)
├─ CLAUDE.md                 # Acest fișier
└─ README.md
```

Conținutul MDX viitor va trăi în `src/content/<categorie>/<slug>.mdx` (creează folderul când e nevoie).

## Convenții de nume

- **Slugs Romanian, kebab-case**: `mobila-la-comanda`, `perdele-draperii`, `sine-galerii`, `jaluzele-rolete`, `lenjerii-de-pat`, `servicii`, `contact`. Fără diacritice în URL.
- **Fișiere**: `kebab-case.tsx` pentru pagini și utilitare, **PascalCase.tsx** pentru componente React.
- **Componente React**: `PascalCase` named exports preferate (`export function ProductCard`).
- **Variabile/funcții**: `camelCase`.
- **Constante**: `UPPER_SNAKE_CASE` doar pentru valori cu adevărat globale; `siteConfig` rămâne camelCase obiect.
- **Imagini**: `kebab-case.<ext>` în `public/` sau colocate cu pagina. Fără diacritice în numele fișierelor.

## Cum adaugi o pagină nouă

1. Adaugă slug-ul în `src/lib/site.ts` (`navigation` array). Slug-ul intră automat în meniu, sitemap și `routes`.
2. Creează `src/app/<slug>/page.tsx`:

   ```tsx
   import type { Metadata } from "next";

   export const metadata: Metadata = {
     title: "Titlu pagină",
     description: "Descriere SEO unică, 150-160 caractere.",
     alternates: { canonical: "/<slug>" },
   };

   export default function Page() {
     return <main>{/* ... */}</main>;
   }
   ```

3. Dacă pagina are FAQ, breadcrumbs, sau un serviciu specific, generează JSON-LD din `@/lib/seo`:

   ```tsx
   import { breadcrumbSchema, faqSchema, jsonLd, serviceSchema } from "@/lib/seo";
   // ...
   <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema({ ... })) }} />
   ```

4. Verifică `npm run build` — sitemap-ul include automat noul slug.

## Cum adaugi un produs/serviciu (MDX)

Conținutul lung (descrieri categorii, ghiduri, studii de caz) trăiește în MDX. Convenție:

```
src/content/<categorie>/<slug>.mdx
```

Frontmatter minim:

```yaml
---
title: "Draperii blackout pentru dormitor"
slug: "draperii-blackout-dormitor"     # fără folder
description: "Meta description pentru SEO, 150-160 char."
category: "perdele-draperii"
image: "/images/draperii-blackout.jpg"  # opțional, folosit pentru OG
publishedAt: "2026-05-20"
updatedAt: "2026-05-20"
faq:                                    # opțional, generează FAQPage schema
  - question: "Cât costă montajul?"
    answer: "Montaj gratuit în Brașov pentru comenzi peste 1000 RON."
---
```

Render-ul MDX se face cu `next-mdx-remote`; reading time cu `reading-time`.

## Cum editezi info despre business

**`src/lib/site.ts` este single source of truth** pentru:
- nume, descriere, URL canonic
- adresă, coordonate geo, telefon, email, WhatsApp
- program de funcționare
- social media
- zone deservite
- listă navigație + rute

Schimbi `siteConfig` o singură dată → metadata, sitemap, robots, JSON-LD (Organization, LocalBusiness, WebSite), header, footer se actualizează automat.

**Nu hardcoda** telefon/email/adresă în alte fișiere — importă din `siteConfig`.

## Convenții SEO

- **Metadata per pagină**: `export const metadata` în fiecare `page.tsx` (titlu specific, description unică, `alternates.canonical`).
- **Title template**: setat global în `app/layout.tsx` ca `"%s | SuperDecor"` — paginile dau doar partea variabilă.
- **OG image**: default `siteConfig.ogImage` (1200×630). Suprascrie per pagină dacă e nevoie.
- **JSON-LD**:
  - `Organization`, `WebSite`, `LocalBusiness` → injectate global în root layout.
  - `BreadcrumbList`, `Service`, `Product`, `FAQPage` → injectate per pagină prin helperii din `@/lib/seo`.
  - Toate trec prin `jsonLd()` care escape-uiește `<` → `<` pentru XSS safety.
- **`hreflang`**: doar `ro-RO` deocamdată (set în root layout `alternates.languages`).
- **Imagini**: `alt` obligatoriu și descriptiv în română.
- **Linkuri interne**: folosește `next/link` cu `href` relativ (`/perdele-draperii`).

## Security & headers

`next.config.ts` aplică CSP, HSTS, X-Frame-Options DENY, Referrer-Policy, Permissions-Policy, X-Content-Type-Options. CSP permite Vercel Analytics (`va.vercel-scripts.com`) și `unsafe-inline` pentru JSON-LD și Tailwind.

Dacă adaugi un script third-party, **actualizează CSP** explicit. Nu lăsa `*` sau directive permisive.

## Deploy workflow

```
git push origin main   # → Vercel deploy automat
```

- Branch principal: `main`.
- PR-uri primesc preview deploy.
- Domeniu producție: `superdecor.ro`. Domeniu Vercel: `superdecor.vercel.app`.
- Variabile de mediu: setate în Vercel Dashboard (vezi `.env.example` pentru lista așteptată).

Nu rula `vercel deploy` manual — push-ul declanșează tot.

## Commands cheatsheet

```bash
npm run dev          # http://localhost:3000
npm run build        # build producție (rulează înainte de push pentru pages noi)
npm run start        # servește build-ul local
npm run lint         # next lint
npm run format       # prettier + tailwind ordering
npm run format:check # CI-friendly check
```

## DO NOT touch

- `.next/` — output de build, regenerat
- `node_modules/` — managed de npm
- `next-env.d.ts` — generat de Next, NU edita manual
- `src/components/ui/*` — componente shadcn; regenerează cu CLI shadcn dacă e nevoie, nu le edita la mână
- `package-lock.json` — managed de npm
- `.vercel/` — generat de Vercel CLI
- `node_modules/next/dist/docs/` — sursa Next 16, **doar pentru citire**

## Stil de cod

- TypeScript strict — fără `any` decât justificat (cu eslint-disable-next-line + motivație).
- Server Components by default; `"use client"` doar când e necesar (interacțiune, hooks browser).
- Fără comentarii inutile — cod self-explanatory. Comentarii doar pentru de ce non-obvious.
- Tailwind: clase ordonate de plugin-ul prettier.
- Importuri: relative `@/` (vezi `tsconfig.json paths`).
