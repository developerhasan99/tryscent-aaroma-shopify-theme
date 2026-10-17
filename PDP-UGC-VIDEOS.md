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
  "High-quality ingredients".

## Differences from magyx.co
- One block loop in main-product (magyx.co has two): the `when 'ugc_videos'`
  branch sits in the single case, so block_order alone decides the place.
- Spacing: the row is a direct child of the info column, which gives every
  block 1.5rem (`section-main-product.css`). The row lifts its top margin to
  the FAQ tabs' 2.5rem, so it sits 25px under the money-back guarantee /
  bundle builder and 25px above the first tab, the gap the first tab had
  before.
- Colours: aaroma's own, no MAGYX tokens. #121212 text/dark (colour schemes in
  `config/settings_data.json`), #c8202f offer red ("Popular" badges and the
  quantity breaker's selected tier), #6b7280 struck price, #eee tile ground,
  #d1d5db / #6b7280 on the theme-editor placeholder.
- Weglot: every money value is `data-wg-notranslate`, and the hidden "Regular
  price:" label sits beside the `<s>`, never inside it (same fix as the grid
  tiles, 199c895). Titles wrap with `overflow-wrap: anywhere`.
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
