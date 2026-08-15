'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FiMessageCircle, FiX, FiSend, FiChevronDown } from 'react-icons/fi';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Welcome to FashionStore! I'm FashionBot, your personal style assistant. Ask me about products, sales, shipping, or anything else!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    const userMessage: Message = {
      id: Date.now(),
      text: trimmed,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const [res] = await Promise.all([
        fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: trimmed }),
        }),
        new Promise(resolve => setTimeout(resolve, 1500)),
      ]);

      const data = await res.json();
      const botReply = data.reply || "Sorry, I couldn't process that.";

      const botMessage: Message = {
        id: Date.now() + 1,
        text: botReply,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting to the server. Please try again later.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-[70] group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-pink-500 to-pink-700 text-white shadow-2xl hover:shadow-pink-500/50 transition-all duration-500 hover:scale-110 animate-bounce-slow"
          aria-label="Chat with us"
        >
          <FiMessageCircle className="text-xl sm:text-2xl" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-200 text-pink-800 text-[10px] rounded-full flex items-center justify-center font-bold animate-pulse">1</span>
        </button>
      )}

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            style={{ touchAction: 'none' }}
            onClick={() => setIsOpen(false)}
          />

          {/* Chat Window - width reduced on mobile */}
          <div className="fixed bottom-2 right-2 sm:bottom-2 sm:right-2 z-[70] w-[calc(100vw-2rem)] sm:w-96 max-w-full bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all duration-300 animate-scale-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-600 to-pink-700 px-4 py-3 sm:px-5 sm:py-4 flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-sm sm:text-lg font-bold">F</div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full border-2 border-pink-600"></span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm sm:text-base">FashionBot</h3>
                  <p className="text-pink-100 text-xs">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <FiChevronDown className="text-lg sm:text-xl" />
              </button>
            </div>

            {/* Messages Area */}
            <div
              className="h-64 sm:h-72 overflow-y-auto overflow-x-hidden px-3 py-3 sm:px-4 sm:py-4 space-y-3 sm:space-y-4 bg-gray-50"
              style={{ overscrollBehavior: 'contain', touchAction: 'pan-y' }}
            >
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-sm ${msg.sender === 'user' ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-br-sm' : 'bg-gray-100 text-gray-600 rounded-bl-sm'}`}>
                    <p className="text-xs sm:text-sm leading-relaxed break-words">{msg.text}</p>
                    <span className={`block text-[10px] mt-1 ${msg.sender === 'user' ? 'text-pink-100' : 'text-gray-400'}`}>{formatTime(msg.timestamp)}</span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-3 py-2.5 sm:px-4 sm:py-3 shadow-sm">
                    <div className="flex space-x-1.5">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="px-3 py-2 sm:px-4 sm:py-3 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type..."
                  className="flex-1 min-w-0 px-3 py-2 sm:px-4 sm:py-2.5 bg-gray-100 border border-gray-300 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 text-sm"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSend}
                  disabled={isTyping || !input.trim()}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white flex items-center justify-center hover:shadow-lg hover:shadow-pink-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <FiSend className="text-sm sm:text-lg" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-scale-in { animation: scale-in 0.2s ease-out; }
        .animate-bounce-slow { animation: bounce-slow 2s infinite; }
      `}</style>
    </>
  );
};

export default Chatbot;