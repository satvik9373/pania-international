import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Plus, Minus } from 'lucide-react';
import { getProductBySlug, getCategoryById, getProductsByCategory, generateSlug, products } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyIcons from '@/components/StickyIcons';
import { motion } from 'framer-motion';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Try to find product by slug, fallback to finding by generated slug from name
  let product = getProductBySlug(slug || '');
  if (!product && slug) {
    // Fallback: try to find by name-generated slug
    product = products.find(p => generateSlug(p.name) === slug);
  }
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  // Get related products from the same category
  const relatedProducts = getProductsByCategory(product.categoryId)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleOrderNow = () => {
    navigate('/spice-import-form');
  };

  const handleSuggestedProductClick = (suggestedProductId: number) => {
    navigate(`/product/${suggestedProductId}`);
  };

  // Create multiple product images (using same image for demo)
  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image,
    product.image
  ];

  const handleAddToCart = () => {
    navigate('/spice-import-form');
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const tabs = [
    { id: 'description', label: 'Product Description' },
    { id: 'benefits', label: 'Key Benefits' },
    { id: 'ingredients', label: 'Ingredients' }
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed text-base">
              Wild Flower Honey is a multi-floral honey, responsibly collected from bees feeding on wild forest flowers nectar from the forest of the Himalayas. The honey is rich in bio-diverse vitamins, minerals, and amino acids boosting good health. 100% Natural | Ayurvedic | No added sugar
            </p>
          </div>
        );
      case 'benefits':
        return (
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">Premium quality sourced from trusted Indian farms</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">Processed using traditional methods to retain natural properties</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">Meets international food safety and quality standards</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">Rich in natural flavors and nutritional benefits</span>
            </div>
          </div>
        );
      case 'ingredients':
        return (
          <div className="space-y-3">
            <p className="text-gray-700 leading-relaxed">
              100% Pure {product.name} - No artificial additives, preservatives, or chemicals added.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our products are naturally processed and contain only authentic ingredients sourced from certified organic farms.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Single Product Image */}
          <div className="lg:col-span-1">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Order Now Button - Below Image */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Order Now
            </button>
          </div>

          {/* Right Side - Product Details */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                {product.name}
              </h1>

              {/* HSN Code */}
              <div className="mb-6 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500">HSN CODE:</span>
                  <span className="text-base font-bold text-gray-900">{product.hsnCode}</span>
                </div>
              </div>

              {/* Product Description Expandable Sections */}
              <div className="bg-green-50 rounded-lg mb-4 overflow-hidden">
                <div 
                  className="flex items-center justify-between p-3 cursor-pointer hover:bg-green-100 transition-colors"
                  onClick={() => setActiveTab(activeTab === 'description' ? 'description' : 'description')}
                >
                  <div>
                    <span className="text-green-600 font-medium">Product Description</span>
                    <div className="text-sm text-gray-600">View detailed information</div>
                  </div>
                  <div className={`text-orange-500 cursor-pointer transform transition-transform rotate-90`}>{'>'}</div>
                </div>
                <div className="px-3 pb-3 border-t border-green-200">
                  <div className="pt-3">
                    <p className="text-gray-700 leading-relaxed text-base">
                      Wild Flower Honey is a multi-floral honey, responsibly collected from bees feeding on wild forest flowers nectar from the forest of the Himalayas. The honey is rich in bio-diverse vitamins, minerals, and amino acids boosting good health. 100% Natural | Ayurvedic | No added sugar
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg mb-4 overflow-hidden">
                <div 
                  className="flex items-center justify-between p-3 cursor-pointer hover:bg-green-100 transition-colors"
                  onClick={() => setActiveTab(activeTab === 'benefits' ? '' : 'benefits')}
                >
                  <div>
                    <span className="text-green-600 font-medium">Key Benefits</span>
                    <div className="text-sm text-gray-600">Health & quality benefits</div>
                  </div>
                  <div className={`text-orange-500 cursor-pointer transform transition-transform ${
                    activeTab === 'benefits' ? 'rotate-90' : ''
                  }`}>{'>'}</div>
                </div>
                {activeTab === 'benefits' && (
                  <div className="px-3 pb-3 border-t border-green-200">
                    <div className="pt-3 space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Premium quality sourced from trusted Indian farms</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Processed using traditional methods to retain natural properties</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Meets international food safety and quality standards</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Rich in natural flavors and nutritional benefits</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-green-50 rounded-lg mb-6 overflow-hidden">
                <div 
                  className="flex items-center justify-between p-3 cursor-pointer hover:bg-green-100 transition-colors"
                  onClick={() => setActiveTab(activeTab === 'ingredients' ? '' : 'ingredients')}
                >
                  <div>
                    <span className="text-green-600 font-medium">Ingredients</span>
                    <div className="text-sm text-gray-600">View composition details</div>
                  </div>
                  <div className={`text-orange-500 cursor-pointer transform transition-transform ${
                    activeTab === 'ingredients' ? 'rotate-90' : ''
                  }`}>{'>'}</div>
                </div>
                {activeTab === 'ingredients' && (
                  <div className="px-3 pb-3 border-t border-green-200">
                    <div className="pt-3 space-y-3">
                      <p className="text-gray-700 leading-relaxed">
                        100% Pure {product.name} - No artificial additives, preservatives, or chemicals added.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Our products are naturally processed and contain only authentic ingredients sourced from certified organic farms.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Products Section */}  
        {relatedProducts.length > 0 && (
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Coolvetica, sans-serif' }}>Related Products</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((suggestedProduct, index) => (
                <motion.div
                  key={suggestedProduct.id}
                  className="group cursor-pointer h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 
                  }}
                  onClick={() => handleSuggestedProductClick(suggestedProduct.id)}
                >
                  <div className="flex flex-col items-center h-full">
                    {/* Product Image Card - Fixed height */}
                    <div className="relative w-full max-w-[240px] h-[200px] rounded-2xl overflow-hidden shadow-lg bg-white">
                      <img 
                        src={suggestedProduct.image} 
                        alt={suggestedProduct.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Product Info Below - Flex grow to fill remaining space */}
                    <div className="flex flex-col justify-between flex-grow items-center gap-2 mt-4 w-full">
                      {/* Product Name - Fixed height area */}
                      <h3 className="text-base font-medium text-black text-center leading-tight px-2 min-h-[3rem] flex items-center" style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                        {suggestedProduct.name}
                      </h3>

                      {/* Grid layout: HSN Code on left, Order now Button on right */}
                      <div className="grid grid-cols-2 gap-2 w-full items-center mt-auto">
                        {/* HSN Code - Left side */}
                        <p className="text-xs text-black text-left font-medium" style={{ fontFamily: 'Coolvetica, sans-serif' }}>
                          {suggestedProduct.hsnCode}
                        </p>

                        {/* Order now Button - Right side (smaller) */}
                        <button 
                          className="text-white py-1 px-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 hover:shadow-md text-xs"
                          style={{ backgroundColor: '#2e3e27', fontFamily: 'Coolvetica, sans-serif' }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSuggestedProductClick(suggestedProduct.id);
                          }}
                        >
                          Order now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      <StickyIcons />
      <Footer />
    </div>
  );
};

export default ProductDetail;
