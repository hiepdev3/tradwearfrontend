import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Behind the Design", href: "/behind-the-design" },
    { name: "Heritage Timeline", href: "/timeline" },
    { name: "About", href: "/about" },
    { name: "Cultural Map", href: "/map" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              className="w-8 h-8 bg-tradwear-green rounded-lg flex items-center justify-center"
              whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            >
              <span className="text-white font-bold text-sm">T</span>
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-lg leading-none group-hover:text-tradwear-green transition-colors duration-200">
                TradWear
              </span>
              <span className="text-xs text-gray-600 leading-none">
                Cultural Heritage
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              >
                <Link
                  to={item.href}
                  className="relative text-gray-700 hover:text-tradwear-green font-medium transition-all duration-300 px-3 py-2 rounded-xl hover:bg-tradwear-green/10 hover:shadow-sm"
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-tradwear-green"
                    initial={{ scaleX: 0 }}
                    whileHover={shouldReduceMotion ? {} : { scaleX: 1 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-tradwear-green p-2 rounded-xl hover:bg-tradwear-green/10"
              whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            >
              <motion.div
                animate={
                  shouldReduceMotion ? {} : { rotate: isMenuOpen ? 180 : 0 }
                }
                transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-tradwear-green font-medium transition-all duration-200 rounded-xl hover:bg-tradwear-green/10 hover:pl-6"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
