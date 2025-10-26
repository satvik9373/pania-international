import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { categories } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';

const Categories = () => {
  const navigate = useNavigate();

  // Create 8 total categories (all with images)
  const allCategories = [
    ...categories // All 8 categories with images
  ];

  const handleCategoryClick = (categorySlug: string) => {
    // Navigate using hierarchical category slug
    navigate(`/categories/${categorySlug}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />
      
      <section className="py-16 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-terracotta w-24"></div>
              <h2 className="text-6xl font-bold text-rich-brown mx-8">All Categories</h2>
              <div className="h-px bg-terracotta w-24"></div>
            </div>
          </div>

          {/* Categories Grid - 3 columns, 3 rows to show 8 categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => handleCategoryClick(category.slug)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300 min-h-[200px] shadow-lg hover:shadow-xl`}
              >
                {/* Background Images for categories 1-8 */}
                {category.id === 1 && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/category-image/Fresh Fruits & Vegetables.webp')`
                    }}
                  >
                  </div>
                )}
                {category.id === 2 && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/category-image/oil-fats&ghee.webp')`
                    }}
                  >
                  </div>
                )}
                {category.id === 3 && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/category-image/Refined Oils.webp')`
                    }}
                  >
                  </div>
                )}
                {category.id === 4 && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/category-image/natural-sweetners.webp')`
                    }}
                  >
                  </div>
                )}
                {category.id === 5 && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/category-image/Grains and staples.webp')`
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
                      backgroundImage: `url('/category-image/essential-oil.webp')`
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

                <div className="relative z-10 flex h-full p-6">
                  {/* No text content - just background images */}
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
