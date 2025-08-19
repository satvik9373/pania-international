import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProductById, getCategoryById } from '@/data/products';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  
  const productIdNum = productId ? parseInt(productId) : 0;
  const product = getProductById(productIdNum);
  const category = product ? getCategoryById(product.categoryId) : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-olive-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const handleProceedToBuy = () => {
    navigate('/contact');
  };

  const handleBackToCategory = () => {
    navigate(`/category/${product.categoryId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige to-cream">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={handleBackToCategory}
              className="flex items-center gap-2 text-rich-brown hover:text-olive-green transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to {category?.title}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <div className="text-9xl opacity-30">📦</div>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Product Title */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-rich-brown mb-3">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600">
                HSN Code: <span className="font-semibold">{product.hsnCode}</span>
              </p>
            </div>

            {/* Category Badge */}
            {category && (
              <div className="inline-block">
                <span className={`${category.bgColor} ${category.textColor} px-4 py-2 rounded-full text-sm font-semibold`}>
                  {category.title}
                </span>
              </div>
            )}

            {/* Product Description */}
            {product.description && (
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-rich-brown mb-3">Product Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {/* Product Features */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-rich-brown mb-4">Product Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-olive-green rounded-full"></span>
                  Premium quality sourcing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-olive-green rounded-full"></span>
                  Carefully processed and packaged
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-olive-green rounded-full"></span>
                  Direct from trusted suppliers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-olive-green rounded-full"></span>
                  HSN Code: {product.hsnCode} certified
                </li>
              </ul>
            </div>

            {/* Proceed to Buy Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleProceedToBuy}
              className="w-full bg-olive-green text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Proceed to Buy
            </motion.button>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-olive-green/10 to-rich-brown/10 p-6 rounded-xl border border-olive-green/20">
              <h4 className="font-semibold text-rich-brown mb-2">Need more information?</h4>
              <p className="text-gray-600 text-sm">
                Contact our team for detailed product specifications, bulk pricing, and availability.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
