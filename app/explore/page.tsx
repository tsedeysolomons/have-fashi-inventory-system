"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronRight, ArrowLeft } from 'lucide-react'
import Link from "next/link"

const COLLECTIONS = [
  {
    id: 1,
    name: "Wedding Collection",
    description: "Complete wedding and formal wear for grooms, groomsmen, and wedding guests",
    image: "/elegant-wedding-suit-for-groom.jpg",
    itemCount: 45,
    cta: "Explore Wedding",
  },
  {
    id: 2,
    name: "Business Essentials",
    description: "Professional suits and formal wear for the corporate gentleman",
    image: "/professional-business-suit.jpg",
    itemCount: 62,
    cta: "Shop Business",
  },
  {
    id: 3,
    name: "Formal Evening Wear",
    description: "Premium tuxedos and evening suits for black-tie occasions",
    image: "/formal-black-tuxedo.jpg",
    itemCount: 38,
    cta: "View Evening Wear",
  },
  {
    id: 4,
    name: "Casual Sophistication",
    description: "Smart casual pieces for refined everyday styling",
    image: "/casual-sophisticated-formal-wear.jpg",
    itemCount: 51,
    cta: "Browse Casual",
  },
  {
    id: 5,
    name: "Accessories & Details",
    description: "Ties, cufflinks, pocket squares, and finishing touches",
    image: "/luxury-accessories-ties-cufflinks.jpg",
    itemCount: 127,
    cta: "Shop Accessories",
  },
  {
    id: 6,
    name: "Designer Collaboration",
    description: "Exclusive pieces from renowned designers and luxury brands",
    image: "/designer-luxury-formal-collaboration.jpg",
    itemCount: 29,
    cta: "View Designers",
  },
]

const FEATURES = [
  {
    title: "Premium Quality",
    description: "Crafted from the finest materials sourced globally",
    icon: "✨",
  },
  {
    title: "Expert Tailoring",
    description: "Perfect fit with complimentary alterations",
    icon: "✂️",
  },
  {
    title: "Luxury Brands",
    description: "Curated selection of world-renowned designers",
    icon: "👑",
  },
  {
    title: "Customer Support",
    description: "Dedicated styling advice and personal shopping",
    icon: "🤝",
  },
]

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4 text-balance">
              Explore Our <span className="text-primary">Collections</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover our curated selection of premium menswear, each collection thoughtfully designed for distinct
              occasions and styles
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Start Shopping
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Featured Collections</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {COLLECTIONS.map((collection) => (
            <div
              key={collection.id}
              className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition group cursor-pointer"
            >
              {/* Collection Image */}
              <div className="relative overflow-hidden bg-background h-64 flex items-center justify-center">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* Collection Info */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{collection.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{collection.description}</p>

                {/* Item Count */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                  <span className="text-xs text-primary font-semibold uppercase tracking-wide">
                    {collection.itemCount} Items
                  </span>
                </div>

                {/* CTA Button */}
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition group/link"
                >
                  {collection.cta}
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-card border-t border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">Why Choose Have Fashion</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Ready to Elevate Your Wardrobe?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Browse our complete collection and find the perfect suit for any occasion
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Shop Now
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
