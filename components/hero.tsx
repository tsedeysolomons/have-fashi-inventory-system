"use client"

import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter()

  return (
    <section className="relative h-screen bg-gradient-to-b from-card to-background flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 text-balance">
          Elevate Your <span className="text-primary">Style</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover our curated collection of premium suits and formal wear, crafted for the modern gentleman who demands
          excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push("/shop")}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Shop Now
          </button>
          <button
            onClick={() => router.push("/explore")}
            className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition"
          >
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  )
}
