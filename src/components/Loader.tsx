
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const images = [
    {
      src: '/lovable-uploads/e8effae9-a554-406f-a63b-176687ffccdf.png',
      alt: 'Ghee'
    },
    {
      src: '/lovable-uploads/8e8c0e63-775d-49d4-a697-1974ae91bba3.png',
      alt: 'Honey'
    },
    {
      src: '/lovable-uploads/3d858f04-6710-4121-bdee-0eb6c06c4963.png',
      alt: 'Commodity'
    }
  ];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= images.length) {
          clearInterval(imageInterval);
          // Start fade out after last image
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 500);
          return prevIndex;
        }
        return nextIndex;
      });
    }, 500);

    return () => clearInterval(imageInterval);
  }, [onComplete, images.length]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-warm-beige to-cream"
    >
      <div className="text-center">
        <div className="mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl"
            >
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-kalnia text-rich-brown mb-3"
        >
          Pania<span className="text-olive-green">International</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-olive-green opacity-80 font-kalnia"
        >
          Natural. Premium. Authentic.
        </motion.p>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 h-0.5 bg-olive-green mx-auto max-w-xs"
        />
      </div>
    </motion.div>
  );
};

export default Loader;
