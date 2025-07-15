import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Play, MapPin } from "lucide-react";

interface CulturalStoryTabsProps {
  culturalStory: string;
}

export default function CulturalStoryTabs({
  culturalStory,
}: CulturalStoryTabsProps) {
  const [activeTab, setActiveTab] = useState("story");

  const tabs = [
    {
      id: "story",
      label: "Story",
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      id: "resources",
      label: "Resources",
      icon: <Play className="w-4 h-4" />,
    },
    {
      id: "cultural-map",
      label: "Cultural Map",
      icon: <MapPin className="w-4 h-4" />,
    },
  ];

  const tabContent = {
    story: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg">{culturalStory}</p>
        <div className="bg-tradwear-cream p-6 rounded-2xl">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Scan to Learn More
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-tradwear-green rounded-full mr-3"></div>
              Video interviews with artisans
            </li>
            <li className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-tradwear-green rounded-full mr-3"></div>
              Authentic Pho recipes
            </li>
            <li className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-tradwear-green rounded-full mr-3"></div>
              Interactive cultural map of Hanoi
            </li>
          </ul>
        </div>
      </div>
    ),
    resources: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg">
          Coming soon: Behind-the-scenes videos, artisan interviews, and
          downloadable design assets.
        </p>
        <div className="bg-tradwear-cream p-8 rounded-2xl text-center">
          <div className="w-16 h-16 bg-tradwear-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Play className="w-8 h-8 text-tradwear-green" />
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Exclusive Content Coming Soon
          </h4>
          <p className="text-gray-600">
            We're preparing immersive content to deepen your connection with
            Vietnamese culture.
          </p>
        </div>
      </div>
    ),
    "cultural-map": (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg">
          Explore where the story began — from Hanoi's Old Quarter to
          traditional Pho stalls and street corners.
        </p>
        <div className="relative">
          <img
            src="/placeholder.svg"
            alt="Cultural map preview of Hanoi"
            className="w-full h-64 object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h4 className="text-lg font-semibold mb-1">Hanoi's Old Quarter</h4>
            <p className="text-sm opacity-90">Where Pho culture began</p>
          </div>
        </div>
      </div>
    ),
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex items-center space-x-3">
        <BookOpen className="w-6 h-6 text-tradwear-green" />
        <h3 className="text-2xl font-bold text-gray-900">
          The Story Behind This Design
        </h3>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-2xl">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-tradwear-green text-white shadow-md"
                : "text-slate-600 hover:text-tradwear-green hover:bg-white/50"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span
              className={activeTab === tab.id ? "text-white" : "text-slate-500"}
            >
              {tab.icon}
            </span>
            <span>{tab.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {tabContent[activeTab as keyof typeof tabContent]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
