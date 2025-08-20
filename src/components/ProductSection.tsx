import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProductSection = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: 'A2 Bilona Ghee',
      hsn: 'HSN: 04059020',
      image: '/lovable-uploads/3d858f04-6710-4121-bdee-0eb6c06c4963.png',
      hoverImage: '/lovable-uploads/8e8c0e63-775d-49d4-a697-1974ae91bba3.png'
    },
    {
      id: 2,
      name: 'Organic Rice Flour',
      hsn: 'HSN: 11022000',
      image: '/lovable-uploads/8e8c0e63-775d-49d4-a697-1974ae91bba3.png',
      hoverImage: '/lovable-uploads/3d858f04-6710-4121-bdee-0eb6c06c4963.png'
    },
    {
      id: 3,
      name: 'Cold Pressed Mustard Oil',
      hsn: 'HSN: 15155000',
      image: '/lovable-uploads/e8effae9-a554-406f-a63b-176687ffccdf.png',
      hoverImage: '/lovable-uploads/3d858f04-6710-4121-bdee-0eb6c06c4963.png'
    },
    {
      id: 4,
      name: 'Organic Jaggery Powder',
      hsn: 'HSN: 17011200',
      image: '/lovable-uploads/3d858f04-6710-4121-bdee-0eb6c06c4963.png',
      hoverImage: '/lovable-uploads/e8effae9-a554-406f-a63b-176687ffccdf.png'
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
        <div className="flex justify-center items-center mb-8">
          <h2 className="text-3xl font-wasted text-black">Best Sellers</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="cursor-pointer flex flex-col items-center"
              onClick={() => handleProductClick(product.id)}
            >
              {/* Subtle card background */}
              <div className="w-full max-w-[280px] rounded-2xl p-4 flex flex-col items-center border border-gray-100 bg-transparent">
                {/* White Square Image Box with hover swap */}
                <div className="bg-white rounded-xl shadow-sm transition-all duration-300 aspect-square w-full max-w-[220px] p-4 flex items-center justify-center relative overflow-hidden group">
                  {product.image ? (
                    <>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full max-w-[140px] max-h-[140px] object-contain transition-opacity duration-300"
                      />
                      {product.hoverImage && (
                        <img
                          src={product.hoverImage}
                          alt={`${product.name} hover`}
                          className="absolute inset-0 m-auto w-full h-full max-w-[140px] max-h-[140px] object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                      )}
                    </>
                  ) : (
                    <span className="text-6xl opacity-30">📦</span>
                  )}
                </div>

                {/* Free-floating Product Info Below */}
                <div className="flex flex-col items-center gap-3 mt-4 w-full">
                {/* Product Name */}
                <h3 className="text-base font-bold text-black text-center leading-tight line-clamp-2">
                  {product.name}
                </h3>

                {/* HSN Code */}
                <p className="text-xs text-black text-center font-medium">
                  {product.hsn}
                </p>

                {/* Contact Button */}
                <button 
                  className="text-white py-2 px-6 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-md text-sm"
                  style={{ backgroundColor: '#2e3e27' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleContactForMore();
                  }}
                >
                  Contact for more
                </button>
              </div>
              {/* close subtle card wrapper */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
