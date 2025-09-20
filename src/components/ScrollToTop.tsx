import { useScrollToTop } from '@/hooks/use-scroll-to-top';

/**
 * ScrollToTop component that automatically scrolls to the top when the route changes.
 * Place this component inside your Router to enable scroll-to-top functionality.
 */
const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

export default ScrollToTop;