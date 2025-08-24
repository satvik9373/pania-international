import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProductSection = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: 'Ghee',
      hsn: 'HSN: 04059020',
      image: '/product-image/ghee.png',
      hoverImage: '/product-image/ghee.jpeg'
    },
    {
      id: 2,
      name: 'Cold Press Oil',
      hsn: 'HSN: 15155000',
      image: '/product-image/Almond-Oil.webp',
      hoverImage: '/product-image/ghee.jpeg'
    },
    {
      id: 3,
      name: 'Wheat Flour',
      hsn: 'HSN: 11022000',
      image: '/product-image/wheat-flour.jpg',
      hoverImage: '/product-image/wheat.png'
    },
    {
      id: 4,
      name: 'Honey',
      hsn: 'HSN: 04090000',
      image: '/product-image/honey.jpg',
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
  <section className="py-16 bg-white font-sans relative">
      {/* Wave Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: "url('/graphical-assets/green_wave.png')",
          backgroundPosition: 'center bottom',
          backgroundSize: '100% auto'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex justify-start items-center mb-12">
          <h2 className="text-5xl font-serif text-black tracking-tight">BEST SELLING PRODUCTS</h2>
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
                  className="bg-white rounded-2xl transition-all duration-300 flex items-center justify-center relative overflow-hidden group"
                  style={{ 
                    width: '260.5px', 
                    height: '260.46px' 
                  }}
                >
                  {product.image ? (
                    <div className="relative w-full h-full">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      />
                      {product.hoverImage && product.hoverImage !== product.image && (
                        <img
                          src={product.hoverImage}
                          alt={`${product.name} hover`}
                          className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                      )}
                    </div>
                  ) : (
                    <span className="text-6xl opacity-30">📦</span>
                  )}
                </div>

                {/* Product Info Below - Pyramid Structure */}
                <div className="flex flex-col items-center gap-2 mt-4 w-full max-w-[260.5px]">
                  {/* Product Name - Top of pyramid */}
                  <h3 className="text-lg font-medium font-sans text-black text-center leading-tight tracking-tight">
                    {product.name}
                  </h3>

                  {/* HSN Code - Middle of pyramid */}
                  <p className="text-sm text-black text-center font-medium font-sans tracking-tight">
                    HSN: {product.hsn}
                  </p>

                  {/* Contact Button - Bottom of pyramid */}
                  <button 
                    className="text-white py-2 px-6 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-md text-sm font-sans mt-1 tracking-tight"
                    style={{ backgroundColor: '#2e3e27' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleContactForMore();
                    }}
                  >
                    Order Now
                  </button>
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
