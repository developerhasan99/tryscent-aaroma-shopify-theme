# UGC video row on product and bundle pages (aaroma.co)

Port of the magyx.co row (notes: that repo's `PDP-UGC-VIDEOS.md`). Same
files, same block settings, English copy (Weglot renders /nl /fr /de /et).

## What it is
Block "UGC videos" (`ugc_videos`, limit 1) in `sections/main-product.liquid`:
up to three portrait clips in one row at 9:16, an optional caption under each,
a white product card on every clip (photo, title, price; a red -N% tab and the
struck regular price when compare-at > price) and a full-screen player with
sound (native `<dialog>`) carrying the product pill (price per bottle for
bundle titles like "6 X 50ml ..."). The preview plays only clips at least half
in view, one after another, muted. An empty product = this page's own product:
the card then scrolls to the offer instead of reloading. Sold-out products get
no card.

## Placement (17.10.2026)
- `product.quantity-breaker` (scent pages): `ugc_videos_main` after
  `cta_review_g7n3R8`, before `expanded_notes_paBaYD` (Fragrance notes).
  Products 1-3 = `6-x-50ml-parfumflessen` (the bundle the template's
  `tsr_block` already promotes).
- `product.custom-bundle` (bundles): after `cta_review_g7n3R8`, before the
  Description tab. No product, so each card shows that page's bundle.
- Not placed: `product.json` and the other product templates.
- Clips (both templates, Files): KristelW, EsmeeB, DalmaJ; JoeM is in Files as
  a spare. Captions: "Smells like the designer", "Lasts 12+ hours",
  "High-quality ingredients". Open: Weglot machine-translates "designer" as a
  person (NL "Ruikt als de ontwerper", FR "Ça sent le créateur", DE "nach dem
  Designer") and FR "Lasts 12+ hours" as battery life; fix in the Weglot
  dictionary or reword the English caption.

## Differences from magyx.co
- One block loop in main-product (magyx.co has two): the `when 'ugc_videos'`
  branch sits in the single case, so block_order alone decides the place.
- Spacing: the row is a direct child of the info column, which gives every
  block 1.5rem (`section-main-product.css`). The row lifts its top and bottom
  margins to the FAQ tabs' 2.5rem, so it sits 25px under the money-back
  guarantee / bundle builder and 25px above the first tab, the gap the first
  tab had before. The selector is `.ugc-row.ugc-row`, so it wins on
  specificity even if section-main-product.css is linked again later.
- Colours: aaroma's own, no MAGYX tokens. #121212 text/dark (colour schemes in
  `config/settings_data.json`), #c8202f offer red ("Popular" badges and the
  quantity breaker's selected tier), #6b7280 struck price, #eee tile ground,
  #d1d5db / #6b7280 on the theme-editor placeholder.
- Weglot: every money value is `data-wg-notranslate`, and the hidden "Regular
  price:" label sits beside the `<s>`, never inside it (same fix as the grid
  tiles, 199c895). The label has its own class and hides with the `<s>` under
  a 108px tile, so a screen reader never reads "Regular price: -39%". Titles
  get `hyphens: auto`, then `overflow-wrap: anywhere` as a last resort only.
- Saving: `snippets/ugc-offer-data.liquid` rounds DOWN (whole-number
  division, the same sum as main-product's `.bundle-price-pdp`), so a 37.97%
  saving reads -37% on the card, the pill and the page (magyx.co rounds to
  -38%). This also changes the collection grid tiles.
- Card layout: under a 150px tile (phones, tablets, laptops up to ~1100px) the
  title runs across the card and the photo sits under it beside the price.
  Beside the photo the title had 40-84px, narrower than one translated word at
  10px ("Parfumcollectie" 73px, "Parfümflaschen" 72px, "Wardrobe" 46px on a
  768 tablet), so words broke inside themselves ("Parfumcollec" / "tie").
  From 150px (desktop) photo and title sit side by side as on magyx.co. On
  tiles up to 98px (750-820px windows) the card sits 3px from the edge with
  3px side padding, which gives the title 74px and holds "Parfumcollectie" /
  "Parfümflaschen". Known leftover: Estonian "parfüümikollektsioon" (97px)
  is wider than the card on 360-375px phones and breaks inside the word
  (Chrome has no Estonian hyphenation). On tablets and small laptops the card
  is taller than magyx.co's (the photo gets its own row): 30-43% of the clip.
- Player pill: the grid pill's type a half step up (title 13px/500, price
  16px), photo, text and "+" centred, the -N% sticker on the photo's corner
  (`.ugc-player__pill-media`), "+" in aaroma's add-to-cart green.
- Pause toggle: one fixed label ("Pause preview"), state in `aria-pressed`;
  pressed = colours reversed. magyx.co swaps the label text by script, which
  Weglot never translates (attributes, hidden spans and aria-hidden blocks
  all stayed English), so the label stays as Weglot rendered it in the page.
- Scroll anchors: `id="atc_scroll_target"` on `.atc-bundle-builder`
  (main-product, bundle offer) and on the outer div of
  `snippets/quantity-breaker.liquid`. The JS scrolls to
  `#atc_scroll_target, .bundle-price-pdp`, first in page order, so bundles
  with the `Bundle_Price_Show` tag land on the price.
- `cupid-video-reviews` (app video strip) is disabled on both templates, so it
  does not render next to the row.

## Files
`snippets/ugc-video-row.liquid`, `snippets/ugc-video-count.liquid`,
`snippets/ugc-video-src.liquid`, `snippets/ugc-offer-data.liquid` (already
here, shared with the grid tiles), `assets/ugc-video-row.css`,
`assets/ugc-video-row.js`, `sections/main-product.liquid`,
`snippets/quantity-breaker.liquid`, `templates/product.quantity-breaker.json`,
`templates/product.custom-bundle.json`.

## Changing clips
Customize -> product template "quantity-breaker" (or "custom-bundle") ->
UGC videos -> Video 1-3. Each template has its own clips.

## Status
Branch `feat/pdp-ugc-videos` (on top of `feat/ugc-grid-tiles`), not on main.
Preview theme 159684493450 carries the files.
