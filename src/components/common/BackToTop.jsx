import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Floating Back To Top Button
 * Appears when the user scrolls past 400px and scrolls smoothly to the top.
 */
export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className="fixed bottom-7 right-7 z-40 p-3 rounded-xl nexora-card border border-cyan-500/30 text-cyan-400 hover:text-white hover:border-cyan-400 shadow-[0_4px_25px_rgba(0,210,255,0.25)] transition-all duration-300 hover:scale-110 active:scale-95 group"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
    </button>
  );
};
