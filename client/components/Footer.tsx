import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Facebook,
  Instagram,
  Send,
  Heart,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const shopLinks = [
    { name: "All Products", href: "/shop" },
    { name: "New Arrivals", href: "/shop?filter=new" },
    { name: "Cultural Collections", href: "/shop?filter=cultural" },
    { name: "T-Shirts", href: "/shop?category=t-shirt" },
    { name: "Hoodies", href: "/shop?category=hoodie" },
  ];

  const aboutLinks = [
    { name: "Our Story", href: "/about" },
    { name: "Sustainability", href: "/about#sustainability" },
    { name: "Meet the Artisans", href: "/behind-the-design" },
    { name: "Cultural Heritage", href: "/map" },
    { name: "Culinary Timeline", href: "/culinary-timeline" },
    { name: "Impact Report", href: "/about#impact" },
  ];

  const supportLinks = [
    { name: "FAQs", href: "/support/faq" },
    { name: "Shipping & Returns", href: "/support/shipping" },
    { name: "Contact Us", href: "/contact" },
    { name: "Size Guide", href: "/support/size-guide" },
    { name: "Care Instructions", href: "/support/care" },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Newsletter subscription:", email);
      setEmail("");
      // Here you would typically call an API
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-tradwear-cream">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                className="w-12 h-12 bg-tradwear-green rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-white font-bold text-xl">T</span>
              </motion.div>
              <div>
                <div className="text-2xl font-bold text-tradwear-cream group-hover:text-tradwear-green transition-colors duration-300">
                  TradWear
                </div>
                <div className="text-sm text-tradwear-cream/70">
                  Cultural Heritage
                </div>
              </div>
            </Link>

            <p className="text-lg leading-relaxed text-tradwear-cream/90 font-serif italic">
              "Weaving Vietnamese culture into every thread"
            </p>

            <p className="text-tradwear-cream/80 leading-relaxed">
              Sustainable fashion that tells the story of Vietnam's rich
              cultural heritage. Each piece connects you to authentic traditions
              while supporting local artisans and eco-friendly practices.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3 text-sm text-tradwear-cream/80">
                <MapPin className="w-4 h-4 text-tradwear-green" />
                <span>San Francisco, CA & Hanoi, Vietnam</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-tradwear-cream/80">
                <Phone className="w-4 h-4 text-tradwear-green" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-tradwear-cream/80">
                <Mail className="w-4 h-4 text-tradwear-green" />
                <span>hello@tradwear.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns - Desktop */}
          <div className="lg:col-span-6 hidden md:grid md:grid-cols-3 gap-8">
            {/* Shop Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-tradwear-green mb-4">
                Shop
              </h3>
              <ul className="space-y-3">
                {shopLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-tradwear-cream/80 hover:text-tradwear-green transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-tradwear-green mb-4">
                About
              </h3>
              <ul className="space-y-3">
                {aboutLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-tradwear-cream/80 hover:text-tradwear-green transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-tradwear-green mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-tradwear-cream/80 hover:text-tradwear-green transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation Columns - Mobile Accordion */}
          <div className="lg:col-span-6 md:hidden">
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="shop" className="border-tradwear-cream/20">
                <AccordionTrigger className="text-lg font-semibold text-tradwear-green hover:no-underline py-3">
                  Shop
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-2">
                  {shopLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block text-tradwear-cream/80 hover:text-tradwear-green transition-colors duration-300 py-1"
                    >
                      {link.name}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="about" className="border-tradwear-cream/20">
                <AccordionTrigger className="text-lg font-semibold text-tradwear-green hover:no-underline py-3">
                  About
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-2">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block text-tradwear-cream/80 hover:text-tradwear-green transition-colors duration-300 py-1"
                    >
                      {link.name}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="support"
                className="border-tradwear-cream/20"
              >
                <AccordionTrigger className="text-lg font-semibold text-tradwear-green hover:no-underline py-3">
                  Support
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-2">
                  {supportLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block text-tradwear-cream/80 hover:text-tradwear-green transition-colors duration-300 py-1"
                    >
                      {link.name}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Newsletter & Social */}
          <div className="lg:col-span-2 space-y-8">
            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-tradwear-green">
                Cultural Stories
              </h3>
              <p className="text-sm text-tradwear-cream/80 leading-relaxed">
                Subscribe for cultural stories & special drops
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-tradwear-cream/10 border-tradwear-cream/30 text-tradwear-cream placeholder:text-tradwear-cream/60 focus:border-tradwear-green focus:ring-tradwear-green rounded-xl"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-tradwear-green hover:bg-tradwear-green/90 text-slate-900 font-semibold rounded-xl group"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Subscribe
                </Button>
              </form>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-tradwear-green">
                Follow Our Journey
              </h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://facebook.com/tradwear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-tradwear-cream/10 hover:bg-tradwear-green rounded-xl flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="w-5 h-5 text-tradwear-cream group-hover:text-slate-900 transition-colors duration-300" />
                </motion.a>
                <motion.a
                  href="https://instagram.com/tradwear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-tradwear-cream/10 hover:bg-tradwear-green rounded-xl flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-5 h-5 text-tradwear-cream group-hover:text-slate-900 transition-colors duration-300" />
                </motion.a>
                <motion.a
                  href="https://tiktok.com/@tradwear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-tradwear-cream/10 hover:bg-tradwear-green rounded-xl flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-5 h-5 text-tradwear-cream group-hover:text-slate-900 transition-colors duration-300 font-bold text-xs flex items-center justify-center">
                    TT
                  </div>
                </motion.a>
              </div>
              <p className="text-xs text-tradwear-cream/60">
                Share your TradWear style #TradWearCulture
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16 pt-12 border-t border-tradwear-cream/20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-tradwear-green/20 rounded-xl flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 text-tradwear-green" />
              </div>
              <h4 className="font-semibold text-tradwear-cream">
                Artisan Made
              </h4>
              <p className="text-sm text-tradwear-cream/70">
                Supporting Vietnamese craftspeople
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-tradwear-green/20 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-tradwear-green text-xl">🌱</span>
              </div>
              <h4 className="font-semibold text-tradwear-cream">
                Eco-Friendly
              </h4>
              <p className="text-sm text-tradwear-cream/70">
                Recycled materials & organic cotton
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-tradwear-green/20 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-tradwear-green text-xl">🏛️</span>
              </div>
              <h4 className="font-semibold text-tradwear-cream">
                Cultural Heritage
              </h4>
              <p className="text-sm text-tradwear-cream/70">
                Preserving traditions through fashion
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-tradwear-green/20 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-tradwear-green text-xl">📱</span>
              </div>
              <h4 className="font-semibold text-tradwear-cream">QR Stories</h4>
              <p className="text-sm text-tradwear-cream/70">
                Interactive cultural experiences
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-tradwear-cream/20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-tradwear-cream/70">
              © 2025 TradWear. All rights reserved. Made with{" "}
              <Heart className="w-4 h-4 inline text-red-400" /> for Vietnamese
              culture.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-tradwear-cream/70 hover:text-tradwear-green transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-tradwear-cream/70 hover:text-tradwear-green transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-tradwear-cream/70 hover:text-tradwear-green transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
