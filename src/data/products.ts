export interface Product {
  id: number;
  name: string;
  hsnCode: string;
  categoryId: number;
  description?: string;
  image?: string;
}

export interface Category {
  id: number;
  title: string;
  bgColor: string;
  textColor: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: 1,
    title: 'Fresh Fruits & Vegetables',
    bgColor: 'bg-green-500',
    textColor: 'text-white',
    icon: '🥕'
  },
  {
    id: 2,
    title: 'Oils, Fats, & Ghee',
    bgColor: 'bg-blue-500',
    textColor: 'text-white',
    icon: '🏺'
  },
  {
    id: 3,
    title: 'Refined Oils',
    bgColor: 'bg-red-600',
    textColor: 'text-white',
    icon: '�'
  },
  {
    id: 4,
    title: 'Natural Sweeteners & Sugars',
    bgColor: 'bg-pink-600',
    textColor: 'text-white',
    icon: '�'
  },
  {
    id: 5,
    title: 'Grains & Staples',
    bgColor: 'bg-orange-600',
    textColor: 'text-white',
    icon: '🌾'
  },
  {
    id: 6,
    title: 'Pharmaceuticals & Nutraceuticals',
    bgColor: 'bg-purple-600',
    textColor: 'text-white',
    icon: '💊'
  },
  {
    id: 7,
    title: 'Essential Oils',
    bgColor: 'bg-emerald-600',
    textColor: 'text-white',
    icon: '🫧'
  },
  {
    id: 8,
    title: 'Oleoresins',
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
    hsnCode: '0804.50',
    categoryId: 1,
    description: 'Premium quality fresh mangoes sourced directly from Indian orchards. Sweet, juicy and rich in vitamins.',
    image: '/product-image/mango.jpg'
  },
  {
    id: 2,
    name: 'Fresh Onions',
    hsnCode: '0703.10',
    categoryId: 1,
    description: 'Farm-fresh onions with excellent storage life. Essential ingredient for Indian cuisine.',
    image: '/product-image/onion.jpg'
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
    hsnCode: '0405.90',
    categoryId: 2,
    description: 'Pure A2 Bilona Ghee made from indigenous cow milk using traditional churning methods.',
    image: '/product-image/A2-Bilona-Ghee.png'
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
    hsnCode: '1514.19',
    categoryId: 2,
    description: 'Traditional cold pressed mustard oil known for its pungent flavor and health benefits.',
    image: '/product-image/Mustard-Oil.webp'
  },
  {
    id: 8,
    name: 'Cold Pressed Coconut Oil',
    hsnCode: '1513.11',
    categoryId: 2,
    description: 'Virgin cold pressed coconut oil with natural aroma and health benefits.',
    image: '/product-image/Coconut oil.webp'
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
    hsnCode: '1515.90',
    categoryId: 2,
    description: 'Premium cold pressed almond oil for culinary and cosmetic use.',
    image: '/product-image/Almond-Oil.webp'
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
    hsnCode: '0409.00',
    categoryId: 4,
    description: 'Pure natural honey harvested from bee farms, rich in antioxidants.',
    image: '/product-image/honey.jpg'
  },

  // Grains & Staples (Category 5)
  {
    id: 16,
    name: 'Whole Wheat Flour (Atta)',
    hsnCode: '1101.00',
    categoryId: 5,
    description: 'Fresh ground whole wheat flour perfect for making rotis and bread.',
    image: '/product-image/wheat-flour.jpg'
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
    hsnCode: '1006.30',
    categoryId: 5,
    description: 'Premium long grain basmati rice with distinctive aroma and flavor.',
    image: '/product-image/basmati rice.jpg'
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
    hsnCode: '0713.20',
    categoryId: 5,
    description: 'Premium quality chickpeas rich in protein and fiber.',
    image: '/product-image/chana.jpg'
  },
  {
    id: 21,
    name: 'Moong',
    hsnCode: '0713.31',
    categoryId: 5,
    description: 'Green gram beans perfect for dal and sprouting.',
    image: '/product-image/moong.webp'
  },
  {
    id: 22,
    name: 'Urad',
    hsnCode: '0713.32',
    categoryId: 5,
    description: 'Black gram lentils essential for South Indian cuisine.',
    image: '/product-image/urad.webp'
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
    image: '/product-image/placeholder.svg'
  },
  {
    id: 26,
    name: 'Herbal/Plant-based Health Products',
    hsnCode: '3004.90',
    categoryId: 6,
    description: 'Natural herbal products and plant-based health supplements.',
    image: '/product-image/placeholder.svg'
  },

  // Essential Oils (Category 7)
  {
    id: 27,
    name: 'Lavender Essential Oil',
    hsnCode: '3301.29',
    categoryId: 7,
    description: 'Pure lavender essential oil for aromatherapy and relaxation.',
    image: '/product-image/Lavender,-Tea-Tree,-Peppermint,-etc..webp'
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
    image: '/product-image/placeholder.svg'
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
    image: '/product-image/Nutmeg Oleoresin.jpg'
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
