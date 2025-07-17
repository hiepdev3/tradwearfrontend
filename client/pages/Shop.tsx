import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import { QrCode, Search, Filter, Heart } from "lucide-react";

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const products = [
    {
      id: 1,
      name: "Phờ bò Hà Nội",
      price: 275,
      originalPrice: null,
      image: "https://tradwear.online/public/imaginepublic/4.png",
      description: "Traditional Vietnamese noodle soup design",
      category: "t-shirt",
      region: "north",
      culturalTheme: "Hanoi Street Food",
      isNew: true,
      isFavorite: false,
    },
    {
      id: 2,
      name: "Hủ Tiếu Nam Vang",
      price: 299,
      originalPrice: 68,
      image: "https://tradwear.online/public/imaginepublic/2.png",
      description: "A tribute to Southern Vietnam’s culinary heritagee",
      category: "t-shirt",
      region: "north",
      culturalTheme: "Traditional Art",
      isNew: false,
      isFavorite: true,
    },
    {
      id: 3,
      name: "Bánh mì Sài Gòn",
      price: 299,
      originalPrice: null,
      image: "https://tradwear.online/public/imaginepublic/1.png",
      description: "Iconic Vietnamese sandwich culture",
      category: "shirt",
      region: "south",
      culturalTheme: "Street Food Culture",
      isNew: true,
      isFavorite: false,
    },
    {
      id: 4,
      name: "Bún Chả Hà Nội",
      price: 325,
      originalPrice: null,
      image: "https://tradwear.online/public/imaginepublic/5.png", // thay bằng đường dẫn ảnh thực tế nếu có
      description: "A tribute to Hanoi’s iconic grilled pork and vermicelli dish, combining culinary heritage with street food charm.",
      category: "t-shirt",
      region: "north",
      culturalTheme: "Vietnamese Cuisine",
      isNew: true,
      isFavorite: true,
    },
   {
      id: 5,
      name: "Bánh Xèo Miền Tây",
      price: 55,
      originalPrice: null,
      image: "https://tradwear.online/public/imaginepublic/6.png", // bạn có thể đổi đường dẫn theo ảnh thật
      description: "Crispy Mekong-style pancake filled with shrimp, pork, and bean sprouts",
      category: "cuisine",
      region: "south",
      culturalTheme: "Culinary Heritage",
      isNew: true,
      isFavorite: true
    },

    // {
    //   id: 6,
    //   name: "Hue Imperial Shirt",
    //   price: 42,
    //   originalPrice: 50,
    //   image: "/placeholder.svg",
    //   description: "Royal heritage of central Vietnam",
    //   category: "shirt",
    //   region: "central",
    //   culturalTheme: "Imperial Culture",
    //   isNew: false,
    //   isFavorite: false,
    // },
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "t-shirt", label: "T-Shirts" },
    { value: "shirt", label: "Casual Shirts" },
    { value: "hoodie", label: "Hoodies" },
  ];

  const regions = [
    { value: "all", label: "All Regions" },
    { value: "north", label: "Northern Vietnam" },
    { value: "central", label: "Central Vietnam" },
    { value: "south", label: "Southern Vietnam" },
  ];

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "most-loved", label: "Most Loved" },
  ];

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesRegion =
        selectedRegion === "all" || product.region === selectedRegion;
      return matchesSearch && matchesCategory && matchesRegion;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "most-loved":
          return Number(b.isFavorite) - Number(a.isFavorite);
        case "newest":
        default:
          return Number(b.isNew) - Number(a.isNew);
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-tradwear-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Shop Cultural Heritage
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover sustainable fashion that tells the story of Vietnamese
              culture. Each piece connects you to authentic traditions.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-2xl border-gray-200"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-600">
                  Filters:
                </span>
              </div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-40 rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-44 rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region.value} value={region.value}>
                      {region.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredProducts.length} products
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <AnimatedSection
                key={product.id}
                animation="slideUp"
                delay={index * 0.1}
              >
                <Link
                  to={`/product/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-md rounded-2xl overflow-hidden cursor-pointer card-hover">
                      <div className="relative aspect-square bg-tradwear-cream overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                          {product.isNew && (
                            <Badge className="bg-tradwear-green text-white">
                              New
                            </Badge>
                          )}
                          {product.originalPrice && (
                            <Badge variant="destructive">Sale</Badge>
                          )}
                        </div>
                        {/* Favorite */}
                        <motion.button
                          className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              product.isFavorite
                                ? "fill-red-500 text-red-500"
                                : "text-gray-600"
                            }`}
                          />
                        </motion.button>
                        {/* QR Code */}
                        <div className="absolute bottom-3 right-3 w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <QrCode className="w-4 h-4 text-gray-700" />
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                            {product.name}
                          </h3>
                          <div className="text-right">
                            <div className="text-xl font-bold text-tradwear-green">
                              {product.price} 
                            </div>
                            {product.originalPrice && (
                              <div className="text-sm text-gray-400 line-through">
                                {product.originalPrice} 
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge
                            variant="secondary"
                            className="bg-tradwear-green/10 text-tradwear-green text-xs"
                          >
                            {product.culturalTheme}
                          </Badge>
                        </div>
                        <Button className="w-full mt-4 bg-tradwear-green hover:bg-tradwear-dark-green text-white rounded-xl button-glow transform hover:scale-105">
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No products found matching your criteria.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSelectedRegion("all");
                }}
                className="mt-4 bg-tradwear-green hover:bg-tradwear-dark-green text-white rounded-xl"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
