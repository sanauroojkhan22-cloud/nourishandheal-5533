# Nourish & Heal by Dr. Sana — Design

A premium, science-informed wellness e-commerce website (web only for now) for **Nourish & Heal by Dr. Sana** — founder Dr. Sana Urooj Khan (Pharm-D, MS Clinical Pharmacology). Sells digital wellness guides today, showcases herbal concept products as COMING SOON, and publishes evidence-informed wellness education. Visual direction: **editorial botanical apothecary** — warm ivory paper, deep botanical green, fine gold hairlines, large serif display type, generous negative space. Feels like a premium international DTC wellness house with a scientist's credibility, never a pharmacy or herbal shop.

## Brand & Colors

Tokens live in `packages/web/src/web/styles.css` as CSS variables (`--nh-*`) mapped into Tailwind via `@theme`.

| Token | Hex | Use |
|-------|-----|-----|
| `ivory` | #FBF8F2 | Default page background |
| `cream` | #F3ECE0 | Alternate section background, cards |
| `sand` | #E8DECD | Hairlines on cream, subtle fills |
| `forest` | #243B2F | Primary — headings, buttons, footer |
| `forest-soft` | #3C5A49 | Hover, secondary text on ivory |
| `sage` | #A8BCA1 | Botanical accents, illustration strokes |
| `gold` | #C2A15F | Fine rules, eyebrow text, premium accents |
| `charcoal` | #33302B | Body text |
| `stone` | #756E63 | Muted/secondary text |
| `peach` | #E4B79A | Category accent — digestive |
| `blush` | #DDA9A2 | Category accent — women's wellness |
| `dusty` | #7E9AAB | Category accent — hydration / sleep |
| `clay` | #C98F6B | Category accent — metabolic |

Category accent rule: each wellness category owns one accent, used for its badge, icon, and product-label color chip only — never for large fills. One unified brand identity, accents as punctuation.

Rules: no pure white, no pure black, no excessive green fills (green is for type and small surfaces), no loud saturation, no purple gradients, no heavy drop shadows. Depth comes from paper texture, 1px `gold`/`sand` hairlines, and layered ivory/cream bands.

## Typography

- **Display:** `Fraunces` (variable serif, soft optical axis) — h1–h3, product names, pull quotes. Tight tracking (-0.02em), line-height 1.05–1.15.
- **Body:** `Manrope` — paragraphs, UI, buttons. Line-height 1.7, `stone`/`charcoal`.
- **Eyebrow / label:** Manrope 600, 11–12px, uppercase, letter-spacing 0.18em, `gold` or `stone`.
- Loaded from Google Fonts in `index.html`. Never use Inter, Roboto, or Space Grotesk.
- Scale: hero h1 clamp(2.6rem, 6vw, 5.2rem); section h2 clamp(2rem, 4vw, 3.2rem); body 16–18px; mobile body never below 16px.

## Layout & Motion

- Container 1240px, page gutters 20px mobile / 40px desktop. Section rhythm: 80px mobile, 140px desktop.
- Asymmetric editorial grids (7/5 and 5/7 splits), offset images that break their column, wide ivory margins. Corners: 2px on buttons/inputs, 4–8px on cards — refined, not bubbly. Circles only for icon chips and botanical medallions.
- Subtle paper grain overlay + soft radial sage wash on hero and CTA bands (CSS only).
- Motion: one orchestrated page-load reveal per route (staggered fade+rise, 500–700ms, ease-out) using `motion/react`; scroll-reveal for section headers; hover lifts of 2–4px on cards with accent hairline transition. Respect `prefers-reduced-motion`.

## Components

`packages/web/src/web/components/`: `logo.tsx` (original SVG wordmark + botanical mark + "BY DR. SANA" subline), `site-header.tsx` (desktop nav + mobile drawer + cart), `mobile-tab-bar.tsx` (sticky bottom nav, thumb-friendly, 56px tall), `site-footer.tsx`, `botanical.tsx` (line-art SVG set: leaf, sprig, droplet, molecule, mortar, seed), `guide-cover.tsx` (CSS/SVG-rendered premium digital-product cover — no AI art, crisp at any size), `product-card.tsx`, `goal-card.tsx`, `coming-soon-badge.tsx`, `trust-row.tsx`, `newsletter.tsx`, `faq-accordion.tsx`, `placeholder-field.tsx` (renders bracketed editable placeholders like `[Certification to be added]` in a visibly-editable style), `disclaimer.tsx`, `cart-drawer.tsx`, `section.tsx`, `reveal.tsx`.

Images in `packages/web/public/images/`: hero composition, 7 concept bottles (consistent label system), founder photo placeholder frame, journal + quality editorial stills.

## Pages

Routes in `packages/web/src/web/app.tsx`, pages in `src/web/pages/`.

`/` home · `/about` · `/founder` · `/wellness` (shop by goal) · `/wellness/:slug` · `/shop` · `/shop/digital/:slug` · `/coming-soon` · `/coming-soon/:slug` · `/bundles` · `/journal` · `/journal/:slug` · `/resources` · `/quality` · `/faq` · `/contact` · `/cart` · `/checkout` · `/order/:id` · `/orders` (order lookup + downloads) · `/legal/:slug` (privacy, terms, shipping, refunds, disclaimer, product-safety)

Nav: Home · About · Wellness · Shop · Coming Soon · Journal · Resources · Quality · Contact + "Shop Now" button + cart.

## Key Flows

1. **Buy a digital guide:** home goal card → category → guide page → add to cart → cart drawer → `/checkout` (name/email, no shipping for digital) → order created → `/order/:id` confirmation with instant download links.
2. **Explore coming-soon herbal line:** home → Coming Soon gallery → concept bottle page (why this formula, what's inside, routine, who it's for, what to know, FAQ, transparency) → no purchase action, "Notify me" email capture.
3. **Learn:** journal category → article (explanation, what this means for you, takeaways, reference placeholders, disclaimer) → related guide.
4. **Free resource:** `/resources` → email → download link + joins community list.

## Content Guardrails (apply to every string on the site)

Dr. Sana is **Pharm-D, MS Clinical Pharmacology** — never MBBS, physician, or "doctor" in a medical-practitioner sense. No disease-cure claims; use support / wellness / nutrition / lifestyle / education. No invented certifications, registration numbers, lab results, reviews, customer counts, studies, phone numbers, or addresses — bracketed editable placeholders instead. Every concept product reads COMING SOON and states it is a concept. Contact email: nourishandhealbysana@gmail.com; all other contact details are placeholders.

## Architecture

Static catalog/journal/resource content lives in typed data modules under `packages/web/src/api/data/` (single source of truth, imported by both API and frontend — no loading spinners on marketing content). Drizzle/SQLite + oRPC handle real writes: `orders`, `order_items`, `subscribers`, `contact_messages`, `notify_requests`. Cart is client state (React context + localStorage). Payment is intentionally not wired — checkout records an order and marks it `payment_pending_integration`, ready for a gateway.

## Updated brand asset
User supplied the original lotus logo. Use public/images/brand-mark.png from the supplied artwork; the header is a compact responsive lockup retaining the supplied serif wording and wellness/lifestyle/Dr. Sana line. No replacement mark. Prices now use the approved illustrative PKR 999–1,499 range; no fake sale comparisons.

## Founder portrait update
Use the user-supplied portrait crop at `/images/dr-sana-portrait.jpg` on the homepage and founder page. Crop from the left photographic half of the supplied promotional artwork; remove the right advertising copy and small top logo. Preserve facial appearance and original photo pixels. Replace photo placeholders, not professional-credential placeholders.
