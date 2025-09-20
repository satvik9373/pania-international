import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook that scrolls to the top of the page when the route changes.
 * This ensures every page starts from the top, providing a professional user experience.
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever the pathname changes
    // Using instant scrolling for better compatibility across all browsers
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default useScrollToTop;