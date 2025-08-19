import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProductsByCategory, getCategoryById } from '@/data/products';

const CategoryProductList = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  
  const categoryIdNum = categoryId ? parseInt(categoryId) : 0;
  const category = getCategoryById(categoryIdNum);
  const products = getProductsByCategory(categoryIdNum);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Category not found</h1>
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

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const handleProceedToBuy = (e: React.MouseEvent, productId: number) => {
    e.stopPropagation(); // Prevent product click
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige to-cream">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-rich-brown hover:text-olive-green transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Categories</span>
            </button>
          </div>
          <div className="mt-4">
            <h1 className="text-3xl md:text-4xl font-bold text-rich-brown">{category.title}</h1>
            <p className="text-gray-600 mt-2">Browse our selection of quality products</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {products.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-600 mb-4">No products available in this category</h2>
            <p className="text-gray-500">Please check back later for new products.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => handleProductClick(product.id)}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100"
              >
                {/* Product Image */}
                <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-6xl opacity-30">📦</div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  {/* Product Name */}
                  <h3 className="text-lg font-bold text-rich-brown mb-2 line-clamp-2 group-hover:text-olive-green transition-colors duration-300">
                    {product.name}
                  </h3>

                  {/* HSN Code */}
                  <p className="text-sm text-gray-500 mb-4">
                    HSN: {product.hsnCode}
                  </p>

                  {/* Proceed to Buy Button */}
                  <button
                    onClick={(e) => handleProceedToBuy(e, product.id)}
                    className="w-full bg-olive-green text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Proceed to Buy
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryProductList;
