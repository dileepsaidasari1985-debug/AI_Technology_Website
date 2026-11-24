import React, { useState } from 'react';
import { 
  Palette, 
  X, 
  Sparkles, 
  Sun, 
  Moon, 
  Volume2, 
  VolumeX, 
  MousePointer, 
  Eye, 
  Sliders, 
  RotateCcw,
  Check,
  Zap,
  Activity,
  Layers,
  Type
} from 'lucide-react';
import { useTheme, THEME_PRESETS } from '../../context/ThemeContext';
import { sounds } from '../../utils/soundEffects';

export const ThemeStudioDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    activePreset,
    setPreset,
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
  } = useTheme();

  const handleToggleOpen = () => {
    sounds.playClick();
    setIsOpen(prev => !prev);
  };

  const handleResetDefaults = () => {
    sounds.playPop();
    setPreset('cyberpunk');
    setBgEffect('mesh');
    setBgIntensity('vibrant');
    setFontSize('normal');
    setHighContrast(false);
    setReducedMotion(false);
    setSoundEnabled(false);
    setCursorEnabled(true);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={handleToggleOpen}
        className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 text-white shadow-[0_4px_25px_rgba(56,189,248,0.4)] hover:shadow-[0_4px_30px_rgba(168,85,247,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center gap-2"
        title="Customize Theme & Reading Comfort"
        aria-label="Open Theme and Reading Comfort Studio"
      >
        <Palette className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
        <span className="hidden sm:inline-block pr-1 font-mono text-xs font-bold tracking-wide">
          Theme & Comfort
        </span>
      </button>

      {/* Slide-out Drawer Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Settings Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full sm:w-96 glass-card bg-slate-900/95 dark:bg-navy-950/95 border-l border-white/10 shadow-2xl transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-500 flex items-center justify-center text-white">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Theme & Comfort Studio
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Personalize colors & accessibility
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Section 1: Color Presets */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5" />
                <span>Color Themes</span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                {Object.keys(THEME_PRESETS).length} Presets
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {Object.values(THEME_PRESETS).map((preset) => {
                const isSelected = activePreset === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => setPreset(preset.id)}
                    className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-cyan-400 bg-cyan-500/15 shadow-md shadow-cyan-500/10'
                        : 'border-white/5 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-2">
                        <span>{preset.name}</span>
                        {preset.mode === 'light' && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 font-mono">
                            Light
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate max-w-[210px]">
                        {preset.description}
                      </div>
                    </div>

                    {/* Color Swatch Dots */}
                    <div className="flex items-center gap-1.5">
                      {preset.swatch.map((col, idx) => (
                        <span
                          key={idx}
                          className="w-3.5 h-3.5 rounded-full shadow-sm"
                          style={{ backgroundColor: col }}
                        />
                      ))}
                      {isSelected && (
                        <Check className="w-4 h-4 text-cyan-400 ml-1" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 2: Background Visual Atmosphere */}
          <div className="pt-4 border-t border-white/10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5 mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>Background Atmosphere</span>
            </span>

            {/* Effect Mode */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {[
                { id: 'mesh', label: 'Color Mesh' },
                { id: 'particles', label: 'Cosmic Stars' },
                { id: 'subtle', label: 'Minimalist' }
              ].map((eff) => (
                <button
                  key={eff.id}
                  onClick={() => {
                    sounds.playClick();
                    setBgEffect(eff.id);
                  }}
                  className={`py-2 px-2 rounded-lg text-xs font-medium text-center transition-all ${
                    bgEffect === eff.id
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold shadow'
                      : 'glass-card text-slate-300 hover:text-white'
                  }`}
                >
                  {eff.label}
                </button>
              ))}
            </div>

            {/* Atmosphere Intensity */}
            <div className="flex items-center justify-between text-xs text-slate-300 mb-1.5">
              <span>Glow Intensity:</span>
              <span className="font-mono text-cyan-400 capitalize">{bgIntensity}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {['gentle', 'balanced', 'vibrant'].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => {
                    sounds.playClick();
                    setBgIntensity(lvl);
                  }}
                  className={`py-1.5 rounded-md text-[11px] font-mono capitalize transition-all ${
                    bgIntensity === lvl
                      ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-semibold'
                      : 'bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Section 3: Reading Comfort & Accessibility */}
          <div className="pt-4 border-t border-white/10 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" />
              <span>Reading Comfort & Controls</span>
            </span>

            {/* Font Size Scaling */}
            <div>
              <div className="flex justify-between items-center text-xs text-slate-300 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Type className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Text Size Comfort:</span>
                </span>
                <span className="font-mono text-cyan-400 capitalize">{fontSize}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'normal', label: 'Default' },
                  { id: 'large', label: '+15% Large' },
                  { id: 'xlarge', label: '+30% XL' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      sounds.playClick();
                      setFontSize(s.id);
                    }}
                    className={`py-1.5 rounded-md text-xs font-mono transition-all ${
                      fontSize === s.id
                        ? 'bg-emerald-500/20 border border-emerald-400 text-emerald-300 font-semibold'
                        : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
              <div>
                <div className="text-xs font-semibold text-white">High Contrast View</div>
                <div className="text-[10px] text-slate-400">Crisp borders and maximum readability</div>
              </div>
              <button
                onClick={() => {
                  sounds.playClick();
                  setHighContrast(prev => !prev);
                }}
                className={`w-11 h-6 rounded-full transition-colors relative ${
                  highContrast ? 'bg-cyan-500' : 'bg-slate-700'
                }`}
                aria-label="Toggle High Contrast"
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform transform ${
                    highContrast ? 'translate-x-5' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Reduced Motion Toggle */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
              <div>
                <div className="text-xs font-semibold text-white">Reduced Motion</div>
                <div className="text-[10px] text-slate-400">Pause floating background animations</div>
              </div>
              <button
                onClick={() => {
                  sounds.playClick();
                  setReducedMotion(prev => !prev);
                }}
                className={`w-11 h-6 rounded-full transition-colors relative ${
                  reducedMotion ? 'bg-cyan-500' : 'bg-slate-700'
                }`}
                aria-label="Toggle Reduced Motion"
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform transform ${
                    reducedMotion ? 'translate-x-5' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Interactive Sound FX Toggle */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
              <div>
                <div className="text-xs font-semibold text-white">UI Sound Effects</div>
                <div className="text-[10px] text-slate-400">Pleasant synthetic audio clicks & tones</div>
              </div>
              <button
                onClick={() => {
                  const nextVal = !soundEnabled;
                  sounds.enabled = nextVal;
                  if (nextVal) sounds.playPop();
                  setSoundEnabled(nextVal);
                }}
                className={`w-11 h-6 rounded-full transition-colors relative ${
                  soundEnabled ? 'bg-purple-500' : 'bg-slate-700'
                }`}
                aria-label="Toggle UI Sound Effects"
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform transform ${
                    soundEnabled ? 'translate-x-5' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

          </div>

        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-white/10 flex items-center justify-between bg-black/20">
          <button
            onClick={handleResetDefaults}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Default</span>
          </button>

          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-xl bg-cyan-500 text-white font-semibold text-xs shadow-md hover:bg-cyan-400 transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </>
  );
};

