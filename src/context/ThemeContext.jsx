import React, { createContext, useContext, useEffect, useState } from 'react';
import { sounds } from '../utils/soundEffects';

/**
 * COLOR THEME PRESETS
 * Allows users to choose attractive colorful themes or create comfort view.
 */
export const THEME_PRESETS = {
  cyberpunk: {
    id: 'cyberpunk',
    name: 'Cyberpunk Neon',
    description: 'Electric cyan, neon violet & vibrant magenta',
    mode: 'dark',
    bgClass: 'theme-cyberpunk',
    primaryColor: '#00d2ff',
    secondaryColor: '#a855f7',
    accentColor: '#ec4899',
    bgHex: '#070b18',
    cardBg: 'rgba(12, 19, 39, 0.75)',
    gradient: 'from-cyan-400 via-indigo-500 to-fuchsia-500',
    swatch: ['#00d2ff', '#a855f7', '#ec4899'],
  },
  ocean: {
    id: 'ocean',
    name: 'Midnight Ocean',
    description: 'Deep royal navy, azure blue & aqua marine',
    mode: 'dark',
    bgClass: 'theme-ocean',
    primaryColor: '#38bdf8',
    secondaryColor: '#0284c7',
    accentColor: '#2dd4bf',
    bgHex: '#081120',
    cardBg: 'rgba(10, 25, 47, 0.75)',
    gradient: 'from-sky-400 via-blue-500 to-teal-400',
    swatch: ['#38bdf8', '#0284c7', '#2dd4bf'],
  },
  emerald: {
    id: 'emerald',
    name: 'Emerald Matrix',
    description: 'Obsidian black, neon mint & glowing emerald',
    mode: 'dark',
    bgClass: 'theme-emerald',
    primaryColor: '#10b981',
    secondaryColor: '#059669',
    accentColor: '#34d399',
    bgHex: '#05110d',
    cardBg: 'rgba(8, 28, 20, 0.75)',
    gradient: 'from-emerald-400 via-teal-500 to-lime-400',
    swatch: ['#10b981', '#34d399', '#a3e635'],
  },
  sunset: {
    id: 'sunset',
    name: 'Sunset Nebula',
    description: 'Cosmic twilight, glowing coral & sunset amber',
    mode: 'dark',
    bgClass: 'theme-sunset',
    primaryColor: '#f97316',
    secondaryColor: '#ec4899',
    accentColor: '#fbbf24',
    bgHex: '#140c1c',
    cardBg: 'rgba(30, 16, 40, 0.75)',
    gradient: 'from-amber-400 via-rose-500 to-purple-600',
    swatch: ['#f97316', '#ec4899', '#fbbf24'],
  },
  amethyst: {
    id: 'amethyst',
    name: 'Royal Amethyst',
    description: 'Deep velvet violet, rich purple & electric lilac',
    mode: 'dark',
    bgClass: 'theme-amethyst',
    primaryColor: '#c084fc',
    secondaryColor: '#9333ea',
    accentColor: '#f43f5e',
    bgHex: '#0f091f',
    cardBg: 'rgba(23, 14, 46, 0.75)',
    gradient: 'from-purple-400 via-violet-600 to-pink-500',
    swatch: ['#c084fc', '#9333ea', '#f43f5e'],
  },
  paper: {
    id: 'paper',
    name: 'Paper Warmth (Comfort)',
    description: 'Soft eye-friendly warm ivory & dark chocolate slate',
    mode: 'light',
    bgClass: 'theme-paper',
    primaryColor: '#d97706',
    secondaryColor: '#b45309',
    accentColor: '#0284c7',
    bgHex: '#fcfaf7',
    cardBg: 'rgba(255, 255, 255, 0.92)',
    gradient: 'from-amber-600 via-orange-600 to-rose-600',
    swatch: ['#d97706', '#78350f', '#0284c7'],
  },
  minimalLight: {
    id: 'minimalLight',
    name: 'Clean Studio Light',
    description: 'Crisp bright modern aesthetic with vibrant electric highlights',
    mode: 'light',
    bgClass: 'theme-minimal-light',
    primaryColor: '#0284c7',
    secondaryColor: '#4f46e5',
    accentColor: '#9333ea',
    bgHex: '#f8fafc',
    cardBg: 'rgba(255, 255, 255, 0.95)',
    gradient: 'from-sky-500 via-indigo-600 to-purple-600',
    swatch: ['#0284c7', '#4f46e5', '#9333ea'],
  }
};

