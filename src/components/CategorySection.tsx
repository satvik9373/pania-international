import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { categories } from '@/data/products';

const CategorySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: number) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-warm-beige to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-terracotta w-24"></div>
            <h2 className="text-4xl font-bold text-rich-brown mx-8">Shop By Category</h2>
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
              onClick={() => handleCategoryClick(category.id)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300 min-h-[200px] shadow-lg hover:shadow-xl`}
            >
              {/* Background Image for first two categories */}
              {category.id === 1 && (
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/category-image/Fresh Fruits & Vegetables.png')`
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>
              )}
              {category.id === 2 && (
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/category-image/oil-fats&ghee.png')`
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>
              )}
              
              {/* Fallback background for other categories */}
              {category.id > 2 && (
                <div className={`absolute inset-0 ${category.bgColor}`}></div>
              )}

              <div className="relative z-10 flex h-full p-6">
                {/* Text Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className={`text-xl font-bold ${category.id <= 2 ? 'text-white' : category.textColor} leading-tight mb-2`}>
                    {category.title}
                  </h3>
                </div>

                {/* Icon - Only show for categories without background images */}
                {category.id > 2 && (
                  <div className="flex items-center justify-center">
                    <span className="text-4xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate('/categories')}
            className="bg-olive-green text-white px-12 py-4 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
