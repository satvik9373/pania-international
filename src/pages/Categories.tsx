import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { categories } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Categories = () => {
  const navigate = useNavigate();

  // Create 9 total categories (8 with images, 1 empty)
  const allCategories = [
    ...categories, // First 8 categories with images
    // 1 empty category
    { id: 9, title: 'Coming Soon', bgColor: 'bg-gray-200', textColor: 'text-gray-600', icon: '📦' }
  ];

  const handleCategoryClick = (categoryId: number) => {
    // Only navigate for categories with actual content (1-8)
    if (categoryId <= 8) {
      navigate(`/category/${categoryId}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-16 bg-gradient-to-br from-warm-beige to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-terracotta w-24"></div>
              <h2 className="text-6xl font-bold text-rich-brown mx-8">All Categories</h2>
              <div className="h-px bg-terracotta w-24"></div>
            </div>
          </div>

          {/* Categories Grid - 3 columns, 3 rows to show 9 categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => handleCategoryClick(category.id)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300 min-h-[200px] shadow-lg hover:shadow-xl ${category.id > 6 ? 'cursor-not-allowed opacity-60' : ''}`}
              >
                {/* Background Images for categories 1-8 */}
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

                {/* Empty boxes styling for categories 9+ (Coming Soon) */}
                {category.id > 8 && (
                  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">{category.icon}</div>
                      <p className="text-gray-500 font-medium">{category.title}</p>
                    </div>
                  </div>
                )}

                <div className="relative z-10 flex h-full p-6">
                  {/* No text content - just background images for first 8, coming soon for last 1 */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Categories;
