import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className="fixed bottom-6 right-6 z-40 p-3.5 bg-[var(--bg-secondary)]/90 backdrop-blur-md border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--text-primary)] hover:bg-[var(--btn-primary-bg)] hover:text-[var(--btn-primary-text)] transition-all duration-300 shadow-2xl group focus:outline-none"
    >
      <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
};

export default ScrollToTop;
