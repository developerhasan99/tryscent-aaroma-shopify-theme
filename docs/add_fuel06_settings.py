"""Add the "FUEL_06 Fragrance finder" settings group to config/settings_schema.json with English defaults
(aaroma.co: English is the source language, Weglot renders /nl /fr /de). Group structure from the port kit
(magicperfume-magyx-port config/settings_schema.json). Text insertion before the closing bracket, idempotent.
usage: py -X utf8 docs/add_fuel06_settings.py
"""
import json, re

KIT = '../magicperfume-magyx-port/config/settings_schema.json'
DST = 'config/settings_schema.json'

EN = {
    'fuel06_pdp_templates': 'quantity-breaker,expressive-notes',
    'fuel06_scent_tag_prefix': '',
    'fuel06_pdp_lead': 'Not your scent?',
    'fuel06_pdp_link': 'Find your designer scent for less',
    'fuel06_heading': 'Find your designer scent for less',
    'fuel06_heading_accent': 'for less',
    'fuel06_placeholder': 'e.g. YSL Black Opium, Dior',
    'fuel06_cta': 'Find my match',
    'fuel06_modal_title': 'Find your designer scent for less',
    'fuel06_search_label': 'Search for a perfume you already love',
    'fuel06_popular_label': 'Popular searches',
    'fuel06_popular_terms': 'Dior Sauvage, Baccarat Rouge 540, Creed Aventus, YSL Black Opium, Bleu de Chanel, JPG Le Male',
    'fuel06_how_label': 'How it works',
    'fuel06_steps': 'Search for a scent you already love\nWe find the Magic Perfume scent that comes closest\nCompare the scent and what you save',
    'fuel06_suggestions_label': 'Suggestions',
    'fuel06_recent_label': 'Recent searches',
    'fuel06_clear_label': 'Clear',
    'fuel06_close_label': 'Close',
    'fuel06_loading_title': 'Finding your best match ...',
    'fuel06_loading_sub': 'Comparing scent profile, notes and customer favourites.',
    'fuel06_loading_note': 'Our matching looks at thousands of reviews and scent data points to find your perfect match.',
    'fuel06_result_title': 'Your best match',
    'fuel06_based_on': 'Based on',
    'fuel06_inspired_prefix': 'Inspired by',
    'fuel06_scent_label': 'Scent profile',
    'fuel06_notes_label': 'Key notes',
    'fuel06_note_labels': 'Top, Heart, Base',
    'fuel06_brand_label': 'Magic Perfume',
    'fuel06_brand_note': 'Eau de Parfum',
    'fuel06_ref_note': '100 ml / Eau de Parfum',
    'fuel06_save_label': 'You save',
    'fuel06_less_suffix': 'less',
    'fuel06_remove_label': 'Remove',
    'fuel06_similar_label': 'Similar scents you might like',
    'fuel06_add_label': 'Add to cart',
    'fuel06_view_label': 'View product',
    'fuel06_again_label': 'Not the right scent? Search again',
    'fuel06_added_title': 'Added to your cart',
    'fuel06_also_label': 'You might also like',
    'fuel06_bag_label': 'View cart',
    'fuel06_keep_label': 'Keep shopping',
    'fuel06_noresult_title': 'No match yet',
    'fuel06_empty': "We couldn't find that scent. Try another name or pick one of the popular searches.",
    'fuel06_cart_error': 'Something went wrong. Please try again.',
}

kit = json.loads(re.sub(r',(\s*[\]}])', r'\1', open(KIT, encoding='utf-8').read()))
group = next(g for g in kit if 'FUEL_06' in (g.get('name') or ''))
for s in group['settings']:
    if s.get('id') in EN:
        s['default'] = EN[s['id']]
    elif s.get('id') and isinstance(s.get('default'), str) and re.search(r'[äöüßÄÖÜ]', s['default']):
        raise SystemExit(f'untranslated default: {s["id"]}')
missing = [s['id'] for s in group['settings'] if s.get('id') and s['type'] in ('text', 'textarea') and s['id'] not in EN]
if missing:
    raise SystemExit(f'no English text for {missing}')
for s in group['settings']:
    if s.get('type') == 'text' and s.get('default') == '':
        s.pop('default')   # Shopify rejects "default": ""

raw = open(DST, 'rb').read().decode('utf-8')
if '"FUEL_06' in raw:
    raise SystemExit('group already present')
nl = '\r\n' if '\r\n' in raw else '\n'
block = json.dumps(group, ensure_ascii=False, indent=2)
block = nl.join('  ' + line for line in block.split('\n'))
end = raw.rstrip().rfind(']')
new = raw[:end].rstrip() + ',' + nl + block + nl + ']' + nl
json.loads(new)
open(DST, 'wb').write(new.encode('utf-8'))
print('added', len(group['settings']), 'settings')
