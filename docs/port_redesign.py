"""Port the tryscent.co redesign homepage layer to aaroma.co (from the magicperfume.co port, already scoped)
plus the FUEL_06 fragrance finder (port kit: magicperfume-magyx-port@feat/fuel06-portable, FUEL06-PORT-KIT.md).

Copies files only (idempotent). Template / layout / locale / settings edits are separate steps.
usage: py -X utf8 docs/port_redesign.py   (from the aaroma repo root)
"""
import os, shutil

MP = '../magicperfume-fm-redesign'
KIT = '../magicperfume-magyx-port'

REDESIGN = [
    'assets/pm-base.css', 'assets/pm-sections.css', 'assets/pm-card.css', 'assets/pm-base.js', 'assets/pm-home.css',
    'assets/pm-product-tabs.js', 'assets/pm-s-bs-ugc-grid.css', 'assets/pm-s-feature-ships-from.css',
    'assets/pm-s-home-bundle-feed.css', 'assets/pm-s-home-category.css', 'assets/pm-s-home-product-tabs.css',
    'assets/pm-s-makes-different-list.css', 'assets/pm-s-marquee-labels.css', 'assets/pm-s-our-bestsellers.css',
    'sections/feature-ships-from.liquid', 'sections/home-bundle-feed.liquid', 'sections/home-category.liquid',
    'sections/home-product-tabs.liquid', 'sections/makes-different-list.liquid', 'sections/marquee-labels.liquid',
    'sections/our-bestsellers.liquid', 'sections/ugc-home-row.liquid',
    'snippets/pm-icon.liquid', 'snippets/pm-stars.liquid', 'snippets/ships-from-location.liquid',
    'docs/scope_pm.py',
]
FINDER = [
    'sections/fuel06-finder.liquid', 'snippets/fuel06-finder.liquid', 'snippets/fuel06-pdp-enabled.liquid',
    'snippets/fuel06-pdp-link.liquid', 'templates/collection.fuel06-index.liquid',
    'assets/fuel06-finder.js', 'assets/fuel06-finder.css',
]
FINDER_GLOBS = ('fuel06-loading', 'fuel06-leaf', 'fuel06-band-bg', 'fuel06-plus-jakarta')

for f in REDESIGN:
    os.makedirs(os.path.dirname(f), exist_ok=True)
    shutil.copyfile(os.path.join(MP, f), f)
for f in FINDER:
    shutil.copyfile(os.path.join(KIT, f), f)
extra = [a for a in os.listdir(os.path.join(KIT, 'assets')) if a.startswith(FINDER_GLOBS)]
for a in extra:
    shutil.copyfile(os.path.join(KIT, 'assets', a), os.path.join('assets', a))
print(len(REDESIGN), 'redesign files,', len(FINDER) + len(extra), 'finder files:', ', '.join(extra))
