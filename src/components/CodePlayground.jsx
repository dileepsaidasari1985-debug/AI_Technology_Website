import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Play, 
  RotateCcw, 
  Sparkles, 
  Check, 
  Copy, 
  Terminal, 
  Zap,
  Activity,
  Layers
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import { useToast } from './common/Toast';

export const CodePlayground = () => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState('sorting'); // 'sorting' | 'binary' | 'state'

  // 1. Array Sorting State
  const [array, setArray] = useState([38, 12, 65, 24, 88, 45, 19, 72, 53, 31]);
  const [isSorting, setIsSorting] = useState(false);
  const [activeIndices, setActiveIndices] = useState([]);
  const [sortStats, setSortStats] = useState({ comparisons: 0, swaps: 0 });

  // 2. Binary Search State
  const [sortedList] = useState([4, 9, 15, 23, 38, 42, 56, 67, 78, 89, 95]);
  const [targetNumber, setTargetNumber] = useState(42);
  const [searchStep, setSearchStep] = useState(null); // { low, mid, high, found: boolean }
  const [searchLog, setSearchLog] = useState('');

  // 3. Mini State Counter Sandbox
  const [counterVal, setCounterVal] = useState(10);
  const [counterStep, setCounterStep] = useState(5);
  const [themeModeDemo, setThemeModeDemo] = useState('cyan');

  // Reset array
  const handleGenerateArray = () => {
    sounds.playPop();
    const newArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 85) + 10);
    setArray(newArr);
    setActiveIndices([]);
    setSortStats({ comparisons: 0, swaps: 0 });
  };

  // Run Bubble Sort Visualizer Step-by-Step
  const handleRunSort = async () => {
    if (isSorting) return;
    setIsSorting(true);
    sounds.playClick();

    const arr = [...array];
    let comps = 0;
    let swaps = 0;

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        comps++;
        setActiveIndices([j, j + 1]);
        setSortStats({ comparisons: comps, swaps });
        await new Promise((r) => setTimeout(r, 120));

        if (arr[j] > arr[j + 1]) {
          swaps++;
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
          setSortStats({ comparisons: comps, swaps });
          sounds.playPop();
          await new Promise((r) => setTimeout(r, 120));
        }
      }
    }

    setActiveIndices([]);
    setIsSorting(false);
    sounds.playSuccess();
    showToast('Sorting completed in O(n²) steps!', 'success');
  };

  // Run Binary Search Visualizer
  const handleRunBinarySearch = async () => {
    sounds.playClick();
    let low = 0;
    let high = sortedList.length - 1;
    let stepCount = 0;

    setSearchLog('Starting binary search across sorted collection...');

    while (low <= high) {
      stepCount++;
      const mid = Math.floor((low + high) / 2);
      setSearchStep({ low, mid, high, found: false });
      sounds.playClick();
      await new Promise((r) => setTimeout(r, 450));

      if (sortedList[mid] === targetNumber) {
        setSearchStep({ low, mid, high, found: true });
        setSearchLog(`Found target ${targetNumber} at index [${mid}] in only ${stepCount} step(s)! Big-O: O(log n)`);
        sounds.playSuccess();
        showToast(`Target found at index ${mid}!`, 'success');
        return;
      } else if (sortedList[mid] < targetNumber) {
        low = mid + 1;
        setSearchLog(`Step ${stepCount}: ${sortedList[mid]} < ${targetNumber}. Search right half.`);
      } else {
        high = mid - 1;
        setSearchLog(`Step ${stepCount}: ${sortedList[mid]} > ${targetNumber}. Search left half.`);
      }
    }

    setSearchStep(null);
    setSearchLog(`Target ${targetNumber} is not in the array.`);
  };

  return (
    <section id="playground" className="py-24 relative overflow-hidden bg-navy-950/50">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Interactive Engineering Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Code & <span className="text-gradient">Algorithm Playground</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full" />
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-4">
            Test and interact with real-time algorithm visualizers and mini state components running directly in your browser.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {[
            { id: 'sorting', label: '1. Sorting Visualizer (O(n²))' },
            { id: 'binary', label: '2. Binary Search (O(log n))' },
            { id: 'state', label: '3. React State Sandbox' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                sounds.playClick();
                setActiveTab(tab.id);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_20px_rgba(56,189,248,0.35)] scale-105'
                  : 'glass-card text-slate-300 hover:text-white hover:border-cyan-400/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Playground Container Card */}
        <div className="glass-card rounded-2xl border border-white/10 dark:border-cyan-500/20 p-6 sm:p-8 shadow-2xl">
          
          {/* TAB 1: ARRAY SORTING VISUALIZER */}
          {activeTab === 'sorting' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <Activity className="w-5 h-5 text-cyan-400" />
                    <span>Bubble Sort Step Visualizer</span>
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Time Complexity: Worst O(n²), Best O(n) | Space: O(1)
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleGenerateArray}
                    disabled={isSorting}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card text-xs font-semibold text-slate-300 hover:text-white border-white/10 hover:border-cyan-400 transition-colors disabled:opacity-50"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Randomize</span>
                  </button>

                  <button
                    onClick={handleRunSort}
                    disabled={isSorting}
                    className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold shadow-md hover:scale-105 transition-all disabled:opacity-50"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isSorting ? 'Sorting...' : 'Run Sort'}</span>
                  </button>
                </div>
              </div>

              {/* Bar Visualizer Display */}
              <div className="h-56 flex items-end justify-center gap-2 sm:gap-3 p-4 rounded-xl bg-navy-950/80 border border-white/5 relative">
                {array.map((val, idx) => {
                  const isActive = activeIndices.includes(idx);
                  return (
                    <div
                      key={idx}
                      className="flex-1 flex flex-col items-center gap-2 transition-all duration-150 h-full justify-end"
                    >
                      <span className="text-[10px] font-mono text-slate-400">
                        {val}
                      </span>
                      <div
                        className={`w-full rounded-t-lg transition-all duration-150 shadow-md ${
                          isActive
                            ? 'bg-gradient-to-t from-rose-500 to-amber-400 scale-105 shadow-[0_0_15px_rgba(244,63,94,0.6)]'
                            : 'bg-gradient-to-t from-cyan-600 to-purple-500'
                        }`}
                        style={{ height: `${val * 2}px` }}
                      />
                      <span className="text-[9px] font-mono text-slate-500">
                        [{idx}]
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Stats Bar */}
              <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-300 pt-2">
                <div className="flex gap-4">
                  <span>Comparisons: <strong className="text-cyan-400">{sortStats.comparisons}</strong></span>
                  <span>Swaps: <strong className="text-purple-400">{sortStats.swaps}</strong></span>
                </div>
                <span className="text-slate-400">Active Elements: [{activeIndices.join(', ')}]</span>
              </div>
            </div>
          )}

          {/* TAB 2: BINARY SEARCH VISUALIZER */}
          {activeTab === 'binary' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <Zap className="w-5 h-5 text-purple-400" />
                    <span>Binary Search Interactive Stepper</span>
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Array must be sorted | Time: O(log n) logarithmic reduction
                  </p>
                </div>

                {/* Target Number Picker */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Target Value:</span>
                  <select
                    value={targetNumber}
                    onChange={(e) => setTargetNumber(Number(e.target.value))}
                    className="px-3 py-1.5 rounded-lg glass-card border border-white/10 text-xs font-mono text-cyan-300 focus:outline-none"
                  >
                    {sortedList.map((num) => (
                      <option key={num} value={num} className="bg-navy-900 text-white">
                        {num}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={handleRunBinarySearch}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold shadow-md hover:scale-105 transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Search</span>
                  </button>
                </div>
              </div>

              {/* Sorted Numbers Display */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-6 rounded-xl bg-navy-950/80 border border-white/5">
                {sortedList.map((val, idx) => {
                  const isMid = searchStep && searchStep.mid === idx;
                  const isLow = searchStep && searchStep.low === idx;
                  const isHigh = searchStep && searchStep.high === idx;
                  const isFound = searchStep && searchStep.found && isMid;

                  return (
                    <div key={idx} className="flex flex-col items-center gap-1">
                      <div
                        className={`w-12 h-14 rounded-xl border flex flex-col items-center justify-center font-mono font-bold text-sm transition-all duration-300 ${
                          isFound
                            ? 'bg-emerald-500 text-white border-emerald-400 scale-110 shadow-[0_0_20px_rgba(16,185,129,0.8)]'
                            : isMid
                            ? 'bg-cyan-500 text-white border-cyan-300 scale-105 shadow-[0_0_15px_rgba(56,189,248,0.6)]'
                            : isLow || isHigh
                            ? 'bg-purple-500/20 text-purple-300 border-purple-400'
                            : 'bg-white/5 text-slate-300 border-white/10'
                        }`}
                      >
                        <span>{val}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        {isMid ? 'MID' : isLow ? 'LOW' : isHigh ? 'HIGH' : `[${idx}]`}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Console log feedback box */}
              <div className="p-3.5 rounded-xl bg-navy-950 border border-white/5 text-xs font-mono text-cyan-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{searchLog || 'Select a target and click "Search" to watch pointer steps.'}</span>
              </div>
            </div>
          )}

          {/* TAB 3: REACT STATE SANDBOX */}
          {activeTab === 'state' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Code Preview */}
              <div className="p-4 rounded-xl bg-navy-950 border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-slate-400">
                  <span>InteractiveComponent.jsx</span>
                  <span className="text-cyan-400 font-bold">React 18+</span>
                </div>
                <pre className="space-y-1 text-slate-300">
                  <code>
                    <span className="text-purple-400">const</span> [count, setCount] = <span className="text-cyan-400">useState</span>({counterVal});{'\n'}
                    <span className="text-purple-400">const</span> step = {counterStep};{'\n\n'}
                    <span className="text-slate-500">// Increment handler</span>{'\n'}
                    <span className="text-blue-400">const</span> <span className="text-yellow-300">handleIncrement</span> = () =&gt; {'{\n'}
                    {'  '}setCount(prev =&gt; prev + step);{'\n'}
                    {'}'};
                  </code>
                </pre>
              </div>

              {/* Live Rendered Component */}
              <div className="p-6 rounded-xl glass-card border border-cyan-400/30 flex flex-col items-center justify-center text-center space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Live Rendered Component Preview
                </span>

                <div className="text-5xl font-black font-mono text-white tracking-tight">
                  {counterVal}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      sounds.playPop();
                      setCounterVal(prev => prev - counterStep);
                    }}
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-bold text-white text-lg transition-transform active:scale-95"
                  >
                    -
                  </button>

                  <button
                    onClick={() => {
                      sounds.playPop();
                      setCounterVal(10);
                    }}
                    className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300"
                  >
                    Reset (10)
                  </button>

                  <button
                    onClick={() => {
                      sounds.playPop();
                      setCounterVal(prev => prev + counterStep);
                    }}
                    className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-bold text-white text-lg shadow-md hover:scale-105 active:scale-95 transition-transform"
                  >
                    +
                  </button>
                </div>

                <div className="text-xs text-slate-400">
                  Current Step Increment: <strong className="text-white">+{counterStep}</strong>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

