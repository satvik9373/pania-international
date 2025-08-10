import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: 'Gir Cow A2 ghee - Made From Curd',
      price: '₹ 1,350.00',
      originalPrice: null,
      image: '/lovable-uploads/3d858f04-6710-4121-bdee-0eb6c06c4963.png',
      hoverImage: '/lovable-uploads/8e8c0e63-775d-49d4-a697-1974ae91bba3.png',
      rating: 5,
      reviews: '1801 reviews',
      sizes: ['500 ML', '250 ML', '1 L'],
      defaultSize: '500 ML',
      onSale: false,
      savings: null
    },
    {
      id: 2,
      name: 'Starter Pack',
      price: '₹ 1,263.00',
      originalPrice: '₹ 1,329',
      image: '/lovable-uploads/8e8c0e63-775d-49d4-a697-1974ae91bba3.png',
      hoverImage: '/lovable-uploads/3d858f04-6710-4121-bdee-0eb6c06c4963.png',
      rating: 5,
      reviews: '11 reviews',
      sizes: ['1kg Khapli Atta + 250ml Ghee + 250ml Oil'],
      defaultSize: '1kg Khapli Atta + 250ml Ghee + 250ml Oil',
      onSale: true,
      savings: '₹ 66.00',
      badge: 'Sale'
    },
    {
      id: 3,
      name: 'Khapli (Emmer) Wheat Atta',
      price: '₹ 469.00',
      originalPrice: null,
      image: '/lovable-uploads/e8effae9-a554-406f-a63b-176687ffccdf.png',
      hoverImage: '/lovable-uploads/3d858f04-6710-4121-bdee-0eb6c06c4963.png',
      rating: 4.5,
      reviews: '17 reviews',
      sizes: ['2 kg', '1 kg', '5 kg'],
      defaultSize: '2 kg',
      onSale: true,
      savings: '₹ 30.00',
      badge: 'Sale'
    },
    {
      id: 4,
      name: 'Cooking Pack',
      price: '₹ 2,707.00',
      originalPrice: '₹ 2,849',
      image: '/lovable-uploads/3d858f04-6710-4121-bdee-0eb6c06c4963.png',
      hoverImage: '/lovable-uploads/e8effae9-a554-406f-a63b-176687ffccdf.png',
      rating: 4.5,
      reviews: '11 reviews',
      sizes: ['2kg Khapli Atta + 1L Ghee'],
      defaultSize: '2kg Khapli Atta + 1L Ghee',
      onSale: true,
      savings: '₹ 142.00',
      badge: 'Sale'
    }
  ];

  // Track selected size and quantity per product
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : index < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
  <section className="py-16 bg-white font-sangira">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
      <h2 className="text-4xl font-bold text-rich-brown font-sangira">Best Sellers</h2>
      <button className="bg-olive-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 font-sangira">
            View All Products
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group border border-gray-100 h-full flex flex-col"
            >
              {/* Product Image */}
              <div className="relative bg-gradient-to-br from-warm-beige to-cream p-4 h-48 overflow-hidden">
                {/* Product Image with Hover Effect */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} hover`}
                    className="absolute inset-0 max-w-full max-h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 m-auto"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-rich-brown mb-2 line-clamp-2 font-sangira">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-rich-brown">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                  )}
                </div>

                {/* Selector and Rating Row */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  {/* Size Selector only */}
                  <div className="flex-1">
                    <Select
                      value={selectedSizes[product.id] ?? product.defaultSize}
                      onValueChange={(v) =>
                        setSelectedSizes((prev) => ({ ...prev, [product.id]: v }))
                      }
                    >
                      <SelectTrigger className="w-full h-10 text-sm">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        {product.sizes.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Rating - Right Side */}
                  <div className="flex items-center gap-1">
                    <div className="flex">{renderStars(product.rating)}</div>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-olive-green text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 mt-auto flex items-center justify-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Add to cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
