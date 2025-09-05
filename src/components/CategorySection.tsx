import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { categories } from '@/data/products';

const CategorySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: number) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-warm-beige to-cream">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        {/* Section Header */}
        <div className="text-left mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center mb-2 sm:mb-4">
            <div className="h-px bg-terracotta w-12 sm:w-16 lg:w-24"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-rich-brown ml-4 sm:ml-6 lg:ml-8">
              Shop By Category
            </h2>
          </div>
        </div>

        {/* Categories Grid - Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => handleCategoryClick(category.id)}
              className={`relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300 min-h-[120px] sm:min-h-[150px] lg:min-h-[180px] shadow-lg hover:shadow-xl`}
            >
              {/* Background Images for categories based on sequence */}
              {category.id === 1 && (
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/product-image/Fresh-Veggies.jpg')`
                  }}
                >
                </div>
              )}
              {category.id === 2 && (
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/product-image/Peanut-Oil.webp')`
                  }}
                >
                </div>
              )}
              {category.id === 3 && (
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/category-image/Refined Oils.png')`
                  }}
                >
                </div>
              )}
              {category.id === 4 && (
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/category-image/natural-sweetners.jpg')`
                  }}
                >
                </div>
              )}
              {category.id === 5 && (
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/category-image/Grains and staples.png')`
                  }}
                >
                </div>
              )}
              {category.id === 6 && (
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/category-image/Pharma.webp')`
                  }}
                >
                </div>
              )}
              {category.id === 7 && (
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/product-image/Lavender,-Tea-Tree,-Peppermint,-etc..webp')`
                  }}
                >
                </div>
              )}
              {category.id === 8 && (
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/category-image/oleo.webp')`
                  }}
                >
                </div>
              )}

              <div className="relative z-10 flex h-full p-3 sm:p-4 lg:p-6">
                {/* No text content - just background images */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-6 sm:mt-8 lg:mt-12">
          <button
            onClick={() => navigate('/categories')}
            className="bg-olive-green text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
