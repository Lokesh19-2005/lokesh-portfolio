"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, X, Sparkles, User } from "lucide-react";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const RESPONSES: Record<string, string> = {
  projects:
    "I've worked on 4 main projects:\n\n• **Armour Tint Studios** - Premium automotive studio website\n• **Aadhya Caterers** - Modern catering platform\n• **Deekshi Global Exim** - International trade platform\n• **CineVerse** - AI-powered movie recommendations\n\nEach built with cutting-edge tech and thoughtful design!",
  skills:
    "My core technologies include:\n\n**Frontend:** React.js, Next.js, TypeScript, Tailwind CSS\n**Backend:** Node.js, Fastify, Python, Java\n**AI/ML:** TensorFlow, Scikit-Learn\n**Database:** PostgreSQL, MongoDB\n**Tools:** Git, GitHub, Docker",
  experience:
    "My professional journey:\n\n• **StaffArc** - Full Stack Developer (Current)\n• **InternPe** - UI/UX Design\n• **SkillCraft Technology** - Data Science\n• **Launched Global** - Machine Learning\n\nEach role deepened my expertise in different areas of tech.",
  resume:
    "You can download my resume by clicking the 'Download Resume' button in the hero section, or visit the link at the top of the page. It includes my complete experience, projects, and education details.",
  hello:
    "Hey there! 👋 I'm Sai Lokesh's AI assistant. I can tell you about his projects, skills, experience, or anything else about his portfolio. What would you like to know?",
  default:
    "Great question! I can help you learn about Sai Lokesh's:\n\n• **Projects** - Web apps, AI/ML systems\n• **Skills** - Frontend, Backend, AI/ML\n• **Experience** - Professional journey\n• **Resume** - Download link\n\nJust ask about any of these topics!",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("project")) return RESPONSES.projects;
  if (lower.includes("skill") || lower.includes("tech"))
    return RESPONSES.skills;
  if (lower.includes("experience") || lower.includes("work"))
    return RESPONSES.experience;
  if (lower.includes("resume") || lower.includes("cv")) return RESPONSES.resume;
  if (
    lower.includes("hello") ||
    lower.includes("hi") ||
    lower.includes("hey")
  )
    return RESPONSES.hello;
  return RESPONSES.default;
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "assistant",
      content:
        "Hi! I'm Lokesh's AI portfolio assistant. Ask me anything about his projects, skills, or experience! 🚀",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      content: input.trim(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(userMsg.content);
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), role: "assistant", content: response },
      ]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500);
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-shadow"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle AI assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Sparkles size={24} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-4 left-4 sm:left-auto sm:right-6 z-50 sm:w-[380px] h-[70vh] sm:h-[500px] max-h-[500px] rounded-2xl overflow-hidden border border-white/[0.1] bg-black/90 backdrop-blur-2xl flex flex-col shadow-2xl"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="p-4 border-b border-white/[0.05] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">AI Assistant</p>
                <p className="text-xs text-white/40">
                  Ask about projects, skills & more
                </p>
              </div>
              <div className="ml-auto flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-white/40">Online</span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  className={`flex gap-3 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                      <Bot size={14} className="text-indigo-400" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-indigo-500 text-white rounded-br-sm"
                        : "bg-white/[0.05] text-white/80 border border-white/[0.05] rounded-bl-sm"
                    }`}
                  >
                    {msg.content.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < msg.content.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <User size={14} className="text-white/60" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  className="flex gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="w-7 h-7 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                    <Bot size={14} className="text-indigo-400" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-white/[0.05] border border-white/[0.05] rounded-bl-sm">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 rounded-full bg-white/40"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/[0.05]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about projects, skills..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-sm text-white placeholder:text-white/30 outline-none focus:border-indigo-500/50 transition-colors"
                />
                <motion.button
                  onClick={handleSend}
                  className="p-2.5 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 transition-colors disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!input.trim()}
                  aria-label="Send message"
                >
                  <Send size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
