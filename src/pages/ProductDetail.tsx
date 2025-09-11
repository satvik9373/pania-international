import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Plus, Minus } from 'lucide-react';
import { getProductById, getCategoryById, getProductsByCategory } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyIcons from '@/components/StickyIcons';
import { motion } from 'framer-motion';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('description');

  const product = getProductById(Number(productId));
  
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
              {product.description}
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 text-base">
              Our {product.name} is sourced directly from trusted suppliers and processed using traditional methods 
              to ensure maximum quality and authenticity. Each batch is carefully tested for purity and meets 
              international export standards.
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Side - Single Image */}
          <div className="flex justify-center">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-lg max-w-md w-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Soria, serif' }}>{product.name}</h1>
              
              {/* HSN Code */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500" style={{ fontFamily: 'InterTight-Medium, sans-serif' }}>HSN CODE: </span>
                  <span className="text-lg font-bold text-gray-900" style={{ fontFamily: 'InterTight-Medium, sans-serif' }}>
                    {product.hsnCode}
                  </span>
                </div>
              </div>

              {/* Order Now Button */}
              <div className="flex justify-start">
                <button
                  onClick={handleOrderNow}
                  className="bg-green-700 hover:bg-green-800 text-white py-3 px-8 rounded-full text-base font-semibold transition-colors w-fit"
                  style={{ fontFamily: 'InterTight-Medium, sans-serif' }}
                >
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="rounded-3xl shadow-lg mb-12 overflow-hidden backdrop-blur-sm bg-gradient-to-br from-white/80 to-gray-50/60">
          {/* Tab Headers */}
          <div className="border-b border-gray-200/50">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-5 text-sm font-medium transition-all duration-300 relative group hover:bg-white/30 hover:backdrop-blur-md ${
                    activeTab === tab.id
                      ? 'text-green-700 bg-white/40 border-b-3 border-green-600 shadow-sm'
                      : 'text-gray-600 hover:text-green-600'
                  } rounded-t-2xl mx-1 first:ml-0 last:mr-0 hover:transform hover:scale-105`}
                  style={{ fontFamily: 'InterTight-Medium, sans-serif' }}
                >
                  <div className={`absolute inset-0 rounded-t-2xl transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'bg-gradient-to-b from-green-50/50 to-transparent' 
                      : 'group-hover:bg-gradient-to-b group-hover:from-gray-50/30 group-hover:to-transparent'
                  }`} />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div 
            className="p-8 bg-gradient-to-br from-white/70 to-gray-50/40 backdrop-blur-sm transition-all duration-500 hover:bg-gradient-to-br hover:from-white/80 hover:to-gray-50/50" 
            style={{ fontFamily: 'Soria, serif' }}
          >
            <div className="transition-all duration-300 hover:transform hover:translateY(-1px)">
              {getTabContent()}
            </div>
          </div>
        </div>

        {/* Suggested Products Section */}
        {relatedProducts.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'InterTight-Medium, sans-serif' }}>Related Products</h2>
            
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
                      <h3 className="text-base font-medium text-black text-center leading-tight px-2 min-h-[3rem] flex items-center" style={{ fontFamily: 'Soria, serif' }}>
                        {suggestedProduct.name}
                      </h3>

                      {/* Grid layout: HSN Code on left, Order now Button on right */}
                      <div className="grid grid-cols-2 gap-2 w-full items-center mt-auto">
                        {/* HSN Code - Left side */}
                        <p className="text-xs text-black text-left font-medium" style={{ fontFamily: 'InterTight-Medium, sans-serif' }}>
                          {suggestedProduct.hsnCode}
                        </p>

                        {/* Order now Button - Right side (smaller) */}
                        <button 
                          className="text-white py-1 px-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 hover:shadow-md text-xs"
                          style={{ backgroundColor: '#2e3e27', fontFamily: 'InterTight-Medium, sans-serif' }}
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
