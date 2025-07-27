
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen font-kalnia">
      <AnimatePresence>
        {isLoading && <Loader onComplete={handleLoaderComplete} />}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />
          <HeroSlider />
          
          {/* Additional content sections */}
          <section className="py-20 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-kalnia text-rich-brown mb-8">
                  Experience Pania<span className="text-olive-green">International</span>
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto font-kalnia">
                  Discover the finest natural products, crafted with traditional methods 
                  and modern precision for your wellness journey.
                </p>
                
                <div className="grid md:grid-cols-3 gap-12 mt-16">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-olive-green rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-kalnia text-rich-brown mb-4">Premium Quality</h3>
                    <p className="text-gray-600 font-kalnia">Sourced from the finest farms across India with rigorous quality standards</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-kalnia text-rich-brown mb-4">100% Natural</h3>
                    <p className="text-gray-600 font-kalnia">No preservatives, artificial colors, or harmful additives</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-olive-green rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-kalnia text-rich-brown mb-4">Traditional Craft</h3>
                    <p className="text-gray-600 font-kalnia">Time-honored processes passed down through generations</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <footer className="bg-rich-brown text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-kalnia mb-6">
                    Pania<span className="text-olive-green">International</span>
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg font-kalnia">
                    Bringing you the finest natural products from farm to table. 
                    Experience the purity of traditional Indian agriculture with modern excellence.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-kalnia mb-6">Quick Links</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li><a href="#" className="hover:text-olive-green transition-colors font-kalnia">About Us</a></li>
                    <li><a href="#" className="hover:text-olive-green transition-colors font-kalnia">Products</a></li>
                    <li><a href="#" className="hover:text-olive-green transition-colors font-kalnia">Our Story</a></li>
                    <li><a href="#" className="hover:text-olive-green transition-colors font-kalnia">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-kalnia mb-6">Support</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li><a href="#" className="hover:text-olive-green transition-colors font-kalnia">FAQ</a></li>
                    <li><a href="#" className="hover:text-olive-green transition-colors font-kalnia">Shipping Info</a></li>
                    <li><a href="#" className="hover:text-olive-green transition-colors font-kalnia">Returns</a></li>
                    <li><a href="#" className="hover:text-olive-green transition-colors font-kalnia">Track Order</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-600 mt-12 pt-8 text-center">
                <p className="text-gray-300 text-lg font-kalnia">
                  © 2024 Pania International. All rights reserved. Crafted with passion in India.
                </p>
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
};

export default Index;
