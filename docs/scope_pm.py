"""magicperfume.co: keep the pm element rules (pm-base.css sections 8-14: body text, headings, form controls,
Dawn .button, inputs, .page-width, Swiper) inside the redesign sections only, so the existing magicperfume.co
sections keep their live look.

1. Every section listed in SECTIONS gets "pm-scope" in its schema "class" (Shopify puts it on the section wrapper).
2. In assets/pm-base.css, the selectors of sections 8-14 change from :where(.premium) X to :where(.premium .pm-scope) X.

Idempotent. usage: py -X utf8 docs/scope_pm.py [extra section files...]
"""
import json, re, sys

SECTIONS = [
    'sections/marquee-labels.liquid', 'sections/home-product-tabs.liquid', 'sections/ugc-home-row.liquid',
    'sections/home-category.liquid', 'sections/home-bundle-feed.liquid', 'sections/makes-different-list.liquid',
    'sections/feature-ships-from.liquid', 'sections/our-bestsellers.liquid',
] + sys.argv[1:]

for path in SECTIONS:
    raw = open(path, 'rb').read().decode('utf-8')
    m = re.search(r'\{%-?\s*schema\s*-?%\}(.*?)\{%-?\s*endschema\s*-?%\}', raw, re.S)
    schema_txt = m.group(1)
    if re.search(r'"class"\s*:\s*"[^"]*\bpm-scope\b', schema_txt):
        continue
    cm = re.search(r'"class"\s*:\s*"([^"]*)"', schema_txt)
    if cm:
        new_schema = schema_txt[:cm.start()] + f'"class": "{cm.group(1)} pm-scope"' + schema_txt[cm.end():]
    else:
        nm = re.search(r'("name"\s*:\s*"[^"]*")', schema_txt)
        new_schema = schema_txt[:nm.end()] + ',\n  "class": "pm-scope"' + schema_txt[nm.end():]
    json.loads(new_schema)
    raw = raw[:m.start(1)] + new_schema + raw[m.end(1):]
    open(path, 'wb').write(raw.encode('utf-8'))
    print('scoped', path)

css_path = 'assets/pm-base.css'
css = open(css_path, 'rb').read().decode('utf-8')
start = css.index('/* 8. Body text')
end = css.index('/* 15. Type utilities')
part = css[start:end]
scoped = re.sub(r':where\(\.premium\)(?! \.pm-scope)', ':where(.premium .pm-scope)', part)
if scoped != part:
    css = css[:start] + scoped + css[end:]
    css = css.replace('/* pm-base.css (WP-A)',
                      '/* magicperfume.co: sections 8-14 scoped to .pm-scope (redesign sections only; docs/scope_pm.py).\n   pm-base.css (WP-A)', 1)
    open(css_path, 'wb').write(css.encode('utf-8'))
    print('pm-base.css: sections 8-14 scoped,', part.count(':where(.premium)'), 'selectors')
