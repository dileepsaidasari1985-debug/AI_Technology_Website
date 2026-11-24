import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  FileText,
  Sparkles,
  Wand2,
  Terminal,
  Send,
  Copy,
  Check,
  RotateCcw,
  Sliders,
  Key,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { PLAYGROUND_TOOLS } from '../data/nexoraData';
import { useToast } from './common/Toast';

export const AIPlayground = ({ defaultToolId = 'chat' }) => {
  const { showToast } = useToast();
  const [activeToolId, setActiveToolId] = useState(defaultToolId);
  const [inputPrompt, setInputPrompt] = useState('');
  const [outputResponse, setOutputResponse] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [temperature, setTemperature] = useState(0.7);
  const [systemPersona, setSystemPersona] = useState('Senior AI Architect');
  const [copied, setCopied] = useState(false);
  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem('nexora_user_api_key') || '';
  });
  const [showKeyModal, setShowKeyModal] = useState(false);

  // Sync if defaultToolId prop changes
  useEffect(() => {
    if (defaultToolId) {
      setActiveToolId(defaultToolId);
    }
  }, [defaultToolId]);

  const activeTool = PLAYGROUND_TOOLS.find((t) => t.id === activeToolId) || PLAYGROUND_TOOLS[0];

  // Set default output when switching tool
  useEffect(() => {
    setInputPrompt('');
    setOutputResponse('');
    setCopied(false);
  }, [activeToolId]);

  const getToolIcon = (id) => {
    switch (id) {
      case 'chat':
        return MessageSquare;
      case 'summarizer':
        return FileText;
      case 'content':
        return Sparkles;
      case 'prompt':
        return Wand2;
      case 'code':
        return Terminal;
      default:
        return Sparkles;
    }
  };

  const handleSelectSample = (sample) => {
    setInputPrompt(sample);
  };

  const handleCopyResponse = () => {
    if (!outputResponse) return;
    navigator.clipboard.writeText(outputResponse);
    setCopied(true);
    showToast('Response copied to clipboard', 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInputPrompt('');
    setOutputResponse('');
    setCopied(false);
  };

  const handleSaveApiKey = (key) => {
    setApiKey(key);
    localStorage.setItem('nexora_user_api_key', key);
    setShowKeyModal(false);
    showToast(key ? 'Custom API key saved' : 'Switched to Simulated Engine', 'info');
  };

  const handleRunTool = async (e) => {
    e?.preventDefault();
    if (!inputPrompt.trim() || isGenerating) return;

    setIsGenerating(true);
    setOutputResponse('');

    // Check if user entered an external API key and wants real live inference
    if (apiKey.trim()) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: `System Persona: ${systemPersona}. ${inputPrompt}` }] }],
            }),
          }
        );

        if (!response.ok) {
          throw new Error('API request failed. Falling back to simulation.');
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          simulateStreaming(text);
          return;
        }
      } catch (err) {
        showToast('Live API failed, using intelligent simulation', 'info');
      }
    }

    // High-Fidelity Intelligent Heuristic Simulation
    let fullResponse = '';
    const lower = inputPrompt.toLowerCase();

    if (activeTool.id === 'chat') {
      if (lower.includes('quantum')) {
        fullResponse = activeTool.simulatedResponses.quantum;
      } else if (lower.includes('microservice') || lower.includes('monolith')) {
        fullResponse = activeTool.simulatedResponses.microservices;
      } else if (lower.includes('transformer') || lower.includes('attention')) {
        fullResponse = activeTool.simulatedResponses.transformer;
      } else {
        fullResponse = `### Nexora AI Response (${systemPersona})

You asked: "${inputPrompt.trim()}"

**Analytical Evaluation:**
1. **Core Problem Formulation:** Breaking down your query through our reasoning decomposition matrix.
2. **Synthesized Recommendation:** For optimal execution, utilize modular pipeline boundaries with parameter isolation.
3. **Architecture Insight:** Incorporating low-latency vector retrieval ensures sub-20ms execution with high precision.

*Note: This is an interactive simulated demonstration of Nexora AI's conversational engine. Connect a Gemini API key via the Key icon to test live unbounded inference.*`;
      }
    } else if (activeTool.id === 'summarizer') {
      fullResponse = activeTool.simulatedResponses.default;
    } else if (activeTool.id === 'content') {
      fullResponse = activeTool.simulatedResponses.default;
    } else if (activeTool.id === 'prompt') {
      fullResponse = activeTool.simulatedResponses.default;
    } else if (activeTool.id === 'code') {
      fullResponse = activeTool.simulatedResponses.default;
    }

    simulateStreaming(fullResponse);
  };

  const simulateStreaming = (text) => {
    let index = 0;
    const interval = setInterval(() => {
      index += 12; // stream chunks
      if (index >= text.length) {
        setOutputResponse(text);
        setIsGenerating(false);
        clearInterval(interval);
      } else {
        setOutputResponse(text.slice(0, index));
      }
    }, 25);
  };

  return (
    <section id="playground" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full nexora-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE WORKBENCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white dark:text-white tracking-tight mb-4">
            Experience the <span className="text-gradient">Interactive AI Playground</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed">
            Test 5 core AI tools directly in your browser. Evaluate context retention, algorithmic explanation, document summarization, and prompt optimization.
          </p>

          {/* Simulation Disclaimer Banner Required by Prompt */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-xs text-cyan-300">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              <strong>Simulated Demonstration Mode:</strong> High-fidelity evaluation preview. To execute live unbounded model inference, enter an optional API key.
            </span>
          </div>
        </div>

        {/* Playground Container Card */}
        <div className="rounded-3xl nexora-card border border-white/15 shadow-2xl overflow-hidden">
          {/* Top Bar: Tool Tabs & Controls */}
          <div className="p-4 sm:p-5 border-b border-white/10 bg-white/[0.02] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Tool Navigation Tabs */}
            <div className="flex items-center overflow-x-auto gap-1.5 pb-2 md:pb-0 no-scrollbar">
              {PLAYGROUND_TOOLS.map((tool) => {
                const Icon = getToolIcon(tool.id);
                const isSelected = activeToolId === tool.id;
                return (
                  <button
                    key={tool.id}
                    onClick={() => setActiveToolId(tool.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                      isSelected
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tool.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Quick Controls */}
            <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
              {/* Persona Selector */}
              <select
                value={systemPersona}
                onChange={(e) => setSystemPersona(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 focus:outline-none focus:border-cyan-400 font-mono"
              >
                <option value="Senior AI Architect" className="bg-navy-950 text-white">Role: Senior AI Architect</option>
                <option value="Research Scientist" className="bg-navy-950 text-white">Role: Research Scientist</option>
                <option value="Principal Developer" className="bg-navy-950 text-white">Role: Principal Developer</option>
                <option value="Creative Director" className="bg-navy-950 text-white">Role: Creative Director</option>
              </select>

              {/* API Key Modal Button */}
              <button
                onClick={() => setShowKeyModal(true)}
                className={`p-2 rounded-lg border text-xs flex items-center gap-1.5 transition-colors ${
                  apiKey
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                }`}
                title="Configure custom API key for live inference"
              >
                <Key className="w-4 h-4" />
                <span className="hidden sm:inline font-mono text-[11px]">
                  {apiKey ? 'Live API Key' : 'API Key'}
                </span>
              </button>
            </div>
          </div>

          {/* Workbench Grid: Left Input & Right Output */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Left Pane: Prompt Input & Examples */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Prompt Input:
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {inputPrompt.length} chars | ~{Math.ceil(inputPrompt.length / 4)} tokens
                  </span>
                </div>

                <textarea
                  rows={8}
                  placeholder={activeTool.placeholder}
                  value={inputPrompt}
                  onChange={(e) => setInputPrompt(e.target.value)}
                  className="w-full p-4 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors font-mono resize-none leading-relaxed"
                />

                {/* Example Prompts Chips */}
                <div className="mt-4">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    💡 Clickable Example Prompts:
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {activeTool.samplePrompts.map((sample, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectSample(sample)}
                        className="text-left text-xs p-2.5 rounded-xl bg-white/[0.02] hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-300 transition-colors truncate"
                      >
                        "{sample}"
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions: Clear & Generate */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-3 mt-6">
                <button
                  onClick={handleClear}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Clear</span>
                </button>

                <button
                  onClick={handleRunTool}
                  disabled={!inputPrompt.trim() || isGenerating}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:shadow-[0_0_30px_rgba(0,210,255,0.7)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-40 disabled:hover:scale-100"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Generating Output...</span>
                    </>
                  ) : (
                    <>
                      <span>Generate Response</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Pane: Response Display */}
            <div className="p-6 sm:p-8 bg-black/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                      Model Synthesis Output
                    </span>
                    {isGenerating && (
                      <span className="flex items-center gap-1 text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full animate-pulse">
                        <Clock className="w-3 h-3" />
                        Inference Active
                      </span>
                    )}
                  </div>

                  {outputResponse && (
                    <button
                      onClick={handleCopyResponse}
                      className="text-xs font-semibold text-slate-300 hover:text-cyan-400 flex items-center gap-1 transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  )}
                </div>

                {/* Output Box */}
                <div className="min-h-[280px] p-5 rounded-2xl bg-navy-950/70 border border-white/10 text-xs sm:text-sm text-slate-200 font-mono whitespace-pre-wrap leading-relaxed overflow-y-auto max-h-[460px]">
                  {outputResponse ? (
                    <>
                      {outputResponse}
                      {isGenerating && <span className="inline-block w-2 h-4 ml-1 bg-cyan-400 animate-pulse" />}
                    </>
                  ) : isGenerating ? (
                    <div className="flex items-center justify-center h-48 text-slate-400 text-xs">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                        <span>Performing neural token synthesis...</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-48 text-slate-400 text-center">
                      <Sparkles className="w-8 h-8 text-slate-400 mb-2" />
                      <p className="text-xs font-sans">
                        Enter a prompt or click an example above and click <strong>Generate Response</strong> to inspect synthesized output.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Status Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400 mt-4">
                <span>Latency: {isGenerating ? 'Evaluating...' : '18.4ms'}</span>
                <span className="text-emerald-400 font-semibold">Zero Data Retention</span>
              </div>
            </div>
          </div>
        </div>

        {/* API Key Modal */}
        {showKeyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
            <div className="max-w-md w-full rounded-3xl nexora-card border border-white/20 p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <Key className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Live Inference API Key</h3>
                  <p className="text-xs text-slate-400">Optional Google Gemini API Key</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                By default, the playground operates in high-quality simulated demonstration mode. To run live API queries directly from your browser, enter your API key below. Keys are stored only in your local session.
              </p>

              <input
                type="password"
                placeholder="AIzaSy..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full px-4 py-3 rounded-xl nexora-card border border-white/15 focus:border-cyan-400 text-xs text-white placeholder-slate-400 focus:outline-none mb-4 font-mono"
              />

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowKeyModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSaveApiKey(apiKey)}
                  className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md"
                >
                  Save Configuration
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
