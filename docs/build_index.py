"""Build templates/index.json for the aaroma.co redesign (tryscent.co homepage order, ENGLISH: Weglot translates).

Keeps from the live aaroma homepage (by section id): homepage-hero (market overlays set its text per country),
"Why Choose MagyX?" image-and-text, massive-review, the reviews custom-liquid and the apps sections (Judge.me).
Kept switched off because market overlays still reference them: magic-hero (France), home-hero-banner (Dutch),
review-grid (France, Switzerland). Our-bestsellers is not added: the footer group already shows it on every page.

usage: py -X utf8 docs/build_index.py   (from the repo root; reads the live template from git)
"""
import json, re, subprocess

LIVE_REF = 'live-2026-11-02-aaroma'


def load(text):
    m = re.match(r'\s*/\*[\s\S]*?\*/\s*', text)
    return (m.group(0) if m else ''), json.loads(text[m.end() if m else 0:])


header, live = load(subprocess.check_output(['git', 'show', f'{LIVE_REF}:templates/index.json']).decode('utf-8'))
S = live['sections']


def blocks(prefix, items):
    out, order = {}, []
    for i, (t, settings) in enumerate(items, 1):
        bid = f'{prefix}_{i}'
        out[bid] = {'type': t, 'settings': settings}
        order.append(bid)
    return out, order


def section(type_, settings, items=None, prefix='b'):
    s = {'type': type_, 'settings': settings}
    if items:
        s['blocks'], s['block_order'] = blocks(prefix, items)
    return s


new = {
    'marquee_labels_pm': section('marquee-labels', {'style': 'premium', 'color_scheme': 'scheme-3', 'speed': 48, 'separator': '•'}, [
        ('label', {'label': '20% fragrance oils', 'link': ''}),
        ('label', {'label': 'Lasts up to 12 hours', 'link': ''}),
        ('label', {'label': 'Made in Europe', 'link': ''}),
        ('label', {'label': 'Free from parabens and phthalates', 'link': ''}),
        ('label', {'label': 'Vegan and cruelty-free', 'link': ''}),
        ('label', {'label': '60-day guarantee', 'link': ''}),
    ], 'label'),
    'fuel06_finder': section('fuel06-finder', {}),
    'tabs_best': section('home-product-tabs', {
        'color_scheme': 'scheme-1', 'heading': 'Bestsellers', 'subheading': '', 'products_per_tab': 12,
        'button_text': 'View all', 'button_link': '', 'padding_top': 80, 'padding_bottom': 80,
        'cards_desktop': '6', 'cards_mobile': '2.2'}, [
        ('tab', {'title': 'Bestsellers', 'collection': 'top-sellers', 'filter': ''}),
        ('tab', {'title': 'New scents', 'collection': 'heetste-zomergeuren-2026', 'filter': ''}),
    ], 'tab'),
    'ugc_home_row': section('ugc-home-row', {
        'color_scheme': 'scheme-1', 'rating_text': '', 'heading': 'Loved by thousands', 'subheading': '',
        'padding_top': 80, 'padding_bottom': 80}, [
        ('video', {'video': 'shopify://files/videos/aaroma_co_JoeM_SmelLikeArma_ddb6a55c.mov', 'product': 'nacht-van-passie-3x-50ml-parfumflesjes'}),
        ('video', {'video': 'shopify://files/videos/aaroma_co_DalmaJ_SmelLikeAnge_a186e21c.mov', 'product': '3-x-50ml-geurgarderobe-44'}),
        ('video', {'video': 'shopify://files/videos/aaroma_co_EsmeeB_SmelLikeArma_dda7fc6e.mp4', 'product': '3x-100ml-perfume-bottles'}),
        ('video', {'video': 'shopify://files/videos/aaroma_co_KristelW_SmelLikePist_ad4377e6.mov', 'product': '6-x-50ml-geurgarderobe-64'}),
    ], 'video'),
    'home_category_pm': section('home-category', {
        'color_scheme': 'scheme-1', 'background_color': '#ffffff', 'title': 'Choose your category',
        'padding_top': 72, 'padding_bottom': 72}, [
        ('category', {'image': 'shopify://shop_images/Magyx_Website_01.jpg', 'image_position': 'center', 'text': 'For him',
                      'descriptor': 'Scents for him', 'link': 'shopify://collections/men'}),
        ('category', {'image': 'shopify://shop_images/Magyx_Website_02.webp', 'image_position': 'center', 'text': 'For her',
                      'descriptor': 'Scents for her', 'link': 'shopify://collections/women'}),
        ('category', {'image': 'shopify://shop_images/Magyx_Website_03.webp', 'image_position': 'center', 'text': 'Unisex',
                      'descriptor': 'Scents for everyone', 'link': 'shopify://collections/unisex'}),
    ], 'category'),
    'tabs_family': section('home-product-tabs', {
        'color_scheme': 'scheme-1', 'heading': 'Choose your scent family',
        'subheading': 'Pick a scent family and discover the perfumes that suit you.', 'products_per_tab': 12,
        'button_text': 'View all', 'button_link': '', 'padding_top': 80, 'padding_bottom': 80,
        'cards_desktop': '6', 'cards_mobile': '2.2'}, [
        ('tab', {'title': 'Amber', 'collection': 'all', 'filter': 'Amber'}),
        ('tab', {'title': 'Woody', 'collection': 'all', 'filter': 'Woody'}),
        ('tab', {'title': 'Floral', 'collection': 'all', 'filter': 'Floral'}),
        ('tab', {'title': 'Spicy', 'collection': 'all', 'filter': 'Spicy'}),
        ('tab', {'title': 'Citrus', 'collection': 'all', 'filter': 'Citrus'}),
        ('tab', {'title': 'Fruity', 'collection': 'all', 'filter': 'Fruity'}),
    ], 'family'),
    'bundle_feed': section('home-bundle-feed', {
        'color_scheme': 'scheme-1', 'banner_image': 'shopify://shop_images/Magyx_Website_04.webp',
        'banner_heading': 'Discover our sets', 'banner_link_text': 'Shop now',
        'banner_link': 'shopify://collections/bundle-save', 'overlay_opacity': 55, 'padding_top': 80, 'padding_bottom': 80}, [
        ('bundle', {'product': '3-x-50ml-geurgarderobe-44', 'image': '', 'badge': '', 'title': '', 'subtitle': 'Choose 3 scents', 'link': ''}),
        ('bundle', {'product': '6-x-50ml-geurgarderobe-64', 'image': '', 'badge': '', 'title': '', 'subtitle': 'Choose 6 scents', 'link': ''}),
    ], 'bundle'),
    'makes_different_pm': section('makes-different-list', {
        'color_scheme': 'scheme-1', 'background_color': '#ffffff', 'makes_diferent_title': 'What makes MagyX different?',
        'makes-different-image': 'shopify://shop_images/Magyx_Website_05.webp',
        'makes-different-btn-text': 'Shop our sets', 'makes-different-btn-link': 'shopify://collections/bundle-save',
        'padding_top': 72, 'padding_bottom': 72}, [
        ('list_item', {'title': 'Inspired by luxury icons', 'description': 'without the inflated price tags.'}),
        ('list_item', {'title': 'Free from parabens and phthalates', 'description': 'vegan and cruelty-free.'}),
        ('list_item', {'title': 'Lasts up to 12 hours', 'description': 'even on your busiest days.'}),
        ('list_item', {'title': 'Try a smaller size first', 'description': 'get to know the scent on your skin before you go for a bigger bottle.'}),
        ('list_item', {'title': '60-day guarantee', 'description': "in case it isn't love at first spray."}),
    ], 'item'),
    'feature_ships_pm': section('feature-ships-from', {
        'color_scheme': 'scheme-1', 'background_color': '#ffffff', 'show_legacy_ships_from': False,
        'ships_from_icon': 'truck', 'padding_top': 80, 'padding_bottom': 80}, [
        ('ships_from', {'icon': 'truck', 'text': ''}),
        ('perks', {'icon': 'shield', 'perk_title': '60-day guarantee',
                   'perk_content': 'Try the perfume at home. Not for you? You have 60 days to return it.'}),
        ('perks', {'icon': 'clock', 'perk_title': 'Lasts up to 12 hours', 'perk_content': 'Thanks to 20% fragrance oils.'}),
        ('perks', {'icon': 'sparkle', 'perk_title': 'Made in Europe',
                   'perk_content': 'Free from parabens and phthalates, with IFRA-certified fragrance oils.'}),
    ], 'perk'),
}

