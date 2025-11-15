"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useSearchParams } from 'next/navigation'
import { ShoppingCart, Heart } from 'lucide-react'
import { useState } from "react"

const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Premium Black Tuxedo",
    category: "Formal Wear",
    price: 599,
    image: "/formal-black-tuxedo.jpg",
    tags: ["black", "tuxedo", "formal", "premium"],
  },
  {
    id: 2,
    name: "Classic Navy Business Suit",
    category: "Business Suits",
    price: 449,
    image: "/professional-business-suit.jpg",
    tags: ["navy", "business", "suit", "classic"],
  },
  {
    id: 3,
    name: "Elegant Wedding Suit",
    category: "Wedding",
    price: 699,
    image: "/elegant-wedding-suit-for-groom.jpg",
    tags: ["wedding", "elegant", "suit", "groom"],
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [wishlist, setWishlist] = useState<number[]>([])

  const results = ALL_PRODUCTS.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.tags.some((tag) => tag.includes(query.toLowerCase()))
  )

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-2">
            Search Results for <span className="text-primary">"{query}"</span>
          </h1>
          <p className="text-muted-foreground">
            Found {results.length} product{results.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {results.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-2">No results found</h2>
            <p className="text-muted-foreground mb-6">Try searching for different keywords or browse our collections</p>
            <a
              href="/explore"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Browse Collections
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition group"
              >
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

                <div className="p-4">
                  <p className="text-xs text-primary uppercase tracking-wide font-semibold mb-1">{product.category}</p>
                  <h3 className="text-foreground font-semibold mb-3">{product.name}</h3>

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
        )}
      </div>

      <Footer />
    </main>
  )
}