const ThemeContext = createContext({
  activePreset: 'cyberpunk',
  setPreset: () => {},
  themeMode: 'dark',
  toggleThemeMode: () => {},
  bgEffect: 'mesh',
  setBgEffect: () => {},
  bgIntensity: 'vibrant',
  setBgIntensity: () => {},
  fontSize: 'normal',
  setFontSize: () => {},
  highContrast: false,
  setHighContrast: () => {},
  reducedMotion: false,
  setReducedMotion: () => {},
  soundEnabled: false,
  setSoundEnabled: () => {},
  cursorEnabled: true,
  setCursorEnabled: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [activePreset, setActivePreset] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-preset') || 'cyberpunk';
    }
    return 'cyberpunk';
  });

  const [bgEffect, setBgEffect] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-bgeffect') || 'mesh';
    }
    return 'mesh';
  });

  const [bgIntensity, setBgIntensity] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-bgintensity') || 'vibrant';
    }
    return 'vibrant';
  });

  const [fontSize, setFontSize] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-fontsize') || 'normal';
    }
    return 'normal';
  });

  const [highContrast, setHighContrast] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-contrast') === 'true';
    }
    return false;
  });

  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-motion') === 'true';
    }
    return false;
  });

  const [soundEnabled, setSoundEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-sound') === 'true';
    }
    return false;
  });

  const [cursorEnabled, setCursorEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-cursor') !== 'false';
    }
    return true;
  });

  const presetConfig = THEME_PRESETS[activePreset] || THEME_PRESETS.cyberpunk;
  const themeMode = presetConfig.mode;

  useEffect(() => {
    const root = document.documentElement;

    // Remove old theme classes
    Object.values(THEME_PRESETS).forEach((p) => {
      root.classList.remove(p.bgClass);
    });

    // Add current theme class
    root.classList.add(presetConfig.bgClass);

    // Toggle dark / light class
    if (presetConfig.mode === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }

    // Set CSS custom variables
    root.style.setProperty('--primary-accent', presetConfig.primaryColor);
    root.style.setProperty('--secondary-accent', presetConfig.secondaryColor);
    root.style.setProperty('--tertiary-accent', presetConfig.accentColor);
    root.style.setProperty('--theme-bg', presetConfig.bgHex);

    // High Contrast class
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Font size scaling
    if (fontSize === 'large') {
      root.style.fontSize = '17.5px';
    } else if (fontSize === 'xlarge') {
      root.style.fontSize = '19px';
    } else {
      root.style.fontSize = '16px';
    }

    // Reduced motion class
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    localStorage.setItem('portfolio-preset', activePreset);
    localStorage.setItem('portfolio-bgeffect', bgEffect);
    localStorage.setItem('portfolio-bgintensity', bgIntensity);
    localStorage.setItem('portfolio-fontsize', fontSize);
    localStorage.setItem('portfolio-contrast', String(highContrast));
    localStorage.setItem('portfolio-motion', String(reducedMotion));
    localStorage.setItem('portfolio-sound', String(soundEnabled));
    localStorage.setItem('portfolio-cursor', String(cursorEnabled));

    sounds.enabled = soundEnabled;
  }, [activePreset, presetConfig, highContrast, fontSize, reducedMotion, soundEnabled, cursorEnabled, bgEffect, bgIntensity]);

  const setPreset = (presetKey) => {
    if (THEME_PRESETS[presetKey]) {
      setActivePreset(presetKey);
      sounds.playPop();
    }
  };

  const toggleThemeMode = () => {
    if (presetConfig.mode === 'dark') {
      setPreset('minimalLight');
    } else {
      setPreset('cyberpunk');
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        activePreset,
        currentPresetConfig: presetConfig,
        setPreset,
        themeMode,
        toggleThemeMode,
        bgEffect,
        setBgEffect,
        bgIntensity,
        setBgIntensity,
        fontSize,
        setFontSize,
        highContrast,
        setHighContrast,
        reducedMotion,
        setReducedMotion,
        soundEnabled,
        setSoundEnabled,
        cursorEnabled,
        setCursorEnabled,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
