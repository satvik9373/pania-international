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
        <div className="text-left mb-12">
          <div className="flex items-center mb-4">
            <div className="h-px bg-terracotta w-24"></div>
            <h2 className="text-5xl font-serif text-rich-brown ml-8">Shop By Category</h2>
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
              {/* Background Images for categories based on sequence */}
              {category.id === 1 && (
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/category-image/Fresh Fruits & Vegetables.png')`
                  }}
                >
                </div>
              )}
              {category.id === 2 && (
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/category-image/dairy&fat.png')`
                  }}
                >
                </div>
              )}
              {category.id === 3 && (
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/category-image/oil-fats&ghee.png')`
                  }}
                >
                </div>
              )}
              {category.id === 4 && (
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/category-image/Refined Oils.png')`
                  }}
                >
                </div>
              )}
              {category.id === 5 && (
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/category-image/natural-sweetners.jpg')`
                  }}
                >
                </div>
              )}
              {category.id === 6 && (
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/category-image/Grains and staples.png')`
                  }}
                >
                </div>
              )}
              {category.id === 7 && (
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/category-image/Oleoresin.webp')`
                  }}
                >
                </div>
              )}
              {category.id === 8 && (
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/category-image/Pharma.webp')`
                  }}
                >
                </div>
              )}

              <div className="relative z-10 flex h-full p-6">
                {/* No text content - just background images */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate('/categories')}
            className="bg-olive-green text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
