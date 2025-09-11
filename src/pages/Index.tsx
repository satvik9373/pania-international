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
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default Index;
