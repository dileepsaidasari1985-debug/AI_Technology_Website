import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

/**
 * NEXORA AI - Interactive Neural Network & Particle Mesh Canvas
 * Simulates active synapses, neural nodes, and mouse proximity attraction.
 */
export const InteractiveBackground = () => {
  const { themeMode, presetConfig } = useTheme();
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 160 });

  useEffect(() => {
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

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Particle nodes count based on screen width
    const nodeCount = Math.floor(Math.min(width, 1600) / 16);
    const nodes = [];

    const isLight = themeMode === 'light';
    const primary = presetConfig?.primaryColor || (isLight ? '#0284c7' : '#00d2ff');
    const secondary = presetConfig?.secondaryColor || (isLight ? '#4f46e5' : '#8b5cf6');
    const accent = presetConfig?.accentColor || (isLight ? '#7c3aed' : '#ec4899');

    const colors = [primary, secondary, accent];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.2 + 0.9,
        color: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: Math.random() * 0.5 + 0.25,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulseVal: Math.random() * Math.PI,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;

      // Draw and update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;
        node.pulseVal += node.pulseSpeed;

        // Wrap around boundaries
        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        // Mouse interaction (subtle attraction / deflection)
        const dxMouse = mouse.x - node.x;
        const dyMouse = mouse.y - node.y;
        const distMouse = Math.hypot(dxMouse, dyMouse);

        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          node.x -= (dxMouse / distMouse) * force * 1.5;
          node.y -= (dyMouse / distMouse) * force * 1.5;
        }

        const alphaPulse = node.baseAlpha + Math.sin(node.pulseVal) * 0.2;
        const finalAlpha = Math.max(0.1, Math.min(0.85, alphaPulse)) * (isLight ? 0.35 : 0.7);

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = finalAlpha;
        ctx.fill();

        // Connect nearby nodes to form neural network synapses
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dist = Math.hypot(node.x - other.x, node.y - other.y);

          if (dist < 115) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            const lineAlpha = ((115 - dist) / 115) * 0.22 * (isLight ? 0.3 : 0.85);
            ctx.strokeStyle = node.color;
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [themeMode, presetConfig]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute -top-[20%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-cyan-600/10 dark:bg-cyan-500/15 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-[35%] -right-[15%] w-[50vw] h-[50vw] rounded-full bg-purple-600/10 dark:bg-purple-600/15 blur-[140px] pointer-events-none animate-float" />
      <div className="absolute -bottom-[15%] left-[25%] w-[45vw] h-[45vw] rounded-full bg-blue-600/10 dark:bg-blue-600/15 blur-[130px] pointer-events-none animate-float-reverse" />

      {/* Neural Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-75 dark:opacity-85"
      />
    </div>
  );
};
