import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Clock,
  QrCode,
  ArrowRight,
  MapPin,
  Palette,
  Crown,
  Coffee,
  Utensils,
} from "lucide-react";

interface TimelineItem {
  id: string;
  era: string;
  period: string;
  title: string;
  product: string;
  description: string;
  fullDescription: string;
  image: string;
  backgroundImage: string;
  icon: React.ReactNode;
  color: string;
  highlights: string[];
}

export default function Timeline() {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);

  const timelineItems: TimelineItem[] = [
    {
      id: "ly-dynasty",
      era: "Lý Dynasty",
      period: "11th century",
      title: "Folk Art Origins",
      product: "Dong Ho Painting Tee",
      description:
        "Inspired by traditional folk woodblock printing from Bắc Ninh province, reflecting ancient myths and daily life.",
      fullDescription:
        "The Dong Ho folk paintings originated in the 11th century during the Lý Dynasty, representing one of Vietnam's oldest folk art forms. These woodblock prints traditionally depicted daily life, mythology, and wishes for prosperity, created using natural materials and passed down through generations.",
      image: "/placeholder.svg",
      backgroundImage: "/placeholder.svg",
      icon: <Palette className="w-6 h-6" />,
      color: "#8B5A2B",
      highlights: [
        "Traditional woodblock printing",
        "Natural color pigments",
        "Folk mythology themes",
        "Bắc Ninh province heritage",
      ],
    },
    {
      id: "tran-dynasty",
      era: "Trần Dynasty",
      period: "13th-14th century",
      title: "Ceramic Mastery",
      product: "Bát Tràng Pottery Hoodie",
      description:
        "Celebrating the renowned ceramic village that supplied the royal court with exquisite pottery and porcelain.",
      fullDescription:
        "During the Trần Dynasty, Bát Tràng village became the premier ceramic production center for the royal court. Master potters developed unique glazing techniques and decorative patterns that combined Chinese influences with distinctly Vietnamese aesthetics.",
      image: "/placeholder.svg",
      backgroundImage: "/placeholder.svg",
      icon: <Crown className="w-6 h-6" />,
      color: "#4A5568",
      highlights: [
        "Royal court ceramics",
        "Unique glazing techniques",
        "Cultural fusion designs",
        "Master potter traditions",
      ],
    },
    {
      id: "nguyen-dynasty",
      era: "Nguyễn Dynasty",
      period: "19th century",
      title: "Imperial Elegance",
      product: "Lụa Huế Scarf Shirt",
      description:
        "Embodying the elegance of royal silk weaving from Huế, with gold-accented thread patterns and soft violet tones.",
      fullDescription:
        "The Nguyễn Dynasty established Huế as the imperial capital, where royal silk workshops created the finest textiles in Southeast Asia. These luxurious fabrics featured intricate patterns inspired by imperial gardens, dragons, and phoenix motifs.",
      image: "/placeholder.svg",
      backgroundImage: "/placeholder.svg",
      icon: <Crown className="w-6 h-6" />,
      color: "#805AD5",
      highlights: [
        "Imperial silk weaving",
        "Gold thread embroidery",
        "Royal court fashion",
        "Huế craftsmanship",
      ],
    },
    {
      id: "french-colonial",
      era: "French Colonial",
      period: "Early 20th century",
      title: "Cultural Fusion",
      product: "Colonial Café Heritage Tee",
      description:
        "Capturing the birth of Vietnam's coffee culture when French colonial influence met local ingenuity.",
      fullDescription:
        "The French colonial period introduced coffee cultivation to Vietnam's Central Highlands. Vietnamese farmers adapted French techniques to local conditions, eventually creating the unique Vietnamese coffee culture with its distinctive brewing methods and café society.",
      image: "/placeholder.svg",
      backgroundImage: "/placeholder.svg",
      icon: <Coffee className="w-6 h-6" />,
      color: "#D69E2E",
      highlights: [
        "Coffee cultivation begins",
        "Cultural adaptation",
        "Highland farming",
        "East-meets-West fusion",
      ],
    },
    {
      id: "modern-vietnam",
      era: "Modern Vietnam",
      period: "Mid-20th century",
      title: "Street Food Revolution",
      product: "Phở Culture Tee",
      description:
        "A tribute to Vietnam's national dish, capturing street food culture of Hanoi in bold modern graphics.",
      fullDescription:
        "Phở emerged in early 20th century Hanoi, combining Chinese noodle traditions with local herbs and spices. This humble street food became Vietnam's national dish, representing the country's ability to create extraordinary flavor from simple ingredients.",
      image: "/placeholder.svg",
      backgroundImage: "/placeholder.svg",
      icon: <Utensils className="w-6 h-6" />,
      color: "#E53E3E",
      highlights: [
        "National dish creation",
        "Street food culture",
        "Hanoi origins",
        "Culinary innovation",
      ],
    },
    {
      id: "contemporary",
      era: "Contemporary Era",
      period: "21st century",
      title: "Global Heritage",
      product: "Cultural Bridge Hoodie",
      description:
        "Modern designs that connect Vietnamese heritage with global sustainability, bridging ancient wisdom and contemporary values.",
      fullDescription:
        "Today's Vietnam embraces its rich cultural heritage while engaging with global sustainability movements. TradWear represents this evolution, using traditional motifs and stories to create modern fashion that honors the past while building a sustainable future.",
      image: "/placeholder.svg",
      backgroundImage: "/placeholder.svg",
      icon: <MapPin className="w-6 h-6" />,
      color: "#38A169",
      highlights: [
        "Global cultural exchange",
        "Sustainable practices",
        "Heritage preservation",
        "Modern interpretations",
      ],
    },
  ];

  const TimelineItemComponent = ({
    item,
    index,
  }: {
    item: TimelineItem;
    index: number;
  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        className={`flex items-center mb-16 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        {/* Timeline Node */}
        <div className="relative flex-shrink-0 mx-8">
          <motion.div
            className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg relative z-10"
            style={{ backgroundColor: item.color }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-white">{item.icon}</div>
          </motion.div>

          {/* Timeline Line */}
          {index < timelineItems.length - 1 && (
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-gray-300 to-gray-200" />
          )}
        </div>

        {/* Content Card */}
        <motion.div
          className="flex-1 max-w-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-tradwear-cream border-0 shadow-xl rounded-3xl overflow-hidden">
            <div className="relative">
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${encodeURIComponent(item.color)}' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              <CardContent className="relative p-8">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-600">
                        {item.period}
                      </span>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 font-serif">
                      {item.era}
                    </h2>

                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>

                    <div className="bg-white/60 rounded-2xl p-4 border border-gray-200">
                      <h4 className="font-semibold text-tradwear-green mb-2">
                        Featured Product: {item.product}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.highlights.slice(0, 2).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/80 rounded-full text-xs font-medium text-gray-700 border border-gray-200"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3 pt-4">
                      <Button
                        variant="outline"
                        onClick={() => setSelectedItem(item)}
                        className="border-tradwear-green text-tradwear-green hover:bg-tradwear-green hover:text-white rounded-xl"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>

                      <Button
                        variant="ghost"
                        className="text-gray-600 hover:text-tradwear-green rounded-xl"
                      >
                        <QrCode className="w-4 h-4 mr-2" />
                        Scan Story
                      </Button>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={item.image}
                        alt={item.product}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* QR Badge */}
                    <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center shadow-md">
                      <QrCode className="w-4 h-4 text-tradwear-green" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-tradwear-green">
      {/* Background Pattern */}
      <div
        className="fixed inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23245139' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm30 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Animation Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full"
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />
      </div>

      <div className="relative">
        {/* Header Section */}
        <AnimatedSection animation="fadeIn">
          <div className="text-center py-20 px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Clock className="w-8 h-8 text-white" />
                <h1 className="text-5xl md:text-7xl font-bold text-white font-serif">
                  Discover Vietnam's Heritage
                </h1>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white/90 font-serif italic mb-8">
                Through Time
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Journey through centuries of Vietnamese culture, from ancient
                dynasties to modern innovations. Each era tells a story woven
                into TradWear's sustainable fashion.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Timeline Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Timeline Progress Indicator */}
          <div className="hidden md:block relative mb-16">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300/30" />
            <div className="flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
                <span className="text-white text-sm font-medium">
                  {timelineItems.length} Cultural Eras • Scroll to Explore
                </span>
              </div>
            </div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-0">
            {timelineItems.map((item, index) => (
              <TimelineItemComponent key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <AnimatedSection animation="slideUp" delay={0.4}>
          <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6 font-serif">
                Experience Vietnam's Heritage Today
              </h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Every TradWear piece carries these stories forward. Discover
                sustainable fashion that honors the past while building a better
                future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white text-tradwear-green hover:bg-gray-100 px-8 py-6 text-lg rounded-2xl font-semibold"
                >
                  <Link to="/shop">
                    Shop Heritage Collection
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-tradwear-green px-8 py-6 text-lg rounded-2xl font-semibold"
                >
                  <Link to="/behind-the-design">Meet the Artisans</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Detail Modal (if needed) */}
      {selectedItem && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
              {selectedItem.era} - {selectedItem.title}
            </h3>
            <img
              src={selectedItem.image}
              alt={selectedItem.product}
              className="w-full h-64 object-cover rounded-2xl mb-6"
            />
            <p className="text-gray-700 leading-relaxed mb-6">
              {selectedItem.fullDescription}
            </p>
            <div className="space-y-3 mb-6">
              <h4 className="font-semibold text-gray-900">
                Cultural Highlights:
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {selectedItem.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 bg-tradwear-green/10 text-tradwear-green rounded-xl text-sm font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
            <Button
              onClick={() => setSelectedItem(null)}
              className="w-full bg-tradwear-green hover:bg-tradwear-dark-green text-white rounded-xl"
            >
              Close
            </Button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
