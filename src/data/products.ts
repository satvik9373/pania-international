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
    title: 'Oils, Fats & Ghee - Dairy Fat Products',
    bgColor: 'bg-amber-700',
    textColor: 'text-white',
    icon: '🥛'
  },
  {
    id: 3,
    title: 'Oils, Fats & Ghee - Cold Pressed Edible Oils',
    bgColor: 'bg-blue-500',
    textColor: 'text-white',
    icon: '🏺'
  },
  {
    id: 4,
    title: 'Oils, Fats & Ghee - Refined Oils',
    bgColor: 'bg-red-600',
    textColor: 'text-white',
    icon: '🥕'
  },
  {
    id: 5,
    title: 'Natural Sweeteners & Sugars',
    bgColor: 'bg-pink-600',
    textColor: 'text-white',
    icon: '🥛'
  },
  {
    id: 6,
    title: 'Grains & Staples - Wheat Flour & Rice',
    bgColor: 'bg-orange-600',
    textColor: 'text-white',
    icon: '🏺'
  }
];

export const products: Product[] = [
  // Fresh Fruits & Vegetables (Category 1)
  {
    id: 1,
    name: 'Organic Apples',
    hsnCode: '08081000',
    categoryId: 1,
    description: 'Fresh organic apples sourced directly from farms. Rich in vitamins and perfect for healthy snacking.',
    image: '/lovable-uploads/3d858f04-6710-4121-bdee-0eb6c06c4963.png'
  },
  {
    id: 2,
    name: 'Fresh Tomatoes',
    hsnCode: '07020000',
    categoryId: 1,
    description: 'Farm-fresh tomatoes, perfect for cooking and salads. High in antioxidants and vitamin C.',
  },
  {
    id: 3,
    name: 'Organic Spinach',
    hsnCode: '07041000',
    categoryId: 1,
    description: 'Nutrient-rich organic spinach leaves, ideal for healthy meals and smoothies.',
  },
  
  // Oils, Fats & Ghee - Dairy Fat Products (Category 2)
  {
    id: 4,
    name: 'Gir Cow A2 Ghee',
    hsnCode: '04050010',
    categoryId: 2,
    description: 'Pure A2 ghee made from Gir cow milk using traditional methods. Rich in nutrients and flavor.',
    image: '/lovable-uploads/8e8c0e63-775d-49d4-a697-1974ae91bba3.png'
  },
  {
    id: 5,
    name: 'Organic Butter',
    hsnCode: '04050020',
    categoryId: 2,
    description: 'Creamy organic butter made from grass-fed cow milk. Perfect for cooking and spreading.',
  },
  {
    id: 6,
    name: 'Cultured Buttermilk',
    hsnCode: '04031000',
    categoryId: 2,
    description: 'Traditional cultured buttermilk with probiotics. Great for digestion and health.',
  },
  
  // Oils, Fats & Ghee - Cold Pressed Edible Oils (Category 3)
  {
    id: 7,
    name: 'Cold Pressed Coconut Oil',
    hsnCode: '15131100',
    categoryId: 3,
    description: 'Virgin coconut oil extracted using cold-press method. Retains all natural nutrients.',
    image: '/lovable-uploads/e8effae9-a554-406f-a63b-176687ffccdf.png'
  },
  {
    id: 8,
    name: 'Cold Pressed Sesame Oil',
    hsnCode: '15151100',
    categoryId: 3,
    description: 'Traditional cold-pressed sesame oil. Rich in antioxidants and perfect for cooking.',
  },
  {
    id: 9,
    name: 'Cold Pressed Mustard Oil',
    hsnCode: '15154100',
    categoryId: 3,
    description: 'Pungent mustard oil made using traditional cold-press methods. Great for pickles and cooking.',
  },
  
  // Oils, Fats & Ghee - Refined Oils (Category 4)
  {
    id: 10,
    name: 'Refined Sunflower Oil',
    hsnCode: '15121100',
    categoryId: 4,
    description: 'Light and healthy refined sunflower oil. Perfect for everyday cooking and frying.',
  },
  {
    id: 11,
    name: 'Refined Soybean Oil',
    hsnCode: '15071000',
    categoryId: 4,
    description: 'Neutral-tasting refined soybean oil. Ideal for all types of cooking applications.',
  },
  {
    id: 12,
    name: 'Refined Rice Bran Oil',
    hsnCode: '15122100',
    categoryId: 4,
    description: 'Heart-healthy rice bran oil with high smoke point. Great for deep frying and cooking.',
  },
  
  // Natural Sweeteners & Sugars (Category 5)
  {
    id: 13,
    name: 'Organic Jaggery',
    hsnCode: '17011000',
    categoryId: 5,
    description: 'Pure organic jaggery made from sugarcane. Natural sweetener rich in minerals.',
  },
  {
    id: 14,
    name: 'Raw Honey',
    hsnCode: '04090000',
    categoryId: 5,
    description: 'Unprocessed raw honey from local beekeepers. Contains natural enzymes and antioxidants.',
  },
  {
    id: 15,
    name: 'Coconut Sugar',
    hsnCode: '17019910',
    categoryId: 5,
    description: 'Natural coconut sugar with low glycemic index. Healthy alternative to refined sugar.',
  },
  
  // Grains & Staples - Wheat Flour & Rice (Category 6)
  {
    id: 16,
    name: 'Organic Wheat Flour',
    hsnCode: '11010000',
    categoryId: 6,
    description: 'Stone-ground organic wheat flour. Perfect for making rotis, bread, and baking.',
  },
  {
    id: 17,
    name: 'Basmati Rice',
    hsnCode: '10063000',
    categoryId: 6,
    description: 'Aromatic basmati rice with long grains. Perfect for biryanis and special occasions.',
  },
  {
    id: 18,
    name: 'Brown Rice',
    hsnCode: '10062000',
    categoryId: 6,
    description: 'Nutritious brown rice with fiber and nutrients intact. Healthy alternative to white rice.',
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
