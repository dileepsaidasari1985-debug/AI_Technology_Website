import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  X,
  Minimize2,
  Maximize2,
  Send,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { BRAND, CHATBOT_SUGGESTIONS, CHATBOT_KNOWLEDGE } from '../data/nexoraData';

export const WebsiteChatbot = ({ onOpenDemoRequest, onSelectPlaygroundTool }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: `Hello! I'm **NexoraBot**, the official AI concierge for **${BRAND.name}**.\n\nHow can I assist you with our AI products, technology stack, or scheduling an enterprise demo today?`,
      time: 'Just now',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputMessage;
    if (!query.trim() || isTyping) return;

    const userMsg = {
      id: Date.now() + '-user',
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Formulate response using heuristics
    setTimeout(() => {
      let reply = CHATBOT_KNOWLEDGE.default;
      const qLower = query.toLowerCase();

      if (qLower.includes('product') || qLower.includes('offer') || qLower.includes('service')) {
        reply = CHATBOT_KNOWLEDGE.product;
      } else if (qLower.includes('price') || qLower.includes('cost') || qLower.includes('plan') || qLower.includes('subscription')) {
        reply = CHATBOT_KNOWLEDGE.price;
      } else if (qLower.includes('privacy') || qLower.includes('security') || qLower.includes('data') || qLower.includes('safe')) {
        reply = CHATBOT_KNOWLEDGE.privacy;
      } else if (qLower.includes('playground') || qLower.includes('demo') || qLower.includes('test')) {
        reply = CHATBOT_KNOWLEDGE.playground;
      } else if (qLower.includes('demo') || qLower.includes('book') || qLower.includes('contact') || qLower.includes('sales')) {
        reply = CHATBOT_KNOWLEDGE.demo;
      } else if (qLower.includes('team') || qLower.includes('founder') || qLower.includes('ceo')) {
        reply = CHATBOT_KNOWLEDGE.team;
      }

      const botMsg = {
        id: Date.now() + '-bot',
        sender: 'bot',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'bot',
        text: `Chat reset. What else can I assist you with today regarding **${BRAND.name}**?`,
        time: 'Just now',
      },
    ]);
  };

  return (
    <>
      {/* Floating Chat Trigger Button in Bottom-Right Corner */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="fixed bottom-7 right-7 z-40 p-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white shadow-[0_0_30px_rgba(0,210,255,0.5)] hover:shadow-[0_0_40px_rgba(0,210,255,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5 group"
          aria-label="Open Nexora AI Chatbot"
        >
          <div className="relative">
            <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-navy-950 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-navy-950" />
          </div>
          <span className="text-xs font-bold hidden sm:inline tracking-wide">
            Chat with Nexora AI
          </span>
        </button>
      )}

      {/* Expandable Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-6 right-6 z-50 w-full max-w-[390px] rounded-3xl nexora-card border border-cyan-500/40 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 animate-slide-up ${
            isMinimized ? 'h-16' : 'h-[580px]'
          }`}
        >
          {/* Header Bar */}
          <div className="p-4 bg-gradient-to-r from-navy-900/95 via-navy-850/95 to-navy-900/95 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>NexoraBot</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                </h4>
                <p className="text-[10px] font-mono text-cyan-400">Autonomous Assistant</p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-slate-400">
              <button
                onClick={handleResetChat}
                className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                title="Reset conversation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                title={isMinimized ? 'Expand' : 'Minimize'}
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                title="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area (Hidden if minimized) */}
          {!isMinimized && (
            <>
              <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs bg-black/20">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${
                      msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                        msg.sender === 'user'
                          ? 'bg-cyan-500 text-white'
                          : 'bg-white/10 text-cyan-400 border border-white/10'
                      }`}
                    >
                      {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </div>

                    <div
                      className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-tr-none shadow-md'
                          : 'bg-navy-950/80 border border-white/10 text-slate-200 rounded-tl-none shadow-sm whitespace-pre-wrap'
                      }`}
                    >
                      {msg.text}
                      <span className="block text-[9px] font-mono text-slate-400 mt-1 text-right">
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    <div className="w-7 h-7 rounded-lg bg-white/10 text-cyan-400 flex items-center justify-center">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div className="p-3 rounded-2xl bg-navy-950/80 border border-white/10 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Suggested Questions Chips */}
              <div className="p-2 border-t border-white/10 bg-navy-950/60 overflow-x-auto flex items-center gap-1.5 no-scrollbar">
                {CHATBOT_SUGGESTIONS.map((sugg, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(sugg)}
                    className="text-[10px] whitespace-nowrap px-2.5 py-1 rounded-full bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/5 transition-colors"
                  >
                    {sugg}
                  </button>
                ))}
              </div>

              {/* Chat Input Bar */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="p-3 bg-navy-950 border-t border-white/10 flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Ask NexoraBot anything..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 text-xs text-white placeholder-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isTyping}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md disabled:opacity-40 transition-all hover:scale-105"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};
