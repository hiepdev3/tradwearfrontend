import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Play,
  Recycle,
  Users,
  Heart,
  Compass,
  ArrowRight,
  Quote,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function BehindTheDesign() {
  const [selectedArtisan, setSelectedArtisan] = useState<number | null>(null);

 
  const artisans = [
  {
    id: 1,
    name: "Trịnh Văn Sơn",
    specialty: "Bún Chả Hà Nội",
    craft: "Grilled Pork & Noodle Street Food",
    image: "/placeholder.svg",
    quote:
      "Bún chả captures the soul of Hanoi with smoky grilled pork and fresh noodles—each bowl tells the story of our city's streets.",
    bio:
      "Street-food vendor in Hanoi’s Old Quarter, serving authentic bún chả for over 25 years. Featured as a symbol of Hanoi's rich culinary heritage.",
    location: "Hoàn Kiếm District, Hanoi",
  },
  {
    id: 2,
    name: "Nguyễn Thị Hạnh",
    specialty: "Bánh Xèo Miền Tây",
    craft: "Crispy Pancake Craftsmanship",
    image: "/placeholder.svg",
    quote:
      "The sizzling sound of bánh xèo echoes our family gatherings—every crepe is a celebration of Southern flavor.",
    bio:
      "Culinary artisan from Cần Thơ, preserving traditional Mekong Delta recipes and techniques for making large, flavorful bánh xèo.",
    location: "Cần Thơ, Mekong Delta",
  },
  {
    id: 3,
    name: "Đào Văn Minh",
    specialty: "Chả Cá Lã Vọng",
    craft: "Traditional Grilled Fish",
    image: "/placeholder.svg",
    quote:
      "Chả cá Lã Vọng is more than a dish—it’s a legacy of patience and flavor passed down through Hanoi’s culinary history.",
    bio:
      "Fourth-generation chef at the original Chả Cá Lã Vọng restaurant on Hàng Sơn Street, preserving a dish dating back to 1871. :contentReference[oaicite:1]{index=1}",
    location: "Hàng Sơn Street, Hanoi",
  },
];



  const culturalElements = [
  {
    title: "Phở – Linh hồn ẩm thực Hà Nội",
    description:
      "Mỗi bát phở là sự hòa quyện của thời gian, hương vị và tâm huyết của người nấu. Đây không chỉ là món ăn, mà còn là ký ức văn hóa của người Việt.",
    image: "/placeholder.svg",
  },
  {
    title: "Bánh Chưng – Hương Tết truyền thống",
    description:
      "Chiếc bánh vuông vức tượng trưng cho đất, gói trong lá dong và chứa đựng sự đoàn viên, biết ơn tổ tiên trong dịp Tết cổ truyền.",
    image: "/placeholder.svg",
  },
  {
    title: "Nem Rán – Vị giòn vàng của ký ức",
    description:
      "Nem rán (chả giò) là món ăn không thể thiếu trong bữa cơm sum họp của người Việt, gói ghém sự tinh tế và khéo léo trong từng lớp bánh tráng giòn tan.",
    image: "/placeholder.svg",
  },
];


  const values = [
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Sustainable Materials",
      description:
        "Eco-friendly fabrics made from recycled materials and organic cotton, protecting our planet for future generations.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Handmade Heritage",
      description:
        "Every design is crafted with care by skilled artisans, preserving traditional techniques and ensuring quality.",
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Cultural Preservation",
      description:
        "We document and share the stories behind each design, keeping Vietnamese culture alive for the world to discover.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description:
        "Direct partnerships with local artisans ensure fair wages and support for traditional craft communities.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/imaginepublic/7.png"
            alt="Vietnamese artisan at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          {/* Subtle Vietnamese Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B4E197' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The Story Behind
              <span className="block text-tradwear-green">TradWear</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
              A journey from tradition to modern fashion
            </p>
            <Button className="bg-tradwear-green hover:bg-tradwear-dark-green text-white px-8 py-6 text-lg rounded-2xl button-glow group">
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Behind the Design Video Section */}
      <AnimatedSection animation="fadeIn">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                From Sketch to Stitch
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                See how each design is inspired, drawn, and hand-produced with
                care by Vietnamese artisans.
              </p>
            </div>

            {/* Main Video */}
            <div className="relative aspect-video bg-tradwear-cream rounded-3xl overflow-hidden shadow-2xl mb-12">
              <img
                src="/placeholder.svg"
                alt="Behind the scenes video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <motion.button
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-8 h-8 text-tradwear-green ml-1" />
                </motion.button>
              </div>
            </div>

            {/* Video Thumbnails */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Inspiration & Sketching",
                "Artisan Collaboration",
                "Sustainable Production",
              ].map((title, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-video bg-tradwear-cream rounded-2xl overflow-hidden cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    src="/placeholder.svg"
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <Play className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">
                      {title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Meet the Artisans Section */}
      <AnimatedSection animation="slideUp" delay={0.2}>
        <section className="py-20 bg-tradwear-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet the Artisans
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The talented craftspeople who bring Vietnamese heritage to life
                through their art and dedication.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {artisans.map((artisan, index) => (
                <AnimatedSection
                  key={artisan.id}
                  animation="scale"
                  delay={index * 0.2}
                >
                  <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={artisan.image}
                        alt={artisan.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center space-x-2 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{artisan.location}</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {artisan.name}
                      </h3>
                      <p className="text-tradwear-green font-medium mb-2">
                        {artisan.specialty}
                      </p>
                      <p className="text-gray-600 mb-4">{artisan.craft}</p>
                      <div className="bg-tradwear-cream p-4 rounded-xl mb-4">
                        <Quote className="w-5 h-5 text-tradwear-green mb-2" />
                        <p className="text-gray-700 italic text-sm leading-relaxed">
                          "{artisan.quote}"
                        </p>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full border-tradwear-green text-tradwear-green hover:bg-tradwear-green hover:text-white rounded-xl"
                          >
                            View Profile
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">
                              {artisan.name}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <img
                              src={artisan.image}
                              alt={artisan.name}
                              className="w-full h-64 object-cover rounded-xl"
                            />
                            <div className="space-y-2">
                              <p className="text-tradwear-green font-medium">
                                {artisan.specialty} • {artisan.craft}
                              </p>
                              <p className="text-gray-600 flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                {artisan.location}
                              </p>
                              <p className="text-gray-700 leading-relaxed">
                                {artisan.bio}
                              </p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Cultural Storytelling Block */}
      <AnimatedSection animation="slideUp" delay={0.4}>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The Culture Woven in Every Thread
              </h2>
            </div>

            <div className="space-y-16">
              {culturalElements.map((element, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <AnimatedSection
                    animation={index % 2 === 0 ? "slideLeft" : "slideRight"}
                    delay={0.2}
                  >
                    <div
                      className={`${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
                    >
                      <div className="relative aspect-square bg-tradwear-cream rounded-3xl overflow-hidden shadow-xl">
                        <img
                          src={element.image}
                          alt={element.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-tradwear-green/20 to-transparent"></div>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection
                    animation={index % 2 === 0 ? "slideRight" : "slideLeft"}
                    delay={0.4}
                  >
                    <div
                      className={`${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
                    >
                      <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                          <Sparkles className="w-6 h-6 text-tradwear-green" />
                          <span className="text-tradwear-green font-medium">
                            Cultural Heritage
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                          {element.title}
                        </h3>
                        <p className="text-xl text-gray-600 leading-relaxed">
                          {element.description}
                        </p>
                        <div className="pt-4">
                          <Button
                            variant="outline"
                            className="border-tradwear-green text-tradwear-green hover:bg-tradwear-green hover:text-white rounded-xl px-6 py-3"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection animation="fadeIn" delay={0.6}>
        <section className="py-20 bg-tradwear-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why It Matters
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every TradWear piece represents our commitment to
                sustainability, heritage, and community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <AnimatedSection
                  key={index}
                  animation="slideUp"
                  delay={index * 0.1}
                >
                  <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl text-center group h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-tradwear-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-tradwear-green group-hover:text-white transition-all duration-300">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call-to-Action Footer */}
      <AnimatedSection animation="slideUp" delay={0.8}>
        <section className="py-20 bg-tradwear-green">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Wear a Story?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Each piece supports cultural artisans & eco-fashion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-white text-tradwear-green hover:bg-gray-100 px-8 py-6 text-lg rounded-2xl font-semibold button-glow group"
              >
                <Link to="/shop">
                  Shop the Collection
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-tradwear-green px-8 py-6 text-lg rounded-2xl font-semibold"
              >
                Watch More Stories
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
