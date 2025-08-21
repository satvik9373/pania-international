import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProductSection = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: 'Ghee',
      hsn: 'HSN: 04059020',
      image: '/product-image/ghee.jpeg',
      hoverImage: '/product-image/ghee.jpeg'
    },
    {
      id: 2,
      name: 'Cold Press Oil',
      hsn: 'HSN: 15155000',
      image: '/product-image/ghee.jpeg',
      hoverImage: '/product-image/ghee.jpeg'
    },
    {
      id: 3,
      name: 'Wheat Flour',
      hsn: 'HSN: 11022000',
      image: '/product-image/wheat.png',
      hoverImage: '/product-image/wheat.png'
    },
    {
      id: 4,
      name: 'Honey',
      hsn: 'HSN: 04090000',
      image: '/product-image/wheat.png',
      hoverImage: '/product-image/wheat.png'
    }
  ];

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const handleContactForMore = () => {
    navigate('/contact');
  };

  return (
  <section className="py-16 bg-white font-sans relative">
      {/* Wave Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: "url('/wave-bg.svg')",
          backgroundPosition: 'center bottom',
          backgroundSize: '100% auto'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex justify-start items-center mb-12">
          <h2 className="text-5xl font-serif text-black">Best Selling Products</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="cursor-pointer flex flex-col items-center"
              onClick={() => handleProductClick(product.id)}
            >
              {/* Fixed size product card */}
              <div className="flex flex-col items-center">
                {/* Product Image Box - Fixed dimensions: 260.5px x 260.46px */}
                <div 
                  className="bg-white rounded-xl shadow-sm transition-all duration-300 p-6 flex items-center justify-center relative overflow-hidden group"
                  style={{ 
                    width: '260.5px', 
                    height: '260.46px' 
                  }}
                >
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

                {/* Product Info Below - Outside the fixed card */}
                <div className="flex flex-col items-center gap-3 mt-4 w-full max-w-[260.5px]">
                  {/* Product Name */}
                  <h3 className="text-lg font-medium font-sans text-black text-center leading-tight">
                    {product.name}
                  </h3>

                  {/* Grid layout: HSN Code on left, Contact Button on right */}
                  <div className="grid grid-cols-2 gap-2 w-full items-center">
                    {/* HSN Code - Left side */}
                    <p className="text-xs text-black text-left font-medium font-sans">
                      {product.hsn}
                    </p>

                    {/* Contact Button - Right side (smaller) */}
                    <button 
                      className="text-white py-1.5 px-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-md text-xs font-sans"
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
