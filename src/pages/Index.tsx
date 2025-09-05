
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from '../components/Loader';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import CategorySection from '../components/CategorySection';
import ProductSection from '../components/ProductSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import FAQSection from '../components/FAQSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
  <div className="min-h-screen">
      <AnimatePresence>
        {isLoading && <Loader onComplete={handleLoaderComplete} />}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <AnnouncementBar />
          <Navbar />
          <HeroSlider />
          <CategorySection />
          <ProductSection />
          <ServicesSection />
          <TestimonialsSection />
          <BlogSection />
          <FAQSection />
          
          {/* Additional content sections */}
          <section className="py-12 bg-olive-green">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-8 sm:mb-12">
                  Why Pania?
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
                  <div className="text-center">
                    <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl text-white mb-2">100% Clean</h3>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl text-white mb-2">Farm Fresh</h3>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1v6m6-6v6" />
                      </svg>
                    </div>
                    <h3 className="text-xl text-white mb-2">Made in Small Batches</h3>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-xl text-white mb-2">Rooted in Tradition</h3>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default Index;
