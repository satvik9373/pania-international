export interface Product {
  id: number;
  name: string;
  slug?: string;
  hsnCode: string;
  categoryId: number;
  description?: string;
  image?: string;
  detailedDescription?: string;
  keyBenefits?: string[];
  ingredients?: string[];
}

export interface Category {
  id: number;
  title: string;
  slug: string;
  bgColor: string;
  textColor: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: 1,
    title: 'Fresh Fruits & Vegetables',
    slug: 'fresh-fruits-vegetables',
    bgColor: 'bg-green-500',
    textColor: 'text-white',
    icon: '🥕'
  },
  {
    id: 2,
    title: 'Oils, Fats, & Ghee',
    slug: 'oils-fats-ghee',
    bgColor: 'bg-blue-500',
    textColor: 'text-white',
    icon: '🏺'
  },
  {
    id: 3,
    title: 'Refined Oils',
    slug: 'refined-oils',
    bgColor: 'bg-red-600',
    textColor: 'text-white',
    icon: '🛢'
  },
  {
    id: 4,
    title: 'Natural Sweeteners & Sugars',
    slug: 'natural-sweeteners-sugars',
    bgColor: 'bg-pink-600',
    textColor: 'text-white',
    icon: '🍯'
  },
  {
    id: 5,
    title: 'Grains & Staples',
    slug: 'grains-staples',
    bgColor: 'bg-orange-600',
    textColor: 'text-white',
    icon: '🌾'
  },
  {
    id: 6,
    title: 'Pharmaceuticals & Nutraceuticals',
    slug: 'pharmaceuticals-nutraceuticals',
    bgColor: 'bg-purple-600',
    textColor: 'text-white',
    icon: '💊'
  },
  {
    id: 7,
    title: 'Essential Oils',
    slug: 'essential-oils',
    bgColor: 'bg-emerald-600',
    textColor: 'text-white',
    icon: '🫧'
  },
  {
    id: 8,
    title: 'Oleoresins',
    slug: 'oleoresins',
    bgColor: 'bg-amber-600',
    textColor: 'text-white',
    icon: '🌿'
  }
];

