"use client"

import { useCart } from "@/lib/cart-context"
import { useState } from "react"

export default function SuitCollection() {
  const { addToCart } = useCart()
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set())

  const suits = [
    {
      id: "suit-1",
      name: "Classic Grey Pinstripe",
      price: 599,
      image: "/grey-pinstripe-suit.jpg",
      style: "Business",
      size: "M",
      color: "Grey",
    },
    {
      id: "suit-2",
      name: "Midnight Black Tuxedo",
      price: 799,
      image: "/black-tuxedo-formal.jpg",
      style: "Formal",
      size: "L",
      color: "Black",
    },
    {
      id: "suit-3",
      name: "Navy Blue Blazer",
      price: 449,
      image: "/navy-blazer.png",
      style: "Casual",
      size: "M",
      color: "Navy",
    },
    {
      id: "suit-4",
      name: "Charcoal Wool Suit",
      price: 649,
      image: "/charcoal-wool-suit.jpg",
      style: "Business",
      size: "L",
      color: "Charcoal",
    },
  ]

  const handleAddToCart = (suit: (typeof suits)[0]) => {
    addToCart({
      id: suit.id,
      name: suit.name,
      price: suit.price,
      quantity: 1,
      size: suit.size,
      color: suit.color,
      image: suit.image,
      style: suit.style,
    })

    // Show visual feedback
    setAddedItems((prev) => new Set(prev).add(suit.id))
    setTimeout(() => {
      setAddedItems((prev) => {
        const newSet = new Set(prev)
        newSet.delete(suit.id)
        return newSet
      })
    }, 1500)
  }

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Featured Suits</h2>
          <a href="#" className="text-primary hover:text-primary/80 transition font-semibold">
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {suits.map((suit) => (
            <div
              key={suit.id}
              className="bg-background rounded-lg overflow-hidden border border-border hover:border-primary transition group cursor-pointer"
            >
              <div className="relative overflow-hidden h-80 bg-muted">
                <img
                  src={suit.image || "/placeholder.svg"}
                  alt={suit.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-primary font-semibold mb-2">{suit.style}</p>
                <h3 className="text-lg font-semibold text-foreground mb-2">{suit.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">${suit.price}</span>
                  <button
                    onClick={() => handleAddToCart(suit)}
                    className={`px-4 py-2 rounded text-sm font-semibold transition ${
                      addedItems.has(suit.id)
                        ? "bg-green-600 text-white"
                        : "bg-primary text-primary-foreground hover:opacity-90"
                    }`}
                  >
                    {addedItems.has(suit.id) ? "✓ Added" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
