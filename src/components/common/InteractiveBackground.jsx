import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

/**
 * Dynamic, colorful animated background component.
 * Allows user to toggle between:
 * - 'mesh': Rich glowing animated gradient orbs
 * - 'particles': Canvas interactive starfield particle mesh
 * - 'subtle': Minimal ambient glow
 */
export const InteractiveBackground = () => {
  const { currentPresetConfig, bgEffect, bgIntensity, reducedMotion } = useTheme();
  const canvasRef = useRef(null);

  // Calculate opacity multiplier from intensity
  const opacityMultiplier =
    bgIntensity === 'vibrant' ? 1 : bgIntensity === 'balanced' ? 0.65 : 0.35;

  // Canvas particle starfield effect
  useEffect(() => {
    if (bgEffect !== 'particles') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = Math.floor(Math.min(width, 1400) / 18);
    const particles = [];
    const color = currentPresetConfig.primaryColor || '#00d2ff';
    const altColor = currentPresetConfig.secondaryColor || '#a855f7';

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (reducedMotion ? 0 : 0.6),
        vy: (Math.random() - 0.5) * (reducedMotion ? 0 : 0.6),
        radius: Math.random() * 2 + 0.8,
        color: Math.random() > 0.4 ? color : altColor,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particles
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * opacityMultiplier;
        ctx.fill();

        // Connect nearby particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = ((100 - dist) / 100) * 0.15 * opacityMultiplier;
            ctx.stroke();
          }
        }
      });

      if (!reducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [bgEffect, currentPresetConfig, reducedMotion, opacityMultiplier]);

  const { primaryColor, secondaryColor, accentColor } = currentPresetConfig;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Canvas particle mesh (if selected) */}
      {bgEffect === 'particles' && (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      )}

      {/* 2. Color Mesh: Glowing morphing gradient orbs */}
      {bgEffect !== 'subtle' && (
        <>
          {/* Top-Right Glowing Orb */}
          <div
            className={`absolute -top-24 -right-24 w-96 sm:w-[500px] h-96 sm:h-[500px] rounded-full blur-[120px] transition-all duration-700 ${
              reducedMotion ? '' : 'animate-pulse-slow'
            }`}
            style={{
              backgroundColor: primaryColor,
              opacity: 0.22 * opacityMultiplier,
            }}
          />

          {/* Center-Left Vibrant Orb */}
          <div
            className={`absolute top-1/3 -left-32 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full blur-[140px] transition-all duration-700 ${
              reducedMotion ? '' : 'animate-float'
            }`}
            style={{
              backgroundColor: secondaryColor,
              opacity: 0.18 * opacityMultiplier,
            }}
          />

          {/* Bottom-Right Tertiary Orb */}
          <div
            className={`absolute bottom-20 right-1/4 w-72 sm:w-[420px] h-72 sm:h-[420px] rounded-full blur-[130px] transition-all duration-700 ${
              reducedMotion ? '' : 'animate-float-reverse'
            }`}
            style={{
              backgroundColor: accentColor,
              opacity: 0.15 * opacityMultiplier,
            }}
          />
        </>
      )}

      {/* 3. Subtle minimal mode glow */}
      {bgEffect === 'subtle' && (
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[160px] transition-all duration-700"
          style={{
            backgroundColor: primaryColor,
            opacity: 0.08 * opacityMultiplier,
          }}
        />
      )}

      {/* Fine-grain background texture / grid */}
      <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.045] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  );
};

