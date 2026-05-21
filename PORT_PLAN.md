# PORT_PLAN — Lovable → Next.js 16

Porting the design from [andreacreativesoft/re-style-shine](https://github.com/andreacreativesoft/re-style-shine) into our Next.js scaffold (`new-superdecor`).

- **Source clone**: `/tmp/lovable-source` (TanStack Start + Vite + Tailwind v4)
- **Live source preview**: <https://re-style-shine.lovable.app>
- **Target**: `C:\laragon\www\new-superdecor` (Next.js 16 App Router, see `CLAUDE.md`)

---

## 1. Stack delta (what changes during port)

| Concern | Lovable source | Next.js target | Action |
| --- | --- | --- | --- |
| Router | TanStack Router (`src/routes/*.tsx`, file-based) | Next.js App Router (`src/app/<slug>/page.tsx`) | Convert each `Route = createFileRoute(...)` to `page.tsx` |
| Head/SEO | `head: () => ({ meta: [...] })` per route | `export const metadata: Metadata` per `page.tsx` | Mechanical rewrite per route |
| Styling | Tailwind v4 + custom tokens in `src/styles.css` | Tailwind v4 + Nova preset in `src/app/globals.css` | Merge brand tokens into our globals (override teal); keep our radius/Nova structure |
| Fonts | Google Fonts (Playfair Display, Inter, JetBrains Mono) loaded via `<link>` in every page | `next/font/google` self-hosted in root layout | Replace `<link>` with `next/font` (Geist currently in scaffold gets dropped — see Decisions §8) |
| Links | `<Link to="/x">` (TanStack) | `<Link href="/x">` (`next/link`) | Mechanical rename |
| Images | `import x from "@/assets/x.jpg"` + raw `<img>` | `import x from "@/assets/x.jpg"` (or `/public/` paths) + `next/image` | Move all 31 files into `public/images/` (or keep colocated as `src/assets/` — see Decisions §8) and swap `<img>` → `<Image>` for above-fold + lazy ones |
| Sticky font import | Every route re-imports Google Fonts CSS | Done once in root layout | Delete all the per-route `<link rel="stylesheet" href="https://fonts.googleapis.com/...">` blocks |
| Footer/Nav | Inline copy-paste in `index.tsx`; reusable `SiteNav` + `SiteFooter` in `CategoryPage.tsx` | Promote `SiteNav` + `SiteFooter` to `src/components/site-nav.tsx` and `src/components/site-footer.tsx` (used by root layout, not individual pages) | Move into root layout once and remove from page bodies |
| Form | Mailto-based `onSubmit` handler | Same for v1 (or server action — see Decisions §8) | Keep mailto for first pass, mark as TODO for upgrade |
| shadcn UI components | 45 components scaffolded but **none actually imported by any route or CategoryPage** | Already have `src/components/ui/` in scaffold | **No port needed for shadcn UI** — pages use plain HTML+Tailwind |
| TanStack Query | Wraps the app | Not needed (no data fetching client-side yet) | Drop |
| Cloudflare Worker (`wrangler.jsonc`, `server.ts`) | Deploy target | Vercel | Drop |

---

## 2. Routes mapping

Lovable uses short slugs; our scaffold uses long SEO-friendly slugs (matches `src/lib/site.ts`).

| Lovable route | Lovable file | Next.js route | Next.js file | Status of scaffold |
| --- | --- | --- | --- | --- |
| `/` | `src/routes/index.tsx` (28 KB, full home with hero/cats/process/reviews/showroom/partners/cta/footer) | `/` | `src/app/page.tsx` | Replace placeholder scaffold |
| `/mobila` | `src/routes/mobila.tsx` (stub using `CategoryPage`) | `/mobila-la-comanda` | `src/app/mobila-la-comanda/page.tsx` | **NEW** |
| `/perdele` | `src/routes/perdele.tsx` (stub) | `/perdele-draperii` | `src/app/perdele-draperii/page.tsx` | **NEW** |
| `/sine` | `src/routes/sine.tsx` (stub) | `/sine-galerii` | `src/app/sine-galerii/page.tsx` | **NEW** |
| `/jaluzele` | `src/routes/jaluzele.tsx` (14 KB, custom — types/projects/atelier sections) | `/jaluzele-rolete` | `src/app/jaluzele-rolete/page.tsx` | **NEW** |
| `/lenjerii` | `src/routes/lenjerii.tsx` (17 KB, custom — materials/stock/inspire/copil/master sections) | `/lenjerii-de-pat` | `src/app/lenjerii-de-pat/page.tsx` | **NEW** |
| `/servicii` | `src/routes/servicii.tsx` (9.6 KB, 3 service blocks) | `/servicii` | `src/app/servicii/page.tsx` | **NEW** |
| (anchor `#contact` in footer) | inline section | `/contact` | `src/app/contact/page.tsx` | **NEW — content needs to be invented** (Lovable has no dedicated contact page; just an anchored CTA + form in the footer) |

**Internal link rewrites needed inside ported components**:

| Old `to` | New `href` |
| --- | --- |
| `/mobila` | `/mobila-la-comanda` |
| `/perdele` | `/perdele-draperii` |
| `/sine` | `/sine-galerii` |
| `/jaluzele` | `/jaluzele-rolete` |
| `/lenjerii` | `/lenjerii-de-pat` |
| `/servicii` | `/servicii` (unchanged) |
| `#contact` (in nav/CTA) | `/contact` |

---

## 3. Component mapping (Lovable → Next.js)

Lovable doesn't break the home into section components — everything is inline in `index.tsx`. The port should break it down for maintainability.

| Lovable section (inline in `index.tsx`) | New Next.js component | Path | Used by |
| --- | --- | --- | --- |
| Sticky `<nav>` | `<SiteNav>` | `src/components/site-nav.tsx` | Root layout |
| Hero `<header>` | `<HomeHero>` | `src/components/sections/home-hero.tsx` | `/` only |
| Marquee strip | `<TrustBar>` | `src/components/sections/trust-bar.tsx` | `/` |
| "De ce noi" 4-up grid | `<HomeUsp>` | `src/components/sections/home-usp.tsx` | `/` |
| Categories `<section id="categorii">` | `<CategoriesGrid>` | `src/components/sections/categories-grid.tsx` | `/` |
| Showroom story | `<ShowroomBlock>` | `src/components/sections/showroom-block.tsx` | `/`, `/contact` |
| Process | `<ProcessSteps>` | `src/components/sections/process-steps.tsx` | `/`, `/servicii` |
| Reviews | `<Reviews>` | `src/components/sections/reviews.tsx` | `/` |
| Partners marquee | `<PartnersMarquee>` | `src/components/sections/partners-marquee.tsx` | `/` |
| Big teal CTA + booking form | `<ConsultationCta>` | `src/components/sections/consultation-cta.tsx` | `/`, `/contact` |
| Footer | `<SiteFooter>` | `src/components/site-footer.tsx` | Root layout |
| (From `CategoryPage.tsx`) shared hero+details+CTA layout for short category pages | `<CategoryLayout>` | `src/components/category-layout.tsx` | `/mobila-la-comanda`, `/perdele-draperii`, `/sine-galerii` |
| 3 inline stubs (mobila/perdele/sine) | content objects passed to `<CategoryLayout>` | `src/lib/categories.ts` | the 3 short routes |

Long category pages (`/jaluzele-rolete`, `/lenjerii-de-pat`, `/servicii`) are bespoke — port them directly to `page.tsx`, optionally extracting sub-section components for clarity (`<JaluzeleTipuri>`, `<LenjeriiMateriale>`, `<ServiciiBlock>` etc.) but that can be a follow-up.

---

## 4. Asset migration

All 31 files from `/tmp/lovable-source/src/assets/` go into `public/images/` (Next.js best practice for static images served via `next/image` from `/public`).

| File | Size | Destination | Used by |
| --- | --- | --- | --- |
| `logo.svg` | 49 KB | `public/logo.svg` | Nav (root layout) |
| `hero.jpg` | 159 KB | `public/images/hero.jpg` | Home hero |
| `showroom.jpg` | 320 KB | `public/images/showroom.jpg` | Home showroom block |
| `cat-mobila.jpg` | 83 KB | `public/images/cat-mobila.jpg` | Home categories grid + `/mobila-la-comanda` |
| `cat-perdele.jpg` | 68 KB | `public/images/cat-perdele.jpg` | Home + `/perdele-draperii` |
| `cat-sine.jpg` | 54 KB | `public/images/cat-sine.jpg` | Home + `/sine-galerii` |
| `cat-jaluzele.jpg` | 75 KB | `public/images/cat-jaluzele.jpg` | Home + `/jaluzele-rolete` hero |
| `cat-lenjerii.jpg` | 50 KB | `public/images/cat-lenjerii.jpg` | Home + `/lenjerii-de-pat` hero |
| `cat-servicii.jpg` | 63 KB | `public/images/cat-servicii.jpg` | Home + `/servicii` hero |
| `jaluzele-1..6.jpg` | 73–170 KB | `public/images/jaluzele-1..6.jpg` | `/jaluzele-rolete` proiecte gallery |
| `lenjerie-1..4.jpg` | 70–124 KB | `public/images/lenjerie-1..4.jpg` | `/lenjerii-de-pat` stoc gallery |
| `camera-copil-1..3.jpg` | 67–130 KB | `public/images/camera-copil-1..3.jpg` | `/lenjerii-de-pat` camera copilului |
| `master-1..3.jpg` | 102–125 KB | `public/images/master-1..3.jpg` | `/lenjerii-de-pat` master bedroom |
| `partner-1..6.png` | 23–39 KB | `public/images/partner-1..6.png` | Home partners marquee |

**Total: ~2.8 MB raw.** All JPEGs/PNGs will be served by Next.js Image Optimization (AVIF/WebP) at runtime, so on-the-wire transfer will be far smaller.

**Action items**:
- Pre-optimize `showroom.jpg` (320 KB) and `hero.jpg` (159 KB) — consider downsizing to ≤1920 px wide before commit so Image Optimization has less to chew on at build time.
- Run all PNGs (`partner-*`) through `oxipng` / `imagemin` before commit if they're not already.
- Convert `logo.svg` to viewBox-sane SVG if needed; check it renders crisp at 112×57 in Lovable preview.

---

## 5. SEO metadata (extracted per route)

Brand-wide defaults (from `__root.tsx`):

```
title: "Perdele, Jaluzele și Mobilă la Comandă Brașov | Super Decor"
description: "Perdele, draperii, jaluzele, rolete, mobilă la comandă și lenjerii de pat în Brașov. Atelier propriu, măsurători și consultanță gratuită la domiciliu."
og:image: (Lovable R2 hosted preview screenshot — REPLACE)
```

Per-page metadata to lift into Next.js `export const metadata`:

### `/` (Home)
```
title: "SuperDecor Brașov — Perdele, Draperii, Jaluzele & Mobilă la Comandă"
description: "Showroom de textile pentru casă în Brașov. Perdele, draperii, jaluzele, rolete, lenjerii de pat și mobilă la comandă — măsurători și montaj profesional."
og:title: "SuperDecor Brașov — Textile pentru casa ta"
og:description: "Perdele, draperii, jaluzele și mobilă la comandă în Brașov."
og:image: /images/hero.jpg
```

### `/mobila-la-comanda`
```
title: "Mobilă la Comandă Brașov — SuperDecor"
description: "Mobilă la comandă în Brașov: dressing, biblioteci, paturi tapițate, mobilier living și baie. Proiectare 3D și montaj inclus."
og:title: "Mobilă la Comandă — SuperDecor Brașov"
og:description: "Piese unice de mobilier, croite pentru spațiul tău."
og:image: /images/cat-mobila.jpg
```

### `/perdele-draperii`
```
title: "Perdele & Draperii Brașov — SuperDecor"
description: "Perdele și draperii la comandă în Brașov: in, bumbac, catifea, blackout. Croitorie internă, măsurători și montaj gratuit."
og:title: "Perdele & Draperii — SuperDecor Brașov"
og:description: "Materiale fine, croitorie la comandă pentru fiecare fereastră."
og:image: /images/cat-perdele.jpg
```

### `/sine-galerii`
```
title: "Șine & Galerii Brașov — SuperDecor"
description: "Șine de tavan, galerii decorative și sisteme motorizate pentru perdele și draperii. Montaj profesional în Brașov."
og:title: "Șine & Galerii — SuperDecor Brașov"
og:description: "Sisteme de prindere tehnice și decorative pentru orice fereastră."
og:image: /images/cat-sine.jpg
```

### `/jaluzele-rolete`
```
title: "Jaluzele & Rolete Brașov — Textile, Lemn, Blackout, Exterior | SuperDecor"
description: "Rolete textile, jaluzele orizontale și verticale, rolete casetate, blackout și rulouri de exterior. Montaj profesional în Brașov."
og:title: "Jaluzele & Rolete — SuperDecor Brașov"
og:description: "Control precis al luminii: rolete textile, jaluzele lemn/aluminiu, blackout, romane și rulouri exterior."
og:image: /images/cat-jaluzele.jpg
```

### `/lenjerii-de-pat`
```
title: "Lenjerii de Pat Brașov — Bumbac Satinat, In, Damasc | SuperDecor"
description: "Lenjerii de pat din bumbac egiptean, organic, satinat, damasc, ranforce, percale, in și jersey. În stoc și pe comandă, în showroomul SuperDecor Brașov."
og:title: "Lenjerii de Pat — SuperDecor Brașov"
og:description: "Lenjerii de pat din materiale fine: bumbac, in, damasc, satinat. În stoc și pe comandă."
og:image: /images/cat-lenjerii.jpg
```

### `/servicii`
```
title: "Servicii — Design Interior, Instalații Electrice și Sanitare Brașov"
description: "SuperDecor Brașov: design interior personalizat, instalații electrice și sanitare. Echipă calificată, tarife competitive, garanție."
og:title: "Servicii — SuperDecor Brașov"
og:description: "Design interior, instalații electrice și sanitare de la profesioniști."
og:image: /images/cat-servicii.jpg
```

### `/contact` (NEW — no Lovable equivalent)
```
title: "Contact — SuperDecor Brașov"
description: "Programează o consultanță gratuită. Showroom în Brașov, măsurători la domiciliu, ofertă în 24h."
og:image: /images/showroom.jpg
```

JSON-LD per page (using existing helpers in `src/lib/seo.ts`):
- Home → already has `Organization`, `WebSite`, `LocalBusiness` (from root layout); add `BreadcrumbList` (Home only) is optional.
- Each category page → `BreadcrumbList` + `Service` (description from Lovable lead).
- `/jaluzele-rolete` + `/lenjerii-de-pat` → add `FAQPage` (we can synthesize 4–6 Q&As from the existing "types/materials" copy).
- `/contact` → `ContactPage` schema (extend `seo.ts` with a generator).

---

## 6. Brand-token merge (globals.css)

Lovable's brand spec (verified in `styles.css`):

| Token | Lovable value | Current Nova (in our globals) | Recommendation |
| --- | --- | --- | --- |
| Primary (deep teal) | `oklch(0.42 0.08 220)` ≈ `#00657E` | `oklch(0.52 0.08 192)` (lighter teal) | **Adopt Lovable** — darker, more authoritative |
| Accent (bright cyan) | `oklch(0.74 0.13 200)` ≈ `#07BCC6` | currently same as primary (overridden by scaffold) | **Adopt Lovable** — needed for hover/highlight states |
| Background | `oklch(0.985 0.008 210)` (cool off-white) | `oklch(1 0 0)` (pure white) | **Adopt Lovable** — subtle warmth |
| Foreground | `oklch(0.42 0.08 220)` (same as primary, dark teal) | `oklch(0.145 0 0)` (near-black) | **Adopt Lovable** — text is teal-tinted, not pure black |
| Surface (new token) | `oklch(0.96 0.015 210)` | n/a | **Add** — used for `bg-surface` sections (process, partners) |
| Border | `oklch(0.42 0.08 220 / 0.12)` (teal at 12% alpha) | `oklch(0.922 0 0)` | **Adopt Lovable** — softer, on-brand |
| Radius | `0.25rem` (sharper) | `0.625rem` | **Adopt Lovable** — design uses near-square corners |
| Font display | Playfair Display | (Geist) | **Adopt Lovable** — see §8 |
| Font sans | Inter | (Geist) | **Adopt Lovable** |
| Font mono | JetBrains Mono | (Geist Mono) | **Adopt Lovable** — used heavily for eyebrow labels |

Animations to copy verbatim:
- `@keyframes reveal` + `.animate-reveal`
- `@keyframes marquee` + `.animate-marquee` (used by partners section)
- `--ease-out-expo` (cubic-bezier)

---

## 7. Content/data inconsistencies to resolve before porting

Found in Lovable source — needs the user's input on which value is canonical:

| Field | Value in Lovable | Value in `src/lib/site.ts` | Action |
| --- | --- | --- | --- |
| **Showroom address** | "Str. Brândușelor 19, Brașov 500001" (in showroom section) **OR** "Strada Lungă 42, Brașov, RO" (in footer) | "Strada Lungă 1, 500051" | Pick one. The Brândușelor 19 appears in the dominant content block; footer feels like placeholder text |
| **Phone** | "0728 893 118" (showroom) **OR** `tel:+40722000000` ("Sună acum" buttons everywhere) **OR** "+40 722 000 000" (footer) | "+40 268 000 000" | The `+40 722…` is clearly a placeholder; `0728 893 118` looks real |
| **Email** | `office@superdecor.ro` (consistent everywhere) | `contact@superdecor.ro` | Update `site.ts` to `office@superdecor.ro` |
| **Hours** | Lun–Vin 09–18, Sâm 10–14, Dum Închis | Mon–Fri 09–18, Sat 10–14 (matches) | OK |
| **Social** | "#" placeholder links to Instagram/Facebook/Pinterest | Facebook + Instagram URLs in site.ts | Use site.ts values |
| **Reviews count** | 4.9 / 5, peste 200 clienți | n/a | Add to `site.ts` |
| **OG image** | Lovable R2 hosted URL | `/opengraph-image.png` | Create a real `opengraph-image.png` (1200×630) in `src/app/` per Next.js convention, or use `hero.jpg` |

---

## 8. Decisions needed before coding

These choices materially affect the port. Listed here so we can resolve in one go:

1. **Fonts** — Lovable uses Playfair Display (display/serif italic), Inter (sans), JetBrains Mono. Our scaffold currently uses Geist + Geist Mono. The Lovable design *depends on* the serif italic for every h2 (`font-display italic`), so:
   - **Recommended**: switch to Playfair + Inter + JetBrains Mono via `next/font/google`. Drop Geist. Update `--font-sans`, `--font-display`, `--font-mono` in `globals.css`.
   - Alternative: keep Geist for sans and use Playfair only for display. Compromises the design.

2. **Asset location** — `public/images/` (recommended; standard for Next.js with `next/image`) vs `src/assets/` (Vite convention, requires explicit import statements).
   - **Recommended**: `public/images/`. Cleaner URLs, no JS-side imports needed, easier to swap.

3. **Form submission** — Mailto-only (current Lovable behavior) is fragile (opens user's mail client; no record kept).
   - **Recommended for v1**: keep mailto, port verbatim. Add a TODO to upgrade to server action + Resend/Formspree later.
   - Alternative: stand up a Next.js server action that emails via Resend now. Adds ~1h of work + an env var.

4. **CSP for fonts** — Currently our CSP allows `font-src 'self' data:`. If we use `next/font` (recommended), this stays fine because fonts are self-hosted. If we keep Google Fonts via `<link>`, we'd need to add `fonts.googleapis.com` + `fonts.gstatic.com` to `style-src` and `font-src`.
   - **Recommended**: `next/font` self-hosting; no CSP changes.

5. **Address/phone canonical values** — see §7. Need user confirmation on the real ones.

6. **Contact page content** — Lovable has no dedicated `/contact` page (just an anchored footer + the booking form in the home CTA). We need to invent one. Options:
   - **Recommended**: composite of `ShowroomBlock` + `ConsultationCta` + a Google Maps embed of the showroom + the same booking form. ~30 lines of glue code.
   - Alternative: redirect `/contact` to `/#contact` anchor on home (worse SEO).

7. **Remove unused shadcn UI components?** — All 45 are installed but none are imported by ported pages.
   - **Recommended**: leave them. They're tree-shaken at build, so they cost ~0 bytes in the bundle. Useful when we add forms with validation later.

8. **Keep `CategoryPage` shape or expand per-page?** — Lovable's `CategoryPage.tsx` is shared by 3 short routes (mobila/perdele/sine). Long routes (jaluzele/lenjerii/servicii) are bespoke.
   - **Recommended**: port `CategoryPage` as `<CategoryLayout>` and keep it shared for the 3 short routes (saves ~150 lines × 2). Long routes go bespoke.

---

## 9. Execution order (when coding starts)

Dependency-aware sequence. Each step ends with `npm run build` passing.

1. **Brand tokens** — overwrite teal/accent/surface/radius/fonts in `src/app/globals.css`; add `@keyframes reveal/marquee`; update `--font-*` tokens.
2. **Fonts** — swap Geist for Playfair Display + Inter + JetBrains Mono via `next/font/google` in `src/app/layout.tsx`.
3. **Assets** — copy 31 files from `/tmp/lovable-source/src/assets/` → `C:\laragon\www\new-superdecor\public\images\` (and `logo.svg` to `public/`).
4. **`src/lib/site.ts`** — reconcile address/phone/email/social per §7 + add reviews count.
5. **Shared chrome** — write `src/components/site-nav.tsx` + `src/components/site-footer.tsx`. Mount in `src/app/layout.tsx`. (Remove from per-page bodies.)
6. **Home sections** — extract 9 section components into `src/components/sections/*`. Rewrite `src/app/page.tsx` to compose them.
7. **`<CategoryLayout>`** — port `CategoryPage.tsx` → `src/components/category-layout.tsx`. Create `src/lib/categories.ts` with the 3 short-route data objects (mobila, perdele, sine). Wire up `src/app/mobila-la-comanda/page.tsx`, `src/app/perdele-draperii/page.tsx`, `src/app/sine-galerii/page.tsx`.
8. **`/jaluzele-rolete`** — port `jaluzele.tsx` bespoke to `src/app/jaluzele-rolete/page.tsx`. Add FAQ JSON-LD.
9. **`/lenjerii-de-pat`** — port `lenjerii.tsx` bespoke. Add FAQ JSON-LD.
10. **`/servicii`** — port `servicii.tsx` bespoke. Inline the 3 services as a constant.
11. **`/contact`** — compose from existing sections + Google Maps embed.
12. **JSON-LD per page** — `BreadcrumbList` + `Service` (categories) + `FAQPage` (long pages). Extend `src/lib/seo.ts` with a `contactPageSchema()` helper.
13. **Internal link sweep** — grep for `/mobila|/perdele|/sine|/jaluzele|/lenjerii` (without our long slugs) and fix.
14. **OG image** — generate `src/app/opengraph-image.png` (1200×630) from `hero.jpg`.
15. **Performance pass** — verify the home stays under the 50 KB initial JS budget in `CLAUDE.md`. Run `npm run build` and inspect chunk sizes.
16. **Commit + push** — Vercel auto-deploys (assuming the BLOCKED state from the previous turn has been resolved by the user).

---

## 10. Files-to-be-modified summary

**Modified**:
- `src/app/layout.tsx` — swap fonts, mount `<SiteNav>` + `<SiteFooter>`
- `src/app/page.tsx` — full rewrite to compose home sections
- `src/app/globals.css` — brand tokens + animations
- `src/lib/site.ts` — reconcile address/phone/email
- `src/lib/seo.ts` — add `contactPageSchema` helper

**Created**:
- `src/components/site-nav.tsx`
- `src/components/site-footer.tsx`
- `src/components/category-layout.tsx`
- `src/components/sections/home-hero.tsx`
- `src/components/sections/trust-bar.tsx`
- `src/components/sections/home-usp.tsx`
- `src/components/sections/categories-grid.tsx`
- `src/components/sections/showroom-block.tsx`
- `src/components/sections/process-steps.tsx`
- `src/components/sections/reviews.tsx`
- `src/components/sections/partners-marquee.tsx`
- `src/components/sections/consultation-cta.tsx`
- `src/lib/categories.ts`
- `src/app/mobila-la-comanda/page.tsx`
- `src/app/perdele-draperii/page.tsx`
- `src/app/sine-galerii/page.tsx`
- `src/app/jaluzele-rolete/page.tsx`
- `src/app/lenjerii-de-pat/page.tsx`
- `src/app/servicii/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/opengraph-image.png` (or `.tsx` if generated)
- `public/logo.svg` + 31 image files in `public/images/`

**Unchanged**: everything in `src/components/ui/`, `src/lib/utils.ts`, `src/app/sitemap.ts`, `src/app/robots.ts`, `next.config.ts`, `package.json` (no new deps needed).
