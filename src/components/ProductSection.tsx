import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProductSection = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: 'A2 Bilona Ghee',
      hsn: 'HSN: 04059020',
      image: '/product-image/ghee.jpeg',
      hoverImage: '/product-image/wheat.png'
    },
    {
      id: 2,
      name: 'Organic Wheat Flour',
      hsn: 'HSN: 11022000',
      image: '/product-image/wheat.png',
      hoverImage: '/product-image/ghee.jpeg'
    },
    {
      id: 3,
      name: 'A2 Bilona Ghee',
      hsn: 'HSN: 04059020',
      image: '/product-image/ghee.jpeg',
      hoverImage: '/product-image/wheat.png'
    },
    {
      id: 4,
      name: 'Organic Wheat Flour',
      hsn: 'HSN: 11022000',
      image: '/product-image/wheat.png',
      hoverImage: '/product-image/ghee.jpeg'
    }
  ];

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const handleContactForMore = () => {
    navigate('/contact');
  };

  return (
  <section className="py-16 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-start items-center mb-12">
          <h2 className="text-5xl font-wasted text-black">Best Sellers</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="cursor-pointer flex flex-col items-center"
              onClick={() => handleProductClick(product.id)}
            >
              {/* Larger card background */}
              <div className="w-full max-w-[320px] rounded-2xl p-6 flex flex-col items-center border border-gray-100 bg-transparent">
                {/* Larger White Square Image Box with proper hover swap */}
                <div className="bg-white rounded-xl shadow-sm transition-all duration-300 aspect-square w-full max-w-[280px] p-6 flex items-center justify-center relative overflow-hidden group">
                  {product.image ? (
                    <>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full max-w-[200px] max-h-[200px] object-contain transition-opacity duration-500 group-hover:opacity-0"
                      />
                      {product.hoverImage && (
                        <img
                          src={product.hoverImage}
                          alt={`${product.name} hover`}
                          className="absolute inset-0 m-auto w-full h-full max-w-[200px] max-h-[200px] object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                      )}
                    </>
                  ) : (
                    <span className="text-6xl opacity-30">📦</span>
                  )}
                </div>

                {/* Product Info Below */}
                <div className="flex flex-col items-center gap-3 mt-6 w-full">
                {/* Product Name */}
                <h3 className="text-lg font-bold text-black text-center leading-tight line-clamp-2">
                  {product.name}
                </h3>

                {/* Grid layout: HSN Code on left, Contact Button on right */}
                <div className="grid grid-cols-2 gap-2 w-full items-center">
                  {/* HSN Code - Left side */}
                  <p className="text-xs text-black text-left font-medium">
                    {product.hsn}
                  </p>

                  {/* Contact Button - Right side (smaller) */}
                  <button 
                    className="text-white py-1.5 px-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-md text-xs"
                    style={{ backgroundColor: '#2e3e27' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleContactForMore();
                    }}
                  >
                    Contact
                  </button>
                </div>
              </div>
              {/* close card wrapper */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