keep_live = ['homepage_hero_XnJ8mD', 'image_and_text', 'massive_review_section', 'custom_liquid_6qnTBf']
apps = [k for k in live['order'] if S[k]['type'] == 'apps' and not S[k].get('disabled')]
overlay_refs = ['magic_hero_GLbzbL', 'home_hero_banner_qmaB3G', 'review_grid_H3xfHP']
for k in keep_live + overlay_refs + apps:
    assert k in S, k

order = ['homepage_hero_XnJ8mD', 'marquee_labels_pm', 'fuel06_finder', 'tabs_best', 'ugc_home_row', 'home_category_pm',
         'tabs_family', 'bundle_feed', 'image_and_text', 'makes_different_pm', 'massive_review_section',
         'custom_liquid_6qnTBf', *apps, 'feature_ships_pm', *overlay_refs]
sections = {k: (new[k] if k in new else S[k]) for k in order}
for k in overlay_refs:
    sections[k]['disabled'] = True
assert len(order) <= 25

text = header + json.dumps({'sections': sections, 'order': order}, ensure_ascii=False, indent=2) + '\n'
raw_live = subprocess.check_output(['git', 'show', f'{LIVE_REF}:templates/index.json'])
nl = '\r\n' if b'\r\n' in raw_live else '\n'
open('templates/index.json', 'wb').write(text.replace('\r\n', '\n').replace('\n', nl).encode('utf-8'))
print(len(order), 'sections:', ' > '.join(sections[k]['type'] + ('(off)' if sections[k].get('disabled') else '') for k in order))
