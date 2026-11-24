import React, { useEffect, useState } from 'react';

/**
 * Top Scroll Progress Indicator
 * Displays a glowing gradient bar representing scroll completion percentage.
 */
export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 shadow-[0_0_12px_rgba(0,210,255,0.8)] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
