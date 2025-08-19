import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductsByCategory, getCategoryById } from '@/data/products';
import Navbar from '@/components/Navbar';

const CategoryProductList = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  
  const categoryIdNum = categoryId ? parseInt(categoryId) : 0;
  const category = getCategoryById(categoryIdNum);
  const products = getProductsByCategory(categoryIdNum);

  // Function to get category-specific announcement bar
  const getCategoryAnnouncementBar = (categoryId: number) => {
    const announcements = {
      1: { // Fresh Fruits & Vegetables
        bg: 'bg-olive-green',
        text: '🍎 Farm Fresh Guarantee | 100% Organic & Pesticide-Free Produce',
        emoji: '🌱'
      },
      2: { // Oils, Fats & Ghee - Dairy Fat Products
        bg: 'bg-olive-green',
        text: '🥛 Pure A2 Bilona Ghee | Traditional Methods | 100% Natural',
        emoji: '✨'
      },
      3: { // Oils, Fats & Ghee - Cold Pressed Edible Oils
        bg: 'bg-olive-green',
        text: '🏺 Cold Pressed Excellence | Zero Chemicals | Maximum Nutrition',
        emoji: '💧'
      },
      4: { // Oils, Fats & Ghee - Refined Oils
        bg: 'bg-olive-green',
        text: '🔥 Premium Refined Oils | Heart Healthy | Perfect for Cooking',
        emoji: '❤️'
      },
      5: { // Natural Sweeteners & Sugars
        bg: 'bg-olive-green',
        text: '🍯 Natural Sweetness | No Artificial Additives | Pure & Healthy',
        emoji: '🌿'
      },
      6: { // Grains & Staples - Wheat Flour & Rice
        bg: 'bg-olive-green',
        text: '🌾 Farm to Table | Premium Quality Grains | Nutrition Rich',
        emoji: '🥖'
      }
    };

    return announcements[categoryId as keyof typeof announcements] || announcements[1];
  };

  const announcement = getCategoryAnnouncementBar(categoryIdNum);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Category not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-olive-green text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige to-cream">
      {/* Dynamic Announcement Bar */}
      <div className={`${announcement.bg} text-white py-2 px-4 text-center text-sm font-medium`}>
        <div className="flex items-center justify-center space-x-2">
          <span>{announcement.emoji}</span>
          <span>{announcement.text}</span>
          <span>{announcement.emoji}</span>
        </div>
      </div>
      
      {/* Navbar */}
      <Navbar />
      
      {/* Category Banner */}
      <div className="relative w-full h-48 md:h-64 lg:h-80 overflow-hidden mb-8">
        {/* New Green Banner for All Categories */}
        <div className="w-full h-full flex items-center justify-center relative">
          {/* Banner Image */}
          <img
            src="/labels/test.webp"
            alt="Tradition Tastes Banner"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {products.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-600 mb-4">No products available in this category</h2>
            <p className="text-gray-500">Please check back later for new products.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                {/* Modern Product Card Box - Bigger Size */}
                <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-80 w-60 flex items-center justify-center group overflow-hidden">
                  {/* Primary Product Image */}
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-40 h-40 object-contain transition-opacity duration-300 group-hover:opacity-0"
                    />
                  ) : (
                    <span className="text-6xl opacity-30 transition-opacity duration-300 group-hover:opacity-0">📦</span>
                  )}
                  
                  {/* Secondary Image on Hover */}
                  {product.image && (
                    <img
                      src={product.image}
                      alt={`${product.name} - hover`}
                      className="absolute inset-0 w-40 h-40 object-contain m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Product Name */}
                <h3 className="text-xl font-bold text-rich-brown text-center mt-4 mb-4 px-2 leading-tight">
                  {product.name}
                </h3>

                {/* Contact Button - Dark Olive Green */}
                <button
                  onClick={handleContactUs}
                  className="bg-green-800 text-white px-8 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:bg-green-900 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Contact for more
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryProductList;
