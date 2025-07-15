import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MessageCircle,
  X,
  Send,
  Ruler,
  BookOpen,
  Users,
  Sparkles,
} from "lucide-react";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    Array<{ id: string; text: string; isUser: boolean; timestamp: Date }>
  >([]);
  const [isTyping, setIsTyping] = useState(false);

  const suggestionButtons = [
    {
      text: "View size guide",
      icon: <Ruler className="w-4 h-4" />,
      action: () => handleSuggestion("I need help with sizing"),
    },
    {
      text: "What's the story behind Pho Tee?",
      icon: <BookOpen className="w-4 h-4" />,
      action: () =>
        handleSuggestion("Tell me about the story behind the Pho Tee"),
    },
    {
      text: "Talk to a human",
      icon: <Users className="w-4 h-4" />,
      action: () => handleSuggestion("I'd like to speak with a human"),
    },
  ];

  const handleSuggestion = (text: string) => {
    const userMessage = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    simulateResponse(text);
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    simulateResponse(message);
    setMessage("");
  };

  const simulateResponse = (userText: string) => {
    setIsTyping(true);
    setTimeout(() => {
      let responseText = "";
      const lowerText = userText.toLowerCase();

      if (lowerText.includes("pho") || lowerText.includes("story")) {
        responseText =
          "The Pho Tee is inspired by Hanoi street food culture! 🍜 This design celebrates Vietnam's national dish, representing community and the centuries-old tradition of gathering around shared meals. Each element tells the story of Vietnamese culinary heritage. Would you like to learn more about the cultural stories behind our other designs?";
      } else if (lowerText.includes("size") || lowerText.includes("sizing")) {
        responseText =
          "I'd be happy to help with sizing! 📏 Our Pho Tee runs true to size. For the best fit: S (34-36 chest), M (38-40 chest), L (42-44 chest), XL (46-48 chest). All measurements in inches. The shirt is made from organic cotton with a comfortable, relaxed fit. Need specific measurements?";
      } else if (lowerText.includes("human") || lowerText.includes("support")) {
        responseText =
          "I'll connect you with our cultural heritage team! 👥 They're available Monday-Friday, 9 AM - 6 PM PST. You can also email us at hello@tradwear.com or call +1 (555) 123-4567. They love talking about Vietnamese culture and our sustainable fashion mission!";
      } else if (
        lowerText.includes("material") ||
        lowerText.includes("fabric")
      ) {
        responseText =
          "Great question! Our Pho Tee is made from 60% organic cotton and 40% recycled polyester (from plastic bottles). It's soft, breathable, and eco-friendly. We've diverted over 1M+ bottles from landfills! 🌱 The fabric is pre-shrunk and machine washable.";
      } else {
        responseText =
          "Thanks for your question! 👋 I'm here to help with sizing, cultural stories, product details, or connecting you with our team. Feel free to ask about any TradWear product or our mission to preserve Vietnamese heritage through sustainable fashion!";
      }

      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      // Add welcome message on first open
      setTimeout(() => {
        const welcomeMessage = {
          id: "welcome",
          text: "👋 Hi there! Need help with sizing, cultural stories, or finding a product?",
          isUser: false,
          timestamp: new Date(),
        };
        setMessages([welcomeMessage]);
      }, 300);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 300 }}
      >
        <motion.button
          onClick={toggleChat}
          className="w-14 h-14 bg-tradwear-green hover:bg-tradwear-dark-green text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <MessageCircle className="w-6 h-6" />
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] md:max-w-96"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Mobile: Full width bottom sheet style */}
            <div className="md:hidden fixed inset-x-0 bottom-0 top-32 bg-white rounded-t-3xl shadow-2xl border border-gray-100 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-tradwear-green rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      TradWear Assistant
                    </h3>
                    <p className="text-sm text-gray-600">
                      Cultural heritage expert
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleChat}
                  className="rounded-full w-8 h-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        msg.isUser
                          ? "bg-tradwear-green text-white"
                          : "bg-tradwear-cream text-gray-800"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.isUser ? "text-white/70" : "text-gray-500"
                        }`}
                      >
                        {msg.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-tradwear-cream rounded-2xl px-4 py-3">
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 bg-gray-500 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0,
                          }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-500 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.2,
                          }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-500 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.4,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Suggestion Buttons */}
                {messages.length <= 1 && !isTyping && (
                  <div className="space-y-2">
                    {suggestionButtons.map((suggestion, index) => (
                      <motion.button
                        key={index}
                        onClick={suggestion.action}
                        className="w-full flex items-center space-x-3 p-3 text-left bg-white border border-gray-200 rounded-xl hover:bg-tradwear-cream hover:border-tradwear-green transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-tradwear-green">
                          {suggestion.icon}
                        </span>
                        <span className="text-sm text-gray-700">
                          {suggestion.text}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-100">
                <div className="flex space-x-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your question..."
                    className="flex-1 rounded-xl border-gray-200 focus:border-tradwear-green focus:ring-tradwear-green"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="bg-tradwear-green hover:bg-tradwear-dark-green text-white rounded-xl px-4"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Desktop: Card style */}
            <div className="hidden md:block bg-white rounded-2xl shadow-2xl border border-gray-100 max-h-[500px] flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-tradwear-green rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      TradWear Assistant
                    </h3>
                    <p className="text-sm text-gray-600">
                      Cultural heritage expert
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleChat}
                  className="rounded-full w-8 h-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[350px]">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        msg.isUser
                          ? "bg-tradwear-green text-white"
                          : "bg-tradwear-cream text-gray-800"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.isUser ? "text-white/70" : "text-gray-500"
                        }`}
                      >
                        {msg.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-tradwear-cream rounded-2xl px-4 py-3">
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 bg-gray-500 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0,
                          }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-500 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.2,
                          }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-500 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.4,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Suggestion Buttons */}
                {messages.length <= 1 && !isTyping && (
                  <div className="space-y-2">
                    {suggestionButtons.map((suggestion, index) => (
                      <motion.button
                        key={index}
                        onClick={suggestion.action}
                        className="w-full flex items-center space-x-3 p-3 text-left bg-white border border-gray-200 rounded-xl hover:bg-tradwear-cream hover:border-tradwear-green transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-tradwear-green">
                          {suggestion.icon}
                        </span>
                        <span className="text-sm text-gray-700">
                          {suggestion.text}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-100">
                <div className="flex space-x-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your question..."
                    className="flex-1 rounded-xl border-gray-200 focus:border-tradwear-green focus:ring-tradwear-green"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="bg-tradwear-green hover:bg-tradwear-dark-green text-white rounded-xl px-4"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