export const products: Product[] = [
  // Fresh Fruits & Vegetables (Category 1)
  {
    id: 1,
    name: 'Fresh Mangoes',
    slug: 'fresh-mangoes',
    hsnCode: '0804.50',
    categoryId: 1,
    description: 'Premium quality fresh mangoes sourced directly from Indian orchards. Sweet, juicy and rich in vitamins.',
    image: '/product-image/mango.jpg',
    detailedDescription: 'Our premium fresh mangoes are hand-picked from the finest orchards across India, known for their exceptional sweetness and rich flavor. These mangoes are carefully selected at optimal ripeness to ensure maximum taste and nutritional value. Grown using sustainable farming practices, our mangoes represent the authentic taste of Indian tropical fruits.',
    keyBenefits: [
      'Rich in Vitamin C and antioxidants for immune system support',
      'High fiber content aids in digestion and gut health',
      'Natural source of beta-carotene for healthy skin and vision',
      'Contains essential minerals like potassium and magnesium',
      'Low in calories, making it a healthy snack option',
      'Natural sugars provide quick energy boost'
    ],
    ingredients: [
      'Fresh mangoes (100% natural)',
      'No artificial preservatives',
      'No added sugars or chemicals',
      'Naturally ripened on the tree'
    ]
  },
  {
    id: 2,
    name: 'Fresh Onions',
    slug: 'fresh-onions',
    hsnCode: '0703.10',
    categoryId: 1,
    description: 'Farm-fresh onions with excellent storage life. Essential ingredient for Indian cuisine.',
    image: '/product-image/onion.jpg',
    detailedDescription: 'Our farm-fresh onions are sourced from trusted agricultural regions known for producing high-quality bulbs with excellent storage life. These onions are carefully harvested, cleaned, and sorted to ensure consistent size and quality. Perfect for cooking, they add the essential flavor base to countless dishes.',
    keyBenefits: [
      'Rich in antioxidants, particularly quercetin for heart health',
      'Contains anti-inflammatory compounds and natural sulfur',
      'Good source of vitamin C and dietary fiber',
      'Long storage life when properly stored',
      'Essential flavor base for cuisines worldwide',
      'Natural antibacterial and antimicrobial properties'
    ],
    ingredients: [
      'Fresh yellow/red onions (100% natural)',
      'No chemical treatments or preservatives',
      'Field-dried and naturally cured',
      'Hand-sorted for consistent quality'
    ]
  },
  {
    id: 3,
    name: 'Other Fresh Vegetables',
    hsnCode: '0709.99',
    categoryId: 1,
    description: 'Variety of fresh seasonal vegetables including leafy greens, root vegetables and more.',
    image: '/product-image/Fresh-Veggies.jpg'
  },
  {
    id: 4,
    name: 'Frozen Vegetables (Mixed/Processed)',
    hsnCode: '0710.80',
    categoryId: 1,
    description: 'High-quality frozen vegetables processed and packed to retain nutrients and freshness.',
    image: '/product-image/Frozen-Mixed-img.jpg'
  },

  // Oils, Fats & Ghee (Category 2)
  {
    id: 5,
    name: 'A2 Bilona Ghee',
    slug: 'a2-bilona-ghee',
    hsnCode: '0405.90',
    categoryId: 2,
    description: 'Pure A2 Bilona Ghee made from indigenous cow milk using traditional churning methods.',
    image: '/product-image/A2-Bilona-Ghee.png',
    detailedDescription: 'Our A2 Bilona Ghee is crafted using the ancient Vedic method from the milk of indigenous Gir cows. The traditional bilona process involves slow churning of cultured butter to extract pure ghee, preserving all the natural nutrients and authentic taste. This golden elixir is free from chemicals and additives.',
    keyBenefits: [
      'Contains A2 beta-casein protein, easier to digest than regular dairy',
      'Rich in fat-soluble vitamins A, D, E, and K',
      'High smoke point makes it ideal for cooking at high temperatures',
      'Contains beneficial fatty acids like CLA and omega-3',
      'Supports brain health and cognitive function',
      'Aids in nutrient absorption and digestive health'
    ],
    ingredients: [
      'Pure A2 cow milk from indigenous Gir cows',
      'Traditional bilona churning process',
      'No preservatives or artificial additives',
      'Cultured butter base for authentic flavor'
    ]
  },
  {
    id: 6,
    name: 'Cold Pressed Peanut Oil',
    hsnCode: '1508.10',
    categoryId: 2,
    description: 'Natural cold pressed peanut oil retaining all essential nutrients and flavor.',
    image: '/product-image/Peanut-Oil.webp'
  },
  {
    id: 7,
    name: 'Cold Pressed Mustard Oil',
    slug: 'cold-pressed-mustard-oil',
    hsnCode: '1514.19',
    categoryId: 2,
    description: 'Traditional cold pressed mustard oil known for its pungent flavor and health benefits.',
    image: '/product-image/Mustard-Oil.webp',
    detailedDescription: 'Our traditional cold pressed mustard oil is extracted from premium mustard seeds using the ancient wooden pressing method. This preserves the oil\'s natural pungency, nutritional value, and distinctive flavor that has been cherished in Indian kitchens for generations. The oil has a golden yellow color and strong aroma.',
    keyBenefits: [
      'Rich in omega-3 and omega-6 fatty acids for heart health',
      'Natural antibacterial and antifungal properties',
      'High smoking point suitable for deep frying and cooking',
      'Contains glucosinolates with natural preservation qualities',
      'Traditional remedy for joint pain and muscle stiffness',
      'Excellent source of vitamin E and antioxidants'
    ],
    ingredients: [
      'Premium mustard seeds (100% pure)',
      'Cold pressed using traditional wooden mills',
      'No chemical extraction or refining',
      'Naturally filtered and unbleached'
    ]
  },
  {
    id: 8,
    name: 'Cold Pressed Coconut Oil',
    slug: 'cold-pressed-coconut-oil',
    hsnCode: '1513.11',
    categoryId: 2,
    description: 'Virgin cold pressed coconut oil with natural aroma and health benefits.',
    image: '/product-image/Coconut oil.webp',
    detailedDescription: 'Our virgin cold pressed coconut oil is extracted from fresh coconut meat using mechanical pressing without heat or chemicals. This preserves the natural nutrients, aroma, and taste of fresh coconuts. The oil solidifies at room temperature and has a pleasant coconut fragrance.',
    keyBenefits: [
      'Rich in medium-chain triglycerides (MCTs) for quick energy',
      'Contains lauric acid with natural antimicrobial properties',
      'Supports heart health and healthy cholesterol levels',
      'Excellent for cooking, baking, and skincare',
      'High smoke point suitable for various cooking methods',
      'Natural moisturizer for skin and hair care'
    ],
    ingredients: [
      'Fresh coconut meat (100% pure)',
      'Cold pressed extraction method',
      'No chemical solvents or additives',
      'Virgin grade quality'
    ]
  },
  {
    id: 9,
    name: 'Cold Pressed Safflower Oil',
    hsnCode: '1512.19',
    categoryId: 2,
    description: 'Heart-healthy cold pressed safflower oil rich in oleic acid.',
    image: '/product-image/Safflower-Oil.webp'
  },
  {
    id: 10,
    name: 'Cold Pressed Almond Oil',
    slug: 'cold-pressed-almond-oil',
    hsnCode: '1515.90',
    categoryId: 2,
    description: 'Premium cold pressed almond oil for culinary and cosmetic use.',
    image: '/product-image/Almond-Oil.webp',
    detailedDescription: 'Our premium cold pressed almond oil is extracted from high-quality sweet almonds using mechanical pressing without heat treatment. This gentle process preserves the natural nutrients, vitamin E, and delicate flavor. Perfect for both culinary applications and natural skincare routines.',
    keyBenefits: [
      'Rich in vitamin E and antioxidants for skin nourishment',
      'Contains healthy monounsaturated fats for heart health',
      'Natural moisturizer for dry skin and hair care',
      'Light texture absorbs easily without greasy residue',
      'Suitable for cooking, baking, and salad dressings',
      'Helps maintain healthy cholesterol levels'
    ],
    ingredients: [
      'Sweet almonds (100% pure)',
      'Cold pressed extraction method',
      'No chemical processing or solvents',
      'Natural and unrefined'
    ]
  },

  // Refined Oils (Category 3)
  {
    id: 11,
    name: 'Refined Soybean Oil',
    hsnCode: '1507.90',
    categoryId: 3,
    description: 'High-quality refined soybean oil suitable for all cooking purposes.',
    image: '/product-image/Refined-Oil.png'
  },

  // Natural Sweeteners & Sugars (Category 4)
  {
    id: 12,
    name: 'Jaggery (Solid)',
    hsnCode: '1701.13',
    categoryId: 4,
    description: 'Pure solid jaggery made from sugarcane, rich in minerals and natural sweetness.',
    image: '/product-image/gud.jpg'
  },
  {
    id: 13,
    name: 'Jaggery Powder',
    hsnCode: '1701.14',
    categoryId: 4,
    description: 'Finely ground jaggery powder for easy mixing and cooking applications.',
    image: '/product-image/gud powder.jpeg'
  },
  {
    id: 14,
    name: 'Desi Khand (Traditional Sugar)',
    hsnCode: '1701.99',
    categoryId: 4,
    description: 'Traditional unrefined sugar with natural minerals and authentic taste.',
    image: '/product-image/organic-jaggery-powder.avif'
  },
  {
    id: 15,
    name: 'Natural Honey',
    slug: 'natural-honey',
    hsnCode: '0409.00',
    categoryId: 4,
    description: 'Pure natural honey harvested from bee farms, rich in antioxidants.',
    image: '/product-image/honey.jpg',
    detailedDescription: 'Our natural honey is carefully harvested from pristine bee farms where bees collect nectar from diverse wildflowers. This raw, unprocessed honey retains all its natural enzymes, antioxidants, and beneficial compounds. Each jar represents the pure essence of nature\'s sweetness.',
    keyBenefits: [
      'Rich in natural antioxidants and enzymes for immune support',
      'Contains antibacterial and antimicrobial properties',
      'Natural energy source with easily digestible sugars',
      'Soothes throat irritation and supports respiratory health',
      'Promotes wound healing and skin health when applied topically',
      'May help with seasonal allergies when sourced locally'
    ],
    ingredients: [
      'Pure wildflower honey (100% natural)',
      'No artificial flavors or additives',
      'Raw and unfiltered',
      'Naturally harvested from bee farms'
    ]
  },

  // Grains & Staples (Category 5)
  {
    id: 16,
    name: 'Whole Wheat Flour (Atta)',
    slug: 'whole-wheat-flour-atta',
    hsnCode: '1101.00',
    categoryId: 5,
    description: 'Fresh ground whole wheat flour perfect for making rotis and bread.',
    image: '/product-image/wheat-flour-2.webp',
    detailedDescription: 'Our premium whole wheat flour is stone-ground from carefully selected wheat grains to preserve maximum nutrition and authentic taste. This fine-textured atta is perfect for making soft rotis, chapatis, and traditional Indian breads. Ground fresh to maintain the natural wheat germ and bran.',
    keyBenefits: [
      'High in dietary fiber for improved digestive health',
      'Rich in B vitamins, iron, and essential minerals',
      'Contains wheat germ for added nutritional value',
      'Stone-ground process preserves natural nutrients',
      'Ideal protein content for soft, pliable rotis',
      'No artificial bleaching or chemical processing'
    ],
    ingredients: [
      'Whole wheat grains (100% natural)',
      'Stone-ground to fine consistency',
      'Unbleached and chemical-free',
      'Contains natural wheat germ and bran'
    ]
  },
  {
    id: 17,
    name: 'Kala Namak Rice (GI Tagged)',
    hsnCode: '1006.30',
    categoryId: 5,
    description: 'Authentic GI tagged Kala Namak rice with unique aroma and taste.',
    image: '/product-image/black-saltkala-namak-powder-100-g-quick-pantry.jpg'
  },
  {
    id: 18,
    name: 'Basmati Rice',
    slug: 'basmati-rice',
    hsnCode: '1006.30',
    categoryId: 5,
    description: 'Premium long grain basmati rice with distinctive aroma and flavor.',
    image: '/product-image/basmati rice.jpg',
    detailedDescription: 'Our premium basmati rice is sourced from the fertile plains of northern India, where the unique climate and soil conditions produce rice with exceptional aroma, long grains, and delicate flavor. Each grain is aged for optimal texture and taste, making it perfect for biryanis, pilafs, and special occasions.',
    keyBenefits: [
      'Extra-long grains that don\'t break during cooking',
      'Distinctive natural aroma and nutty flavor',
      'Low glycemic index compared to regular rice',
      'Rich in essential amino acids and carbohydrates',
      'Aged rice for better texture and cooking properties',
      'Perfect for festive dishes and gourmet cooking'
    ],
    ingredients: [
      'Premium basmati rice grains (100% pure)',
      'Aged for 1+ years for optimal quality',
      'No artificial additives or preservatives',
      'Naturally aromatic and long-grain variety'
    ]
  },
  {
    id: 19,
    name: 'Non-Basmati Rice',
    hsnCode: '1006.30',
    categoryId: 5,
    description: 'High-quality non-basmati rice suitable for daily consumption.',
    image: '/product-image/rice.jpeg'
  },
  {
    id: 20,
    name: 'Chana',
    slug: 'chana-chickpeas',
    hsnCode: '0713.20',
    categoryId: 5,
    description: 'Premium quality chickpeas rich in protein and fiber.',
    image: '/product-image/chana.jpg',
    detailedDescription: 'Our premium chana (chickpeas) are carefully selected from the best farming regions known for producing large, uniform, and nutrient-rich legumes. These versatile pulses are perfect for making dal, curries, snacks, and can also be ground into flour for various culinary applications.',
    keyBenefits: [
      'High in plant-based protein for muscle health',
      'Rich in dietary fiber for digestive wellness',
      'Good source of folate and iron for blood health',
      'Contains complex carbohydrates for sustained energy',
      'Low glycemic index helps control blood sugar',
      'Versatile ingredient for multiple cuisines'
    ],
    ingredients: [
      'Premium chickpeas (100% natural)',
      'Cleaned and sorted for quality',
      'No preservatives or artificial additives',
      'Sun-dried for optimal storage life'
    ]
  },
  {
    id: 21,
    name: 'Moong',
    slug: 'moong-green-gram',
    hsnCode: '0713.31',
    categoryId: 5,
    description: 'Green gram beans perfect for dal and sprouting.',
    image: '/product-image/moong.webp',
    detailedDescription: 'Our high-quality moong (green gram) is sourced from premium farms and known for its exceptional nutritional profile and cooking versatility. These small, green legumes are easy to digest and cook quickly, making them perfect for dal, sprouts, desserts, and healthy snacks.',
    keyBenefits: [
      'Excellent source of plant protein and amino acids',
      'Easy to digest and light on the stomach',
      'Rich in folate, magnesium, and potassium',
      'High fiber content supports digestive health',
      'Low in fat and calories for weight management',
      'Perfect for sprouting with enhanced nutrition'
    ],
    ingredients: [
      'Premium green gram (moong)',
      'Machine cleaned and hand-sorted',
      'Natural sun-drying process',
      'No chemicals or preservatives'
    ]
  },
  {
    id: 22,
    name: 'Urad',
    slug: 'urad-black-gram',
    hsnCode: '0713.32',
    categoryId: 5,
    description: 'Black gram lentils essential for South Indian cuisine.',
    image: '/product-image/urad.webp',
    detailedDescription: 'Our premium urad dal (black gram) is carefully sourced and processed to maintain its rich nutritional value and authentic taste. This versatile pulse is essential for South Indian cuisine and is perfect for making idli, dosa, vada, papad, and various dal preparations.',
    keyBenefits: [
      'High protein content for muscle development',
      'Rich in iron and calcium for bone health',
      'Good source of dietary fiber for digestion',
      'Contains folate essential for cell division',
      'Provides magnesium for heart health',
      'Natural source of potassium for blood pressure'
    ],
    ingredients: [
      'Premium black gram (urad dal)',
      'Cleaned and polished to perfection',
      'Traditional processing methods',
      'No artificial colors or preservatives'
    ]
  },
  {
    id: 23,
    name: 'Masoor',
    hsnCode: '0713.33',
    categoryId: 5,
    description: 'Red lentils that cook quickly and are rich in protein.',
    image: '/product-image/massor.jpg'
  },
  {
    id: 24,
    name: 'Other Pulses',
    hsnCode: '0713.xx',
    categoryId: 5,
    description: 'Variety of other pulses including arhar, rajma, and regional varieties.',
    image: '/product-image/otherpulses.jpg'
  },

  // Pharmaceuticals & Nutraceuticals (Category 6)
  {
    id: 25,
    name: 'General Nutraceuticals (Capsules, Oils, etc.)',
    hsnCode: '2106.90',
    categoryId: 6,
    description: 'Health supplements and nutraceutical products for wellness and nutrition.',
    image: '/product-image/netracuticals.webp'
  },
  {
    id: 26,
    name: 'Herbal/Plant-based Health Products',
    hsnCode: '3004.90',
    categoryId: 6,
    description: 'Natural herbal products and plant-based health supplements.',
    image: '/product-image/plant-based.webp'
  },

  // Essential Oils (Category 7)
  {
    id: 27,
    name: 'Lavender Essential Oil',
    slug: 'lavender-essential-oil',
    hsnCode: '3301.29',
    categoryId: 7,
    description: 'Pure lavender essential oil for aromatherapy and relaxation.',
    image: '/product-image/Lavender,-Tea-Tree,-Peppermint,-etc..webp',
    detailedDescription: 'Our premium lavender essential oil is steam-distilled from the finest lavender flowers, capturing the pure essence of this beloved aromatic herb. Known for its calming and therapeutic properties, this versatile oil is perfect for aromatherapy, skincare, and promoting peaceful sleep.',
    keyBenefits: [
      'Promotes relaxation and reduces stress and anxiety',
      'Natural sleep aid when used in aromatherapy',
      'Soothes minor skin irritations and burns',
      'Antimicrobial properties help with wound healing',
      'Reduces headaches and tension when inhaled',
      'Safe for topical use when properly diluted'
    ],
    ingredients: [
      'Pure lavender (Lavandula angustifolia) flowers',
      'Steam distilled extraction method',
      'No synthetic fragrances or additives',
      'Therapeutic grade quality'
    ]
  },
  {
    id: 28,
    name: 'Tea Tree Essential Oil',
    hsnCode: '3301.29',
    categoryId: 7,
    description: 'Antiseptic tea tree essential oil for skincare and wellness.',
    image: '/product-image/Lavender,-Tea-Tree,-Peppermint,-etc..webp'
  },
  {
    id: 29,
    name: 'Peppermint Essential Oil',
    hsnCode: '3301.29',
    categoryId: 7,
    description: 'Refreshing peppermint essential oil for aromatherapy and cooling effects.',
    image: '/product-image/Lavender,-Tea-Tree,-Peppermint,-etc..webp'
  },
  {
    id: 30,
    name: 'Sandalwood Essential Oil',
    hsnCode: '3301.29',
    categoryId: 7,
    description: 'Premium sandalwood essential oil with calming and spiritual properties.',
    image: '/product-image/Sandalwood.webp'
  },
  {
    id: 31,
    name: 'Jasmine Essential Oil',
    hsnCode: '3301.29',
    categoryId: 7,
    description: 'Exotic jasmine essential oil with floral fragrance and therapeutic benefits.',
    image: '/product-image/Jasmin.webp'
  },
  {
    id: 32,
    name: 'Ylang Ylang Essential Oil',
    hsnCode: '3301.29',
    categoryId: 7,
    description: 'Tropical ylang ylang essential oil for emotional balance and relaxation.',
    image: '/product-image/Ylang-Ylang.webp'
  },
  {
    id: 33,
    name: 'Clary Sage Essential Oil',
    hsnCode: '3301.29',
    categoryId: 7,
    description: 'Clary sage essential oil for hormonal balance and stress relief.',
    image: '/product-image/Clary-Sage,-Geranium,-Bergamot,-Patchouli.webp'
  },
  {
    id: 34,
    name: 'Geranium Essential Oil',
    hsnCode: '3301.29',
    categoryId: 7,
    description: 'Balancing geranium essential oil for skincare and emotional wellness.',
    image: '/product-image/Clary-Sage,-Geranium,-Bergamot,-Patchouli.webp'
  },
  {
    id: 35,
    name: 'Bergamot Essential Oil',
    hsnCode: '3301.29',
    categoryId: 7,
    description: 'Citrusy bergamot essential oil for mood enhancement and relaxation.',
    image: '/product-image/Clary-Sage,-Geranium,-Bergamot,-Patchouli.webp'
  },
  {
    id: 36,
    name: 'Patchouli Essential Oil',
    hsnCode: '3301.29',
    categoryId: 7,
    description: 'Earthy patchouli essential oil for grounding and skin benefits.',
    image: '/product-image/Clary-Sage,-Geranium,-Bergamot,-Patchouli.webp'
  },
  {
    id: 37,
    name: 'Cinnamon Essential Oil',
    hsnCode: '3301.29',
    categoryId: 7,
    description: 'Warming cinnamon essential oil with antimicrobial properties.',
    image: '/product-image/Cinnamon.webp'
  },
  {
    id: 38,
    name: 'Lemongrass Essential Oil',
    hsnCode: '3301.29',
    categoryId: 7,
    description: 'Fresh lemongrass essential oil with insect repelling and cleansing properties.',
    image: '/product-image/Lemongrass,-Orange-Essential-Oil.webp'
  },
  {
    id: 39,
    name: 'Orange Essential Oil',
    hsnCode: '3301.29',
    categoryId: 7,
    description: 'Uplifting orange essential oil for energy and mood enhancement.',
    image: '/product-image/Lemongrass,-Orange-Essential-Oil.webp'
  },
  {
    id: 40,
    name: 'Cedarwood Essential Oil',
    hsnCode: '3301.29',
    categoryId: 7,
    description: 'Grounding cedarwood essential oil for meditation and focus.',
    image: '/product-image/Cedarwood-Essential-Oil.webp'
  },

  // Oleoresins (Category 8)
  {
    id: 41,
    name: 'Black Pepper Oleoresin',
    hsnCode: '1302.19',
    categoryId: 8,
    description: 'Concentrated black pepper oleoresin for food flavoring and pharmaceutical use.',
    image: '/product-image/Black Pepper Oleoresin.jpg'
  },
  {
    id: 42,
    name: 'Paprika Oleoresin',
    hsnCode: '1302.19',
    categoryId: 8,
    description: 'Natural paprika oleoresin for color and flavor enhancement in food products.',
    image: '/product-image/Paprika Oleoresin.jpg'
  },
  {
    id: 43,
    name: 'Turmeric Oleoresin',
    hsnCode: '1302.19',
    categoryId: 8,
    description: 'Pure turmeric oleoresin with anti-inflammatory and coloring properties.',
    image: '/product-image/Turmeric Oleoresin.jpg'
  },
  {
    id: 44,
    name: 'Ginger Oleoresin',
    hsnCode: '1302.19',
    categoryId: 8,
    description: 'Concentrated ginger oleoresin for flavoring and medicinal applications.',
    image: '/product-image/Ginger Oleoresin.webp'
  },
  {
    id: 45,
    name: 'Capsicum (Chilli) Oleoresin',
    hsnCode: '1302.19',
    categoryId: 8,
    description: 'Hot capsicum oleoresin for spice and heat enhancement in food products.',
    image: '/product-image/Capsicum (Chilli) Oleoresin.jpg'
  },
  {
    id: 46,
    name: 'Cinnamon Oleoresin',
    hsnCode: '1302.19',
    categoryId: 8,
    description: 'Aromatic cinnamon oleoresin for flavoring and fragrance applications.',
    image: '/product-image/Cinnamon Oleoresin.png'
  },
  {
    id: 47,
    name: 'Cardamom Oleoresin',
    hsnCode: '1302.19',
    categoryId: 8,
    description: 'Premium cardamom oleoresin with intense flavor and aroma.',
    image: '/product-image/Cardamom Oleoresin.webp'
  },
  {
    id: 48,
    name: 'Nutmeg Oleoresin',
    hsnCode: '1302.19',
    categoryId: 8,
    description: 'Concentrated nutmeg oleoresin for culinary and therapeutic use.',
    image: '/product-image/Nutmeg Oleoresin.webp'
  },
  {
    id: 49,
    name: 'Clove Oleoresin',
    hsnCode: '1302.19',
    categoryId: 8,
    description: 'Potent clove oleoresin with antimicrobial and flavoring properties.',
    image: '/product-image/Clove Oleoresin.jpg'
  },
  {
    id: 50,
    name: 'Coriander Oleoresin',
    hsnCode: '1302.19',
    categoryId: 8,
    description: 'Fresh coriander oleoresin for seasoning and pharmaceutical applications.',
    image: '/product-image/Coriander Oleoresin.webp'
  },
  {
    id: 51,
    name: 'Cumin Oleoresin',
    hsnCode: '1302.19',
    categoryId: 8,
    description: 'Aromatic cumin oleoresin essential for Indian cuisine flavoring.',
    image: '/product-image/Cumin Oleoresin.webp'
  },
  {
    id: 52,
    name: 'Garlic Oleoresin',
    hsnCode: '1302.19',
    categoryId: 8,
    description: 'Concentrated garlic oleoresin for flavor enhancement and health benefits.',
    image: '/product-image/Garlic Oleoresin.jpeg'
  },
  {
    id: 53,
    name: 'Fenugreek Oleoresin',
    hsnCode: '1302.19',
    categoryId: 8,
    description: 'Bitter-sweet fenugreek oleoresin with medicinal and culinary applications.',
    image: '/product-image/Fenugreek Oleoresin.jpg'
  },
  {
    id: 54,
    name: 'Celery Oleoresin',
    hsnCode: '1302.19',
    categoryId: 8,
    description: 'Fresh celery oleoresin for seasoning and natural flavoring.',
    image: '/product-image/Celery Oleoresin.webp'
  },
  {
    id: 55,
    name: 'Mace Oleoresin',
    hsnCode: '1302.19',
    categoryId: 8,
    description: 'Delicate mace oleoresin with warm, spicy flavor profile.',
    image: '/product-image/Mace Oleoresin.jpg'
  },
  {
    id: 56,
    name: 'Mustard Oleoresin',
    hsnCode: '1302.19',
    categoryId: 8,
    description: 'Pungent mustard oleoresin for condiment and pharmaceutical use.',
    image: '/product-image/Mustard Oleoresin.jpg'
  },
  {
    id: 57,
    name: 'Bay Leaf Oleoresin',
    hsnCode: '1302.19',
    categoryId: 8,
    description: 'Aromatic bay leaf oleoresin for flavoring and preservative applications.',
    image: '/product-image/Bay Leaf Oleoresin.jpg'
  }
];

export const getProductsByCategory = (categoryId: number): Product[] => {
  return products.filter(product => product.categoryId === categoryId);
};

export const getProductById = (productId: number): Product | undefined => {
  return products.find(product => product.id === productId);
};

export const getCategoryById = (categoryId: number): Category | undefined => {
  return categories.find(category => category.id === categoryId);
};

// New helper functions for slug-based routing
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategorySlug = (categorySlug: string): Product[] => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return [];
  return products.filter(product => product.categoryId === category.id);
};

// Utility function to generate URL-friendly slugs
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim()
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
};
