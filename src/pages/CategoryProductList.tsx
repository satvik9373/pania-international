import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { getCategoryBySlug, getProductsByCategorySlug, generateSlug } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CategoryProductList = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();
  
  const category = getCategoryBySlug(categorySlug || '');
  const products = getProductsByCategorySlug(categorySlug || '');

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

  const handleProductClick = (productId: number) => {
    // Find the product and generate its slug for navigation
    const product = products.find(p => p.id === productId);
    if (product && categorySlug) {
      const productSlug = product.slug || generateSlug(product.name);
      navigate(`/categories/${categorySlug}/${productSlug}`);
    }
  };

  const getCategoryBanner = (categoryId: number) => {
    switch (categoryId) {
      case 1:
        return '/category-product-banners/Fruits-and-Veg.webp';
      case 2:
        return '/category-product-banners/Cold-press.webp';
      case 3:
        return '/category-product-banners/Refined-oil.webp';
      case 4:
        return '/category-product-banners/natural-sweetner.webp';
      case 5:
        return '/category-product-banners/Pulse.webp';
      case 6:
        return '/category-product-banners/Pharmaceuticals-&-Nutraceuticals.webp';
      case 7:
        return '/category-product-banners/Essential-Oil.webp';
      case 8:
        return '/category-product-banners/OleoResin.webp';
      default:
        return '/category-product-banners/Fruits-and-Veg.webp';
    }
  };

  const getCategoryBannerAlt = (categoryId: number) => {
    switch (categoryId) {
      case 1:
        return 'Fresh Fruits & Vegetables Banner';
      case 2:
        return 'Oils, Fats & Ghee Banner';
      case 3:
        return 'Refined Oils Banner';
      case 4:
        return 'Natural Sweeteners & Sugars Banner';
      case 5:
        return 'Grains & Staples Banner';
      case 6:
        return 'Pharmaceuticals & Nutraceuticals Banner';
      case 7:
        return 'Essential Oils Banner';
      case 8:
        return 'Oleoresins Banner';
      default:
        return 'Category Banner';
    }
  };

  return (
    <div className="min-h-screen bg-warm-beige font-sans">
      {/* Standard Announcement Bar */}      
      {/* Navbar */}
      <Navbar />
      
      {/* Category Banner */}
      <div className="relative w-full mb-8">
        {/* Responsive Banner Container with aspect ratio preservation */}
        <div className="w-full overflow-hidden shadow-sm">
          {/* Banner Image with proper aspect ratio */}
          <img
            src={getCategoryBanner(category.id)}
            alt={getCategoryBannerAlt(category.id)}
            className="w-full h-auto object-contain"
            style={{
              maxHeight: '420px', // Maximum height to prevent overly tall banners
              minHeight: '200px', // Minimum height for consistency
            }}
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
                className="cursor-pointer flex flex-col items-center"
                onClick={() => handleProductClick(product.id)}
              >
                {/* Fixed size product card - Same as Best Sellers */}
                <div className="flex flex-col items-center">
                  {/* Product Image Box - Fixed dimensions: 260.5px x 260.46px */}
                  <div 
                    className="bg-white rounded-2xl transition-all duration-300 flex items-center justify-center relative overflow-hidden group"
                    style={{ 
                      width: '260.5px', 
                      height: '260.46px' 
                    }}
                  >
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <span className="text-6xl opacity-30">📦</span>
                    )}
                  </div>

                  {/* Product Info Below - Pyramid Structure */}
                  <div className="flex flex-col items-center gap-2 mt-4 w-full max-w-[260.5px]">
                    {/* Product Name - Top of pyramid */}
                    <h3 className="text-lg font-medium text-black text-center leading-tight" style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                      {product.name}
                    </h3>

                    {/* HSN Code - Middle of pyramid */}
                    <p className="text-sm text-black text-center font-medium font-sans">
                      HSN: {product.hsnCode}
                    </p>

                    {/* Order now Button - Bottom of pyramid */}
                    <button 
                      className="text-white py-2 px-6 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-md text-sm font-sans mt-1"
                      style={{ backgroundColor: '#2e3e27' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(product.id);
                      }}
                    >
                      Order now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CategoryProductList;
