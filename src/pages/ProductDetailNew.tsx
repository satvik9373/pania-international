import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Plus, Minus } from 'lucide-react';
import { getProductById, getCategoryById } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyIcons from '@/components/StickyIcons';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

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

  // Create thumbnail images array (using same image multiple times for demo)
  const thumbnailImages = [
    product.image,
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
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <button 
              onClick={() => navigate('/')}
              className="hover:text-gray-900 transition-colors"
            >
              Home
            </button>
            <span>›</span>
            <button 
              onClick={() => navigate('/products')}
              className="hover:text-gray-900 transition-colors"
            >
              Products
            </button>
            <span>›</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Side - Images */}
          <div className="flex gap-4">
            {/* Thumbnail Strip */}
            <div className="flex flex-col gap-2">
              {thumbnailImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index ? 'border-green-600' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
                <img
                  src={thumbnailImages[selectedImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(4.64/5 Star)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">₹ 499.00</span>
                <span className="text-xl text-gray-500 line-through">₹ 589.00</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">Tax included.</p>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center gap-4">
                  <select 
                    value={quantity} 
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="border border-gray-300 rounded-lg px-4 py-3 min-w-[120px] focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}kg</option>
                    ))}
                  </select>
                  
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-green-700 hover:bg-green-800 text-white py-4 px-8 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                ADD TO CART
              </button>

              {/* HSN Code */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500">HSN CODE: </span>
                  <span className="text-sm font-medium text-gray-900">
                    {product.hsnCode}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          {/* Tab Headers */}
          <div className="border-b border-gray-200">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 text-sm font-medium transition-colors relative ${
                    activeTab === tab.id
                      ? 'text-gray-900 border-b-2 border-green-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {getTabContent()}
          </div>
        </div>
      </div>

      <StickyIcons />
      <Footer />
    </div>
  );
};

export default ProductDetail;
