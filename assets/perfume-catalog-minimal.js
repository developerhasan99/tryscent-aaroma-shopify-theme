{% comment %}
  FRAGRANCE CODE ZOEKPOPUP - PREMIUM ONTWERP
  - VOLLEDIG HARDCODED - Elk Parfum heeft exacte toewijzingen
  - CORRECTE PRODUCTAFBEELDINGEN - Alle afbeeldingen met _c.webp formaat
  - GEAVANCEERDE FUZZY-ZOEKEN - Vindt ook bij typfouten
  - GEEN-SPATIE-HERKENNING - "valentinoborninroma" vindt producten
  - SPECIAALTEKEN-VERWERKING - "j'adore" vindt "J'Adore"
  - STRIKTE MERK- EN GESLACHTSTOEWIJZING
  - TOONT PRODUCTEN VAN HETZELFDE MERK BIJ "DIT KAN JE OOK BEVALLEN"
  - GESLACHTSSPECIFIEKE AANBEVELINGEN
{% endcomment %}

<script>
// ===== NEDERLANDSE PARFUM CATALOGUS - COMPLEET MET ALLE ECHTE MERKEN =====
window.NederlandseParfumCatalogus = {
  // ===== MAISON FRANCIS KURKDJIAN =====
  maisonFrancisKurkdjian: [
    {
      id: "mfk_baccarat_rouge_540",
      naam: "Baccarat Rouge 540",
      merk: "Maison Francis Kurkdjian",
      afbeelding: "https://aaroma.co/cdn/shop/files/baccarat_rouge.webp?v=1772339894",
      topnoten: ["Saffron", "Jasmine"],
      hartnoten: ["Cedar", "Amberhout"],
      basisnoten: ["Ambroxan", "Ethyl Maltol", "Amber"],
      beschrijving: "An iconic and luxurious scent that captures the alchemy of crystal.",
      jaar: "2015",
      geslacht: "Unisex",
      productnummers: ["466"],
      variantIds: {"466": "47751558332554"}
    }
  ],

  // ===== TOM FORD =====
  tomFord: [
    {
      id: "tom_ford_lost_cherry",
      naam: "Lost Cherry",
      merk: "Tom Ford",
      afbeelding: "https://aaroma.co/cdn/shop/files/lost_cherry.jpg?v=1762632056",
      topnoten: ["Cherry", "Almond", "Liqueur"],
      hartnoten: ["Cherry", "Rose", "Jasmine"],
      basisnoten: ["Vanilla", "Benzoin", "Cedar"],
      beschrijving: "A seductive and playful scent that captures the essence of a forbidden fruit.",
      jaar: "2018",
      geslacht: "Unisex",
      productnummers: ["438"],
      variantIds: {"438": "47751558332554"}
    },
    {
      id: "tom_ford_vanille_fatale",
      naam: "Vanille Fatale",
      merk: "Tom Ford",
      afbeelding: "https://aaroma.co/cdn/shop/files/3bfb7acaf943b4144a2abd302bf53906.webp?v=1772285996",
      topnoten: ["Saffron", "Neroli", "Bergamot"],
      hartnoten: ["Vanilla", "Coffee", "Leather"],
      basisnoten: ["Amber", "Myrrh", "Benzoin"],
      beschrijving: "A dark and intoxicating vanilla scent.",
      jaar: "2017",
      geslacht: "Unisex",
      productnummers: ["053"],
      variantIds: {"053": "47751575601290"}
    },
    {
      id: "tom_ford_tobacco_vanille",
      naam: "Tobacco Vanille",
      merk: "Tom Ford",
      afbeelding: "https://aaroma.co/cdn/shop/files/tobacco_vanille.webp?v=1772339894",
      topnoten: ["Tobacco", "Spices"],
      hartnoten: ["Vanilla", "Cocoa", "Tonka"],
      basisnoten: ["Dried fruit", "Woody notes"],
      beschrijving: "A warm and spicy scent with rich tobacco and vanilla notes.",
      jaar: "2007",
      geslacht: "Unisex",
      productnummers: ["193"],
      variantIds: {"193": "47751574814858"}
    },
    {
      id: "tom_ford_fucking_fabulous",
      naam: "Fucking Fabulous",
      merk: "Tom Ford",
      afbeelding: "https://aaroma.co/cdn/shop/files/Fucking_Fabulous.webp?v=1772257140",
      topnoten: ["Sage", "Lavender"],
      hartnoten: ["Leather", "Almond", "Vanilla"],
      basisnoten: ["Tonka", "Amber", "Woody notes"],
      beschrijving: "A bold, provocative scent with leather and almond notes.",
      jaar: "2017",
      geslacht: "Unisex",
      productnummers: ["232"],
      variantIds: {"232": "47751578058890"}
    },
    {
      id: "tom_ford_ombre_leather",
      naam: "Ombre Leather",
      merk: "Tom Ford",
      afbeelding: "https://aaroma.co/cdn/shop/files/Tom_Ford_Ombre_Leather.avif?v=1762632966",
      topnoten: ["Cardamom", "Jasmine", "Immortelle"],
      hartnoten: ["Leather", "Patchouli", "Violet"],
      basisnoten: ["Amber", "Birch tar", "Musk"],
      beschrijving: "A bold and sensual scent that honors leather.",
      jaar: "2018",
      geslacht: "Unisex",
      productnummers: ["premium_474"]
    },
    {
      id: "tom_ford_oud_wood",
      naam: "Oud Wood",
      merk: "Tom Ford",
      afbeelding: "https://aaroma.co/cdn/shop/files/oud_wood.jpg?v=1762632056",
      topnoten: ["Rosewood", "Cardamom", "Pepper"],
      hartnoten: ["Sandalwood", "Vetiver", "Oud"],
      basisnoten: ["Tonka", "Amber", "Vanilla"],
      beschrijving: "A mysterious and exotic blend of rare oud wood.",
      jaar: "2007",
      geslacht: "Unisex",
      productnummers: ["287"],
      variantIds: {"287": "47751576682634"}
    },
    {
      id: "tom_ford_cherry_smoke",
      naam: "Cherry Smoke",
      merk: "Tom Ford",
      afbeelding: "https://aaroma.co/cdn/shop/files/cherry_smoke.webp?v=1772339894",
      topnoten: ["Cherry", "Saffron", "Pink pepper"],
      hartnoten: ["Rose", "Jasmine", "Leather"],
      basisnoten: ["Vanilla", "Amber", "Woody notes"],
      beschrijving: "A seductive and smoky cherry scent.",
      jaar: "2020",
      geslacht: "Unisex",
      productnummers: ["434"],
      variantIds: {"434": "47751556497546"}
    }
  ],

  // ===== YVES SAINT LAURENT =====
  ysl: [
    {
      id: "ysl_black_opium",
      naam: "Black Opium",
      merk: "Yves Saint Laurent",
      afbeelding: "https://aaroma.co/cdn/shop/files/ysl-black-opium-edp_jtgB.webp?v=1762632057",
      topnoten: ["Coffee", "Pink pepper", "Orange blossom"],
      hartnoten: ["Jasmine", "Bitter almond", "Licorice"],
      basisnoten: ["Vanilla", "Cedar", "Patchouli"],
      beschrijving: "A bold and edgy scent that captures the spirit of rock culture.",
      jaar: "2014",
      geslacht: "Female",
      productnummers: ["501"],
      variantIds: {"501": "47255562616970"}
    },
    {
      id: "ysl_manifesto",
      naam: "Manifesto",
      merk: "Yves Saint Laurent",
      afbeelding: "https://aaroma.co/cdn/shop/files/manifesto.webp?v=1772339894",
      topnoten: ["Green notes", "Bergamot", "Peach"],
      hartnoten: ["Jasmine", "Lily of the valley", "Orange blossom"],
      basisnoten: ["Vanilla", "Cedar", "Musk", "Tonka"],
      beschrijving: "A warm, woody yet fresh scent.",
      jaar: "2012",
      geslacht: "Female",
      productnummers: ["134"],
      variantIds: {"134": "47751568195722"}
    },
    {
      id: "ysl_opium",
      naam: "Opium",
      merk: "Yves Saint Laurent",
      afbeelding: "https://aaroma.co/cdn/shop/files/opium.webp?v=1772339894",
      topnoten: ["Mandarin", "Plum", "Clove", "Coriander"],
      hartnoten: ["Clove", "Rose", "Jasmine", "Lily of the valley"],
      basisnoten: ["Opium", "Myrrh", "Amber", "Sandalwood"],
      beschrijving: "A legendary oriental scent that is both spicy and sensual.",
      jaar: "1977",
      geslacht: "Female",
      productnummers: ["083"],
      variantIds: {"083": "47751566393482"}
    },
    {
      id: "ysl_y",
      naam: "Y",
      merk: "Yves Saint Laurent",
      afbeelding: "https://aaroma.co/cdn/shop/files/y.webp?v=1772339894",
      topnoten: ["Bergamot", "Ginger", "Aldehydes"],
      hartnoten: ["Sage", "Juniper berry", "Geranium"],
      basisnoten: ["Amber", "Cedar", "Musk"],
      beschrijving: "A fresh and woody scent that represents a new generation.",
      jaar: "2017",
      geslacht: "Male",
      productnummers: ["283"],
      variantIds: {"283": "47751559643274"}
    }
  ],

  // ===== VALENTINO =====
  valentino: [
    {
      id: "valentino_donna_born_in_roma",
      naam: "Donna Born in Roma",
      merk: "Valentino",
      afbeelding: "https://aaroma.co/cdn/shop/files/born_in_roma.webp?v=1772339894",
      topnoten: ["Blackcurrant", "Bergamot", "Jasmine"],
      hartnoten: ["Rose", "Jasmine", "Cedar"],
      basisnoten: ["Vanilla", "Musk", "Cedar"],
      beschrijving: "A modern and edgy scent that captures the spirit of Roman youth culture.",
      jaar: "2019",
      geslacht: "Female",
      productnummers: ["469"],
      variantIds: {"469": "47751558332554"}
    },
    {
      id: "valentino_uomo_born_in_roma",
      naam: "Uomo Born in Roma",
      merk: "Valentino",
      afbeelding: "https://aaroma.co/cdn/shop/files/uomo_born_in_roma.webp?v=1772339894",
      topnoten: ["Mandarin", "Salt", "Mint"],
      hartnoten: ["Lavender", "Sage", "Cedar"],
      basisnoten: ["Vanilla", "Tonka", "Musk"],
      beschrijving: "A fresh and aromatic scent for the modern man.",
      jaar: "2019",
      geslacht: "Male",
      productnummers: ["360"],
      variantIds: {"360": "47751571636362"}
    }
  ],

  // ===== PRADA =====
  prada: [
    {
      id: "prada_paradoxe",
      naam: "Paradoxe",
      merk: "Prada",
      afbeelding: "https://aaroma.co/cdn/shop/files/paradoxe.webp?v=1772339894",
      topnoten: ["Pear", "Bergamot", "Mandarin"],
      hartnoten: ["Orange blossom", "Jasmine", "Rose"],
      basisnoten: ["Vanilla", "Amber", "Cedar"],
      beschrijving: "A modern and paradoxical scent that plays with contrasts.",
      jaar: "2022",
      geslacht: "Female",
      productnummers: ["437"],
      variantIds: {"437": "47751558332554"}
    },
    {
      id: "prada_candy",
      naam: "Candy",
      merk: "Prada",
      afbeelding: "https://aaroma.co/cdn/shop/files/candy.webp?v=1772339894",
      topnoten: ["Caramel", "Musk", "Vanilla"],
      hartnoten: ["Benzoin", "Musk"],
      basisnoten: ["Vanilla", "Musk", "Caramel"],
      beschrijving: "A playful and delicious gourmand scent.",
      jaar: "2011",
      geslacht: "Female",
      productnummers: ["182"],
      variantIds: {"182": "47751567278218"}
    }
  ],

  // ===== CAROLINA HERRERA =====
  carolinaHerrera: [
    {
      id: "carolina_good_girl",
      naam: "Good Girl",
      merk: "Carolina Herrera",
      afbeelding: "https://aaroma.co/cdn/shop/files/good_girl.webp?v=1772339894",
      topnoten: ["Plum", "Saffron", "Bergamot"],
      hartnoten: ["Tuberose", "Jasmine", "Orange blossom"],
      basisnoten: ["Leather", "Vanilla", "Patchouli", "Tonka"],
      beschrijving: "A seductive and mysterious scent that captures the duality of a modern woman.",
      jaar: "2016",
      geslacht: "Female",
      productnummers: ["461"],
      variantIds: {"461": "47751558332554"}
    },
    {
      id: "carolina_very_good_girl",
      naam: "Very Good Girl",
      merk: "Carolina Herrera",
      afbeelding: "https://aaroma.co/cdn/shop/files/very_good_girl.webp?v=1772339894",
      topnoten: ["Raspberry", "Blackcurrant", "Lychee"],
      hartnoten: ["Rose", "Tuberose", "Orange blossom"],
      basisnoten: ["Vanilla", "Tonka", "Cedar"],
      beschrijving: "A bold and fresh interpretation of the iconic Good Girl scent.",
      jaar: "2020",
      geslacht: "Female",
      productnummers: ["404"],
      variantIds: {"404": "47751563870346"}
    }
  ],

  // ===== CHANEL =====
  chanel: [
    {
      id: "chanel_bleu",
      naam: "Bleu de Chanel",
      merk: "Chanel",
      afbeelding: "https://aaroma.co/cdn/shop/files/bleu.webp?v=1772339894",
      topnoten: ["Grapefruit", "Lemon", "Mint", "Pink pepper"],
      hartnoten: ["Ginger", "Nutmeg", "Jasmine"],
      basisnoten: ["Incense", "Vetiver", "Cedar", "Sandalwood"],
      beschrijving: "A timeless and refined scent for men who embody the spirit of freedom.",
      jaar: "2010",
      geslacht: "Male",
      productnummers: ["252"],
      variantIds: {"252": "47255558094986"}
    },
    {
      id: "chanel_allure_homme_sport",
      naam: "Allure Homme Sport",
      merk: "Chanel",
      afbeelding: "https://aaroma.co/cdn/shop/files/Allure_Homme_Sport.webp?v=1772365217",
      topnoten: ["Mandarin", "Lemon", "Bergamot"],
      hartnoten: ["Pepper", "Cedar", "Sea water notes"],
      basisnoten: ["Musk", "Amber", "Tonka"],
      beschrijving: "A fresh and sporty scent for the dynamic man.",
      jaar: "2004",
      geslacht: "Male",
      productnummers: ["222"],
      variantIds: {"222": "47751567016074"}
    },
    {
      id: "chanel_coco_mademoiselle",
      naam: "Coco Mademoiselle",
      merk: "Chanel",
      afbeelding: "https://aaroma.co/cdn/shop/files/Mademoiselle.jpg?v=1772257875",
      topnoten: ["Orange", "Bergamot", "Grapefruit"],
      hartnoten: ["Rose", "Jasmine", "Lychee"],
      basisnoten: ["Patchouli", "Vanilla", "Musk", "Vetiver"],
      beschrijving: "A fresh and modern oriental scent.",
      jaar: "2001",
      geslacht: "Female",
      productnummers: ["067", "139"],
      variantIds: {"067": "47751577075850", "139": "47751577567370"}
    },
    {
      id: "chanel_chance",
      naam: "Chance",
      merk: "Chanel",
      afbeelding: "https://aaroma.co/cdn/shop/files/chance.webp?v=1772339894",
      topnoten: ["Pink pepper", "Quince", "Citrus"],
      hartnoten: ["Hyacinth", "Jasmine", "Iris"],
      basisnoten: ["Musk", "Patchouli", "Vetiver", "Cedar"],
      beschrijving: "A vibrant and unexpected floral scent.",
      jaar: "2003",
      geslacht: "Female",
      productnummers: ["006"],
      variantIds: {"006": "47751575699594"}
    },
    {
      id: "chanel_coco",
      naam: "Coco",
      merk: "Chanel",
      afbeelding: "https://aaroma.co/cdn/shop/files/coco.webp?v=1772339894",
      topnoten: ["Coriander", "Mandarin", "Peach", "Jasmine"],
      hartnoten: ["Rose", "Clove", "Mimosa", "Carnation"],
      basisnoten: ["Sandalwood", "Amber", "Opium", "Benzoin"],
      beschrijving: "A lush and sensual oriental scent.",
      jaar: "1984",
      geslacht: "Female",
      productnummers: ["079"],
      variantIds: {"079": "47751573930122"}
    }
  ],

  // ===== DIOR =====
  dior: [
    {
      id: "dior_sauvage",
      naam: "Sauvage",
      merk: "Dior",
      afbeelding: "https://aaroma.co/cdn/shop/files/sauvage_parfum.webp?v=1772373409",
      topnoten: ["Bergamot", "Pepper", "Ambroxan"],
      hartnoten: ["Lavender", "Ginger", "Elemi"],
      basisnoten: ["Amber", "Cedar", "Vetiver"],
      beschrijving: "A fresh, powerful and wild scent that symbolizes freedom and masculinity.",
      jaar: "2015",
      geslacht: "Male",
      productnummers: ["230", "338", "366"],
      variantIds: {"338": "47751564329098", "366": "47751578648714"}
    },
    {
      id: "dior_fahrenheit",
      naam: "Fahrenheit",
      merk: "Dior",
      afbeelding: "https://aaroma.co/cdn/shop/files/fahrenheit.webp?v=1772339894",
      topnoten: ["Violet", "Leather", "Incense"],
      hartnoten: ["Leather", "Violet", "Honeysuckle"],
      basisnoten: ["Leather", "Vetiver", "Amber", "Myrrh"],
      beschrijving: "A revolutionary scent that combines floral, woody and leathery notes.",
      jaar: "1988",
      geslacht: "Male",
      productnummers: ["206", "350"],
      variantIds: {"206": "47751575208074"}
    },
    {
      id: "dior_jadore",
      naam: "J'adore",
      merk: "Dior",
      afbeelding: "https://aaroma.co/cdn/shop/files/J_Adore.jpg?v=1772258436",
      topnoten: ["Pear", "Melon", "Peach", "Magnolia"],
      hartnoten: ["Jasmine", "Rose", "Lily of the valley", "Ylang-ylang"],
      basisnoten: ["Vanilla", "Musk", "Cedar"],
      beschrijving: "A floral bouquet of exceptional richness.",
      jaar: "1999",
      geslacht: "Female",
      productnummers: ["159"],
      variantIds: {"159": "47751577174154"}
    },
    {
      id: "dior_hypnotic_poison",
      naam: "Hypnotic Poison",
      merk: "Dior",
      afbeelding: "https://aaroma.co/cdn/shop/files/Hypnotic_Poison.jpg?v=1772269709",
      topnoten: ["Apricot", "Plum", "Coconut", "Bitter almond"],
      hartnoten: ["Rose", "Jasmine", "Lily of the valley"],
      basisnoten: ["Vanilla", "Almond", "Musk"],
      beschrijving: "A mysterious and sensual scent.",
      jaar: "1998",
      geslacht: "Female",
      productnummers: ["145"],
      variantIds: {"145": "47751576780938"}
    },
    {
      id: "dior_miss_dior_le_parfum",
      naam: "Miss Dior Le Parfum",
      merk: "Dior",
      afbeelding: "https://aaroma.co/cdn/shop/files/le_parfum.webp?v=1772270418",
      topnoten: ["Lavender", "Bergamot", "Sage"],
      hartnoten: ["Iris", "Musk", "Ambrette", "Pear"],
      basisnoten: ["Cedar", "Vetiver", "Leather", "Amber"],
      beschrijving: "The most concentrated and luxurious version of Miss Dior.",
      jaar: "2017",
      geslacht: "Female",
      productnummers: ["196"],
      variantIds: {"196": "47751576584330"}
    },
    {
      id: "dior_homme_intense",
      naam: "Dior Homme Intense",
      merk: "Dior",
      afbeelding: "https://aaroma.co/cdn/shop/files/homme_intense.webp?v=1772339894",
      topnoten: ["Lavender"],
      hartnoten: ["Iris", "Amber", "Cocoa"],
      basisnoten: ["Leather", "Cedar", "Vetiver"],
      beschrijving: "A refined and powerful interpretation of Dior Homme.",
      jaar: "2011",
      geslacht: "Male",
      productnummers: ["277"],
      variantIds: {"277": "47751568654474"}
    }
  ],

  // ===== LANCOME =====
  lancome: [
    {
      id: "lancome_la_vie_est_belle",
      naam: "La Vie Est Belle",
      merk: "Lancôme",
      afbeelding: "https://aaroma.co/cdn/shop/files/la_vie_est_belle.webp?v=1772339894",
      topnoten: ["Blackcurrant", "Pear", "Orange blossom"],
      hartnoten: ["Iris", "Jasmine", "Orange blossom"],
      basisnoten: ["Praline", "Vanilla", "Patchouli", "Tonka"],
      beschrijving: "A radiant and joyful scent.",
      jaar: "2012",
      geslacht: "Female",
      productnummers: ["412", "101"],
      variantIds: {"101": "47751578353802"}
    },
    {
      id: "lancome_tresor",
      naam: "Trésor",
      merk: "Lancôme",
      afbeelding: "https://aaroma.co/cdn/shop/files/tresor.webp?v=1772339894",
      topnoten: ["Peach", "Apricot", "Rose"],
      hartnoten: ["Lily of the valley", "Jasmine", "Iris"],
      basisnoten: ["Vanilla", "Sandalwood", "Musk"],
      beschrijving: "A romantic and timeless scent.",
      jaar: "1990",
      geslacht: "Female",
      productnummers: ["141"],
      variantIds: {"141": "47751572324490"}
    },
    {
      id: "lancome_idole",
      naam: "Idôle",
      merk: "Lancôme",
      afbeelding: "https://aaroma.co/cdn/shop/files/idole.webp?v=1772339894",
      topnoten: ["Pear", "Bergamot", "Lemon"],
      hartnoten: ["Rose", "Jasmine", "Magnolia"],
      basisnoten: ["Vanilla", "Musk", "Cedar"],
      beschrijving: "A modern and elegant scent for the new generation of women.",
      jaar: "2019",
      geslacht: "Female",
      productnummers: ["55"],
      variantIds: {"55": "47751576977546"}
    }
  ],

  // ===== NARCISO RODRIGUEZ =====
  narciso: [
    {
      id: "narciso_for_her",
      naam: "For Her",
      merk: "Narciso Rodriguez",
      afbeelding: "https://aaroma.co/cdn/shop/files/for_her.webp?v=1772339894",
      topnoten: ["Plum", "Bergamot", "Mandarin"],
      hartnoten: ["Tuberose", "Jasmine", "Musk"],
      basisnoten: ["Patchouli", "Vanilla", "Cedar"],
      beschrijving: "A sensual and mysterious scent that celebrates the power of musk.",
      jaar: "2003",
      geslacht: "Female",
      productnummers: ["457"]
    }
  ],

  // ===== PACO RABANNE =====
  pacoRabanne: [
    {
      id: "paco_one_million",
      naam: "1 Million",
      merk: "Paco Rabanne",
      afbeelding: "https://aaroma.co/cdn/shop/files/Paco_Rabanne_One_Million.avif?v=1762632686",
      topnoten: ["Grapefruit", "Mint", "Mandarin"],
      hartnoten: ["Cinnamon", "Rose", "Spices"],
      basisnoten: ["Leather", "Amber", "Patchouli"],
      beschrijving: "A bold and seductive scent for the man who knows his worth.",
      jaar: "2008",
      geslacht: "Male",
      productnummers: ["275", "334"],
      variantIds: {"275": "47751577665674", "334": "47751563051146"}
    },
    {
      id: "paco_invictus",
      naam: "Invictus",
      merk: "Paco Rabanne",
      afbeelding: "https://aaroma.co/cdn/shop/files/invictus.webp?v=1772339894",
      topnoten: ["Grapefruit", "Mandarin", "Sea water notes"],
      hartnoten: ["Bay leaf", "Jasmine", "Cedar"],
      basisnoten: ["Oakmoss", "Amber", "Patchouli"],
      beschrijving: "A fresh and powerful scent for the victorious man.",
      jaar: "2013",
      geslacht: "Male",
      productnummers: ["228"],
      variantIds: {"228": "47751573209226"}
    },
    {
      id: "paco_phantom",
      naam: "Phantom",
      merk: "Paco Rabanne",
      afbeelding: "https://aaroma.co/cdn/shop/files/phantom.webp?v=1772339894",
      topnoten: ["Lemon", "Bergamot", "Lavender"],
      hartnoten: ["Sage", "Vetiver", "Patchouli"],
      basisnoten: ["Vanilla", "Amber", "Cedar"],
      beschrijving: "A futuristic and connected scent for a new generation.",
      jaar: "2021",
      geslacht: "Male",
      productnummers: ["399"],
      variantIds: {"399": "47751563739274"}
    },
    {
      id: "paco_lady_million",
      naam: "Lady Million",
      merk: "Paco Rabanne",
      afbeelding: "https://aaroma.co/cdn/shop/files/lady_million.webp?v=1772339894",
      topnoten: ["Raspberry", "Neroli", "Lemon"],
      hartnoten: ["Orange blossom", "Jasmine", "Honey"],
      basisnoten: ["Patchouli", "Amber", "Cedar"],
      beschrijving: "A radiant and glamorous scent for the modern woman.",
      jaar: "2010",
      geslacht: "Female",
      productnummers: ["023"]
    },
    {
      id: "paco_fame",
      naam: "Fame",
      merk: "Paco Rabanne",
      afbeelding: "https://aaroma.co/cdn/shop/files/fame.webp?v=1772339894",
      topnoten: ["Mango", "Bergamot", "Mandarin"],
      hartnoten: ["Jasmine", "Rose", "Incense"],
      basisnoten: ["Sandalwood", "Vanilla", "Musk"],
      beschrijving: "A vibrant and modern scent.",
      jaar: "2022",
      geslacht: "Female",
      productnummers: ["498"],
      variantIds: {"498": "47751576387722"}
    }
  ],

  // ===== JEAN PAUL GAULTIER =====
  jpg: [
    {
      id: "jpg_le_male",
      naam: "Le Male",
      merk: "Jean Paul Gaultier",
      afbeelding: "https://aaroma.co/cdn/shop/files/le_male.webp?v=1772339894",
      topnoten: ["Mint", "Lavender", "Bergamot", "Cardamom"],
      hartnoten: ["Cinnamon", "Orange blossom", "Caraway"],
      basisnoten: ["Vanilla", "Tonka", "Amber", "Cedar"],
      beschrijving: "An iconic and seductive scent for the modern man.",
      jaar: "1995",
      geslacht: "Male",
      productnummers: ["247"],
      variantIds: {"247": "47751577272458"}
    },
    {
      id: "jpg_ultra_male",
      naam: "Ultra Male",
      merk: "Jean Paul Gaultier",
      afbeelding: "https://aaroma.co/cdn/shop/files/ultra_male.webp?v=1772339894",
      topnoten: ["Pear", "Mint", "Lavender"],
      hartnoten: ["Cinnamon", "Sage", "Clary sage"],
      basisnoten: ["Vanilla", "Amber", "Woody notes"],
      beschrijving: "A powerful and seductive scent that pushes the boundaries of masculinity.",
      jaar: "2015",
      geslacht: "Male",
      productnummers: ["349"],
      variantIds: {"349": "47751570096266"}
    },
    {
      id: "jpg_scandal",
      naam: "Scandal",
      merk: "Jean Paul Gaultier",
      afbeelding: "https://aaroma.co/cdn/shop/files/scandal.webp?v=1772339894",
      topnoten: ["Mandarin", "Gardenia", "Blood orange"],
      hartnoten: ["Honey", "Jasmine", "Rose"],
      basisnoten: ["Patchouli", "Tonka", "Cedar"],
      beschrijving: "A bold and playful scent with a gourmand heart.",
      jaar: "2017",
      geslacht: "Female",
      productnummers: ["192"],
      variantIds: {"192": "47751577862282"}
    },
    {
      id: "jpg_la_belle",
      naam: "La Belle",
      merk: "Jean Paul Gaultier",
      afbeelding: "https://aaroma.co/cdn/shop/files/la_belle.webp?v=1772339894",
      topnoten: ["Pear", "Bergamot"],
      hartnoten: ["Jasmine", "Orange blossom"],
      basisnoten: ["Vanilla", "Tonka", "Cedar"],
      beschrijving: "A seductive and addictive gourmand scent.",
      jaar: "2019",
      geslacht: "Female",
      productnummers: ["412"],
      variantIds: {"412": "47751575306378"}
    },
    {
      id: "jpg_classique",
      naam: "Classique",
      merk: "Jean Paul Gaultier",
      afbeelding: "https://aaroma.co/cdn/shop/files/classique.webp?v=1772339894",
      topnoten: ["Rose", "Ginger", "Bergamot"],
      hartnoten: ["Tuberose", "Jasmine", "Orange blossom"],
      basisnoten: ["Vanilla", "Amber", "Musk"],
      beschrijving: "An iconic and sensual scent for women.",
      jaar: "1993",
      geslacht: "Female",
      productnummers: ["442"],
      variantIds: {"442": "47751573635210"}
    }
  ],

  // ===== MUGLER =====
  mugler: [
   
    {
      id: "mugler_angel",
      naam: "Angel",
      merk: "Mugler",
      afbeelding: "https://aaroma.co/cdn/shop/files/angel_edp.webp?v=1772373610",
      topnoten: ["Cotton candy", "Bergamot", "Pineapple", "Coconut"],
      hartnoten: ["Honey", "Red berries", "Peach", "Plum", "Apricot"],
      basisnoten: ["Patchouli", "Vanilla", "Chocolate", "Caramel"],
      beschrijving: "A revolutionary gourmand scent.",
      jaar: "1992",
      geslacht: "Female",
      productnummers: ["113"],
      variantIds: {"113": "47751564034186"}
    }
  ],

  // ===== CHLOE =====
  chloe: [
    {
      id: "chloe_chloe",
      naam: "Chloé",
      merk: "Chloé",
      afbeelding: "https://aaroma.co/cdn/shop/files/chloe.webp?v=1772339894",
      topnoten: ["Peony", "Lychee", "Freesia"],
      hartnoten: ["Magnolia", "Rose", "Lily of the valley"],
      basisnoten: ["Cedar", "Amber", "Musk"],
      beschrijving: "A fresh and elegant rose scent.",
      jaar: "2008",
      geslacht: "Female",
      productnummers: ["024"],
      variantIds: {"024": "47751574028426"}
    }
  ],

  // ===== GIORGIO ARMANI =====
  armani: [
    {
      id: "armani_acqua_di_gio",
      naam: "Acqua di Gio",
      merk: "Giorgio Armani",
      afbeelding: "https://aaroma.co/cdn/shop/files/Acqua_Di_Gio.webp?v=1772344094",
      topnoten: ["Bergamot", "Neroli", "Green mandarin"],
      hartnoten: ["Jasmine", "Rosemary", "Sage"],
      basisnoten: ["Cedar", "Patchouli", "Musk"],
      beschrijving: "A timeless aquatic classic that captures the essence of the Mediterranean.",
      jaar: "1996",
      geslacht: "Male",
      productnummers: ["221"],
      variantIds: {"221": "47751572619402"}
    },
    {
      id: "armani_code",
      naam: "Armani Code",
      merk: "Giorgio Armani",
      afbeelding: "https://aaroma.co/cdn/shop/files/code.webp?v=1772339894",
      topnoten: ["Bergamot", "Lemon", "Green notes"],
      hartnoten: ["Olive blossom", "Jasmine", "Orange blossom"],
      basisnoten: ["Leather", "Cedar", "Tonka"],
      beschrijving: "A refined and seductive scent for the modern man.",
      jaar: "2004",
      geslacht: "Male",
      productnummers: ["260"],
      variantIds: {"260": "47751566229642"}
    },
    {
      id: "armani_code_for_women",
      naam: "Code for Women",
      merk: "Giorgio Armani",
      afbeelding: "https://aaroma.co/cdn/shop/files/code.webp?v=1772339894",
      topnoten: ["Orange blossom", "Jasmine", "Bergamot"],
      hartnoten: ["Honey", "Almond", "Ginger"],
      basisnoten: ["Vanilla", "Sandalwood", "Musk"],
      beschrijving: "A seductive and elegant oriental floral scent.",
      jaar: "2006",
      geslacht: "Female",
      productnummers: ["135"],
      variantIds: {"135": "47751571243146"}
    },
    {
      id: "armani_stronger_with_you_intensely",
      naam: "Stronger With You Intensely",
      merk: "Giorgio Armani",
      afbeelding: "https://aaroma.co/cdn/shop/files/stronger_with_you_intensely.webp?v=1772339532",
      topnoten: ["Pink pepper", "Cardamom", "Violet leaf"],
      hartnoten: ["Sage", "Lavender", "Cinnamon"],
      basisnoten: ["Vanilla", "Chestnut", "Tonka", "Amber"],
      beschrijving: "A more intense and powerful interpretation of Stronger With You.",
      jaar: "2019",
      geslacht: "Male",
      productnummers: ["318"],
      variantIds: {"318": "47751574519946"}
    },
    {
      id: "armani_my_way",
      naam: "My Way",
      merk: "Giorgio Armani",
      afbeelding: "https://aaroma.co/cdn/shop/files/my_way.webp?v=1772339894",
      topnoten: ["Orange blossom", "Bergamot"],
      hartnoten: ["Tuberose", "Jasmine"],
      basisnoten: ["Vanilla", "Cedar", "White musk"],
      beschrijving: "A radiant and ethical scent.",
      jaar: "2020",
      geslacht: "Female",
      productnummers: ["140"],
      variantIds: {"140": "47751575896202"}
    },
    {
      id: "armani_diamonds",
      naam: "Armani Diamonds",
      merk: "Giorgio Armani",
      afbeelding: "https://aaroma.co/cdn/shop/files/diamonds.webp?v=1772339894",
      topnoten: ["Mandarin", "Bergamot", "Orange"],
      hartnoten: ["Rose", "Jasmine", "Ylang-ylang"],
      basisnoten: ["Sandalwood", "Musk", "Amber"],
      beschrijving: "A sparkling and elegant scent.",
      jaar: "2000",
      geslacht: "Female",
      productnummers: ["040"],
      variantIds: {"040": "47751559250058"}
    },
    {
      id: "armani_emporio_he",
      naam: "Emporio He",
      merk: "Giorgio Armani",
      afbeelding: "https://aaroma.co/cdn/shop/files/he.webp?v=1772339894",
      topnoten: ["Bergamot", "Mandarin", "Lemon"],
      hartnoten: ["Jasmine", "Rosemary", "Sage"],
      basisnoten: ["Cedar", "Sandalwood", "Musk", "Amber"],
      beschrijving: "A fresh and masculine scent for the modern man.",
      jaar: "1998",
      geslacht: "Male",
      productnummers: ["242"],
      variantIds: {"242": "47751555973258"}
    }
  ],

  // ===== HUGO BOSS =====
  hugoBoss: [
    {
      id: "boss_bottled",
      naam: "Boss Bottled",
      merk: "Hugo Boss",
      afbeelding: "https://aaroma.co/cdn/shop/files/bottled.webp?v=1772270950",
      topnoten: ["Apple", "Citrus", "Geranium"],
      hartnoten: ["Cedar", "Sandalwood", "Patchouli"],
      basisnoten: ["Vanilla", "Musk", "Amber"],
      beschrijving: "A classic and refined scent for the successful modern man.",
      jaar: "1998",
      geslacht: "Male",
      productnummers: ["234"],
      variantIds: {"234": "47751576191114"}
    },
    {
      id: "boss_the_scent",
      naam: "The Scent",
      merk: "Hugo Boss",
      afbeelding: "https://aaroma.co/cdn/shop/files/the_scent.webp?v=1772339894",
      topnoten: ["Ginger", "Bergamot", "Mandarin"],
      hartnoten: ["Lavender", "Maninka", "Fruity notes"],
      basisnoten: ["Leather", "Patchouli", "Cedar"],
      beschrijving: "A seductive and magnetic scent.",
      jaar: "2015",
      geslacht: "Male",
      productnummers: ["184", "270"],
      variantIds: {"184": "47751565836426", "270": "47751569440906"}
    },
    {
      id: "boss_hugo",
      naam: "Hugo",
      merk: "Hugo Boss",
      afbeelding: "https://aaroma.co/cdn/shop/files/bottled_ab5b354f-1e76-4cbc-b18e-afb94087df0a.webp?v=1772419632",
      topnoten: ["Green notes", "Basil", "Mint"],
      hartnoten: ["Lavender", "Geranium", "Clary sage"],
      basisnoten: ["Cedar", "Sandalwood", "Musk"],
      beschrijving: "A fresh and energetic scent for the young and dynamic man.",
      jaar: "1995",
      geslacht: "Male",
      productnummers: ["223"],
      variantIds: {"223": "47751558332554"}
    },
    {
      id: "boss_alive",
      naam: "Alive",
      merk: "Hugo Boss",
      afbeelding: "https://aaroma.co/cdn/shop/files/alive.webp?v=1772339894",
      topnoten: ["Apple", "Blackcurrant", "Plum"],
      hartnoten: ["Rose", "Jasmine", "Cinnamon"],
      basisnoten: ["Vanilla", "Musk", "Cedar"],
      beschrijving: "A vibrant and energetic scent.",
      jaar: "2019",
      geslacht: "Female",
      productnummers: ["098"]
    },
    {
      id: "boss_woman",
      naam: "Boss Woman",
      merk: "Hugo Boss",
      afbeelding: "https://aaroma.co/cdn/shop/files/boss_woman.webp?v=1772339894",
      topnoten: ["Mandarin", "Apple", "Peach"],
      hartnoten: ["Rose", "Jasmine", "Lily"],
      basisnoten: ["Sandalwood", "Musk", "Vanilla"],
      beschrijving: "A classic and elegant scent.",
      jaar: "2000",
      geslacht: "Female",
      productnummers: ["60"]
    },
    {
      id: "boss_orange",
      naam: "Boss Orange",
      merk: "Hugo Boss",
      afbeelding: "https://aaroma.co/cdn/shop/files/Orange.webp?v=1772375542",
      topnoten: ["Apple", "White flowers", "Citrus"],
      hartnoten: ["Rose", "Jasmine", "Peony"],
      basisnoten: ["Sandalwood", "Musk", "Vanilla"],
      beschrijving: "A fresh and carefree scent.",
      jaar: "2003",
      geslacht: "Female",
      productnummers: ["148"],
      variantIds: {"148": "47751562461322"}
    }
  ],

  // ===== CALVIN KLEIN =====
  calvinKlein: [
    {
      id: "ck_one",
      naam: "CK One",
      merk: "Calvin Klein",
      afbeelding: "https://aaroma.co/cdn/shop/files/ck_one.webp?v=1772339894",
      topnoten: ["Bergamot", "Lemon", "Green notes"],
      hartnoten: ["Jasmine", "Rose", "Lily of the valley"],
      basisnoten: ["Musk", "Amber", "Cedar"],
      beschrijving: "An iconic unisex scent that symbolizes freshness and purity.",
      jaar: "1994",
      geslacht: "Unisex",
      productnummers: ["209"]
    },
    {
      id: "ck_eternity_men",
      naam: "Eternity for Men",
      merk: "Calvin Klein",
      afbeelding: "https://aaroma.co/cdn/shop/files/eternity.webp?v=1772339894",
      topnoten: ["Lavender", "Bergamot", "Lemon"],
      hartnoten: ["Coriander", "Jasmine", "Geranium"],
      basisnoten: ["Sandalwood", "Musk", "Amber"],
      beschrijving: "A timeless and romantic scent for men.",
      jaar: "1990",
      geslacht: "Male",
      productnummers: ["215"]
    },
    {
      id: "ck_eternity_women",
      naam: "Eternity for Women",
      merk: "Calvin Klein",
      afbeelding: "https://aaroma.co/cdn/shop/files/eternity.webp?v=1772339894",
      topnoten: ["Mandarin", "Bergamot", "Lemon"],
      hartnoten: ["Lily of the valley", "Rose", "Jasmine"],
      basisnoten: ["Sandalwood", "Musk", "Amber"],
      beschrijving: "A timeless and romantic scent for women.",
      jaar: "1988",
      geslacht: "Female",
      productnummers: ["106"],
      variantIds: {"106": "47751560560778"}
    }
  ],

  // ===== DOLCE & GABBANA =====
  dolceGabbana: [
    {
      id: "dolce_light_blue",
      naam: "Light Blue",
      merk: "Dolce & Gabbana",
      afbeelding: "https://aaroma.co/cdn/shop/files/light_blue.webp?v=1772339894",
      topnoten: ["Sicilian lemon", "Apple", "Cedar"],
      hartnoten: ["Jasmine", "White rose", "Bamboo"],
      basisnoten: ["Cedar", "Amber", "Musk"],
      beschrijving: "A fresh and sunny scent that captures the essence of the Mediterranean.",
      jaar: "2001",
      geslacht: "Female",
      productnummers: ["017"],
      variantIds: {"017": "47751578255498"}
    },
    {
      id: "dolce_the_one",
      naam: "The One",
      merk: "Dolce & Gabbana",
      afbeelding: "https://aaroma.co/cdn/shop/files/the_one.webp?v=1772339894",
      topnoten: ["Peach", "Lychee", "Mandarin"],
      hartnoten: ["Rose", "Jasmine", "Lily"],
      basisnoten: ["Vanilla", "Amber", "Musk"],
      beschrijving: "A refined and sensual scent.",
      jaar: "2006",
      geslacht: "Female",
      productnummers: ["094"]
    }
  ],

  // ===== GIVENCHY =====
  givenchy: [
    {
      id: "givenchy_ange_ou_demon",
      naam: "Ange ou Démon",
      merk: "Givenchy",
      afbeelding: "https://aaroma.co/cdn/shop/files/ange_ou_demon.webp?v=1772339894",
      topnoten: ["Saffron", "Ylang-ylang", "Lily"],
      hartnoten: ["Rose", "Jasmine", "Orange blossom"],
      basisnoten: ["Vanilla", "Sandalwood", "Patchouli"],
      beschrijving: "A mysterious and seductive scent.",
      jaar: "2006",
      geslacht: "Female",
      productnummers: ["142"],
      variantIds: {"142": "47751558496394"}
    }
  ],

  // ===== KENZO =====
  kenzo: [
    {
      id: "kenzo_flower",
      naam: "Flower by Kenzo",
      merk: "Kenzo",
      afbeelding: "https://aaroma.co/cdn/shop/files/flower.webp?v=1772339894",
      topnoten: ["Hawthorn", "Blackcurrant", "Mandarin"],
      hartnoten: ["Rose", "Jasmine", "Violet"],
      basisnoten: ["Vanilla", "Musk", "Cedar"],
      beschrijving: "A poetic and delicate scent.",
      jaar: "2000",
      geslacht: "Female",
      productnummers: ["074"],
      variantIds: {"074": "47751568916618"}
    }
  ],

  // ===== HERMÈS =====
  hermes: [
    {
      id: "hermes_terre",
      naam: "Terre d'Hermès",
      merk: "Hermès",
      afbeelding: "https://aaroma.co/cdn/shop/files/terre.webp?v=1772339894",
      topnoten: ["Orange", "Grapefruit"],
      hartnoten: ["Pepper", "Geranium"],
      basisnoten: ["Vetiver", "Cedar", "Patchouli"],
      beschrijving: "A powerful and original scent that honors the earth.",
      jaar: "2006",
      geslacht: "Male",
      productnummers: ["227"],
      variantIds: {"227": "47751572127882"}
    }
  ],

  // ===== DAVIDOFF =====
  davidoff: [
    {
      id: "davidoff_cool_water",
      naam: "Cool Water",
      merk: "Davidoff",
      afbeelding: "https://aaroma.co/cdn/shop/files/cool_water.webp?v=1772339894",
      topnoten: ["Sea salt", "Mint", "Lavender"],
      hartnoten: ["Geranium", "Sandalwood", "Rosemary"],
      basisnoten: ["Musk", "Cedar", "Tobacco"],
      beschrijving: "A fresh and pure scent inspired by the freshness of the sea.",
      jaar: "1988",
      geslacht: "Male",
      productnummers: ["200"],
      variantIds: {"200": "47751562625162"}
    }
  ],

  // ===== JOOP! =====
  joop: [
    {
      id: "joop_homme",
      naam: "Joop! Homme",
      merk: "Joop!",
      afbeelding: "https://aaroma.co/cdn/shop/files/joop_homme.webp?v=1772339894",
      topnoten: ["Cinnamon", "Bergamot", "Mandarin"],
      hartnoten: ["Lily of the valley", "Jasmine", "Geranium"],
      basisnoten: ["Sandalwood", "Vanilla", "Tonka", "Cedar"],
      beschrijving: "A loving, spicy and seductive scent.",
      jaar: "1989",
      geslacht: "Male",
      productnummers: ["211"],
      variantIds: {"211": "47751567638666"}
    }
  ],

  // ===== CREED =====
  creed: [
    {
      id: "creed_aventus",
      naam: "Aventus",
      merk: "Creed",
      afbeelding: "https://aaroma.co/cdn/shop/files/aventus.webp?v=1772339894",
      topnoten: ["Pineapple", "Bergamot", "Blackcurrant", "Apple"],
      hartnoten: ["Birch", "Jasmine", "Patchouli", "Rose"],
      basisnoten: ["Oakmoss", "Amber", "Vanilla", "Musk"],
      beschrijving: "A legendary scent that celebrates strength and success.",
      jaar: "2010",
      geslacht: "Male",
      productnummers: ["288"]
    }
  ],

  // ===== VERSACE =====
  versace: [
    {
      id: "versace_eros",
      naam: "Eros",
      merk: "Versace",
      afbeelding: "https://aaroma.co/cdn/shop/files/eros.webp?v=1772339894",
      topnoten: ["Mint", "Green apple", "Lemon"],
      hartnoten: ["Tonka", "Ambrosia", "Geranium"],
      basisnoten: ["Vanilla", "Cedar", "Oakmoss", "Patchouli"],
      beschrijving: "An intense, sensual and seductive scent inspired by the Greek god of love.",
      jaar: "2012",
      geslacht: "Male",
      productnummers: ["248"]
    }
  ],

  // ===== BVLGARI =====
  bvlgari: [
    {
      id: "bvlgari_aqva",
      naam: "Aqva Pour Homme",
      merk: "Bvlgari",
      afbeelding: "https://aaroma.co/cdn/shop/files/aqva.webp?v=1772339894",
      topnoten: ["Mandarin", "Neroli", "Petitgrain"],
      hartnoten: ["Aquatic notes", "Sage", "Lavender"],
      basisnoten: ["Musk", "Amber", "Cedar"],
      beschrijving: "A fresh and aquatic scent inspired by the Mediterranean.",
      jaar: "2005",
      geslacht: "Male",
      productnummers: ["305"],
      variantIds: {"305": "47751560691850"}
    }
  ],

  // ===== QUIET KING =====
  quietKing: [
    {
      id: "quiet_king_317",
      naam: "Quiet King",
      merk: "Quiet King",
      afbeelding: "https://aaroma.co/cdn/shop/files/quiet_king.webp?v=1772339894",
      topnoten: ["Wood", "Spices", "Nutmeg"],
      hartnoten: ["Amber", "Leather", "Cedar"],
      basisnoten: ["Sandalwood", "Musk", "Patchouli"],
      beschrijving: "A woody and spicy oriental scent with a masculine character.",
      jaar: "2012",
      geslacht: "Male",
      productnummers: ["317"],
      variantIds: {"317": "47751548633226"}
    }
  ],

  // ===== RUSH =====
  rush: [
    {
      id: "rush_2_163",
      naam: "Rush 2",
      merk: "Rush",
      afbeelding: "https://aaroma.co/cdn/shop/files/rush_2.webp?v=1772339894",
      topnoten: ["Freesia", "Water lily", "Coriander"],
      hartnoten: ["Rose", "Jasmine", "Lily of the valley"],
      basisnoten: ["Sandalwood", "Musk", "Amber"],
      beschrijving: "A fresh and vibrant floral scent.",
      jaar: "2001",
      geslacht: "Female",
      productnummers: ["163"],
      variantIds: {"163": "47751571734666"}
    }
  ],

  // ===== ADD INDEX FOR FAST SEARCHING =====
  _index: {}
};

