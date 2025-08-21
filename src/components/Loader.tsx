
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Loader images from graphical-assets folder
  const images = [
    {
      src: '/graphical-assets/loader-image.png',
      alt: 'Loading 1'
    },
    {
      src: '/graphical-assets/loader-img-2.png',
      alt: 'Loading 2'
    },
    {
      src: '/graphical-assets/loader-img-3.png',
      alt: 'Loading 3'
    }
  ];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        return nextIndex;
      });
    }, 800); // Show each image for 800ms

    // Auto-complete loader after 4 seconds
    const loaderTimeout = setTimeout(() => {
      clearInterval(imageInterval);
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }, 4000);

    return () => {
      clearInterval(imageInterval);
      clearTimeout(loaderTimeout);
    };
  }, [onComplete, images.length]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-warm-beige to-cream"
    >
      <div className="flex items-center justify-center">
        {/* Simple image display - no effects */}
        <div className="w-28 h-28">
          <img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
