"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Terminal } from "lucide-react";

type Message = {
  id: number;
  type: "user" | "agent";
  text: string;
};

export const ZeroXAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "agent",
      text: "System online. How can I assist you with Manoj's profile?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now(), type: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simple mock response logic
    setTimeout(() => {
      let responseText = "I can access that data. Please be specific.";
      const lowerInput = userMsg.text.toLowerCase();

      if (lowerInput.includes("stack") || lowerInput.includes("tech")) {
        responseText =
          "Accessing stack_trace... Next.js 15, React Three Fiber, Python, Solidity detected.";
      } else if (
        lowerInput.includes("contact") ||
        lowerInput.includes("email")
      ) {
        responseText = "Transmission channels open at #contact section.";
      } else if (
        lowerInput.includes("projects") ||
        lowerInput.includes("work")
      ) {
        responseText =
          "Retrieving artifacts... 0xARMOR and 0xMEMORY are highly classified highlights.";
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        responseText = "Handshake initiated. Welcome to 0xMe.";
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, type: "agent", text: responseText },
      ]);
    }, 600);
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-accent-lime text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(var(--accent-primary-rgb),0.3)] hover:shadow-[0_0_30px_rgba(var(--accent-primary-rgb),0.5)] transition-shadow"
      >
        {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 z-50 w-80 md:w-96 bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden flex flex-col shadow-2xl"
            style={{ height: "400px" }}
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center gap-2">
              <Terminal size={14} className="text-accent-lime" />
              <span className="font-mono text-xs text-accent-lime tracking-widest">
                0xAGENT_V1.0
              </span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded text-sm font-mono ${
                      msg.type === "user"
                        ? "bg-white/10 text-white rounded-br-none"
                        : "bg-accent-lime/10 text-accent-lime rounded-bl-none border border-accent-lime/20"
                    }`}
                  >
                    {msg.type === "agent" && (
                      <span className="mr-2 text-xs opacity-50">{">"}</span>
                    )}
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 bg-black/50 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Query system..."
                className="flex-1 bg-transparent border-none outline-none text-sm font-mono text-white placeholder:text-white/20"
                autoFocus
              />
              <button
                onClick={handleSend}
                className="text-accent-lime hover:text-white transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
