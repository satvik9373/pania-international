import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CategorySection = () => {
  const navigate = useNavigate();

  const categories = [
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
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-warm-beige to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-terracotta w-24"></div>
            <h2 className="text-4xl font-bold text-rich-brown mx-8 font-playfair">Shop By Category</h2>
            <div className="h-px bg-terracotta w-24"></div>
          </div>
        </div>

        {/* Categories Grid - 3x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
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

        {/* Show More Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate('/categories')}
            className="bg-green-600 text-white px-12 py-4 rounded-md font-playfair text-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
