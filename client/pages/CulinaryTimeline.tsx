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
  Utensils,
  Crown,
  Coffee,
  MapPin,
  Heart,
  Leaf,
  ChefHat,
} from "lucide-react";

interface CulinaryItem {
  id: string;
  era: string;
  period: string;
  dishName: string;
  dishIcon: string;
  product: string;
  description: string;
  culturalStory: string;
  productImage: string;
  dishImage: string;
  quote: string;
  author: string;
  color: string;
  ingredients: string[];
}

export default function CulinaryTimeline() {
  const [selectedItem, setSelectedItem] = useState<CulinaryItem | null>(null);

  const culinaryItems: CulinaryItem[] = [
    {
      id: "hung-kings",
      era: "Ancient Times",
      period: "Hùng Kings Era (2879-258 BC)",
      dishName: "Bánh Chưng",
      dishIcon: "🍙",
      product: "Square Legend Tee",
      description:
        "Vietnam's sacred square sticky rice cake, symbolizing the Earth and honoring ancestral traditions during Tết. A testament to agricultural heritage.",
      culturalStory:
        "Legend tells of Prince Lang Liêu creating bánh chưng to represent the Earth in square form, with green dong leaves symbolizing growth and prosperity. This ancient dish connects every Vietnamese family to their roots during Lunar New Year celebrations.",
      productImage: "/placeholder.svg",
      dishImage: "/placeholder.svg",
      quote:
        "Bánh chưng is not just food—it's our connection to the ancestors and the land that nurtured us.",
      author: "Traditional Vietnamese saying",
      color: "#22C55E",
      ingredients: [
        "Glutinous rice",
        "Mung beans",
        "Pork belly",
        "Dong leaves",
      ],
    },
    {
      id: "ly-dynasty",
      era: "Dynastic Period",
      period: "Lý Dynasty (1009-1225)",
      dishName: "Chả Cá",
      dishIcon: "🐟",
      product: "Golden Fish Heritage Hoodie",
      description:
        "Hanoi's legendary turmeric fish dish, grilled tableside with fresh herbs. A celebration of communal dining and the capital's refined flavors.",
      culturalStory:
        "Born in Hanoi's old quarter, chả cá represents the sophisticated cuisine that emerged during the Lý Dynasty. The dish's golden turmeric coating and aromatic herbs create a sensory experience that has captivated diners for nearly a thousand years.",
      productImage: "/placeholder.svg",
      dishImage: "/placeholder.svg",
      quote:
        "In every bite of chả cá, you taste the refinement of royal Hanoi cuisine.",
      author: "Chef Nguyễn Văn Minh, Hanoi",
      color: "#F59E0B",
      ingredients: [
        "Fresh fish",
        "Turmeric",
        "Dill",
        "Green onions",
        "Rice noodles",
      ],
    },
    {
      id: "nguyen-dynasty",
      era: "Imperial Period",
      period: "Nguyễn Dynasty (1802-1945)",
      dishName: "Nem Huế",
      dishIcon: "🥟",
      product: "Huế Rolls Hoodie",
      description:
        "Royal spring rolls from the ancient capital, featuring layers of flavor and meticulous presentation. Design reflects imperial craft and elegance.",
      culturalStory:
        "Created in the imperial kitchens of Huế, nem lụi showcases the sophisticated culinary artistry of Vietnam's last royal dynasty. Each delicate roll represents the attention to detail and aesthetic beauty that defined royal Vietnamese cuisine.",
      productImage: "/placeholder.svg",
      dishImage: "/placeholder.svg",
      quote:
        "Royal cuisine teaches us that food is art, and every dish tells a story of heritage.",
      author: "Imperial Chef Tradition, Huế",
      color: "#8B5CF6",
      ingredients: [
        "Ground pork",
        "Lemongrass",
        "Banana leaves",
        "Fish sauce",
        "Herbs",
      ],
    },
    {
      id: "french-colonial",
      era: "Colonial Fusion",
      period: "French Colonial (1887-1954)",
      dishName: "Bánh Mì",
      dishIcon: "🥖",
      product: "Saigon Baguette Tee",
      description:
        "A global street food icon born from colonial fusion. Our tee features bold typography and street-style graphics celebrating this cultural bridge.",
      culturalStory:
        "When French baguettes met Vietnamese flavors, bánh mì was born on Saigon's bustling streets. This sandwich represents Vietnam's genius for adaptation—taking foreign ingredients and creating something uniquely Vietnamese that would conquer the world.",
      productImage: "/placeholder.svg",
      dishImage: "/placeholder.svg",
      quote:
        "Bánh mì shows how we take what comes and make it our own, better than before.",
      author: "Street vendor wisdom, Saigon",
      color: "#DC2626",
      ingredients: [
        "French bread",
        "Pâté",
        "Pickled vegetables",
        "Cilantro",
        "Chili",
      ],
    },
    {
      id: "independence",
      era: "Modern Vietnam",
      period: "Post-Independence (1954-Present)",
      dishName: "Phở Hà Nội",
      dishIcon: "🍜",
      product: "Pho Bowl Tee",
      description:
        "A tribute to Vietnam's national soul food. Design highlights the harmony of aromatic herbs, silky noodles, and cultural warmth in every bowl.",
      culturalStory:
        "Born in early 20th century Hanoi, phở embodies the Vietnamese spirit—simple ingredients transformed into extraordinary flavor. Each bowl tells the story of resilience, community, and the magic that happens when families gather around shared meals.",
      productImage: "/placeholder.svg",
      dishImage: "/placeholder.svg",
      quote:
        "Phở is Vietnam in a bowl—our history, our heart, our home in every spoonful.",
      author: "Grandmother's wisdom, Hanoi",
      color: "#EF4444",
      ingredients: [
        "Rice noodles",
        "Beef broth",
        "Fresh herbs",
        "Lime",
        "Bean sprouts",
      ],
    },
    {
      id: "contemporary",
      era: "Global Vietnam",
      period: "Contemporary Era (2000-Present)",
      dishName: "Vietnamese Coffee",
      dishIcon: "☕",
      product: "Highland Brew Heritage Tee",
      description:
        "From French colonial introduction to global coffee culture leadership. Our design celebrates Vietnam's position as the world's second-largest coffee producer.",
      culturalStory:
        "Vietnamese coffee culture transformed from French colonial introduction to a distinctly Vietnamese experience. The iconic phin filter and condensed milk create a ritual that slows down time, fostering conversation and community in bustling modern Vietnam.",
      productImage: "/placeholder.svg",
      dishImage: "/placeholder.svg",
      quote:
        "Vietnamese coffee is meditation in motion—slow brewing, strong flavor, sweet memories.",
      author: "Café culture philosophy, Ho Chi Minh City",
      color: "#92400E",
      ingredients: [
        "Robusta beans",
        "Phin filter",
        "Condensed milk",
        "Hot water",
        "Ice",
      ],
    },
  ];

  const CulinaryItemComponent = ({
    item,
    index,
  }: {
    item: CulinaryItem;
    index: number;
  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        className={`relative mb-20 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        animate={
          isInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
        }
        transition={{ duration: 0.8, delay: index * 0.2 }}
      >
        {/* Timeline Connector */}
        <div
          className={`absolute top-8 w-1/2 h-0.5 bg-gradient-to-r ${
            index % 2 === 0
              ? "left-1/2 from-transparent to-gray-300"
              : "right-1/2 from-gray-300 to-transparent"
          }`}
        />

        <Card className="bg-tradwear-cream border-0 shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
          {/* Food Pattern Background */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${encodeURIComponent(item.color)}' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <CardContent className="relative p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div
                className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                {/* Era Badge */}
                <div className="flex items-center space-x-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.dishIcon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {item.period}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 font-serif">
                      {item.era}
                    </h2>
                  </div>
                </div>

                {/* Dish Name */}
                <div className="bg-white/80 rounded-2xl p-6 border border-gray-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <Utensils className="w-5 h-5 text-gray-600" />
                    <h3 className="text-2xl font-bold text-gray-900 font-serif">
                      {item.dishName}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Ingredients */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.ingredients.slice(0, 3).map((ingredient, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700"
                      >
                        {ingredient}
                      </span>
                    ))}
                    {item.ingredients.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-500">
                        +{item.ingredients.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Quote */}
                  <div className="border-l-4 border-tradwear-green pl-4 py-2 bg-tradwear-green/5 rounded-r-lg">
                    <p className="text-gray-700 italic text-sm leading-relaxed">
                      "{item.quote}"
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      — {item.author}
                    </p>
                  </div>
                </div>

                {/* Product Info */}
                <div className="bg-white rounded-2xl p-6 border-2 border-tradwear-green/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <ChefHat className="w-5 h-5 text-tradwear-green" />
                    <h4 className="text-lg font-semibold text-tradwear-green">
                      TradWear Design: {item.product}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.culturalStory}
                  </p>

                  <div className="flex space-x-3">
                    <Button
                      onClick={() => setSelectedItem(item)}
                      className="bg-tradwear-green hover:bg-tradwear-dark-green text-white rounded-xl px-6"
                    >
                      View Design
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-gray-600 hover:text-tradwear-green rounded-xl"
                    >
                      <QrCode className="w-4 h-4 mr-2" />
                      Scan Recipe
                    </Button>
                  </div>
                </div>
              </div>

              {/* Images */}
              <div
                className={`space-y-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="relative">
                  <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={item.productImage}
                      alt={item.product}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center shadow-md">
                    <QrCode className="w-4 h-4 text-tradwear-green" />
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-video bg-white rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={item.dishImage}
                      alt={item.dishName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm font-medium">
                    {item.dishName}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-tradwear-green to-tradwear-dark-green">
      {/* Animated Food Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-6xl opacity-10"
          animate={{
            rotate: [0, 10, -10, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🍜
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-20 text-5xl opacity-10"
          animate={{
            rotate: [0, -15, 15, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          🥖
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/4 text-4xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          ☕
        </motion.div>

        {/* Rice Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cellipse cx='30' cy='15' rx='2' ry='8'/%3E%3Cellipse cx='30' cy='45' rx='2' ry='8'/%3E%3Cellipse cx='15' cy='30' rx='8' ry='2'/%3E%3Cellipse cx='45' cy='30' rx='8' ry='2'/%3E%3C/g%3E%3C/svg%3E")`,
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
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="text-6xl">🍜</div>
                <h1 className="text-5xl md:text-7xl font-bold text-white font-serif">
                  Discover Vietnam's Heritage
                </h1>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white/90 font-serif italic mb-8">
                Through Iconic Dishes
              </h2>
              <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Experience the culinary evolution of Vietnam through centuries
                of flavors. Each iconic dish tells a story, transformed into
                sustainable fashion that honors tradition while embracing the
                future.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Timeline Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Central Timeline Line */}
          <div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-2 bg-white/20 rounded-full"
            style={{ height: "calc(100% - 160px)", top: "160px" }}
          >
            <motion.div
              className="w-full bg-gradient-to-b from-tradwear-green to-white rounded-full"
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{ duration: 2, delay: 1 }}
            />
          </div>

          {/* Timeline Nodes */}
          <div className="relative">
            {culinaryItems.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Central Node */}
                <motion.div
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-2xl z-10"
                  style={{ backgroundColor: item.color, top: "50%" }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 + 1 }}
                  whileHover={{ scale: 1.2 }}
                >
                  {item.dishIcon}
                </motion.div>

                <CulinaryItemComponent item={item} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <AnimatedSection animation="slideUp" delay={0.4}>
          <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Heart className="w-8 h-8 text-white" />
                <h3 className="text-3xl font-bold text-white font-serif">
                  Taste Vietnam Through Fashion
                </h3>
              </div>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Every TradWear piece captures the essence of Vietnamese culinary
                heritage. Wear the stories, taste the culture, celebrate the
                tradition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white text-tradwear-green hover:bg-gray-100 px-8 py-6 text-lg rounded-2xl font-semibold"
                >
                  <Link to="/shop">
                    Shop Culinary Collection
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-tradwear-green px-8 py-6 text-lg rounded-2xl font-semibold"
                >
                  <Link to="/behind-the-design">Discover Our Process</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            className="bg-white rounded-3xl p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif flex items-center">
                  {selectedItem.dishIcon} {selectedItem.dishName}
                </h3>
                <img
                  src={selectedItem.dishImage}
                  alt={selectedItem.dishName}
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                />
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Ingredients:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedItem.ingredients.map((ingredient, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-2 bg-tradwear-green/10 text-tradwear-green rounded-xl text-sm font-medium"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-tradwear-green mb-4">
                  {selectedItem.product}
                </h4>
                <img
                  src={selectedItem.productImage}
                  alt={selectedItem.product}
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                />
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedItem.culturalStory}
                </p>
                <div className="border-l-4 border-tradwear-green pl-4 py-2 bg-tradwear-green/5 rounded-r-lg mb-6">
                  <p className="text-gray-700 italic text-sm leading-relaxed">
                    "{selectedItem.quote}"
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    — {selectedItem.author}
                  </p>
                </div>
              </div>
            </div>
            <Button
              onClick={() => setSelectedItem(null)}
              className="w-full bg-tradwear-green hover:bg-tradwear-dark-green text-white rounded-xl mt-6"
            >
              Close
            </Button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
