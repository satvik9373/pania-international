
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-cream"
    >
      <div className="text-center">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-olive-green rounded-full flex items-center justify-center spin">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M12 2L13.09 8.26L19.5 7L16.5 12.74L22 14L15.74 16.5L17 22.5L12 19.5L7 22.5L8.26 16.5L2 14L7.5 12.74L4.5 7L10.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-rich-brown mb-2"
        >
          Pure & Natural
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-olive-green"
        >
          Loading goodness...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