// ===== BUILD SEARCH INDEX =====
(function bouwIndex() {
  const catalogus = window.NederlandseParfumCatalogus;
  for (let merkKey in catalogus) {
    if (merkKey.startsWith('_')) continue;
    const parfums = catalogus[merkKey];
    if (Array.isArray(parfums)) {
      parfums.forEach(parfum => {
        if (parfum.id) {
          catalogus._index[parfum.id] = parfum;
        }
      });
    }
  }
  console.log(`✅ NederlandseParfumCatalogus geladen met ${Object.keys(catalogus._index).length} echte parfums`);
})();

console.log('✓ NederlandseParfumCatalogus loaded');

// ===== BUILD allPerfumes ARRAY FROM CATALOG =====
window.allPerfumes = [];
for (let merkKey in window.NederlandseParfumCatalogus) {
  if (merkKey.startsWith('_')) continue;
  const parfums = window.NederlandseParfumCatalogus[merkKey];
  if (Array.isArray(parfums)) {
    window.allPerfumes.push(...parfums);
  }
}
console.log('✓ allPerfumes array built:', window.allPerfumes.length, 'perfumes');
</script>

<style>
/* ===== PREMIUM FRAGRANCE CODE POPUP ===== */
.fc-float-wrapper {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

/* ===== FLOATING BUTTON ===== */
.fc-search-toggle {
  background: #C41E3A;
  border-radius: 30px;
  padding: 14px 28px;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(196, 30, 58, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  border: none;
  min-width: 130px;
}

.fc-search-toggle:hover {
  background: #A51D36;
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(165, 29, 54, 0.4);
}

.fc-search-toggle svg {
  width: 20px;
  height: 20px;
  stroke: #FFFFFF;
  stroke-width: 2;
  fill: none;
}

.fc-toggle-text {
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

/* ===== POPUP CONTAINER ===== */
.fc-search-popup {
  position: fixed;
  bottom: 110px;
  right: 30px;
  width: 440px;
  max-height: 80vh;
  background: #FFFFFF;
  border-radius: 24px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 0;
  overflow-y: auto;
  transform: translateY(30px);
  opacity: 0;
  visibility: hidden;
  transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 10000;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.fc-search-popup.active {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

/* Premium Scrollbar */
.fc-search-popup::-webkit-scrollbar {
  width: 6px;
}
.fc-search-popup::-webkit-scrollbar-track {
  background: #F8F4F0;
  border-radius: 10px;
}
.fc-search-popup::-webkit-scrollbar-thumb {
  background: #C41E3A;
  border-radius: 10px;
}

/* ===== CLOSE BUTTON ===== */
.fc-close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  background: #F8F4F0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  color: #4A3F39;
  transition: all 0.2s ease;
  z-index: 10;
  border: none;
  opacity: 0.9;
}

.fc-close-btn:hover {
  background: #EDE5DC;
  color: #C41E3A;
  transform: rotate(90deg);
}

/* ===== OFFER BANNER - PREMIUM ===== */
.fc-offer-banner {
  background: linear-gradient(135deg, #FFF5EB, #FFE8DA);
  border: 2px solid #C41E3A;
  border-radius: 16px;
  padding: 16px 20px;
  margin: 20px 20px 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8px 15px -5px rgba(196, 30, 58, 0.2);
  transition: all 0.3s ease;
}

.fc-offer-banner.qualified {
  background: linear-gradient(135deg, #E8F5E9, #C8E6C9);
  border-color: #2E7D32;
  box-shadow: 0 8px 15px -5px rgba(46, 125, 50, 0.2);
}

.fc-offer-left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.fc-offer-icon {
  font-size: 28px;
  background: #C41E3A;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 5px 10px rgba(196, 30, 58, 0.3);
  transition: background 0.3s ease;
  flex-shrink: 0;
}

.fc-offer-banner.qualified .fc-offer-icon {
  background: #2E7D32;
  box-shadow: 0 5px 10px rgba(46, 125, 50, 0.3);
}

.fc-offer-text {
  flex: 1;
}

.fc-offer-text strong {
  display: block;
  font-size: 15px;
  color: #C41E3A;
  font-weight: 800;
  margin-bottom: 2px;
  letter-spacing: 0.3px;
  transition: color 0.3s ease;
  line-height: 1.3;
}

.fc-offer-banner.qualified .fc-offer-text strong {
  color: #2E7D32;
}

.fc-offer-text span {
  font-size: 12px;
  color: #4A3F39;
  font-weight: 500;
  display: block;
  line-height: 1.4;
}

.fc-offer-status {
  background: #C41E3A;
  color: white;
  font-size: 14px;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(196, 30, 58, 0.2);
  transition: all 0.3s ease;
  min-width: 65px;
  text-align: center;
  white-space: nowrap;
  margin-left: 10px;
}

.fc-offer-banner.qualified .fc-offer-status {
  background: #2E7D32;
  box-shadow: 0 4px 8px rgba(46, 125, 50, 0.2);
}

/* Progress bar */
.fc-offer-progress-container {
  padding: 0 20px 15px 20px;
}

.fc-offer-progress-bar {
  height: 6px;
  background: #EDE5DC;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
}

.fc-offer-progress-fill {
  height: 100%;
  background: #C41E3A;
  border-radius: 10px;
  width: 0%;
  transition: width 0.3s ease;
}

.fc-offer-banner.qualified .fc-offer-progress-fill {
  background: #2E7D32;
}

.fc-offer-message {
  font-size: 12px;
  color: #4A3F39;
  margin-top: 8px;
  text-align: right;
  font-weight: 500;
  padding-right: 5px;
}

/* ===== INFO SECTION ===== */
.fc-info-section {
  padding: 5px 20px 5px 20px;
}

.fc-info-label {
  font-size: 12px;
  font-weight: 600;
  color: #8A7A70;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

/* ===== LOGO SECTION - CLICKABLE ===== */
.fc-logo-section {
  padding: 0 20px 15px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.fc-logo-section:hover {
  opacity: 0.8;
}

.fc-logo-red {
  width: 60px;
  height: 60px;
  background: #C41E3A;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 15px rgba(196, 30, 58, 0.25);
}

.fc-logo-fc {
  color: white;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.fc-brand-text {
  font-size: 18px;
  font-weight: 700;
  color: #2C2420;
  text-transform: uppercase;
  letter-spacing: 0.8px;
}

/* ===== SEARCH SECTION WITH CLEAR BUTTON ===== */
.fc-search-section {
  padding: 0 20px 20px 20px;
  position: relative;
}

.fc-search-container {
  position: relative;
  border-bottom: 2px solid #EDE5DC;
  transition: border-color 0.2s ease;
}

.fc-search-container:focus-within {
  border-color: #C41E3A;
}

.fc-search-field {
  width: 100%;
  padding: 15px 45px 15px 0;
  border: none;
  font-size: 16px;
  outline: none;
  background: transparent;
  color: #2C2420;
}

.fc-search-field::placeholder {
  color: #B0A298;
  font-weight: 400;
  font-size: 15px;
}

.fc-clear-search {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  background: #F8F4F0;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  color: #8A7A70;
  padding: 0;
  transition: all 0.2s ease;
}

.fc-clear-search:hover {
  background: #EDE5DC;
  color: #C41E3A;
}

/* ===== STEPS SECTION - PREMIUM BOX ===== */
.fc-steps-section {
  padding: 0 20px 25px 20px;
}

.fc-steps-box {
  background: #FEFCF9;
  border: 1px solid #EDE5DC;
  border-radius: 24px;
  padding: 28px 20px;
  box-shadow: 0 8px 20px -10px rgba(0, 0, 0, 0.08);
}

.fc-steps-title {
  font-size: 22px;
  font-weight: 800;
  color: #2C2420;
  margin-bottom: 25px;
  line-height: 1.2;
  letter-spacing: -0.3px;
}

.fc-steps-title span {
  display: block;
  color: #C41E3A;
  font-size: 24px;
}

.fc-step-item {
  font-size: 15px;
  margin: 20px 0;
  color: #4A3F39;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  line-height: 1.5;
  font-weight: 500;
}

.fc-step-number {
  display: inline-block;
  width: 28px;
  height: 28px;
  background: #C41E3A;
  color: white;
  border-radius: 8px;
  text-align: center;
  line-height: 28px;
  font-size: 15px;
  font-weight: 700;
  flex-shrink: 0;
  box-shadow: 0 4px 8px rgba(196, 30, 58, 0.2);
}

/* ===== SECTION TITLES ===== */
.fc-section-title {
  font-size: 16px;
  font-weight: 800;
  color: #C41E3A;
  margin: 20px 20px 15px 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid #EDE5DC;
  text-transform: uppercase;
  letter-spacing: 0.8px;
}

.fc-subsection-title {
  font-size: 16px;
  font-weight: 700;
  color: #2C2420;
  margin: 20px 20px 15px 20px;
}

/* ===== REAL PERFUME LIST ===== */
.fc-real-perfume-item {
  background: #FFFFFF;
  padding: 15px 20px;
  margin: 0;
  border-bottom: 1px solid #F0E8E0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 18px;
  transition: background 0.2s ease;
}

.fc-real-perfume-item:hover {
  background: #FEF9F5;
}

.fc-real-perfume-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 12px;
  background: #FFFFFF;
  padding: 5px;
  border: 1px solid #EDE5DC;
}

.fc-real-perfume-info {
  flex: 1;
}

.fc-real-perfume-name {
  font-size: 16px;
  font-weight: 700;
  color: #2C2420;
  margin-bottom: 4px;
}

.fc-real-perfume-brand {
  font-size: 14px;
  color: #C41E3A;
  font-weight: 600;
  margin-bottom: 2px;
}

.fc-real-perfume-year {
  font-size: 12px;
  color: #B0A298;
}

/* ===== PRODUCT GRID ===== */
.fc-grid-2col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  padding: 0 20px 20px 20px;
}

.fc-product-card {
  text-align: center;
}

.fc-badge {
  background: #F8F4F0;
  padding: 6px 12px;
  border-radius: 40px;
  font-size: 10px;
  font-weight: 700;
  color: #4A3F39;
  margin-bottom: 12px;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  border: 1px solid #EDE5DC;
}

.fc-product-inner {
  background: #FFFFFF;
  border: 1px solid #EDE5DC;
  border-radius: 20px;
  padding: 18px 12px;
  transition: all 0.2s ease;
}

.fc-product-inner:hover {
  border-color: #C41E3A;
  box-shadow: 0 8px 18px -8px rgba(196, 30, 58, 0.15);
}

/* ===== ENLARGED CATALOGUE IMAGES ===== */
.fc-product-image {
  width: 100%;
  height: 150px;
  object-fit: contain;
  margin-bottom: 12px;
  filter: drop-shadow(0 6px 8px rgba(0,0,0,0.1));
}

.fc-product-title {
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 5px;
  color: #2C2420;
}

.fc-product-price {
  font-size: 14px;
  font-weight: 800;
  color: #C41E3A;
  margin-bottom: 10px;
}

.fc-add-to-cart {
  width: 100%;
  background: #C41E3A;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 40px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  transition: background 0.2s ease;
}

.fc-add-to-cart:hover {
  background: #A51D36;
}

.fc-view-link {
  font-size: 11px;
  color: #8A7A70;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 500;
  display: inline-block;
}

.fc-view-link:hover {
  color: #C41E3A;
}

/* ===== DETAILED VIEW ===== */
.fc-detailed-view {
  background: #FEFCF9;
  border-radius: 24px;
  padding: 20px;
  margin: 0 20px 20px 20px;
  border: 1px solid #EDE5DC;
}

.fc-back-btn {
  background: none;
  border: none;
  padding: 0 20px 15px 20px;
  font-size: 13px;
  color: #8A7A70;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  font-weight: 600;
}

.fc-back-btn:hover {
  color: #C41E3A;
}

.fc-back-btn:before {
  content: "←";
  font-size: 16px;
}

.fc-detailed-header {
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid #EDE5DC;
}

.fc-detailed-image {
  width: 110px;
  height: 110px;
  object-fit: contain;
  border-radius: 16px;
  background: #FFFFFF;
  padding: 10px;
  border: 1px solid #EDE5DC;
}

.fc-detailed-name {
  font-size: 20px;
  font-weight: 800;
  color: #2C2420;
  margin-bottom: 6px;
}

.fc-detailed-brand {
  font-size: 15px;
  color: #C41E3A;
  font-weight: 700;
  margin-bottom: 8px;
}

.fc-detailed-meta {
  font-size: 13px;
  color: #8A7A70;
  margin-top: 5px;
}

/* ===== NOTES ===== */
.fc-notes-section {
  margin: 20px 0;
}

.fc-note-category {
  margin-bottom: 18px;
}

.fc-note-category h4 {
  font-size: 13px;
  font-weight: 800;
  color: #C41E3A;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
}

.fc-note-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.fc-note-tag {
  background: #FFFFFF;
  border: 1px solid #EDE5DC;
  padding: 6px 14px;
  border-radius: 40px;
  font-size: 12px;
  color: #4A3F39;
  font-weight: 500;
}

.fc-description {
  margin: 20px 0 0 0;
  padding: 18px;
  background: #FFFFFF;
  border-radius: 16px;
  border: 1px solid #EDE5DC;
  font-size: 13px;
  line-height: 1.6;
  color: #4A3F39;
}

/* ===== NOTIFICATION ===== */
.fc-notification {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #2E7D32;
  color: white;
  padding: 12px 24px;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  z-index: 10001;
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.3s ease;
}

.fc-notification.show {
  opacity: 1;
  transform: translateY(0);
}

/* ===== LOADING & NO RESULTS ===== */
.fc-loading, .fc-no-results {
  text-align: center;
  padding: 40px;
  color: #B0A298;
  background: #FEFCF9;
  border-radius: 20px;
  margin: 20px;
  font-size: 14px;
}

/* ===== SUGGESTIONS SECTION ===== */
.fc-suggestions-title {
  font-size: 16px;
  font-weight: 700;
  color: #2C2420;
  margin: 20px 20px 10px 20px;
}

.fc-suggestion-item {
  background: #FFFFFF;
  padding: 15px 20px;
  margin: 0;
  border-bottom: 1px solid #F0E8E0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 18px;
  transition: background 0.2s ease;
}

.fc-suggestion-item:hover {
  background: #FEF9F5;
}

.fc-suggestion-image {
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 10px;
  background: #FFFFFF;
  padding: 5px;
  border: 1px solid #EDE5DC;
}

.fc-suggestion-info {
  flex: 1;
}

.fc-suggestion-name {
  font-size: 14px;
  font-weight: 600;
  color: #2C2420;
  margin-bottom: 2px;
}

.fc-suggestion-price {
  font-size: 13px;
  font-weight: 600;
  color: #C41E3A;
}

.fc-suggestion-tag {
  font-size: 11px;
  color: #8A7A70;
  margin-top: 2px;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 520px) {
  .fc-search-popup {
    width: 90vw;
    right: 5vw;
    left: 5vw;
    bottom: 100px;
  }
  
  .fc-offer-banner {
    margin: 15px 15px 15px 15px;
    padding: 15px;
  }
  
  .fc-info-section, .fc-logo-section, .fc-search-section, .fc-steps-section {
    padding-left: 15px;
    padding-right: 15px;
  }
  
  .fc-steps-box {
    padding: 20px 15px;
  }
  
  .fc-offer-text strong {
    font-size: 14px;
  }
  
  .fc-offer-text span {
    font-size: 11px;
  }
  
  .fc-offer-status {
    font-size: 13px;
    padding: 5px 10px;
    min-width: 55px;
  }
}
</style>

<!-- Define toggle function -->
<script>
window.fcToggleZoeken = function() {
  try {
    const searchPopup = document.getElementById('fcSearchPopup');
    const searchInput = document.getElementById('fcSearchInput');
    
    if (!searchPopup) {
      console.warn('fcSearchPopup element not found');
      return;
    }
    
    if (searchPopup.classList.contains('active')) {
      searchPopup.classList.remove('active');
    } else {
      searchPopup.classList.add('active');
      if (searchInput) {
        searchInput.focus();
      }
      if (window.haalWinkelwagenOp) {
        window.haalWinkelwagenOp();
      }
    }
  } catch (e) {
    console.error('Error in fcToggleZoeken:', e);
  }
};
</script>

<div class="fc-float-wrapper">
  <!-- Floating Button -->
  <div class="fc-search-toggle" id="fcStickyButton" onclick="window.fcToggleZoeken()">
    <svg viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" stroke="#FFFFFF" fill="none"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#FFFFFF" stroke-width="2"/>
    </svg>
    <span class="fc-toggle-text">Search</span>
  </div>

  <!-- Search Popup -->
  <div class="fc-search-popup" id="fcSearchPopup">
    <div class="fc-close-btn" onclick="window.fcToggleZoeken()">✕</div>

    <!-- OFFER BANNER -->
    <div class="fc-offer-banner" id="fcOfferBanner">
      <div class="fc-offer-left">
        <span class="fc-offer-icon">🎁</span>
        <div class="fc-offer-text">
          <strong>BUY 2 GET 1 FREE</strong>
          <span id="fcOfferSubtext">Add 3 items for a free gift</span>
        </div>
      </div>
      <div class="fc-offer-status" id="fcOfferStatus">0/3</div>
    </div>
    
    <!-- Progress bar -->
    <div class="fc-offer-progress-container">
      <div class="fc-offer-progress-bar">
        <div class="fc-offer-progress-fill" id="fcOfferProgress" style="width: 0%;"></div>
      </div>
      <div class="fc-offer-message" id="fcOfferMessage">Add 3 items for a free gift</div>
    </div>

    <!-- INFO SECTION -->
    <div class="fc-info-section">
      <div class="fc-info-label">INFORMATION PROVIDED BY:</div>
    </div>

    <!-- Logo Section -->
    <a href="https://fragrancecode.com" target="_blank" style="text-decoration: none;">
      <div class="fc-logo-section">
        <div class="fc-logo-red">
          <span class="fc-logo-fc">FC</span>
        </div>
        <span class="fc-brand-text">FRAGRANCE CODE</span>
      </div>
    </a>

    <!-- Search Input -->
    <div class="fc-search-section">
      <div class="fc-search-container">
        <input type="text" 
               id="fcSearchInput" 
               class="fc-search-field" 
               placeholder="Search by name, brand, ID or scent notes..."
               autocomplete="off">
        <button class="fc-clear-search" id="fcClearSearch">✕</button>
      </div>
    </div>

    <!-- Steps Section -->
    <div class="fc-steps-section" id="fcSteps">
      <div class="fc-steps-box">
        <div class="fc-steps-title">
          HERE'S HOW TO FIND<br><span>YOUR FRAGRANCE.</span>
        </div>
        <div class="fc-step-item">
          <span class="fc-step-number">1</span>
          <span>TELL ME WHICH FRAGRANCE YOU LOVE.</span>
        </div>
        <div class="fc-step-item">
          <span class="fc-step-number">2</span>
          <span>I'LL SERVE IT TO YOU IN SECONDS...</span>
        </div>
        <div class="fc-step-item">
          <span class="fc-step-number">3</span>
          <span>DISCOVER YOUR NEW FAVORITE FRAGRANCE AND ENJOY!</span>
        </div>
      </div>
    </div>

    <!-- Dynamic Content -->
    <div id="fcContent"></div>
  </div>
</div>

<script>
(function() {
  // ===== ALLE 63 HARDCODED PRODUCTEN VAN AAROMA =====
  const hardcodedProducten = [
    // ===== DIOR =====
    {
      id: "aroma_206",
      titel: "Smells Like... Fahrenheit - No. 206",
      afbeelding: "https://aaroma.co/cdn/shop/files/206M_c.webp?v=1772181850&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-206m",
      variant: 47751575208074,
      prijs: 1495,
      merk: "Dior Fahrenheit",
      merkSleutel: "dior",
      nummer: "206",
      geslacht: "male",
      geinspireerdDoor: "Dior Fahrenheit",
      zoektermen: ["fahrenheit", "206", "dior fahrenheit", "smells like"]
    },
    {
      id: "aroma_221",
      titel: "Smells Like... Acqua Di Gio - No. 221",
      afbeelding: "https://aaroma.co/cdn/shop/files/221M_c.webp?v=1772181799&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-221m",
      variant: 47751572619402,
      prijs: 1495,
      merk: "Giorgio Armani Acqua Di Gio",
      merkSleutel: "armani",
      nummer: "221",
      geslacht: "male",
      geinspireerdDoor: "Giorgio Armani Acqua Di Gio",
      zoektermen: ["acqua di gio", "221", "armani acqua di gio", "smells like"]
    },
    {
      id: "aroma_222",
      titel: "Smells Like... Allure Homme Sport - No. 222",
      afbeelding: "https://aaroma.co/cdn/shop/files/222M_c.webp?v=1772181716&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-222m",
      variant: 47751567016074,
      prijs: 1495,
      merk: "Chanel Allure Homme Sport",
      merkSleutel: "chanel",
      nummer: "222",
      geslacht: "male",
      geinspireerdDoor: "Chanel Allure Homme Sport",
      zoektermen: ["allure homme sport", "222", "chanel allure homme sport", "smells like"]
    },
    {
      id: "aroma_223",
      titel: "Smells Like... Hugo - No. 223",
      afbeelding: "https://aaroma.co/cdn/shop/files/223M_c.webp?v=1772181624&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-223m",
      variant: 47751558332554,
      prijs: 1495,
      merk: "Hugo Boss Hugo",
      merkSleutel: "hugoboss",
      nummer: "223",
      geslacht: "male",
      geinspireerdDoor: "Hugo Boss Hugo",
      zoektermen: ["hugo", "223", "hugo boss hugo", "smells like"]
    },
    {
      id: "aroma_227",
      titel: "Smells Like... Terre - No. 227",
      afbeelding: "https://aaroma.co/cdn/shop/files/227M_c.webp?v=1772181789&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-227m",
      variant: 47751572127882,
      prijs: 1495,
      merk: "Hermès Terre d'Hermès",
      merkSleutel: "hermes",
      nummer: "227",
      geslacht: "male",
      geinspireerdDoor: "Hermès Terre d'Hermès",
      zoektermen: ["terre", "227", "hermes terre", "smells like"]
    },
    {
      id: "aroma_228",
      titel: "Smells Like... Invictus - No. 228",
      afbeelding: "https://aaroma.co/cdn/shop/files/228M_c.webp?v=1772181814&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-228m",
      variant: 47751573209226,
      prijs: 1495,
      merk: "Paco Rabanne Invictus",
      merkSleutel: "pacorabanne",
      nummer: "228",
      geslacht: "male",
      geinspireerdDoor: "Paco Rabanne Invictus",
      zoektermen: ["invictus", "228", "paco rabanne invictus", "smells like"]
    },
    {
      id: "aroma_232",
      titel: "Smells Like... Fucking Fabulous - No. 232",
      afbeelding: "https://aaroma.co/cdn/shop/files/232M_c.webp?v=1772181908&width=533",
      url: "https://aaroma.co/en/products/232m-tom-ford-fucking-fabulous-unisex-ersatz",
      variant: 47751578058890,
      prijs: 1495,
      merk: "Tom Ford Fucking Fabulous",
      merkSleutel: "tomford",
      nummer: "232",
      geslacht: "unisex",
      geinspireerdDoor: "Tom Ford Fucking Fabulous",
      type: "standard",
      zoektermen: ["fucking fabulous", "232", "tom ford fucking fabulous", "smells like"]
    },
    {
      id: "aroma_234",
      titel: "Smells Like... Bottled - No. 234",
      afbeelding: "https://aaroma.co/cdn/shop/files/234M_c.webp?v=1772181872&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-234m",
      variant: 47751576191114,
      prijs: 1495,
      merk: "Hugo Boss Bottled",
      merkSleutel: "hugoboss",
      nummer: "234",
      geslacht: "male",
      geinspireerdDoor: "Hugo Boss Bottled",
      zoektermen: ["bottled", "234", "hugo boss bottled", "smells like"]
    },
    {
      id: "aroma_242",
      titel: "Smells Like... Emporio He - No. 242",
      afbeelding: "https://aaroma.co/cdn/shop/files/242M_c.webp?v=1772181594&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-293m",
      variant: 47751555973258,
      prijs: 1495,
      merk: "Giorgio Armani Emporio He",
      merkSleutel: "armani",
      nummer: "242",
      geslacht: "male",
      geinspireerdDoor: "Giorgio Armani Emporio He",
      zoektermen: ["emporio he", "242", "armani he", "smells like"]
    },
    {
      id: "aroma_247",
      titel: "Smells Like... Le Male - No. 247",
      afbeelding: "https://aaroma.co/cdn/shop/files/247M_c.webp?v=1772617813&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-247m",
      variant: 47751577272458,
      prijs: 1495,
      merk: "Jean Paul Gaultier Le Male",
      merkSleutel: "jpg",
      nummer: "247",
      geslacht: "male",
      geinspireerdDoor: "Jean Paul Gaultier Le Male",
      zoektermen: ["le male", "247", "jean paul gaultier le male", "smells like"]
    },
    {
      id: "aroma_248",
      titel: "Smells Like... Eros - No. 248",
      afbeelding: "https://aaroma.co/cdn/shop/files/248M_c.webp?v=1772181790&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-248m",
      variant: null,
      prijs: 1495,
      merk: "Versace Eros",
      merkSleutel: "versace",
      nummer: "248",
      geslacht: "male",
      geinspireerdDoor: "Versace Eros",
      zoektermen: ["eros", "248", "versace eros", "smells like"]
    },
    {
      id: "aroma_252",
      titel: "Smells Like... Bleu - No. 252",
      afbeelding: "https://aaroma.co/cdn/shop/files/252M_c.webp?v=1772181829&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-252m",
      variant: 47751574126730,
      prijs: 1495,
      merk: "Chanel Bleu de Chanel",
      merkSleutel: "chanel",
      nummer: "252",
      geslacht: "male",
      geinspireerdDoor: "Chanel Bleu de Chanel",
      zoektermen: ["bleu", "252", "chanel bleu", "smells like"]
    },
    {
      id: "aroma_260",
      titel: "Smells Like... Code - No. 260",
      afbeelding: "https://aaroma.co/cdn/shop/files/260M_c.webp?v=1772181706&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-260m",
      variant: 47751566229642,
      prijs: 1495,
      merk: "Giorgio Armani Code",
      merkSleutel: "armani",
      nummer: "260",
      geslacht: "male",
      geinspireerdDoor: "Giorgio Armani Code",
      zoektermen: ["code", "260", "armani code", "smells like"]
    },
    {
      id: "aroma_270",
      titel: "Smells Like... The Scent - No. 270",
      afbeelding: "https://aaroma.co/cdn/shop/files/270M_c.webp?v=1772181751&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-270m",
      variant: 47751569440906,
      prijs: 1495,
      merk: "Hugo Boss The Scent",
      merkSleutel: "hugoboss",
      nummer: "270",
      geslacht: "male",
      geinspireerdDoor: "Hugo Boss The Scent",
      zoektermen: ["the scent", "270", "hugo boss the scent", "smells like"]
    },
    {
      id: "aroma_275",
      titel: "Smells Like… One Million - No. 275",
      afbeelding: "https://aaroma.co/cdn/shop/files/275M_c.webp?v=1772181901&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-275m",
      variant: 47751577665674,
      prijs: 1495,
      merk: "Paco Rabanne 1 Million",
      merkSleutel: "pacorabanne",
      nummer: "275",
      geslacht: "male",
      geinspireerdDoor: "Paco Rabanne 1 Million",
      zoektermen: ["one million", "275", "paco rabanne 1 million", "smells like"]
    },
    {
      id: "aroma_277",
      titel: "Smells Like... Homme Intense - No. 277",
      afbeelding: "https://aaroma.co/cdn/shop/files/277M_c.webp?v=1772181741&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-277m",
      variant: 47751568654474,
      prijs: 1495,
      merk: "Dior Homme Intense",
      merkSleutel: "dior",
      nummer: "277",
      geslacht: "male",
      geinspireerdDoor: "Dior Homme Intense",
      zoektermen: ["homme intense", "277", "dior homme intense", "smells like"]
    },
    {
      id: "aroma_283",
      titel: "Smells Like... Y - No. 283",
      afbeelding: "https://aaroma.co/cdn/shop/files/283M_c.webp?v=1772181640&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-283m",
      variant: 47751559643274,
      prijs: 1495,
      merk: "Yves Saint Laurent Y",
      merkSleutel: "ysl",
      nummer: "283",
      geslacht: "male",
      geinspireerdDoor: "Yves Saint Laurent Y",
      zoektermen: ["y", "283", "ysl y", "smells like"]
    },
    {
      id: "aroma_287",
      titel: "Smells Like... Oud Wood - No. 287",
      afbeelding: "https://aaroma.co/cdn/shop/files/287M_c.webp?v=1772181882&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-287m",
      variant: 47751576682634,
      prijs: 1495,
      merk: "Tom Ford Oud Wood",
      merkSleutel: "tomford",
      nummer: "287",
      geslacht: "unisex",
      geinspireerdDoor: "Tom Ford Oud Wood",
      type: "standard",
      zoektermen: ["oud wood", "287", "tom ford oud wood", "smells like"]
    },
    {
      id: "aroma_288",
      titel: "Smells Like... Aventus - No. 288",
      afbeelding: "https://aaroma.co/cdn/shop/files/288M_c.webp?v=1772181795&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-288m",
      variant: null,
      prijs: 1495,
      merk: "Creed Aventus",
      merkSleutel: "creed",
      nummer: "288",
      geslacht: "male",
      geinspireerdDoor: "Creed Aventus",
      zoektermen: ["aventus", "288", "creed aventus", "smells like"]
    },
    {
      id: "aroma_305",
      titel: "Smells Like.. Aqva Pour Homme - No. 305",
      afbeelding: "https://aaroma.co/cdn/shop/files/305M_c.webp?v=1772181653&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-305m",
      variant: 47751560691850,
      prijs: 1495,
      merk: "Bvlgari Aqva Pour Homme",
      merkSleutel: "bvlgari",
      nummer: "305",
      geslacht: "male",
      geinspireerdDoor: "Bvlgari Aqva Pour Homme",
      zoektermen: ["aqva", "305", "bvlgari aqva", "smells like"]
    },
    {
      id: "aroma_317",
      titel: "Smells Like… Quiet King - No. 317",
      afbeelding: "https://aaroma.co/cdn/shop/files/317M_c.png?v=1772181514&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-317m",
      variant: 47751548633226,
      prijs: 1495,
      merk: "Quiet King",
      merkSleutel: "quietking",
      nummer: "317",
      geslacht: "male",
      geinspireerdDoor: "Quiet King",
      zoektermen: ["quiet king", "317", "smells like"]
    },
    {
      id: "aroma_318",
      titel: "Smells Like... Stronger With You Intensely - No. 318",
      afbeelding: "https://aaroma.co/cdn/shop/files/318M_c.webp?v=1772181837&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-318m",
      variant: 47751574519946,
      prijs: 1495,
      merk: "Giorgio Armani Stronger With You",
      merkSleutel: "armani",
      nummer: "318",
      geslacht: "male",
      geinspireerdDoor: "Giorgio Armani Stronger With You",
      zoektermen: ["stronger with you", "318", "armani stronger with you", "smells like"]
    },
    {
      id: "aroma_334",
      titel: "Smells Like... One Million Elixir - No. 334",
      afbeelding: "https://aaroma.co/cdn/shop/files/334M_c.webp?v=1772181681&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-334m",
      variant: 47751563051146,
      prijs: 1495,
      merk: "Paco Rabanne 1 Million Elixir",
      merkSleutel: "pacorabanne",
      nummer: "334",
      geslacht: "male",
      geinspireerdDoor: "Paco Rabanne 1 Million Elixir",
      zoektermen: ["one million elixir", "334", "paco rabanne 1 million elixir", "smells like"]
    },
    {
      id: "aroma_338",
      titel: "Smells Like... Sauvage Parfum - No. 338",
      afbeelding: "https://aaroma.co/cdn/shop/files/338M_c.webp?v=1772181698&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-338m",
      variant: 47751564329098,
      prijs: 1495,
      merk: "Dior Sauvage Parfum",
      merkSleutel: "dior",
      nummer: "338",
      geslacht: "male",
      geinspireerdDoor: "Dior Sauvage Parfum",
      zoektermen: ["sauvage parfum", "338", "dior sauvage", "smells like"]
    },
    {
      id: "aroma_349",
      titel: "Smells Like... Ultra Male - No. 349",
      afbeelding: "https://aaroma.co/cdn/shop/files/349M_c.webp?v=1772181758&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-349m",
      variant: 47751570096266,
      prijs: 1495,
      merk: "Jean Paul Gaultier Ultra Male",
      merkSleutel: "jpg",
      nummer: "349",
      geslacht: "male",
      geinspireerdDoor: "Jean Paul Gaultier Ultra Male",
      zoektermen: ["ultra male", "349", "jean paul gaultier ultra male", "smells like"]
    },
    {
      id: "aroma_360",
      titel: "Smells Like... Uomo Born in Roma - No. 360",
      afbeelding: "https://aaroma.co/cdn/shop/files/360M_c.webp?v=1772181778&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-360m",
      variant: 47751571636362,
      prijs: 1495,
      merk: "Valentino Uomo Born in Roma",
      merkSleutel: "valentino",
      nummer: "360",
      geslacht: "male",
      geinspireerdDoor: "Valentino Uomo Born in Roma",
      zoektermen: ["uomo born in roma", "360", "valentino uomo", "smells like"]
    },
    {
      id: "aroma_399",
      titel: "Smells Like... Phantom - No. 399",
      afbeelding: "https://aaroma.co/cdn/shop/files/399M_c.webp?v=1772181689&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-399m",
      variant: 47751563739274,
      prijs: 1495,
      merk: "Paco Rabanne Phantom",
      merkSleutel: "pacorabanne",
      nummer: "399",
      geslacht: "male",
      geinspireerdDoor: "Paco Rabanne Phantom",
      zoektermen: ["phantom", "399", "paco rabanne phantom", "smells like"]
    },
    // ===== VROUWELIJKE PRODUCTEN =====
    {
      id: "aroma_006",
      titel: "Smells Like... Chance - No. 006",
      afbeelding: "https://aaroma.co/cdn/shop/files/006W_c.webp?v=1772181862&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-006w",
      variant: 47751575699594,
      prijs: 1495,
      merk: "Chanel Chance",
      merkSleutel: "chanel",
      nummer: "006",
      geslacht: "female",
      geinspireerdDoor: "Chanel Chance",
      zoektermen: ["chance", "006", "chanel chance", "smells like"]
    },
    {
      id: "aroma_017",
      titel: "Smells Like... Light Blue - No. 017",
      afbeelding: "https://aaroma.co/cdn/shop/files/017W_c.webp?v=1772181912&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-017w",
      variant: 47751578255498,
      prijs: 1495,
      merk: "Dolce & Gabbana Light Blue",
      merkSleutel: "dolcegabbana",
      nummer: "017",
      geslacht: "female",
      geinspireerdDoor: "Dolce & Gabbana Light Blue",
      zoektermen: ["light blue", "017", "dolce gabbana light blue", "smells like"]
    },
    {
      id: "aroma_024",
      titel: "Riecht wie... ÄQUIVALENT - No. 024",
      afbeelding: "https://aaroma.co/cdn/shop/files/024W_c.webp?v=1772181827&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-024w",
      variant: 47751574028426,
      prijs: 1495,
      merk: "Chloé",
      merkSleutel: "chloe",
      nummer: "024",
      geslacht: "female",
      geinspireerdDoor: "Chloé",
      zoektermen: ["chloe", "024", "smells like"]
    },
    {
      id: "aroma_040",
      titel: "Smells Like... Armani Diamonds - No. 040",
      afbeelding: "https://aaroma.co/cdn/shop/files/040Wc.webp?v=1772181636&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-040w",
      variant: 47751559250058,
      prijs: 1495,
      merk: "Giorgio Armani Diamonds",
      merkSleutel: "armani",
      nummer: "040",
      geslacht: "female",
      geinspireerdDoor: "Giorgio Armani Diamonds",
      zoektermen: ["diamonds", "040", "armani diamonds", "smells like"]
    },
    {
      id: "aroma_053",
      titel: "Smells Like... Vanille Fatale - No. 053",
      afbeelding: "https://aaroma.co/cdn/shop/files/053W_c.webp?v=1772181859&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-053w-m",
      variant: 47751575601290,
      prijs: 1495,
      merk: "Tom Ford Vanille Fatale",
      merkSleutel: "tomford",
      nummer: "053",
      geslacht: "female",
      geinspireerdDoor: "Tom Ford Vanille Fatale",
      zoektermen: ["vanille fatale", "053", "tom ford vanille fatale", "smells like"]
    },
    {
      id: "aroma_055",
      titel: "Smells Like... Idole - No. 55",
      afbeelding: "https://aaroma.co/cdn/shop/files/055W_c.webp?v=1772181888&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-055w",
      variant: 47751576977546,
      prijs: 1495,
      merk: "Lancôme Idôle",
      merkSleutel: "lancome",
      nummer: "55",
      geslacht: "female",
      geinspireerdDoor: "Lancôme Idôle",
      zoektermen: ["idole", "55", "lancome idole", "smells like"]
    },
    {
      id: "aroma_060",
      titel: "Smells Like... Boss Woman - No. 60",
      afbeelding: "https://aaroma.co/cdn/shop/files/060W_c.webp?v=1772181810&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-060w",
      variant: 47751573110922,
      prijs: 1495,
      merk: "Hugo Boss Woman",
      merkSleutel: "hugoboss",
      nummer: "60",
      geslacht: "female",
      geinspireerdDoor: "Hugo Boss Woman",
      zoektermen: ["boss woman", "60", "hugo boss woman", "smells like"]
    },
    {
      id: "aroma_067",
      titel: "Smells Like... Mademoiselle Intense - No. 067",
      afbeelding: "https://aaroma.co/cdn/shop/files/067W_c.webp?v=1772181889&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-067w",
      variant: 47751577075850,
      prijs: 1495,
      merk: "Chanel Coco Mademoiselle Intense",
      merkSleutel: "chanel",
      nummer: "067",
      geslacht: "female",
      geinspireerdDoor: "Chanel Coco Mademoiselle Intense",
      zoektermen: ["mademoiselle intense", "067", "chanel coco mademoiselle", "smells like"]
    },
    {
      id: "aroma_074",
      titel: "Smells Like... Flower - No. 074",
      afbeelding: "https://aaroma.co/cdn/shop/files/074W_c.webp?v=1772181744&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-074w",
      variant: 47751568916618,
      prijs: 1495,
      merk: "Kenzo Flower",
      merkSleutel: "kenzo",
      nummer: "074",
      geslacht: "female",
      geinspireerdDoor: "Kenzo Flower",
      zoektermen: ["flower", "074", "kenzo flower", "smells like"]
    },
    {
      id: "aroma_079",
      titel: "Smells Like... Coco - No. 079",
      afbeelding: "https://aaroma.co/cdn/shop/files/079W_c.webp?v=1772181823&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-079w",
      variant: 47751573930122,
      prijs: 1495,
      merk: "Chanel Coco",
      merkSleutel: "chanel",
      nummer: "079",
      geslacht: "female",
      geinspireerdDoor: "Chanel Coco",
      zoektermen: ["coco", "079", "chanel coco", "smells like"]
    },
    {
      id: "aroma_083",
      titel: "Smells Like... Laurent Opium - No. 083",
      afbeelding: "https://aaroma.co/cdn/shop/files/083W_c.webp?v=1772181708&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-083w",
      variant: 47751566393482,
      prijs: 1495,
      merk: "Yves Saint Laurent Opium",
      merkSleutel: "ysl",
      nummer: "083",
      geslacht: "female",
      geinspireerdDoor: "Yves Saint Laurent Opium",
      zoektermen: ["opium", "083", "ysl opium", "smells like"]
    },
    {
      id: "aroma_094",
      titel: "Smells Like... The One - No. 094",
      afbeelding: "https://aaroma.co/cdn/shop/files/094W_c.webp?v=1772181915&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-094w",
      variant: null,
      prijs: 1495,
      merk: "Dolce & Gabbana The One",
      merkSleutel: "dolcegabbana",
      nummer: "094",
      geslacht: "female",
      geinspireerdDoor: "Dolce & Gabbana The One",
      zoektermen: ["the one", "094", "dolce gabbana the one", "smells like"]
    },
    {
      id: "aroma_098",
      titel: "Smells Like... ALIVE - No. 098",
      afbeelding: "https://aaroma.co/cdn/shop/files/098W_c.webp?v=1772181762&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-021w",
      variant: 47751570260106,
      prijs: 1495,
      merk: "Hugo Boss Alive",
      merkSleutel: "hugoboss",
      nummer: "098",
      geslacht: "female",
      geinspireerdDoor: "Hugo Boss Alive",
      zoektermen: ["alive", "098", "hugo boss alive", "smells like"]
    },
    {
      id: "aroma_101",
      titel: "Smells Like... La Vie Est Belle - No. 101",
      afbeelding: "https://aaroma.co/cdn/shop/files/101W_c.webp?v=1772181914&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-101w",
      variant: 47751578353802,
      prijs: 1495,
      merk: "Lancôme La Vie Est Belle",
      merkSleutel: "lancome",
      nummer: "101",
      geslacht: "female",
      geinspireerdDoor: "Lancôme La Vie Est Belle",
      zoektermen: ["la vie est belle", "101", "lancome la vie est belle", "smells like"]
    },
    {
      id: "aroma_106",
      titel: "Smells Like... Eternity - No. 106",
      afbeelding: "https://aaroma.co/cdn/shop/files/106W_c.webp?v=1772709868&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-106w",
      variant: 47751560560778,
      prijs: 1495,
      merk: "Calvin Klein Eternity",
      merkSleutel: "calvinklein",
      nummer: "106",
      geslacht: "female",
      geinspireerdDoor: "Calvin Klein Eternity",
      zoektermen: ["eternity", "106", "calvin klein eternity", "smells like"]
    },
    {
      id: "aroma_113",
      titel: "Smells Like... Angel - No. 113",
      afbeelding: "https://aaroma.co/cdn/shop/files/113W_c.webp?v=1772181695&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-113w",
      variant: 47751564034186,
      prijs: 1495,
      merk: "Mugler Angel",
      merkSleutel: "mugler",
      nummer: "113",
      geslacht: "female",
      geinspireerdDoor: "Mugler Angel",
      zoektermen: ["angel", "113", "mugler angel", "smells like"]
    },
    {
      id: "aroma_129",
      titel: "Smells Like... Si - No. 129",
      afbeelding: "https://aaroma.co/cdn/shop/files/129W_c.webp?v=1772181794&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-129w",
      variant: null,
      prijs: 1495,
      merk: "Giorgio Armani Si",
      merkSleutel: "armani",
      nummer: "129",
      geslacht: "female",
      geinspireerdDoor: "Giorgio Armani Si",
      zoektermen: ["si", "129", "armani si", "smells like"]
    },
    {
      id: "aroma_134",
      titel: "Smells Like... Laurent Manifesto - No. 134",
      afbeelding: "https://aaroma.co/cdn/shop/files/134W_c.webp?v=1772181733&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-134w",
      variant: 47751568195722,
      prijs: 1495,
      merk: "Yves Saint Laurent Manifesto",
      merkSleutel: "ysl",
      nummer: "134",
      geslacht: "female",
      geinspireerdDoor: "Yves Saint Laurent Manifesto",
      zoektermen: ["manifesto", "134", "ysl manifesto", "smells like"]
    },
    {
      id: "aroma_135",
      titel: "Smells Like... Code for Woman - No. 135",
      afbeelding: "https://aaroma.co/cdn/shop/files/23068_366.png?v=1772181772",
      url: "https://aaroma.co/en/products/magic-perfume-no-135w",
      variant: 47751571243146,
      prijs: 1495,
      merk: "Giorgio Armani Code for Women",
      merkSleutel: "armani",
      nummer: "135",
      geslacht: "female",
      geinspireerdDoor: "Giorgio Armani Code for Women",
      zoektermen: ["code for women", "135", "armani code for women", "smells like"]
    },
    {
      id: "aroma_139",
      titel: "Smells Like... Mademoiselle - No. 139",
      afbeelding: "https://aaroma.co/cdn/shop/files/139W_c.webp?v=1772181899&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-139w",
      variant: 47751577567370,
      prijs: 1495,
      merk: "Chanel Coco Mademoiselle",
      merkSleutel: "chanel",
      nummer: "139",
      geslacht: "female",
      geinspireerdDoor: "Chanel Coco Mademoiselle",
      zoektermen: ["mademoiselle", "139", "chanel coco mademoiselle", "smells like"]
    },
    {
      id: "aroma_140",
      titel: "Smells Like... MY WAY - No. 140",
      afbeelding: "https://aaroma.co/cdn/shop/files/140W_c.webp?v=1772181866&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-140w",
      variant: 47751575896202,
      prijs: 1495,
      merk: "Giorgio Armani My Way",
      merkSleutel: "armani",
      nummer: "140",
      geslacht: "female",
      geinspireerdDoor: "Giorgio Armani My Way",
      zoektermen: ["my way", "140", "armani my way", "smells like"]
    },
    {
      id: "aroma_141",
      titel: "Smells Like... Tresor - No. 141",
      afbeelding: "https://aaroma.co/cdn/shop/files/141W_c.webp?v=1772181793&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-141w",
      variant: 47751572324490,
      prijs: 1495,
      merk: "Lancôme Trésor",
      merkSleutel: "lancome",
      nummer: "141",
      geslacht: "female",
      geinspireerdDoor: "Lancôme Trésor",
      zoektermen: ["tresor", "141", "lancome tresor", "smells like"]
    },
    {
      id: "aroma_142",
      titel: "Smells Like... Ange Ou Demon - No. 142",
      afbeelding: "https://aaroma.co/cdn/shop/files/142W_c.webp?v=1772181626&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-142w",
      variant: 47751558496394,
      prijs: 1495,
      merk: "Givenchy Ange Ou Demon",
      merkSleutel: "givenchy",
      nummer: "142",
      geslacht: "female",
      geinspireerdDoor: "Givenchy Ange Ou Demon",
      zoektermen: ["ange ou demon", "142", "givenchy ange ou demon", "smells like"]
    },
    {
      id: "aroma_145",
      titel: "Smells Like... Hypnotic Poison - No. 145",
      afbeelding: "https://aaroma.co/cdn/shop/files/145W_c.webp?v=1772181884&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-145w",
      variant: 47751576780938,
      prijs: 1495,
      merk: "Dior Hypnotic Poison",
      merkSleutel: "dior",
      nummer: "145",
      geslacht: "female",
      geinspireerdDoor: "Dior Hypnotic Poison",
      zoektermen: ["hypnotic poison", "145", "dior hypnotic poison", "smells like"]
    },
    {
      id: "aroma_148",
      titel: "Smells Like... Boss Orange - No. 148",
      afbeelding: "https://aaroma.co/cdn/shop/files/148W_c.webp?v=1772181676&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-148w",
      variant: 47751562461322,
      prijs: 1495,
      merk: "Hugo Boss Boss Orange",
      merkSleutel: "hugoboss",
      nummer: "148",
      geslacht: "female",
      geinspireerdDoor: "Hugo Boss Boss Orange",
      zoektermen: ["boss orange", "148", "hugo boss orange", "smells like"]
    },
    {
      id: "aroma_150",
      titel: "Smells Like... Emporio She - No. 150",
      afbeelding: "https://aaroma.co/cdn/shop/files/150W_c.webp?v=1772181791&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-150w",
      variant: null,
      prijs: 1495,
      merk: "Giorgio Armani Emporio She",
      merkSleutel: "armani",
      nummer: "150",
      geslacht: "female",
      geinspireerdDoor: "Giorgio Armani Emporio She",
      zoektermen: ["emporio she", "150", "armani she", "smells like"]
    },
    {
      id: "aroma_159",
      titel: "Smells Like... J'Adore - No. 159",
      afbeelding: "https://aaroma.co/cdn/shop/files/159W_c.webp?v=1772181892&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-159w",
      variant: 47751577174154,
      prijs: 1495,
      merk: "Dior J'Adore",
      merkSleutel: "dior",
      nummer: "159",
      geslacht: "female",
      geinspireerdDoor: "Dior J'Adore",
      zoektermen: ["jadore", "159", "dior j'adore", "smells like"]
    },
    {
      id: "aroma_163",
      titel: "Smells Like... Rush 2 - No. 163",
      afbeelding: "https://aaroma.co/cdn/shop/files/163W_c.webp?v=1772181781&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-163w",
      variant: 47751571734666,
      prijs: 1495,
      merk: "Rush 2",
      merkSleutel: "rush",
      nummer: "163",
      geslacht: "female",
      geinspireerdDoor: "Rush 2",
      zoektermen: ["rush 2", "163", "smells like"]
    },
    {
      id: "aroma_182",
      titel: "Smells Like... Candy - No. 182",
      afbeelding: "https://aaroma.co/cdn/shop/files/182W_c.webp?v=1772181719&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-182w",
      variant: 47751567278218,
      prijs: 1495,
      merk: "Prada Candy",
      merkSleutel: "prada",
      nummer: "182",
      geslacht: "female",
      geinspireerdDoor: "Prada Candy",
      zoektermen: ["candy", "182", "prada candy", "smells like"]
    },
    {
      id: "aroma_184",
      titel: "Smells Like... The Scent - No. 184",
      afbeelding: "https://aaroma.co/cdn/shop/files/184W_c.webp?v=1772181700&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-184w",
      variant: 47751565836426,
      prijs: 1495,
      merk: "Hugo Boss The Scent",
      merkSleutel: "hugoboss",
      nummer: "184",
      geslacht: "female",
      geinspireerdDoor: "Hugo Boss The Scent",
      zoektermen: ["the scent", "184", "hugo boss the scent", "smells like"]
    },
    {
      id: "aroma_192",
      titel: "Smells Like... SCANDAL - No. 192",
      afbeelding: "https://aaroma.co/cdn/shop/files/192W_c.webp?v=1772181905&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-192w",
      variant: 47751577862282,
      prijs: 1495,
      merk: "Jean Paul Gaultier Scandal",
      merkSleutel: "jpg",
      nummer: "192",
      geslacht: "female",
      geinspireerdDoor: "Jean Paul Gaultier Scandal",
      zoektermen: ["scandal", "192", "jean paul gaultier scandal", "smells like"]
    },
    {
      id: "aroma_193",
      titel: "Smells Like... Tobacco Vanille - No. 193",
      afbeelding: "https://aaroma.co/cdn/shop/files/193W_c.webp?v=1772181842&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-193w",
      variant: 47751574814858,
      prijs: 1495,
      merk: "Tom Ford Tobacco Vanille",
      merkSleutel: "tomford",
      nummer: "193",
      geslacht: "unisex",
      geinspireerdDoor: "Tom Ford Tobacco Vanille",
      type: "standard",
      zoektermen: ["tobacco vanille", "193", "tom ford tobacco vanille", "smells like"]
    },
    {
      id: "aroma_196",
      titel: "Smells Like... Miss Dior Le Parfum - No. 196",
      afbeelding: "https://aaroma.co/cdn/shop/files/196W_c.webp?v=1772181880&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-196w",
      variant: 47751576584330,
      prijs: 1495,
      merk: "Dior Miss Dior Le Parfum",
      merkSleutel: "dior",
      nummer: "196",
      geslacht: "female",
      geinspireerdDoor: "Dior Miss Dior Le Parfum",
      zoektermen: ["miss dior", "196", "dior miss dior", "smells like"]
    },
    {
      id: "aroma_211",
      titel: "Smells Like... Joop Homme - No. 211",
      afbeelding: "https://aaroma.co/cdn/shop/files/211M_c.webp?v=1772181725&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-211m",
      variant: 47751567638666,
      prijs: 1495,
      merk: "Joop! Homme",
      merkSleutel: "joop",
      nummer: "211",
      geslacht: "male",
      geinspireerdDoor: "Joop! Homme",
      zoektermen: ["joop", "211", "joop homme", "smells like"]
    },
    {
      id: "aroma_404",
      titel: "Smells Like... Very Good Girl - No. 404",
      afbeelding: "https://aaroma.co/cdn/shop/files/404W_c.webp?v=1772181693&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-404w",
      variant: 47751563870346,
      prijs: 1495,
      merk: "Carolina Herrera Very Good Girl",
      merkSleutel: "carolinaherrera",
      nummer: "404",
      geslacht: "female",
      geinspireerdDoor: "Carolina Herrera Very Good Girl",
      zoektermen: ["very good girl", "404", "carolina herrera very good girl", "smells like"]
    },
    {
      id: "aroma_412",
      titel: "Smells Like... La Belle - No. 412",
      afbeelding: "https://aaroma.co/cdn/shop/files/412W_c.webp?v=1772181853&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-412w",
      variant: 47751575306378,
      prijs: 1495,
      merk: "Jean Paul Gaultier La Belle",
      merkSleutel: "jpg",
      nummer: "412",
      geslacht: "female",
      geinspireerdDoor: "Jean Paul Gaultier La Belle",
      zoektermen: ["la belle", "412", "jean paul gaultier la belle", "smells like"]
    },
    {
      id: "aroma_434",
      titel: "Smells Like... Cherry Smoke - No. 434",
      afbeelding: "https://aaroma.co/cdn/shop/files/434W_c.webp?v=1772181602&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-434w",
      variant: 47751556497546,
      prijs: 1495,
      merk: "Tom Ford Cherry Smoke",
      merkSleutel: "tomford",
      nummer: "434",
      geslacht: "unisex",
      geinspireerdDoor: "Tom Ford Cherry Smoke",
      type: "standard",
      zoektermen: ["cherry smoke", "434", "tom ford cherry smoke", "smells like"]
    },
    {
      id: "aroma_437",
      titel: "Smells Like... Paradoxe - No. 437",
      afbeelding: "https://aaroma.co/cdn/shop/files/437W_c.webp?v=1772181829&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-437w",
      variant: null,
      prijs: 1495,
      merk: "Prada Paradoxe",
      merkSleutel: "prada",
      nummer: "437",
      geslacht: "female",
      geinspireerdDoor: "Prada Paradoxe",
      zoektermen: ["paradoxe", "437", "prada paradoxe", "smells like"]
    },
    {
      id: "aroma_438",
      titel: "Smells Like... Forbidden Fruit EXTRACT",
      afbeelding: "https://aaroma.co/cdn/shop/files/forbidden_fruit_extract_clean_1.png?v=1762238776",
      url: "https://aaroma.co/en/products/forbidden-fruit-extract?_pos=1&_psq=Forbidden+Fruit+EXTRACT&_ss=e&_v=1.0",
      variant: 47254409838730,
      prijs: 3595,
      merk: "Tom Ford Forbidden Fruit",
      merkSleutel: "tomford",
      nummer: "438",
      geslacht: "unisex",
      geinspireerdDoor: "Tom Ford Lost Cherry",
      type: "standard",
      zoektermen: ["forbidden fruit", "lost cherry", "extract", "438", "tom ford"]
    },
    {
      id: "aroma_442",
      titel: "Smells Like... Classique Essence de Parfum - No. 442",
      afbeelding: "https://aaroma.co/cdn/shop/files/442W_c.webp?v=1772181818&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-442w",
      variant: 47751573635210,
      prijs: 1495,
      merk: "Jean Paul Gaultier Classique",
      merkSleutel: "jpg",
      nummer: "442",
      geslacht: "female",
      geinspireerdDoor: "Jean Paul Gaultier Classique",
      zoektermen: ["classique", "442", "jean paul gaultier classique", "smells like"]
    },
    {
      id: "aroma_461",
      titel: "Smells Like... Good Girl - No. 461",
      afbeelding: "https://aaroma.co/cdn/shop/files/461W_c.webp?v=1772181816&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-461w",
      variant: null,
      prijs: 1495,
      merk: "Carolina Herrera Good Girl",
      merkSleutel: "carolinaherrera",
      nummer: "461",
      geslacht: "female",
      geinspireerdDoor: "Carolina Herrera Good Girl",
      zoektermen: ["good girl", "461", "carolina herrera good girl", "smells like"]
    },
    {
      id: "aroma_466",
      titel: "Smells Like... Baccarat Rouge - No. 466",
      afbeelding: "https://aaroma.co/cdn/shop/files/466W_c.webp?v=1772181812&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-466w",
      variant: null,
      prijs: 1495,
      merk: "Maison Francis Kurkdjian Baccarat Rouge",
      merkSleutel: "mfk",
      nummer: "466",
      geslacht: "female",
      geinspireerdDoor: "Maison Francis Kurkdjian Baccarat Rouge",
      zoektermen: ["baccarat", "466", "mfk baccarat", "smells like"]
    },
    {
      id: "aroma_469",
      titel: "Smells Like... Born in Roma - No. 469",
      afbeelding: "https://aaroma.co/cdn/shop/files/469W_c.webp?v=1772181805&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-469w",
      variant: null,
      prijs: 1495,
      merk: "Valentino Born in Roma",
      merkSleutel: "valentino",
      nummer: "469",
      geslacht: "female",
      geinspireerdDoor: "Valentino Born in Roma",
      zoektermen: ["born in roma", "469", "valentino born in roma", "smells like"]
    },
    {
      id: "aroma_474",
      titel: "Smells Like... Ombre Leather - No. 474",
      afbeelding: "https://aaroma.co/cdn/shop/files/474W_c.webp?v=1772181801&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-474w",
      variant: null,
      prijs: 1495,
      merk: "Tom Ford Ombre Leather",
      merkSleutel: "tomford",
      nummer: "474",
      geslacht: "female",
      geinspireerdDoor: "Tom Ford Ombre Leather",
      zoektermen: ["ombre leather", "474", "tom ford ombre leather", "smells like"]
    },
    {
      id: "aroma_498",
      titel: "Smells Like... Fame - No. 498",
      afbeelding: "https://aaroma.co/cdn/shop/files/498W_c.webp?v=1772181877&width=533",
      url: "https://aaroma.co/en/products/magic-perfume-no-498w",
      variant: 47751576387722,
      prijs: 1495,
      merk: "Paco Rabanne Fame",
      merkSleutel: "pacorabanne",
      nummer: "498",
      geslacht: "female",
      geinspireerdDoor: "Paco Rabanne Fame",
      zoektermen: ["fame", "498", "paco rabanne fame", "smells like"]
    },
    {
      id: "apple_ember_30m",
      titel: "Apple Ember - 30M",
      afbeelding: "https://cdn.shopify.com/s/files/1/0610/1073/9338/files/Apple_Ember_Ingredients.png?v=1760260208&width=533",
      url: "https://aaroma.co/en/products/apple-ember?variant=47152007872650",
      variant: 47152007872650,
      prijs: 3595,
      merk: "Yves Saint Laurent Y",
      merkSleutel: "ysl",
      nummer: "apple_ember",
      geslacht: "male",
      geinspireerdDoor: "Yves Saint Laurent Y",
      type: "premium",
      zoektermen: ["apple ember", "yves saint laurent y", "ysl y", "apple", "ember", "30ml"]
    },
    {
      id: "royal_summit_elixir",
      titel: "Royal Summit ELIXIR - 30ML",
      afbeelding: "https://cdn.shopify.com/s/files/1/0610/1073/9338/files/royal_summit_elixir_clean.png?v=1762249422&width=533",
      url: "https://aaroma.co/en/products/royal-summit-elixir?variant=47255558094986",
      variant: 47255558094986,
      prijs: 3595,
      merk: "Creed Aventus",
      merkSleutel: "creed",
      nummer: "royal_summit",
      geslacht: "male",
      geinspireerdDoor: "Creed Aventus",
      type: "premium",
      zoektermen: ["royal summit", "elixir", "creed aventus", "aventus", "pineapple", "premium"]
    },
    {
      id: "aroma_501",
      titel: "Dark Mystique COLLECTION",
      afbeelding: "https://aaroma.co/cdn/shop/files/dark_mystique_collection_clean.png?v=1762249750",
      url: "https://aaroma.co/en/products/dark-mystique-collection?_pos=3&_sid=87cb2eeb4&_ss=r",
      variant: 47255562616970,
      prijs: 3595,
      merk: "Dark Mystique",
      merkSleutel: "darkmystique",
      nummer: "501",
      geslacht: "unisex",
      geinspireerdDoor: "Dark Mystique",
      zoektermen: ["dark mystique", "collection", "501", "dark"]
    },
    // ===== PREMIUM TOM FORD =====
    {
      id: "tomford_premium_smoky_embrace",
      titel: "Smoky Embrace ARTISAN",
      afbeelding: "https://aaroma.co/cdn/shop/files/premium_smoky_embrace.webp",
      url: "https://aaroma.co/en/products/premium-smoky-embrace-artisan",
      variant: 47253681569930,
      prijs: 4795,
      merk: "Tom Ford Smoky Embrace",
      merkSleutel: "tomford",
      nummer: "premium_193",
      geslacht: "unisex",
      geinspireerdDoor: "Tom Ford Tobacco Vanille",
      type: "premium",
      zoektermen: ["smoky embrace", "artisan", "premium", "tom ford"]
    },
    {
      id: "tomford_premium_shadow_walker",
      titel: "Shadow Walker MASTER",
      afbeelding: "https://aaroma.co/cdn/shop/files/premium_shadow_walker.webp",
      url: "https://aaroma.co/en/products/premium-shadow-walker-master",
      variant: 47254458040458,
      prijs: 4795,
      merk: "Tom Ford Shadow Walker",
      merkSleutel: "tomford",
      nummer: "premium_286",
      geslacht: "unisex",
      geinspireerdDoor: "Tom Ford Ombre Nomade",
      type: "premium",
      zoektermen: ["shadow walker", "master", "premium", "tom ford"]
    },
    {
      id: "tomford_premium_forbidden_fruit",
      titel: "Forbidden Fruit EXTRACT",
      afbeelding: "https://aaroma.co/cdn/shop/files/forbidden_fruit_extract_clean_1.png?v=1762238776",
      url: "https://aaroma.co/en/products/forbidden-fruit-extract?_pos=1&_psq=Forbidden+Fruit+EXTRACT&_ss=e&_v=1.0",
      variant: 47254409838730,
      prijs: 4795,
      merk: "Tom Ford Forbidden Fruit",
      merkSleutel: "tomford",
      nummer: "premium_438",
      geslacht: "unisex",
      geinspireerdDoor: "Tom Ford Lost Cherry",
      type: "premium",
      zoektermen: ["forbidden fruit", "extract", "premium", "tom ford"]
    },
    {
      id: "tomford_premium_desert_throne",
      titel: "Desert Throne ABSOLUE",
      afbeelding: "https://aaroma.co/cdn/shop/files/desert_throne_absolue_clean_1.png?crop=center&height=100&v=1762238483&width=100",
      url: "https://aaroma.co/en/products/desert-throne-absolue?_pos=1&_psq=Desert+Throne+ABSOLUE&_ss=e&_v=1.0",
      variant: 47254248030346,
      prijs: 3595,
      merk: "Tom Ford Desert Throne",
      merkSleutel: "tomford",
      nummer: "premium_287",
      geslacht: "unisex",
      geinspireerdDoor: "Tom Ford Oud Wood",
      type: "premium",
      zoektermen: ["desert throne", "absolue", "premium", "tom ford"]
    },
    {
      id: "tomford_premium_leather_legacy",
      titel: "Leather Legacy PARFUM",
      afbeelding: "https://aaroma.co/cdn/shop/files/leather_legacy_parfum_clean_1.png?crop=center&height=100&v=1762233984&width=100",
      url: "https://aaroma.co/en/products/leather-legacy-parfum?_pos=1&_sid=b32d07b79&_ss=r",
      variant: 47253717745802,
      prijs: 3595,
      merk: "Tom Ford Leather Legacy",
      merkSleutel: "tomford",
      nummer: "premium_474",
      geslacht: "unisex",
      geinspireerdDoor: "Tom Ford Ombre Leather",
      type: "premium",
      zoektermen: ["leather legacy", "parfum", "premium", "tom ford"]
    }
  ];

  // ===== HARDCODED AANBEVELINGEN "MISCHIEN VIND JE DIT OOK LEUK" =====
  const hardcodedAanbevelingen = {
    // DIOR
    '206': '277',  // Fahrenheit → Homme Intense
    '277': '287',  // Homme Intense → Oud Wood
    '287': '232',  // Oud Wood → Fucking Fabulous
    '232': '193',  // Fucking Fabulous → Tobacco Vanille
    '193': '053',  // Tobacco Vanille → Vanille Fatale
    '053': '434',  // Vanille Fatale → Cherry Smoke
    '434': 'premium_438',  // Cherry Smoke → Forbidden Fruit (Premium)
    '438': 'premium_474',  // Forbidden Fruit → Leather Legacy (Premium)
    '474': '287',  // Ombre Leather → Oud Wood
    
    // Armani
    '221': '260',  // Acqua Di Gio → Code
    '260': '318',  // Code → Stronger With You
    '318': '140',  // Stronger With You → My Way
    '140': '135',  // My Way → Code for Women
    '135': '040',  // Code for Women → Diamonds
    '040': '260',  // Diamonds → Code
    '242': '221',  // Emporio He → Acqua Di Gio
    
    // Chanel
    '252': '222',  // Bleu → Allure Homme Sport
    '222': '252',  // Allure Homme Sport → Bleu de Chanel
    '067': '139',  // Mademoiselle Intense → Mademoiselle
    '139': '006',  // Mademoiselle → Chance
    '006': '079',  // Chance → Coco
    '079': '067',  // Coco → Mademoiselle Intense
    
    // Hugo Boss
    '234': '223',  // Bottled → Hugo
    '223': '270',  // Hugo → The Scent
    '270': '184',  // The Scent (M) → The Scent (V)
    '184': '098',  // The Scent (V) → Alive
    '098': '060',  // Alive → Boss Woman
    '060': '148',  // Boss Woman → Boss Orange
    '148': '234',  // Boss Orange → Bottled
    
    // YSL
    '283': 'apple_ember',  // Y → Apple Ember
    '132': '501',  // Black Opium → Dark Mystique COLLECTION
    '501': 'premium_438',  // Dark Mystique → Forbidden Fruit (Premium)
    '083': '134',  // Opium → Manifesto
    '134': '283',  // Manifesto → Y
    
    // Paco Rabanne
    '275': '334',  // 1 Million → 1 Million Elixir
    '334': '228',  // 1 Million Elixir → Invictus
    '228': '399',  // Invictus → Phantom
    '399': '498',  // Phantom → Fame
    '498': '023',  // Fame → Lady Million
    '023': '275',  // Lady Million → 1 Million
    
    // Jean Paul Gaultier
    '247': '349',  // Le Male → Ultra Male
    '349': '192',  // Ultra Male → Scandal
    '192': '412',  // Scandal → La Belle
    '412': '442',  // La Belle → Classique
    '442': '247',  // Classique → Le Male
    
    // Lancôme
    '101': '141',  // La Vie Est Belle → Trésor
    '141': '055',  // Trésor → Idôle
    '055': '101',  // Idôle → La Vie Est Belle
    
    // Calvin Klein
    '215': '106',  // Eternity Men → Eternity Women
    '106': '209',  // Eternity Women → CK One
    '209': '215',  // CK One → Eternity Men
    
    // Carolina Herrera
    '461': '404',  // Good Girl → Very Good Girl
    '404': '461',  // Very Good Girl → Good Girl
    
    // Enkele producten met aanbevelingen
    '317': '287',  // Quiet King → Oud Wood
    '288': '252',  // Aventus → Bleu
    '248': '275',  // Eros → 1 Million
    '227': '221',  // Terre → Acqua Di Gio
    '305': '200',  // Aqva → Cool Water
    '200': '305',  // Cool Water → Aqva
    '211': '247',  // Joop Homme → Le Male
    '074': '024',  // Flower → Chloé
    '024': '141',  // Chloé → Trésor
    '163': '074',  // Rush 2 → Flower
    '094': '017',  // The One → Light Blue
    '017': '094',  // Light Blue → The One
    '142': '132',  // Ange Ou Demon → Black Opium
    '466': 'premium_438',  // Baccarat → Forbidden Fruit (Premium)
    '469': '360',  // Born in Roma (V) → Uomo Born in Roma (M)
    '360': '469',  // Uomo Born in Roma (M) → Born in Roma (V)
    
    // Premium Tom Ford Collections
    'premium_193': 'premium_286',  // Smoky Embrace → Shadow Walker
    'premium_286': 'premium_438',  // Shadow Walker → Forbidden Fruit
    'premium_438': 'premium_286',  // Forbidden Fruit → Shadow Walker
    'premium_474': 'premium_287',  // Leather Legacy → Desert Throne
    'premium_287': 'premium_193'   // Desert Throne → Smoky Embrace
  };

  // ===== VARIABELEN =====
  let huidigeWeergave = 'zoeken';
  let huidigeZoekopdracht = '';
  let zoekTimer = null;

  // Elementen ophalen
  const zoekInput = document.getElementById('fcSearchInput');
  const wisZoek = document.getElementById('fcClearSearch');
  const stappen = document.getElementById('fcSteps');
  const inhoud = document.getElementById('fcContent');
  const zoekPopup = document.getElementById('fcSearchPopup');
  const stickyKnop = document.getElementById('fcStickyButton');
  
  // Aanbiedingselementen
  const aanbiedingBanner = document.getElementById('fcOfferBanner');
  const aanbiedingStatus = document.getElementById('fcOfferStatus');
  const aanbiedingVoortgang = document.getElementById('fcOfferProgress');
  const aanbiedingBericht = document.getElementById('fcOfferMessage');
  const aanbiedingSubtekst = document.getElementById('fcOfferSubtext');

  // ===== AANBEVOLEN PRODUCT VINDEN =====
  function getAanbevolenProduct(product) {
    if (!product || !product.nummer) return null;
    
    console.log('Zoek aanbeveling voor productnummer:', product.nummer);
    
    // Check for hardcoded recommendation first
    const hardcodedRec = hardcodedAanbevelingen[product.nummer];
    if (hardcodedRec) {
      console.log('Gevonden hardcoded aanbeveling:', hardcodedRec);
      const aanbevolen = hardcodedProducten.find(p => p.nummer === hardcodedRec);
      if (aanbevolen) {
        console.log('Aanbevolen product:', aanbevolen.titel);
        return aanbevolen;
      }
    }
    
    // Fallback: ander product van hetzelfde merk met hetzelfde geslacht
    const zelfdeMerk = hardcodedProducten.find(p => 
      p.merkSleutel === product.merkSleutel && 
      p.id !== product.id &&
      p.geslacht === product.geslacht
    );
    
    if (zelfdeMerk) {
      console.log('Gevonden zelfde-merk aanbeveling:', zelfdeMerk.titel);
      return zelfdeMerk;
    }
    
    console.log('Geen aanbeveling gevonden');
    return null;
  }

  // ===== GET RECOMMENDATION FROM HARDCODED PERFUME MAPPINGS =====
  function getAanbevolenParfum(parfum) {
    if (!parfum || !parfum.id) return null;
    
    // Find all products that are inspired by this perfume
    const geinspireeerdProducts = hardcodedProducten.filter(p => 
      p.geinspireerdDoor === parfum.naam || 
      p.geinspireerdDoor === parfum.merk
    );
    
    if (geinspireeerdProducts.length > 0) {
      // Recommend a related product from the same brand if available
      const sameBrand = hardcodedProducten.find(p =>
        p.merkSleutel === (parfum.id.split('_')[0] || '') &&
        p.id !== geinspireeerdProducts[0].id
      );
      return sameBrand || geinspireeerdProducts[0];
    }
    
    return null;
  }

  // ===== TEXT NORMALISEREN (voor zoeken met Nederlandse karakters) =====
  function normaliseerTekst(tekst) {
    if (!tekst) return '';
    return tekst.toLowerCase()
      .replace(/[éèë]/g, 'e')
      .replace(/[áàä]/g, 'a')
      .replace(/[íìï]/g, 'i')
      .replace(/[óòö]/g, 'o')
      .replace(/[úùü]/g, 'u')
      .replace(/[^a-z0-9]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // ===== ZOEKEN IN ONZE PRODUCTEN =====
  function zoekProducten(query) {
    if (!query || query.length < 1) return [];
    
    const genormaliseerdeQuery = normaliseerTekst(query);
    const queryZonderSpaties = genormaliseerdeQuery.replace(/\s+/g, '');
    const resultaten = [];
    const toegevoegdeIds = new Set();
    
    hardcodedProducten.forEach(product => {
      let besteScore = 0;
      const zoekTekst = normaliseerTekst(product.titel);
      const zoekTekstZonderSpaties = zoekTekst.replace(/\s+/g, '');
      
      // Exacte match (hoogste score)
      if (zoekTekst === genormaliseerdeQuery || zoekTekstZonderSpaties === queryZonderSpaties) {
        besteScore = 100;
      }
      // Bevat match
      else if (zoekTekst.includes(genormaliseerdeQuery) || zoekTekstZonderSpaties.includes(queryZonderSpaties)) {
        besteScore = 90;
      }
      // Productnummer match
      else if (product.nummer && product.nummer === query) {
        besteScore = 95;
      }
      // Zoeken in zoektermen
      else if (product.zoektermen) {
        for (const term of product.zoektermen) {
          const genormaliseerdeTerm = normaliseerTekst(term);
          if (genormaliseerdeTerm.includes(genormaliseerdeQuery) || genormaliseerdeQuery.includes(genormaliseerdeTerm)) {
            besteScore = Math.max(besteScore, 85);
          }
        }
      }
      // Merk match
      else if (product.merk) {
        const genormaliseerdMerk = normaliseerTekst(product.merk);
        if (genormaliseerdMerk.includes(genormaliseerdeQuery) || genormaliseerdeQuery.includes(genormaliseerdMerk)) {
          besteScore = Math.max(besteScore, 80);
        }
      }
      
      if (besteScore > 50 && !toegevoegdeIds.has(product.id)) {
        resultaten.push({ product, score: besteScore });
        toegevoegdeIds.add(product.id);
      }
    });
    
    return resultaten.sort((a, b) => b.score - a.score);
  }

  // ===== ZOEKEN IN ECHTE PARFUMS =====
  function zoekEchteParfums(query) {
    if (!query || query.length < 1) return [];
    
    // Use allPerfumes array built by combineCatalogs
    if (!window.allPerfumes || window.allPerfumes.length === 0) {
      console.warn('allPerfumes array not built yet');
      return [];
    }
    
    const queryLower = query.toLowerCase().trim();
    const queryNormalized = normaliseerTekst(queryLower);
    const resultaten = [];
    
    window.allPerfumes.forEach(parfum => {
      const parfumNaam = normaliseerTekst(parfum.naam);
      const parfumMerk = normaliseerTekst(parfum.merk);
      
      let score = 0;
      let matchType = '';
      
      // Exact brand match (highest priority)
      if (parfumMerk === queryNormalized) {
        score = 1000;
        matchType = 'exact-brand';
      }
      // Brand starts with query
      else if (parfumMerk.startsWith(queryNormalized)) {
        score = 900;
        matchType = 'brand-starts-with';
      }
      // Brand contains query as word
      else if (parfumMerk.includes(' ' + queryNormalized + ' ') || 
               parfumMerk.startsWith(queryNormalized + ' ') || 
               parfumMerk.endsWith(' ' + queryNormalized)) {
        score = 850;
        matchType = 'brand-word-match';
      }
      // Exact name match
      else if (parfumNaam === queryNormalized) {
        score = 700;
        matchType = 'exact-name';
      }
      // Name starts with query
      else if (parfumNaam.startsWith(queryNormalized)) {
        score = 600;
        matchType = 'name-starts-with';
      }
      // Name contains query as word
      else if (parfumNaam.includes(' ' + queryNormalized + ' ') || 
               parfumNaam.startsWith(queryNormalized + ' ') || 
               parfumNaam.endsWith(' ' + queryNormalized)) {
        score = 500;
        matchType = 'name-word-match';
      }
      // Brand contains query
      else if (parfumMerk.includes(queryNormalized)) {
        score = 800;
        matchType = 'brand-contains';
      }
      // Name contains query
      else if (parfumNaam.includes(queryNormalized)) {
        score = 400;
        matchType = 'name-contains';
      }
      // Product number match
      else if (parfum.productnummers && parfum.productnummers.some(num => num === query)) {
        score = 950;
        matchType = 'product-number';
      }
      
      if (score > 0) {
        resultaten.push({ parfum, score, matchType });
      }
    });
    
    return resultaten.sort((a, b) => b.score - a.score);
  }

  // ===== PRODUCTKAART RENDEREN =====
  function renderProductKaart(product, badge) {
    const prijsFormatted = '€' + (product.prijs / 100).toFixed(2).replace('.', ',');
    
    return `
      <div class="fc-product-card">
        <div class="fc-badge">${badge}</div>
        <div class="fc-product-inner">
          <img class="fc-product-image" src="${product.afbeelding}" alt="${product.titel}" loading="lazy">
          <div class="fc-product-title">${product.titel}</div>
          <div class="fc-product-price">${prijsFormatted}</div>
          <button class="fc-add-to-cart" onclick="event.stopPropagation(); window.fcVoegToeAanWinkelwagen(${product.variant || 0}, event)">Add</button>
          <div>
            <span class="fc-view-link" onclick="event.stopPropagation(); window.fcBekijkDetails('${product.url}')">View details</span>
          </div>
        </div>
      </div>
    `;
  }

  // ===== RENDER CATALOG PERFUME CARD =====

  // ===== DETAILS VAN ECHTE PARFUM TONEN =====
  window.fcToonParfumDetails = function(parfumId) {
    // Find perfume in catalog by searching through all brands
    let parfum = null;
    if (window.NederlandseParfumCatalogus) {
      for (let merkKey in window.NederlandseParfumCatalogus) {
        if (merkKey.startsWith('_')) continue;
        const parfums = window.NederlandseParfumCatalogus[merkKey];
        if (Array.isArray(parfums)) {
          parfum = parfums.find(p => p.id === parfumId);
          if (parfum) break;
        }
      }
    }
    
    if (!parfum) return;
    
    huidigeWeergave = 'detail';
    stappen.style.display = 'none';
    
    // Zoek bijpassend product uit onze collectie
    let onsProduct = null;
    
    if (parfum.productnummers && parfum.productnummers.length > 0) {
      for (const num of parfum.productnummers) {
        onsProduct = hardcodedProducten.find(p => p.nummer === num.toString());
        if (onsProduct) break;
      }
    }
    
    let html = `<button class="fc-back-btn" onclick="window.fcGaTerug()">Back</button>`;
    
    if (onsProduct) {
      html += `<div class="fc-subsection-title">Our version</div>`;
      html += '<div class="fc-grid-2col">';
      html += renderProductKaart(onsProduct, 'Smells like...');
      
      // Show hardcoded product recommendation from our collection
      const aanbevolProduct = getAanbevolenProduct(onsProduct);
      if (aanbevolProduct) {
        html += renderProductKaart(aanbevolProduct, 'You might also like this');
      } else {
        html += '<div class="fc-product-card" style="visibility: hidden;"></div>';
      }
      html += '</div>';
    } else {
      html += `<div class="fc-subsection-title">No matching product found</div>`;
      html += '<div class="fc-grid-2col"><div class="fc-product-card" style="visibility: hidden;"></div><div class="fc-product-card" style="visibility: hidden;"></div></div>';
    }
    
    // Toon details van de echte parfum
    html += `
      <div class="fc-detailed-view">
        <div class="fc-detailed-header">
          <img class="fc-detailed-image" src="${parfum.afbeelding}" alt="${parfum.naam}">
          <div>
            <div class="fc-detailed-name">${parfum.naam}</div>
            <div class="fc-detailed-brand">${parfum.merk}</div>
            <div class="fc-detailed-meta">${parfum.jaar || ''} | ${parfum.geslacht === 'Male' ? 'Male' : parfum.geslacht === 'Female' ? 'Female' : 'Unisex'}</div>
          </div>
        </div>
        
        <div class="fc-notes-section">
          ${parfum.topnoten ? `
            <div class="fc-note-category">
              <h4>TOP NOTES</h4>
              <div class="fc-note-tags">
                ${parfum.topnoten.map(noot => `<span class="fc-note-tag">${noot}</span>`).join('')}
              </div>
            </div>
          ` : ''}
          
          ${parfum.hartnoten ? `
            <div class="fc-note-category">
              <h4>HEART NOTES</h4>
              <div class="fc-note-tags">
                ${parfum.hartnoten.map(noot => `<span class="fc-note-tag">${noot}</span>`).join('')}
              </div>
            </div>
          ` : ''}
          
          ${parfum.basisnoten ? `
            <div class="fc-note-category">
              <h4>BASE NOTES</h4>
              <div class="fc-note-tags">
                ${parfum.basisnoten.map(noot => `<span class="fc-note-tag">${noot}</span>`).join('')}
              </div>
            </div>
          ` : ''}
        </div>
        
        <div class="fc-description">
          ${parfum.beschrijving}
        </div>
      </div>
    `;
    
    inhoud.innerHTML = html;
  };

  // ===== ZOEKFUNCTIE UITVOEREN =====
  function voerZoekopdrachtUit(query) {
    huidigeZoekopdracht = query;
    inhoud.innerHTML = '<div class="fc-loading">Searching...</div>';
    
    setTimeout(() => {
      // Zoeken in hardcoded producten (onze collection)
      const hardcodedResultaten = zoekProducten(query);
      
      // Zoeken in echte parfums uit catalogus
      const echteParfumsResultaten = zoekEchteParfums(query);
      
      let html = '';
      
      // ===== EERST: Toon echte parfums uit catalogus =====
      if (echteParfumsResultaten.length > 0) {
        // Group by brand
        const parfumsPerMerk = {};
        echteParfumsResultaten.forEach(resultaat => {
          const merk = resultaat.parfum.merk;
          if (!parfumsPerMerk[merk]) {
            parfumsPerMerk[merk] = [];
          }
          parfumsPerMerk[merk].push(resultaat);
        });
        
        // Display each brand and its perfumes
        for (const [merk, parfums] of Object.entries(parfumsPerMerk)) {
          html += `<div class="fc-section-title">✨ ${merk.toUpperCase()} (${parfums.length})</div>`;
          
          parfums.slice(0, 8).forEach(resultaat => {
            const p = resultaat.parfum;
            html += `
              <div class="fc-real-perfume-item" onclick="window.fcToonParfumDetails('${p.id}')">
                <img class="fc-real-perfume-image" src="${p.afbeelding}" alt="${p.naam}" loading="lazy">
                <div class="fc-real-perfume-info">
                  <div class="fc-real-perfume-name">${p.naam}</div>
                  <div class="fc-real-perfume-brand">${p.merk}</div>
                  <div class="fc-real-perfume-year">${p.jaar || ''}</div>
                </div>
              </div>
            `;
          });
        }
      }
      
      // ===== TWEEDE: Toon onze producten =====
      if (hardcodedResultaten.length > 0) {
        html += `<div class="fc-section-title">🛍️ Our collection</div>`;
        
        hardcodedResultaten.slice(0, 8).forEach(match => {
          const p = match.product;
          const prijsFormatted = '€' + (p.prijs / 100).toFixed(2).replace('.', ',');
          
          html += `
            <div class="fc-real-perfume-item" onclick="window.fcBekijkDetails('${p.url}')">
              <img class="fc-real-perfume-image" src="${p.afbeelding}" alt="${p.titel}" loading="lazy">
              <div class="fc-real-perfume-info">
                <div class="fc-real-perfume-name">${p.titel}</div>
                <div class="fc-real-perfume-year">${prijsFormatted}</div>
              </div>
            </div>
          `;
        });
      }
      
      if (echteParfumsResultaten.length === 0 && hardcodedResultaten.length === 0) {
        html = '<div class="fc-no-results">No products found for "' + query + '"</div>';
      }
      
      inhoud.innerHTML = html;
    }, 300);
  }

  // ===== ZOEKHANDELING =====
  function handelZoekopdracht() {
    const query = zoekInput.value.trim();
    
    if (query.length < 1) {
      if (huidigeWeergave !== 'detail') {
        stappen.style.display = 'block';
        inhoud.innerHTML = '';
      }
      return;
    }
    
    stappen.style.display = 'none';
    huidigeWeergave = 'zoeken';
    
    clearTimeout(zoekTimer);
    zoekTimer = setTimeout(() => voerZoekopdrachtUit(query), 300);
  }

  // ===== TOEVOEGEN AAN WINKELWAGEN =====
  window.fcVoegToeAanWinkelwagen = function(variantId, event) {
    if (event) event.stopPropagation();
    
    if (!variantId || variantId === 0) {
      alert('Variant ID not found. This product still needs to be set up.');
      return;
    }
    
    const btn = event.target;
    const origineleTekst = btn.innerText;
    
    btn.innerText = 'Adding...';
    btn.disabled = true;
    
    fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: variantId, quantity: 1 })
    })
    .then(response => response.json())
    .then(data => {
      btn.innerText = '✓ Added!';
      btn.style.background = '#2E7D32';
      
      fetch('/cart.js')
        .then(r => r.json())
        .then(winkelwagen => {
          updateAanbiedingWeergave(winkelwagen.item_count);
          toonMelding(`✓ Added! ${winkelwagen.item_count}/3 products for a free gift`);
        });
      
      setTimeout(() => {
        btn.innerText = origineleTekst;
        btn.style.background = '#C41E3A';
        btn.disabled = false;
      }, 2000);
    })
    .catch(error => {
      btn.innerText = 'Error';
      setTimeout(() => {
        btn.innerText = origineleTekst;
        btn.disabled = false;
      }, 2000);
    });
  };

  // ===== MELDING TONEN =====
  function toonMelding(bericht) {
    let melding = document.querySelector('.fc-notification');
    if (!melding) {
      melding = document.createElement('div');
      melding.className = 'fc-notification';
      document.body.appendChild(melding);
    }
    
    melding.textContent = bericht;
    melding.classList.add('show');
    
    setTimeout(() => {
      melding.classList.remove('show');
    }, 2000);
  }

  // ===== AANBIEDING WEERGAVE BIJWERKEN =====
  function updateAanbiedingWeergave(aantalItems) {
    if (!aanbiedingStatus || !aanbiedingVoortgang || !aanbiedingBericht || !aanbiedingSubtekst) return;
    
    const percentage = Math.min((aantalItems / 3) * 100, 100);
    aanbiedingVoortgang.style.width = percentage + '%';
    
    if (aantalItems >= 3) {
      aanbiedingStatus.textContent = '🎉 FREE!';
      aanbiedingSubtekst.textContent = 'You qualify for a free gift!';
      aanbiedingBericht.textContent = '🎉 You qualify for a FREE gift!';
      aanbiedingBanner.classList.add('qualified');
    } else {
      const nodig = 3 - aantalItems;
      aanbiedingStatus.textContent = `${aantalItems}/3`;
      aanbiedingSubtekst.textContent = `Add ${nodig} more for a free gift`;
      aanbiedingBericht.textContent = `Add ${nodig} more product${nodig > 1 ? 's' : ''} for a free gift`;
      aanbiedingBanner.classList.remove('qualified');
    }
  }

  // ===== WINKELWAGEN OPHALEN EN BIJWERKEN =====
  function haalWinkelwagenOp() {
    return fetch('/cart.js')
      .then(response => response.json())
      .then(winkelwagen => {
        updateAanbiedingWeergave(winkelwagen.item_count);
        return winkelwagen;
      })
      .catch(() => ({ item_count: 0 }));
  }

  // ===== BEKIJK DETAILS =====
  window.fcBekijkDetails = function(url) {
    window.location.href = url;
  };

  // ===== GA TERUG =====
  window.fcGaTerug = function() {
    huidigeWeergave = 'zoeken';
    if (huidigeZoekopdracht.length >= 1) {
      voerZoekopdrachtUit(huidigeZoekopdracht);
    } else {
      stappen.style.display = 'block';
      inhoud.innerHTML = '';
    }
  };

  // ===== ZOEKPOPUP SCHAKELEN =====
  window.fcToggleZoeken = function() {
    if (zoekPopup.classList.contains('active')) {
      zoekPopup.classList.remove('active');
    } else {
      zoekPopup.classList.add('active');
      zoekInput.focus();
      haalWinkelwagenOp();
    }
  };

  // ===== INIT =====
  document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing search popup...');
    console.log('Catalog available:', !!window.NederlandseParfumCatalogus);

    if (zoekInput) {
      zoekInput.addEventListener('keyup', handelZoekopdracht);
    }
    
    if (wisZoek) {
      wisZoek.addEventListener('click', function() {
        zoekInput.value = '';
        zoekInput.focus();
        stappen.style.display = 'block';
        inhoud.innerHTML = '';
        huidigeWeergave = 'zoeken';
      });
    }
    
    setTimeout(haalWinkelwagenOp, 500);
    
    // Sluiten bij klik buiten
    document.addEventListener('click', function(event) {
      if (zoekPopup && !zoekPopup.contains(event.target) && 
          stickyKnop && !stickyKnop.contains(event.target) && 
          zoekPopup.classList.contains('active')) {
        zoekPopup.classList.remove('active');
      }
    });
    
    // Escape-toets
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && zoekPopup && zoekPopup.classList.contains('active')) {
        zoekPopup.classList.remove('active');
      }
    });
    
    // Voorkom dat klikken in popup deze sluit
    if (zoekPopup) {
      zoekPopup.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }
  });
})();
</script>
