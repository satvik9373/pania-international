import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProductById, getCategoryById, getProductsByCategory } from '@/data/products';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('description');
  
  const productIdNum = productId ? parseInt(productId) : 0;
  const product = getProductById(productIdNum);
  const category = product ? getCategoryById(product.categoryId) : null;
  const relatedProducts = product ? getProductsByCategory(product.categoryId).filter(p => p.id !== product.id).slice(0, 4) : [];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300"
            style={{ backgroundColor: '#2e3e27' }}
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const handleContactForMore = () => {
    navigate('/contact');
  };

  const handleBackToCategory = () => {
    navigate(`/category/${product.categoryId}`);
  };

  const handleRelatedProductClick = (relatedProductId: number) => {
    navigate(`/product/${relatedProductId}`);
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
            <p className="text-black leading-relaxed">
              {product.description}
            </p>
            <p className="text-black leading-relaxed mt-4">
              Our {product.name} is sourced directly from trusted suppliers and processed using traditional methods 
              to ensure maximum quality and authenticity. Each batch is carefully tested for purity and meets 
              international export standards.
            </p>
          </div>
        );
      case 'benefits':
        return (
          <div className="prose max-w-none">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-black">Premium quality sourced from trusted Indian farms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-black">Processed using traditional methods to retain natural properties</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-black">Meets international export quality standards</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-black">Available for bulk orders and private labeling</span>
              </li>
            </ul>
          </div>
        );
      case 'ingredients':
        return (
          <div className="prose max-w-none">
            <p className="text-black leading-relaxed">
              <strong>Primary Ingredient:</strong> 100% Pure {product.name}
            </p>
            <p className="text-black leading-relaxed mt-4">
              <strong>Processing Method:</strong> Traditional methods ensuring no artificial additives or preservatives
            </p>
            <p className="text-black leading-relaxed mt-4">
              <strong>Quality Certifications:</strong> FSSAI approved, Export quality standards
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Announcement */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar transparent />

      {/* Header */}
      <div className="shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={handleBackToCategory}
            className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to {category?.title}</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-white overflow-hidden mb-8">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square bg-white overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-8xl text-gray-300">📦</span>
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-start space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                  {product.name}
                </h1>
                <div className="mb-6">
                  <span className="text-sm font-medium text-gray-500">HSN CODE: </span>
                  <span className="text-lg font-semibold text-black">
                    {product.hsnCode}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-black">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white overflow-hidden mb-8">
          {/* Tab Headers */}
          <div className="border-b border-gray-200">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm font-medium transition-colors duration-300 border-b-2 ${
                    activeTab === tab.id
                      ? 'border-black text-black'
                      : 'border-transparent text-gray-500 hover:text-black'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            <div>
              {getTabContent()}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="bg-white overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-black mb-8 text-center">
                You Might Also Like
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <div
                    key={relatedProduct.id}
                    className="cursor-pointer flex flex-col items-center"
                    onClick={() => handleRelatedProductClick(relatedProduct.id)}
                  >
                    {/* Simple Image Box */}
                    <div className="bg-white aspect-square w-full max-w-[200px] p-4 flex items-center justify-center">
                      {relatedProduct.image ? (
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-full max-w-[120px] max-h-[120px] object-contain"
                        />
                      ) : (
                        <span className="text-4xl opacity-30">📦</span>
                      )}
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex flex-col items-center gap-2 mt-3 w-full">
                      <h3 className="text-lg font-medium text-black text-center leading-tight">
                        {relatedProduct.name}
                      </h3>
                      
                      <p className="text-sm text-gray-500 text-center font-medium">
                        HSN: {relatedProduct.hsnCode}
                      </p>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleContactForMore();
                        }}
                        className="text-white py-2 px-6 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all duration-300 mt-1"
                        style={{ backgroundColor: '#2e3e27' }}
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetail;
