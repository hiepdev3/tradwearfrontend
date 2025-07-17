import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";
import CulturalStoryTabs from "@/components/CulturalStoryTabs";
import {
  Star,
  Heart,
  ShoppingCart,
  Zap,
  ChevronLeft,
  ChevronRight,
  Check,
  QrCode,
  Plus,
  Minus,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";

export default function ProductDetail() {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Sample product data - in a real app, this would come from an API
  const product = {
    id: 1,
    name: "Phờ bò Hà Nội",
    category: "T-SHIRT",
    rating: 4.5,
    reviewCount: 42,
    price: 275,
    compareAtPrice: 38,
    savePercent: 15,
    inStock: 24,
    description:
      "Traditional Vietnamese noodle soup design crafted from organic cotton and recycled materials. Comfort meets culture in this sustainable piece that tells the story of Hanoi's street food heritage.",
    culturalStory:
      "Inspired by Hanoi street food culture, this design celebrates the iconic Pho - Vietnam's national dish. The bowl motif represents community, warmth, and the centuries-old tradition of gathering around shared meals. Each element in the design tells the story of Vietnamese culinary heritage, from the delicate rice noodles to the aromatic herbs that make Pho so special.",
    colors: [
      { name: "Charcoal", value: "#212121" },
      { name: "Stone", value: "#D9D9D9" },
      { name: "Navy", value: "#1E3A8A" },
      { name: "Burgundy", value: "#9B5060" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/public/imaginepublic/4.png",
      "/public/imaginepublic/4.png",
      "/public/imaginepublic/4.png",
      "/public/imaginepublic/4.png",
    ],
  };

  const reviews = [
    {
      id: 1,
      name: "Linh Nguyen",
      rating: 5,
      comment:
        "Love the cultural story behind this shirt! The QR code led me to amazing content about Vietnamese street food.",
      date: "2 days ago",
    },
    {
      id: 2,
      name: "Alex Chen",
      rating: 4,
      comment:
        "Great quality material and the design is beautiful. Perfect conversation starter!",
      date: "1 week ago",
    },
    {
      id: 3,
      name: "Maria Santos",
      rating: 5,
      comment:
        "Sustainable fashion that actually looks good. The fit is perfect and I love the cultural connection.",
      date: "2 weeks ago",
    },
  ];

  const relatedProducts = [
    {
      id: 2,
      name: "Bánh mì Sài Gòn",
      price: 38,
      image: "/imaginepublic/1.png",
      category: "Shirt",
    },
    {
      id: 3,
      name: "Hủ Tiếu Nam Vang",
      price: 58,
      image: "/imaginepublic/2.png",
      category: "Shirt",
    },
    {
      id: 4,
      name: "Bat Trang Ceramic Tee",
      price: 34,
      image: "/placeholder.svg",
      category: "T-Shirt",
    },
    {
      id: 5,
      name: "Mekong Delta Hoodie",
      price: 55,
      image: "/placeholder.svg",
      category: "Hoodie",
    },
  ];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length,
    );
  };

  const updateQuantity = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              to="/"
              className="text-gray-600 hover:text-tradwear-green transition-colors"
            >
              Home
            </Link>
            <ChevronRightIcon className="w-4 h-4 text-gray-400" />
            <Link
              to="/shop"
              className="text-gray-600 hover:text-tradwear-green transition-colors"
            >
              Shop
            </Link>
            <ChevronRightIcon className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Image Gallery */}
          <AnimatedSection animation="slideLeft">
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-tradwear-cream rounded-3xl overflow-hidden group">
                <motion.img
                  key={selectedImage}
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? "border-tradwear-green shadow-lg"
                        : "border-gray-200 hover:border-tradwear-green/50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {selectedImage === index && (
                      <div className="absolute inset-0 bg-tradwear-green/10" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side - Product Info */}
          <AnimatedSection animation="slideRight" delay={0.2}>
            <div className="space-y-6">
              {/* Category & Title */}
              <div>
                <Badge className="bg-tradwear-green/10 text-tradwear-green mb-3">
                  {product.category}
                </Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">
                    {product.rating}
                  </span>
                  <span className="text-gray-600">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Price Block */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ${product.compareAtPrice}
                  </span>
                  <Badge className="bg-tradwear-green text-white">
                    Save {product.savePercent}%
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  In Stock – {product.inStock} items left
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>

              {/* Cultural Story Tabs */}
              <CulturalStoryTabs culturalStory={product.culturalStory} />

              {/* Color Selector */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Color
                </h3>
                <div className="flex space-x-3">
                  {product.colors.map((color, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`relative w-12 h-12 rounded-full border-4 transition-all duration-300 ${
                        selectedColor === index
                          ? "border-tradwear-green scale-110"
                          : "border-gray-200 hover:border-tradwear-green/50"
                      }`}
                      style={{ backgroundColor: color.value }}
                      whileHover={{
                        scale: selectedColor === index ? 1.1 : 1.05,
                      }}
                      whileTap={{ scale: 0.95 }}
                      title={color.name}
                    >
                      {selectedColor === index && (
                        <div className="absolute inset-2 border-2 border-white rounded-full" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Size
                </h3>
                <div className="flex space-x-3">
                  {product.sizes.map((size) => (
                    <motion.button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-xl border-2 font-medium transition-all duration-300 ${
                        selectedSize === size
                          ? "border-tradwear-green bg-tradwear-cream text-tradwear-green"
                          : "border-gray-200 text-gray-700 hover:border-tradwear-green/50"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Quantity
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                    <motion.button
                      onClick={() => updateQuantity(-1)}
                      className="p-3 hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Minus className="w-4 h-4 text-gray-600" />
                    </motion.button>
                    <Input
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                      }
                      className="w-16 text-center border-0 focus:ring-0"
                      min="1"
                    />
                    <motion.button
                      onClick={() => updateQuantity(1)}
                      className="p-3 hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Plus className="w-4 h-4 text-gray-600" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <Button
                    asChild
                    className="flex-1 bg-tradwear-green hover:bg-tradwear-dark-green text-white py-6 text-lg rounded-2xl button-glow group"
                  >
                    <Link to="/checkout">
                      <ShoppingCart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Add to Cart
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-tradwear-green text-tradwear-green hover:bg-tradwear-green hover:text-white py-6 text-lg rounded-2xl button-glow group"
                  >
                    <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Buy Now
                  </Button>
                </div>
                <motion.button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="w-full flex items-center justify-center space-x-2 py-3 text-gray-600 hover:text-tradwear-green transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isWishlisted
                        ? "fill-red-500 text-red-500"
                        : "text-gray-600"
                    }`}
                  />
                  <span>
                    {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                  </span>
                </motion.button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Cultural Story Section */}
        <AnimatedSection animation="slideUp" delay={0.4}>
          <div className="mt-16">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="cultural-story" className="border-0">
                <AccordionTrigger className="bg-white rounded-2xl px-6 py-4 hover:bg-tradwear-cream/50 transition-colors [&[data-state=open]]:rounded-b-none">
                  <div className="flex items-center space-x-3">
                    <QrCode className="w-6 h-6 text-tradwear-green" />
                    <span className="text-xl font-semibold">
                      The Story Behind This Design
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-white rounded-b-2xl px-6 pb-6">
                  <div className="pt-4 space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      {product.culturalStory}
                    </p>
                    <div className="flex items-center space-x-4 p-4 bg-tradwear-cream rounded-xl">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                        <QrCode className="w-8 h-8 text-tradwear-green" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Scan to Learn More
                        </h4>
                        <p className="text-sm text-gray-600">
                          Discover artisan interviews, recipes, and cultural
                          maps
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </AnimatedSection>

        {/* Reviews Section */}
        <AnimatedSection animation="slideUp" delay={0.6}>
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Customer Reviews
            </h2>
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <AnimatedSection
                  key={review.id}
                  animation="slideUp"
                  delay={0.1 * index}
                >
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-tradwear-green/10 rounded-full flex items-center justify-center">
                          <span className="text-tradwear-green font-semibold">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-semibold text-gray-900">
                              {review.name}
                            </h4>
                            <div className="flex">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">
                              {review.date}
                            </span>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Related Products */}
        <AnimatedSection animation="slideUp" delay={0.8}>
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              You Might Also Like
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <AnimatedSection
                  key={relatedProduct.id}
                  animation="scale"
                  delay={0.1 * index}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group cursor-pointer">
                      <div className="aspect-square bg-tradwear-cream overflow-hidden">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {relatedProduct.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-tradwear-green">
                            ${relatedProduct.price}
                          </span>
                          <Badge variant="secondary">
                            {relatedProduct.category}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
