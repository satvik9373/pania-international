import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

const Categories = () => {
  const allCategories = [
    {
      id: 1,
      title: 'Fresh Fruits & Vegetables',
      image: '/lovable-uploads/3d858f04-6710-4121-bdee-0eb6c06c4963.png',
      bgColor: 'bg-green-600',
      textColor: 'text-white'
    },
    {
      id: 2,
      title: 'Oils, Fats & Ghee – Dairy Fat Products',
      image: '/lovable-uploads/8e8c0e63-775d-49d4-a697-1974ae91bba3.png',
      bgColor: 'bg-amber-800',
      textColor: 'text-white'
    },
    {
      id: 3,
      title: 'Oils, Fats & Ghee – Cold Pressed Edible Oils',
      image: '/lovable-uploads/e8effae9-a554-406f-a63b-176687ffccdf.png',
      bgColor: 'bg-blue-400',
      textColor: 'text-white'
    },
    {
      id: 4,
      title: 'Oils, Fats & Ghee – Refined Oils',
      image: '/lovable-uploads/3d858f04-6710-4121-bdee-0eb6c06c4963.png',
      bgColor: 'bg-red-700',
      textColor: 'text-white'
    },
    {
      id: 5,
      title: 'Natural Sweeteners & Sugars',
      image: '/lovable-uploads/8e8c0e63-775d-49d4-a697-1974ae91bba3.png',
      bgColor: 'bg-pink-600',
      textColor: 'text-white'
    },
    {
      id: 6,
      title: 'Grains & Staples – Wheat Flour & Rice',
      image: '/lovable-uploads/e8effae9-a554-406f-a63b-176687ffccdf.png',
      bgColor: 'bg-orange-600',
      textColor: 'text-white'
    },
    {
      id: 7,
      title: 'Grains & Staples – Pulses',
      image: '/lovable-uploads/3d858f04-6710-4121-bdee-0eb6c06c4963.png',
      bgColor: 'bg-teal-600',
      textColor: 'text-white'
    },
    {
      id: 8,
      title: 'Pharmaceuticals & Nutraceuticals',
      image: '/lovable-uploads/8e8c0e63-775d-49d4-a697-1974ae91bba3.png',
      bgColor: 'bg-purple-600',
      textColor: 'text-white'
    },
    {
      id: 9,
      title: 'Essential Oils (Natural, Therapeutic Grade)',
      image: '/lovable-uploads/e8effae9-a554-406f-a63b-176687ffccdf.png',
      bgColor: 'bg-indigo-600',
      textColor: 'text-white'
    },
    {
      id: 10,
      title: 'Oleoresins (Spice Extracts)',
      image: '/lovable-uploads/3d858f04-6710-4121-bdee-0eb6c06c4963.png',
      bgColor: 'bg-yellow-600',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige to-cream">
      <Navbar />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-terracotta w-24"></div>
              <h1 className="text-4xl font-bold text-rich-brown mx-8 font-playfair">All Categories</h1>
              <div className="h-px bg-terracotta w-24"></div>
            </div>
            <p className="text-xl text-gray-600 font-playfair">
              Explore our complete range of premium products
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative ${category.bgColor} rounded-2xl overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300 min-h-[250px]`}
              >
                <div className="flex h-full">
                  {/* Text Content */}
                  <div className="flex-1 p-8 flex flex-col justify-center">
                    <h3 className={`text-2xl font-bold ${category.textColor} leading-tight mb-4 font-playfair`}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Product Image */}
                  <div className="flex-1 flex items-center justify-center p-4">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
