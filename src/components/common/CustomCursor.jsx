import React, { useEffect, useState } from 'react';

/**
 * Responsive Animated Custom Cursor for Desktop Devices
 * Gracefully disabled on touchscreens to preserve battery and touch usability.
 */
export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports fine cursor or touch
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = Boolean(
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.closest('.interactive-card')
      );
      setIsPointer(isInteractive);
    };

    const onMouseDown = () => setIsHovered(true);
    const onMouseUp = () => setIsHovered(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  // Smooth lagging follower ring
  useEffect(() => {
    if (isTouchDevice) return;
    let animationFrameId;

    const followCursor = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      animationFrameId = requestAnimationFrame(followCursor);
    };

    animationFrameId = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Precision Inner Glowing Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] transition-transform duration-75 shadow-[0_0_10px_rgba(56,189,248,0.9)]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.4 : isPointer ? 0.6 : 1})`,
        }}
      />
      {/* Outer Follower Ring with Halo */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full transition-all duration-200 -translate-x-1/2 -translate-y-1/2 border ${
          isPointer
            ? 'w-12 h-12 border-cyan-400/80 bg-cyan-400/15 backdrop-blur-[1px] shadow-[0_0_25px_rgba(56,189,248,0.35)]'
            : isHovered
            ? 'w-10 h-10 border-purple-400/90 bg-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.4)]'
            : 'w-7 h-7 border-cyan-400/40 bg-cyan-500/5'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
        }}
      />
    </>
  );
};
