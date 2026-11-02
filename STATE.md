# aaroma.co → tryscent.co layout ("FM look"): state

Resume: read this file, then `../magicperfume-fm-redesign/PLAN.md` (same job on magicperfume.co, same order and rules).

## Facts

| What | Value |
|---|---|
| Store | `mymsoffice.myshopify.com` (aaroma.co, EUR, NL/BE/FR/DE/EE/CH; brand on the site = MagyX) |
| Live theme | `tryscent-aaroma-shopify-theme/main` #158422433930, GitHub-connected: push `main` = live. Do not push this branch to `main`. |
| This repo | worktree `Documents/dev/aaroma-fm-redesign`, branch `fm-redesign` (from origin/main fc7e669) |
| Baseline | tag `live-2026-11-02-aaroma` = live pull 02.11.2026; raw copy `Documents/dev/_backups/aaroma-live-2026-11-02/` |
| Preview (A/B theme) | unpublished "FM redesign (preview)" #160409354378 · `https://aaroma.co/en-nl/?preview_theme_id=160409354378` (the bare domain 302s to /en-nl/ and drops the preview param) |
| Copy language | ENGLISH (source); Weglot renders /nl /fr /de /et. Every new string goes on the Weglot list below. |
| Colours | aaroma's own (no MAGYX recolour): ink #121212, accent / sale red #c8202f |
| Products | `expressive-notes` 75 (+5 `-no-insp`), `quantity-breaker` 15 (+2 `-no-insp`), `custom-bundle` 14, default 4, `simple-pdp` 2 |
| Scent families | `custom.fragrance_family` (English): Amber 21, Woody 16, Floral 15, Spicy 11, Citrus 11, Fruity 9, Gourmand 5, Aquatic / Marine 5, Fresh 4 |

## Phases

- [x] 1. Live pulled (581 files), committed, tagged (02.11.2026)
- [x] 2. Preview theme #160409354378 = copy of live (02.11.2026)
- [x] 3. Decisions: same as magicperfume.co (02.11, Adrian "execute the same"): live reviews kept, store's own colours, Bundle & Save page later (prices to set for aaroma: 50 ml = €22, same as magicperfume.co)
- [x] 4a. Design layer + homepage on the preview (02.11). GATE: Adrian reviews.
- [ ] 4b. Collections → scent pages (incl. FUEL_06 product page link + dialog hook) → bundle pages → payday → Bundle & Save
- [ ] 5. QA 1440 / 375, NL/FR/DE through Weglot (live behaviour differs from preview for cart sections, see memory project_aaroma_theme)
- [ ] 6. Go-live = theme test / publish, GATE: Adrian's go

## Build log

- 02.11 files from the magicperfume.co port (`docs/port_redesign.py`): pm design layer (pm-base.css sections 8-14 scoped to `.pm-scope`, pm-card.css sections 1-7 only), homepage sections, `ugc-home-row` (Swiper carousel on aaroma's own `fuel05-ugc-tile`).
- 02.11 `home-product-tabs` renders aaroma's `card-product` (aaroma has no `product-card` snippet).
- 02.11 FUEL_06 finder from the port kit (`magicperfume-magyx-port@feat/fuel06-portable` 5034f6e, incl. the two-letter matcher fix): homepage band only so far. Settings group "FUEL_06 Fragrance finder" in English (`docs/add_fuel06_settings.py`), brand label MagyX, no scent tag prefix (aaroma has no scent tags), product templates quantity-breaker + expressive-notes (link not hooked into the buy form yet). Finder colours set on the finder only (`--mgx-*` in layout/theme.liquid).
- 02.11 homepage (`docs/build_index.py` from the live template): homepage-hero (live; market overlays keep setting its text) → marquee (claims already on aaroma) → FUEL_06 → Bestsellers / New scents tabs (top-sellers, heetste-zomergeuren-2026) → customer videos (4 aaroma creator videos from collection.json) → For him / For her / Unisex (men, women, unisex) → scent-family tabs → set feed (3-x-50ml-geurgarderobe-44, 6-x-50ml-geurgarderobe-64) → "Why Choose MagyX?" (live) → What makes MagyX different? → reviews (live massive-review + custom-liquid + Judge.me apps) → delivery row + perks. Kept OFF because market overlays reference them: magic-hero (France), home-hero-banner (Dutch), review-grid (France, Switzerland). Trust icons row replaced by the marquee. Our-bestsellers not on the homepage (footer group shows it on every page).
- 02.11 section defaults in English (our-bestsellers prefix "Inspired by:" also shows in the footer instance).
- 02.11 Magyx_Website_01-09 copied from tryscent.co Files (01 = `.jpg`).
- 02.11 fix `snippets/card-product.liquid`: designer thumbnail only when the inspiration entry has an image (missing ones printed a Liquid error as the img src; same on LIVE).
- QA 02.11 (`/en-nl/`): 1440 + 375, all sections render, no sideways scroll, no JS errors.

## Weglot list (new strings, English source)

- Marquee: "20% fragrance oils", "Lasts up to 12 hours", "Made in Europe", "Free from parabens and phthalates", "Vegan and cruelty-free", "60-day guarantee".
- Tabs: "Bestsellers", "New scents", "View all", "Choose your scent family", "Pick a scent family and discover the perfumes that suit you.", "Amber", "Woody", "Floral", "Spicy", "Citrus", "Fruity".
- Videos: "Loved by thousands", "Previous video", "Next video".
- Categories: "Choose your category", "For him", "For her", "Unisex", "Scents for him", "Scents for her", "Scents for everyone", "Shop now".
- Sets: "Discover our sets", "Choose 3 scents", "Choose 6 scents", "View", "Save N%".
- Makes different: "What makes MagyX different?", 5 titles + lines, "Shop our sets".
- Delivery row: "Delivery to <country>", "Carefully packed and delivered to your door.", perks (60-day guarantee, Lasts up to 12 hours / Thanks to 20% fragrance oils., Made in Europe / Free from parabens and phthalates, with IFRA-certified fragrance oils.).
- Finder: all 47 texts in the "FUEL_06 Fragrance finder" settings (JS-built rows: add the finder dialog to Weglot dynamic elements).
- Footer bestseller strip: "Inspired by:" (now a setting).
