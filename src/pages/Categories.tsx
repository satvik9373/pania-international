import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';

const Categories = () => {
  const navigate = useNavigate();

  const allCategories = [
    {
      id: 1,
      title: 'Fresh Fruits & Vegetables',
      image: '/category-image/Fresh Fruits & Vegetables.png'
    },
    {
      id: 2,
      title: 'Oils, Fats & Ghee – Dairy Fat Products',
      image: '/category-image/dairy&fat.png'
    },
    {
      id: 3,
      title: 'Oils, Fats & Ghee – Cold Pressed Edible Oils',
      image: '/category-image/oil-fats&ghee.png'
    },
    {
      id: 4,
      title: 'Oils, Fats & Ghee – Refined Oils',
      image: '/category-image/Refined Oils.png'
    },
    {
      id: 5,
      title: 'Natural Sweeteners & Sugars',
      image: '/category-image/natural-sweetners.jpg'
    },
    {
      id: 6,
      title: 'Grains & Staples – Wheat Flour & Rice',
      image: '/category-image/Grains and staples.png'
    },
    {
      id: 7,
      title: 'Grains & Staples – Pulses',
      image: '/category-image/Grains and staples.png'
    },
    {
      id: 8,
      title: 'Pharmaceuticals & Nutraceuticals',
      image: '/category-image/natural-sweetners.jpg'
    },
    {
      id: 9,
      title: 'Essential Oils (Natural, Therapeutic Grade)',
      image: '/category-image/oil-fats&ghee.png'
    },
    {
      id: 10,
      title: 'Oleoresins (Spice Extracts)',
      image: '/category-image/Grains and staples.png'
    }
  ];

  const handleCategoryClick = (categoryId: number) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige to-cream font-sans">
      {/* Announcement */}
      <AnnouncementBar />
      
      <Navbar />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-terracotta w-24"></div>
              <h1 className="text-4xl font-bold text-rich-brown mx-8">All Categories</h1>
              <div className="h-px bg-terracotta w-24"></div>
            </div>
            <p className="text-xl text-gray-600">
              Explore our complete range of premium products
            </p>
          </div>

          {/* Categories Grid - 3-3-3-1 layout */}
          <div className="space-y-6">
            {/* First 9 categories in 3x3 grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allCategories.slice(0, 9).map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative bg-white rounded-2xl overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300 min-h-[250px] shadow-lg"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {/* Just the image, no text */}
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Last category centered */}
            {allCategories.length > 9 && (
              <div className="flex justify-center">
                <motion.div
                  key={allCategories[9].id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="relative bg-white rounded-2xl overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300 min-h-[250px] shadow-lg w-full max-w-sm"
                  onClick={() => handleCategoryClick(allCategories[9].id)}
                >
                  {/* Just the image, no text */}
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <img
                      src={allCategories[9].image}
                      alt={allCategories[9].title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Categories;
