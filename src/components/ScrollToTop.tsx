import { ArrowUp } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';

export const ScrollToTop = () => {
  const { isVisible } = useScrollPosition();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-colors"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  ) : null;
};