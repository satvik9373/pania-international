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
    title: 'Fresh Fruits',
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
    icon: '🥕'
  },
  {
    id: 4,
    title: 'Sweeteners and Sugars',
    bgColor: 'bg-pink-600',
    textColor: 'text-white',
    icon: '🥛'
  },
  {
    id: 5,
    title: 'Rice and Staples',
    bgColor: 'bg-orange-600',
    textColor: 'text-white',
    icon: '🏺'
  },
  {
    id: 6,
    title: 'Oleoresin',
    bgColor: 'bg-purple-600',
    textColor: 'text-white',
    icon: '🌿'
  },
  {
    id: 7,
    title: 'Pharma',
    bgColor: 'bg-teal-600',
    textColor: 'text-white',
    icon: '💊'
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
    name: 'Frozen Vegetables',
    hsnCode: '0710.80',
    categoryId: 1,
    description: 'Assorted frozen vegetables mix, convenient and nutritious.',
    image: '/product-image/Frozen-Mixed-img.jpg'
  },
  
  // Oils, Fats, & Ghee (Category 2)
  {
    id: 5,
    name: 'A2 Bilona Ghee',
    hsnCode: '0405.90',
    categoryId: 2,
    description: 'Pure A2 ghee made from Gir cow milk using traditional bilona method. Rich in nutrients and authentic flavor.',
    image: '/product-image/A2-Bilona-Ghee.png'
  },
  
  // Cold Pressed Edible Oils (Category 2)
  {
    id: 6,
    name: 'Cold Pressed Peanut Oil',
    hsnCode: '1508.10',
    categoryId: 2,
    description: 'Traditional cold-pressed peanut oil retaining natural flavor and nutrients.',
    image: '/product-image/Peanut-Oil.webp'
  },
  {
    id: 7,
    name: 'Cold Pressed Mustard Oil',
    hsnCode: '1514.19',
    categoryId: 2,
    description: 'Pungent mustard oil made using traditional cold-press methods. Perfect for cooking and pickles.',
    image: '/product-image/Mustard-Oil.webp'
  },
  {
    id: 8,
    name: 'Cold Pressed Coconut Oil',
    hsnCode: '1513.11',
    categoryId: 2,
    description: 'Virgin coconut oil extracted using cold-press method. Retains all natural nutrients.',
  },
  {
    id: 9,
    name: 'Cold Pressed Safflower Oil',
    hsnCode: '1512.19',
    categoryId: 2,
    description: 'Heart-healthy safflower oil rich in unsaturated fats and vitamin E.',
    image: '/product-image/Safflower-Oil.webp'
  },
  {
    id: 10,
    name: 'Cold Pressed Almond Oil',
    hsnCode: '1515.90',
    categoryId: 2,
    description: 'Premium edible almond oil with delicate flavor and high nutritional value.',
    image: '/product-image/Almond-Oil.webp'
  },
  
  // Refined Oils (Category 3)
  {
    id: 11,
    name: 'Refined Soybean Oil',
    hsnCode: '1507.90',
    categoryId: 3,
    description: 'High-quality refined soybean oil perfect for all cooking applications.',
    image: '/product-image/Refined-Oil.png'
  },
  
  // Natural Sweeteners & Sugars (Category 4)
  {
    id: 12,
    name: 'Solid Jaggery',
    hsnCode: '1701.13',
    categoryId: 4,
    description: 'Pure organic jaggery blocks made from sugarcane. Natural sweetener rich in minerals.',
    image: '/product-image/gud.jpg'
  },
  {
    id: 13,
    name: 'Jaggery Powder',
    hsnCode: '1701.14',
    categoryId: 4,
    description: 'Finely ground jaggery powder for easy use in cooking and beverages.',
    image: '/product-image/organic-jaggery-powder.avif'
  },
  {
    id: 14,
    name: 'Desi Khand',
    hsnCode: '1701.99',
    categoryId: 4,
    description: 'Traditional Indian sugar with natural sweetness and authentic taste.',
    image: '/product-image/khand.avif'
  },
  {
    id: 15,
    name: 'Natural Honey',
    hsnCode: '0409.00',
    categoryId: 4,
    description: 'Pure raw honey from local beekeepers. Contains natural enzymes and antioxidants.',
    image: '/product-image/honey.jpg'
  },
  
  // Grains & Staples (Category 5)
  {
    id: 16,
    name: 'Whole Wheat Flour (Atta)',
    hsnCode: '1101.00',
    categoryId: 5,
    description: 'Stone-ground whole wheat flour perfect for making rotis, chapatis and bread.',
  },
  {
    id: 17,
    name: 'Kala Namak Rice (GI Tagged)',
    hsnCode: '1006.30',
    categoryId: 5,
    description: 'Premium GI-tagged Kala Namak rice with distinctive aroma and taste.',
  },
  {
    id: 18,
    name: 'Basmati Rice',
    hsnCode: '1006.30',
    categoryId: 5,
    description: 'Aromatic long-grain basmati rice perfect for biryanis and special dishes.',
  },
  {
    id: 19,
    name: 'Non-Basmati Rice',
    hsnCode: '1006.30',
    categoryId: 5,
    description: 'High-quality non-basmati rice varieties for everyday cooking.',
  },
  {
    id: 20,
    name: 'Mixed Pulses',
    hsnCode: '0713.33',
    categoryId: 5,
    description: 'Premium quality pulses including chana, moong, urad, masoor and arhar dal.',
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
