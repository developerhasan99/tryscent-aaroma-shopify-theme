# Collection top: search bar + "Filter and sort" bar (port of magyx.co)

Branch `feat/collection-top` (stacked on `feat/pdp-ugc-videos`). Not live: go-live = push the top branch to `main`.

## What it is

Every collection page that uses `sections/main-collection-product-grid.liquid` gets:

- **Search pill** above the grid: filters the grid while typing, by scent name, number (`221`, `034`, `219M`), "Inspired by" name and tags (designer houses, seasons, occasions), with aliases such as YSL, JPG, MFK. The first use loads the rest of the collection, so the whole collection is searched. The query survives a filter or sort change.
- **Filter bar** (horizontal and drawer layouts) in the style of theessencevault.co.uk: from 990px a sticky row of pill dropdowns (Sort, then one per Shopify filter, "Remove all" once anything is picked); below 990px one full-width "Filter and sort" pill that opens a full-screen drawer with an Apply (count) button. Every tick applies at once. The groups and values are the store's own Search & Discovery filters (Seizoen, Gelegenheid, Geurenfamilie, Geslacht).
- **Shared grid loader** instead of the old inline infinite-scroll script: one request at a time, keeps going after a filter or sort, and loads every product exactly once.

The vertical layout (`collection.default.json`, no collection uses it today) keeps Dawn's sidebar filters; the search pill sits above it.

## Files

| File | Role |
|---|---|
| `snippets/collection-search.liquid`, `assets/collection-search.{js,css}` | Search pill |
| `snippets/mgx-filters.liquid`, `snippets/mgx-filters-price.liquid`, `assets/mgx-filters.{js,css}` | Filter bar + phone drawer (price fields show only if the store adds a price filter) |
| `assets/collection-grid-loader.js` | Infinite scroll + load-all for the search |
| `sections/main-collection-product-grid.liquid` | Wiring, product data attributes, search settings |

File and class names are the same as on magyx.co, so later fixes port over as they are.

## aaroma deltas vs magyx.co

- **Colours:** no `magyx-brand.css` on aaroma, so the MAGYX tokens are literal aaroma values: black/text `#121212`, white `#fff`, silver `209, 213, 219`, muted text `rgba(18, 18, 18, 0.75)`, accent `#c8202f`. Mapping noted at the top of both CSS files.
- **Page size (the duplicates fix):** the loader fetches pages by the grid's section instance id (`#product-grid` `data-id`), so every page uses its own template's products per page (36 on most templates, 16 on `collection.default`). The old script fetched the section file name, which renders the schema default of 16 after a first page of 36: on bestsellers that meant 68 cards, 20 of them twice and 32 products never shown. Repeated tiles are no risk: the grid's only blocks (UGC tiles) render on page one only.
- **Search data:** each product cell carries `data-mgx-pid`, `data-mgx-hay` (title + `custom.inspiration` name, set on 80 of 100 products) and `data-mgx-tags`. Designer houses come from plain tags (Tom Ford, Chanel, Dior...; 71 of 81 single scents). aaroma's internal tags are skipped (EN, local_image, Aaroma, fixed_bundle, Voids_exclude, bestseller, Voor Mannen / Voor Vrouwen).
- **Search on by default** (`enable_search` default true).
- **Weglot:** every line the search shows later (results, single result, no results, loading, clear) is page text rendered by the snippet, not a string in the script; the script copies the translated line and fills in the count and query. Money in the price fields carries `data-wg-notranslate`.

## Editing the texts

Customize > a collection template > the product grid section > **Search**: show/hide, placeholder, results text (`[count]` and `[query]` are replaced), single result, no results, loading, clear button. Texts are English; Weglot translates them per language. Filter bar labels come from the theme locale (Sort, Filter and sort, Remove all, Apply) and from Search & Discovery (group and value names).

## Known limits

- **Weglot and new strings:** on the preview theme, strings Weglot already knows show translated (Sorteren, Filteren en sorteren, Alles verwijderen, sort options, filter values), but the new ones stay English: search placeholder and status lines, "Apply (N)", "Sort (Featured)" in the drawer. After go-live, check /nl-nl/ and the other languages and translate or correct them in the Weglot dashboard if they do not appear on their own.
- The search matches the original text (English titles, Dutch tags): a shopper on /fr-be/ typing a translated word ("été") finds nothing; scent names, numbers and houses work in every language.
- Single scents without a house tag (10 of 81) are found by scent name and number only.
- `aria-label`s are not translated by Weglot (store-wide); the search clear button uses visible-to-screen-reader text instead.
