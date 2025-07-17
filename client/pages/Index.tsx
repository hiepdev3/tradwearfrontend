import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Leaf,
  Recycle,
  Heart,
  QrCode,
  Users,
  Star,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export default function Index() {
  const [email, setEmail] = useState("");

  const products = [
    {
      id: 1,
      name: "Bánh mì Sài Gòn",
      price: "299.000 VND",
      image: "/public/imaginepublic/1.png",
      description: " Iconic Vietnamese sandwich culture",
      culturalTheme: "Sai Gon Street Food",
    },
    {
      id: 2,
      name: "Hủ Tiếu Nam Vang",
      price: "299.000 VND",
      image: "/public/imaginepublic/2.png",
      description: "A tribute to Southern Vietnam’s culinary heritagee",
      culturalTheme: "Traditional Art",
    },
    {
      id: 3,
      name: "Phờ bò Hà Nội", 
      price: "275.000 VND",
      image: "/public/imaginepublic/4.png",
      description: "Traditional Vietnamese noodle soup design",
      culturalTheme: "Hanoi Food Culture",
    },
  ];

  const values = [
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Sustainable Materials",
      description: "Made from recycled PET bottles and organic cotton",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Cultural Heritage",
      description: "Authentic designs inspired by Vietnamese traditions",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Impact",
      description: "Supporting local artisans and preserving cultural stories",
    },
    {
      icon: <QrCode className="w-6 h-6" />,
      title: "Interactive Stories",
      description:
        "Scan QR codes to discover the cultural meaning behind each design",
    },
  ];

  const testimonials = [
    {
      name: "Linh Nguyen",
      location: "Ho Chi Minh City",
      rating: 5,
      text: "I love how my TradWear shirt connects me to my heritage. The QR code led me to amazing stories about Vietnamese pottery!",
      image: "/placeholder.svg",
    },
    {
      name: "Alex Chen",
      location: "San Francisco",
      rating: 5,
      text: "As a Vietnamese-American, wearing TradWear helps me share my culture with others. The quality is exceptional too.",
      image: "/placeholder.svg",
    },
    {
      name: "Maria Santos",
      location: "Sydney",
      rating: 5,
      text: "The sustainability aspect drew me in, but the cultural stories kept me. Each piece is like wearing a piece of history.",
      image: "/placeholder.svg",
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-tradwear-cream to-tradwear-light-green py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Vietnamese Heritage
                <span className="block text-tradwear-green">
                  in Every Thread
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover sustainable fashion that tells the story of Vietnamese
                culture. Each piece is crafted from eco-friendly materials and
                features authentic designs that connect you to centuries of
                tradition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-tradwear-green hover:bg-tradwear-dark-green text-white px-8 py-6 text-lg rounded-2xl button-glow group"
                >
                  <Link to="/shop">
                    Explore the Collection
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg rounded-2xl border-tradwear-green text-tradwear-green hover:bg-tradwear-green hover:text-white button-glow"
                >
                  Learn Our Story
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="TradWear sustainable Vietnamese fashion"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-tradwear-green text-white p-4 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">1M+</div>
                  <div className="text-sm">Bottles Recycled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cultural Designs That Tell Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each piece in our collection is inspired by authentic Vietnamese
              culture, from traditional foods to ancient crafts.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <AnimatedSection
                key={product.id}
                animation="slideUp"
                delay={index * 0.1}
              >
                <Link
                  to={`/product/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl overflow-hidden hover:scale-105">
                    <div className="aspect-square bg-tradwear-cream overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {product.name}
                        </h3>
                        <span className="text-2xl font-bold text-tradwear-green">
                          {product.price}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm bg-tradwear-green/10 text-tradwear-green px-3 py-1 rounded-full">
                          {product.culturalTheme}
                        </span>
                        <QrCode className="w-5 h-5 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection animation="fadeIn" delay={0.5}>
            <div className="text-center mt-12">
              <Button
                asChild
                className="bg-tradwear-green hover:bg-tradwear-dark-green text-white px-8 py-4 rounded-2xl button-glow"
              >
                <Link to="/shop">View All Products</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why TradWear Values */}
      <section className="py-20 bg-tradwear-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TradWear?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than a fashion brand – we're a bridge between tradition
              and sustainability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 0.15}
              >
                <div className="text-center group">
                  <div className="w-16 h-16 bg-tradwear-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-tradwear-green group-hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-tradwear-green/30">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How TradWear Works
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Wear",
                description: "Choose your favorite cultural design",
              },
              {
                step: "02",
                title: "Scan QR",
                description: "Use your phone to scan the tag",
              },
              {
                step: "03",
                title: "Discover",
                description: "Learn the cultural story behind your piece",
              },
              {
                step: "04",
                title: "Share",
                description: "Connect with heritage and community",
              },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-12 h-12 bg-tradwear-green text-white rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 -right-4 w-8 h-0.5 bg-tradwear-green/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-tradwear-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stories from Our Community
            </h2>
            <p className="text-xl text-gray-600">
              See how TradWear connects people to Vietnamese culture worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={index}
                animation="scale"
                delay={index * 0.2}
              >
                <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-tradwear-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Connected to Culture
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get exclusive access to new designs, cultural stories, and
            sustainable fashion tips.
          </p>
          <AnimatedSection animation="slideUp" delay={0.2}>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border-0 rounded-2xl px-6 py-4 input-focus"
                required
              />
              <Button
                type="submit"
                className="bg-white text-tradwear-green hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold button-glow hover:shadow-lg"
              >
                Subscribe
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
