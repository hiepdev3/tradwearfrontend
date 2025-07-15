import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AnimatedSection from "@/components/AnimatedSection";
import {
  MapPin,
  X,
  Utensils,
  Palette,
  Mountain,
  Filter,
  ChevronRight,
} from "lucide-react";

interface Region {
  id: string;
  name: string;
  culturalTag: string;
  description: string;
  products: {
    name: string;
    image: string;
    description: string;
    category: "food" | "crafts" | "nature";
  }[];
  highlights: string[];
  svgPath: string;
}

export default function CulturalMap() {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [showTooltip, setShowTooltip] = useState<{
    show: boolean;
    region?: Region;
    x: number;
    y: number;
  }>({ show: false, x: 0, y: 0 });

  const regions: Region[] = [
    {
      id: "north",
      name: "Northern Vietnam",
      culturalTag: "Phở Capital & Ancient Crafts",
      description:
        "The heart of Vietnamese culture, where tradition meets modernity. From the bustling streets of Hanoi serving the world's best Phở to the ancient pottery villages of Bát Tràng.",
      products: [
        {
          name: "Phở Bowl Tee",
          image: "/placeholder.svg",
          description:
            "Celebrates Hanoi's iconic street food culture and the community spirit around shared meals.",
          category: "food",
        },
        {
          name: "Bát Tràng Pottery Hoodie",
          image: "/placeholder.svg",
          description:
            "Features traditional ceramic patterns from the 500-year-old pottery village.",
          category: "crafts",
        },
      ],
      highlights: [
        "Home to Vietnam's capital, Hanoi",
        "Birthplace of Phở noodle soup",
        "Ancient Bát Tràng pottery village",
        "Temple of Literature",
      ],
      svgPath:
        "M300,50 L380,50 L390,80 L400,120 L380,140 L350,150 L320,140 L300,120 Z",
    },
    {
      id: "central",
      name: "Central Vietnam",
      culturalTag: "Imperial Heritage & Lanterns",
      description:
        "The cultural crossroads of Vietnam, home to ancient imperial cities, UNESCO World Heritage sites, and the magical lantern-lit streets of Hội An.",
      products: [
        {
          name: "Hội An Lantern Shirt",
          image: "/placeholder.svg",
          description:
            "Inspired by the colorful silk lanterns that illuminate the ancient town's romantic evenings.",
          category: "crafts",
        },
        {
          name: "Imperial Huế Heritage Tee",
          image: "/placeholder.svg",
          description:
            "Features motifs from the Forbidden Purple City and royal Vietnamese traditions.",
          category: "crafts",
        },
      ],
      highlights: [
        "UNESCO World Heritage Site Hội An",
        "Imperial City of Huế",
        "Silk lantern craftsmanship",
        "Royal culinary traditions",
      ],
      svgPath:
        "M280,150 L400,150 L410,180 L400,220 L380,240 L300,240 L280,220 Z",
    },
    {
      id: "south",
      name: "Southern Vietnam",
      culturalTag: "Mekong Delta & Vibrant Markets",
      description:
        "The bustling economic heart where the Mekong River creates a lush delta. Known for vibrant floating markets, tropical fruits, and Ho Chi Minh City's dynamic energy.",
      products: [
        {
          name: "Mekong Delta Hoodie",
          image: "/placeholder.svg",
          description:
            "Captures the flowing waters and rich agricultural heritage of Vietnam's rice bowl.",
          category: "nature",
        },
        {
          name: "Floating Market Tee",
          image: "/placeholder.svg",
          description:
            "Celebrates the colorful floating markets where life flows along the water.",
          category: "food",
        },
      ],
      highlights: [
        "Ho Chi Minh City (Saigon)",
        "Mekong Delta floating markets",
        "Cu Chi Tunnels historical site",
        "Rice paper and tropical fruits",
      ],
      svgPath:
        "M280,240 L400,240 L420,280 L410,320 L380,340 L300,340 L280,320 Z",
    },
    {
      id: "highlands",
      name: "Central Highlands",
      culturalTag: "Coffee Culture & Mountain Tribes",
      description:
        "Misty mountains home to Vietnam's world-renowned coffee culture and diverse ethnic minorities. The cool climate nurtures both coffee beans and rich cultural traditions.",
      products: [
        {
          name: "Coffee Highland Shirt",
          image: "/placeholder.svg",
          description:
            "Honors Vietnam's position as the world's second-largest coffee producer.",
          category: "food",
        },
        {
          name: "Mountain Tribe Heritage Hoodie",
          image: "/placeholder.svg",
          description:
            "Features traditional patterns from ethnic minority communities.",
          category: "crafts",
        },
      ],
      highlights: [
        "Da Lat - City of Eternal Spring",
        "World's second-largest coffee producer",
        "Ethnic minority cultures",
        "Elephant Falls and landscapes",
      ],
      svgPath: "M200,180 L280,180 L280,240 L260,260 L200,260 L180,240 Z",
    },
    {
      id: "northeast",
      name: "Northeast Mountains",
      culturalTag: "Dong Ho Art & Terraced Fields",
      description:
        "Dramatic limestone karsts and terraced rice fields create Vietnam's most stunning landscapes. Home to traditional Dong Ho folk paintings and hill tribe cultures.",
      products: [
        {
          name: "Dong Ho Folk Art Hoodie",
          image: "/placeholder.svg",
          description:
            "Features authentic woodblock printing designs from Dong Ho village.",
          category: "crafts",
        },
        {
          name: "Terraced Fields Tee",
          image: "/placeholder.svg",
          description:
            "Inspired by the golden rice terraces of Sapa and mountain communities.",
          category: "nature",
        },
      ],
      highlights: [
        "Sapa terraced rice fields",
        "Dong Ho folk paintings",
        "Ha Long Bay limestone karsts",
        "Hill tribe textiles",
      ],
      svgPath: "M380,50 L450,50 L460,90 L450,130 L420,140 L400,120 L380,80 Z",
    },
  ];

  const filters = [
    { id: "all", label: "All", icon: Filter },
    { id: "food", label: "Food", icon: Utensils },
    { id: "crafts", label: "Crafts", icon: Palette },
    { id: "nature", label: "Nature", icon: Mountain },
  ];

  const filteredRegions = regions.filter((region) => {
    if (activeFilter === "all") return true;
    return region.products.some((product) => product.category === activeFilter);
  });

  const handleRegionHover = (
    region: Region | null,
    event?: React.MouseEvent,
  ) => {
    if (region && event) {
      setShowTooltip({
        show: true,
        region,
        x: event.clientX,
        y: event.clientY,
      });
      setHoveredRegion(region.id);
    } else {
      setShowTooltip({ show: false, x: 0, y: 0 });
      setHoveredRegion(null);
    }
  };

  return (
    <div className="min-h-screen bg-tradwear-cream">
      {/* Background Animation Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-tradwear-green/5 rounded-full"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-tradwear-green/10 rounded-full"
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-tradwear-green/3 rounded-full"
          animate={{
            x: [0, 25, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cultural Map of Vietnam
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore the rich cultural heritage woven into every TradWear
              design. Click on regions to discover the stories behind our
              sustainable fashion.
            </p>
          </div>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              <div className="flex space-x-2">
                {filters.map((filter) => (
                  <motion.button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeFilter === filter.id
                        ? "bg-tradwear-green text-white shadow-md"
                        : "text-gray-600 hover:text-tradwear-green hover:bg-tradwear-green/10"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <filter.icon className="w-4 h-4" />
                    <span>{filter.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Map Container */}
        <AnimatedSection animation="scale" delay={0.4}>
          <div className="bg-white rounded-3xl p-8 shadow-2xl mb-12">
            <div className="relative">
              {/* SVG Map */}
              <svg
                viewBox="0 0 600 400"
                className="w-full h-auto max-h-96"
                style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
              >
                {/* Background */}
                <rect width="600" height="400" fill="#F8F9FA" rx="20" ry="20" />

                {/* Regions */}
                {filteredRegions.map((region) => (
                  <motion.path
                    key={region.id}
                    d={region.svgPath}
                    fill={hoveredRegion === region.id ? "#B4E197" : "#C8E6C9"}
                    stroke={hoveredRegion === region.id ? "#FFF9E6" : "#B4E197"}
                    strokeWidth={hoveredRegion === region.id ? "3" : "2"}
                    className="cursor-pointer transition-all duration-300"
                    onMouseEnter={(e) => handleRegionHover(region, e)}
                    onMouseLeave={() => handleRegionHover(null)}
                    onMouseMove={(e) => handleRegionHover(region, e)}
                    onClick={() => setSelectedRegion(region)}
                    whileHover={{
                      scale: 1.02,
                      filter:
                        "drop-shadow(0 8px 16px rgba(180, 225, 151, 0.3))",
                    }}
                    transition={{ duration: 0.2 }}
                  />
                ))}

                {/* Region Labels */}
                {filteredRegions.map((region, index) => (
                  <text
                    key={`${region.id}-label`}
                    x={320 + (index % 2) * 100}
                    y={120 + Math.floor(index / 2) * 60}
                    textAnchor="middle"
                    className="fill-gray-700 text-sm font-medium pointer-events-none"
                  >
                    {region.name.split(" ")[0]}
                  </text>
                ))}

                {/* Decorative Elements */}
                <circle cx="150" cy="350" r="3" fill="#B4E197" opacity="0.6" />
                <circle cx="480" cy="80" r="2" fill="#B4E197" opacity="0.8" />
                <circle
                  cx="520"
                  cy="320"
                  r="2.5"
                  fill="#B4E197"
                  opacity="0.7"
                />
              </svg>

              {/* Map Legend */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                  Cultural Regions
                </h3>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-tradwear-green rounded-full"></div>
                    <span className="text-gray-600">Click to explore</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 border-2 border-tradwear-green rounded-full"></div>
                    <span className="text-gray-600">Hover for info</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Featured Regions Grid */}
        <AnimatedSection animation="slideUp" delay={0.6}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRegions.slice(0, 3).map((region, index) => (
              <motion.div
                key={region.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer">
                  <div
                    className="aspect-video bg-tradwear-cream relative overflow-hidden"
                    onClick={() => setSelectedRegion(region)}
                  >
                    <img
                      src={region.products[0]?.image || "/placeholder.svg"}
                      alt={region.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-lg">{region.name}</h3>
                      <p className="text-sm opacity-90">{region.culturalTag}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {region.description.substring(0, 120)}...
                    </p>
                    <Button
                      onClick={() => setSelectedRegion(region)}
                      variant="outline"
                      className="w-full border-tradwear-green text-tradwear-green hover:bg-tradwear-green hover:text-white rounded-xl"
                    >
                      Explore Region
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip.show && showTooltip.region && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed z-50 bg-white rounded-xl shadow-lg p-4 pointer-events-none border border-tradwear-green/20"
              style={{
                left: showTooltip.x + 10,
                top: showTooltip.y - 60,
              }}
            >
              <div className="flex items-center space-x-2 mb-1">
                <MapPin className="w-4 h-4 text-tradwear-green" />
                <h3 className="font-semibold text-gray-900">
                  {showTooltip.region.name}
                </h3>
              </div>
              <p className="text-sm text-gray-600">
                {showTooltip.region.culturalTag}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Region Detail Modal */}
        <Dialog
          open={!!selectedRegion}
          onOpenChange={() => setSelectedRegion(null)}
        >
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedRegion && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-tradwear-green" />
                    <span>{selectedRegion.name}</span>
                  </DialogTitle>
                  <p className="text-tradwear-green font-medium">
                    {selectedRegion.culturalTag}
                  </p>
                </DialogHeader>

                <div className="space-y-6 mt-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {selectedRegion.description}
                  </p>

                  {/* Products */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Featured Products
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {selectedRegion.products.map((product, index) => (
                        <div
                          key={index}
                          className="bg-tradwear-cream rounded-xl p-6"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 object-cover rounded-xl mb-4"
                          />
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {product.name}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {product.description}
                          </p>
                          <div className="mt-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-tradwear-green/10 text-tradwear-green">
                              {product.category}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Cultural Highlights
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedRegion.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-gray-100"
                        >
                          <div className="w-2 h-2 bg-tradwear-green rounded-full"></div>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
