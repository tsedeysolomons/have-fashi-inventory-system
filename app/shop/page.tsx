"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState, useMemo } from "react"
import { ShoppingCart, Heart, ArrowLeft } from 'lucide-react'
import Link from "next/link"

const PRODUCTS = [
  {
    id: 1,
    name: "Premium Black Tuxedo",
    category: "Formal Wear",
    price: 599,
    image: "/formal-black-tuxedo.jpg",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Classic Navy Business Suit",
    category: "Business Suits",
    price: 449,
    image: "/professional-business-suit.jpg",
    rating: 4.6,
    reviews: 89,
  },
  {
    id: 3,
    name: "Elegant Wedding Suit",
    category: "Wedding",
    price: 699,
    image: "/elegant-wedding-suit-for-groom.jpg",
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 4,
    name: "Charcoal Grey Suit",
    category: "Business Suits",
    price: 399,
    image: "/charcoal-grey-formal-suit.jpg",
    rating: 4.5,
    reviews: 67,
  },
  {
    id: 5,
    name: "Burgundy Evening Suit",
    category: "Formal Wear",
    price: 549,
    image: "/burgundy-formal-evening-suit.jpg",
    rating: 4.7,
    reviews: 103,
  },
  {
    id: 6,
    name: "Classic Brown Tweed Suit",
    category: "Casual",
    price: 479,
    image: "/brown-tweed-formal-suit.jpg",
    rating: 4.4,
    reviews: 54,
  },
  {
    id: 7,
    name: "Midnight Blue Velvet Suit",
    category: "Formal Wear",
    price: 649,
    image: "/midnight-blue-velvet-formal-suit.jpg",
    rating: 4.8,
    reviews: 91,
  },
  {
    id: 8,
    name: "Light Grey Summer Suit",
    category: "Casual",
    price: 359,
    image: "/light-grey-summer-linen-suit.jpg",
    rating: 4.3,
    reviews: 42,
  },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [sortBy, setSortBy] = useState<string>("featured")
  const [wishlist, setWishlist] = useState<number[]>([])

  const categories = ["All", "Business Suits", "Formal Wear", "Wedding", "Casual"]

  const filteredProducts = useMemo(() => {
    let products = PRODUCTS
    if (selectedCategory !== "All") {
      products = products.filter((p) => p.category === selectedCategory)
    }

    if (sortBy === "price-low") {
      products.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      products.sort((a, b) => b.price - a.price)
    } else if (sortBy === "rating") {
      products.sort((a, b) => b.rating - a.rating)
    }

    return products
  }, [selectedCategory, sortBy])

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">Shop Our Collection</h1>
          <p className="text-muted-foreground text-lg">Discover premium suits and formal wear tailored to perfection</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
              <h2 className="text-lg font-serif font-bold text-foreground mb-4">Categories</h2>
              <div className="space-y-2 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-4 py-2 rounded transition ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-card hover:text-primary"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <h2 className="text-lg font-serif font-bold text-foreground mb-4">Sort By</h2>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-background border border-border rounded px-3 py-2 text-foreground text-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="text-sm text-muted-foreground mb-6">
              Showing {filteredProducts.length} products
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition group"
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden bg-background h-64 flex items-center justify-center">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`absolute top-4 right-4 p-2 rounded-full transition ${
                        wishlist.includes(product.id)
                          ? "bg-primary text-primary-foreground"
                          : "bg-white/90 text-foreground hover:bg-white"
                      }`}
                    >
                      <Heart className="w-5 h-5" fill={wishlist.includes(product.id) ? "currentColor" : "none"} />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <p className="text-xs text-primary uppercase tracking-wide font-semibold mb-1">{product.category}</p>
                    <h3 className="text-foreground font-semibold mb-2 line-clamp-2">{product.name}</h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>

                    {/* Price and Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-serif font-bold text-primary">${product.price}</span>
                      <button className="bg-primary text-primary-foreground p-2 rounded hover:opacity-90 transition">
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
