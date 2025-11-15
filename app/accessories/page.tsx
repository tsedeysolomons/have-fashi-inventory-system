"use client"

import { Heart, ShoppingCart, ArrowLeft } from 'lucide-react'
import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const accessories = [
  {
    id: 1,
    name: "Gold Plated Cufflinks",
    price: "$129",
    category: "Jewelry",
    image: "/luxury-gold-cufflinks.jpg",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Premium Silk Pocket Square",
    price: "$45",
    category: "Pocket Squares",
    image: "/silk-pocket-square.jpg",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Italian Leather Belt",
    price: "$169",
    category: "Belts",
    image: "/brown-leather-belt.png",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Silk Necktie Collection",
    price: "$79",
    category: "Ties",
    image: "/silk-necktie-formal.jpg",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Wool Scarf - Charcoal",
    price: "$99",
    category: "Scarves",
    image: "/premium-wool-scarf.jpg",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Leather Briefcase",
    price: "$449",
    category: "Bags",
    image: "/leather-briefcase-professional.jpg",
    rating: 4.9,
  },
  {
    id: 7,
    name: "Panama Hat - Cream",
    price: "$189",
    category: "Hats",
    image: "/panama-hat-cream.jpg",
    rating: 4.7,
  },
  {
    id: 8,
    name: "Leather Gloves - Black",
    price: "$119",
    category: "Gloves",
    image: "/black-leather-gloves.jpg",
    rating: 4.8,
  },
]

export default function AccessoriesPage() {
  const [wishlist, setWishlist] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Jewelry", "Ties", "Belts", "Pocket Squares", "Scarves", "Bags", "Hats", "Gloves"]
  const filteredProducts = selectedCategory === "All" ? accessories : accessories.filter((a) => a.category === selectedCategory)

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">Accessories</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Complete your look with our curated selection of premium accessories. From cufflinks to briefcases, every piece is crafted with precision.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-muted-foreground mb-4">FILTER BY CATEGORY</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative bg-card rounded-lg overflow-hidden border border-border mb-4 h-64">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition ${
                    wishlist.includes(product.id)
                      ? "bg-primary text-primary-foreground"
                      : "bg-white/80 text-foreground hover:bg-white"
                  }`}
                >
                  <Heart className="w-5 h-5" fill={wishlist.includes(product.id) ? "currentColor" : "none"} />
                </button>
              </div>
              <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">{product.category}</div>
              <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}>
                    ★
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-primary">{product.price}</span>
                <button className="bg-primary text-primary-foreground p-2 rounded-lg hover:opacity-90 transition">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
