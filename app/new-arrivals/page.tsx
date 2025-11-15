"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, ShoppingCart, ArrowLeft } from 'lucide-react'
import Header from "@/components/header"
import Footer from "@/components/footer"

const newArrivals = [
  {
    id: 1,
    name: "Italian Wool Navy Suit",
    price: "$599",
    image: "/public/elegant-wedding-suit-for-groom.jpg",
    rating: 4.8,
    reviews: 124,
    badge: "NEW",
  },
  {
    id: 2,
    name: "Charcoal Grey Formal Suit",
    price: "$549",
    image: "/public/charcoal-grey-formal-suit.jpg",
    rating: 4.9,
    reviews: 87,
    badge: "NEW",
  },
  {
    id: 3,
    name: "Burgundy Silk Tie Set",
    price: "$89",
    image: "/public/burgundy-formal-evening-suit.jpg",
    rating: 4.7,
    reviews: 45,
    badge: "NEW",
  },
  {
    id: 4,
    name: "Premium White Dress Shirt",
    price: "$149",
    image: "/public/professional-business-suit.jpg",
    rating: 4.9,
    reviews: 156,
    badge: "NEW",
  },
]

export default function NewArrivalsPage() {
  const [wishlist, setWishlist] = useState<number[]>([])

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">New Arrivals</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover the latest additions to our premium menswear collection. Fresh styles, timeless elegance, and world-class craftsmanship.
          </p>
        </div>
      </section>

      {/* Filters & Sorting */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{newArrivals.length}</span> new items
          </div>
          <div className="flex gap-4">
            <select className="bg-card border border-border rounded px-4 py-2 text-foreground text-sm">
              <option>Sort by: Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <div key={product.id} className="group">
              <div className="relative bg-card rounded-lg overflow-hidden border border-border mb-4 h-64">
                <img
                  src={product.image || "/placeholder.svg?height=256&width=256&query=formal suit"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {product.badge}
                  </span>
                </div>
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
              <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">({product.reviews})</span>
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

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-lg mb-8 opacity-90">Get early access to new arrivals and exclusive member benefits</p>
          <div className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-primary-foreground text-foreground px-4 py-3 rounded"
            />
            <button className="bg-foreground text-primary px-6 py-3 rounded font-semibold hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
