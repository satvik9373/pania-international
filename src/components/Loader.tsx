
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-complete loader after 1 second maximum
    const loaderTimeout = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }, 1000);

    return () => {
      clearTimeout(loaderTimeout);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: '#2E3E27' }}
    >
      <div className="flex items-center justify-center">
        {/* Pania Logo only */}
        <div className="w-48 h-48">
          <img
            src="/Pania-logo.png"
            alt="Pania International"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
