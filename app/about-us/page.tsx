"use client"

import { Award, Users, Globe, Zap, ArrowLeft } from 'lucide-react'
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">About Have Fashion</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Redefining menswear with premium quality, timeless elegance, and world-class craftsmanship since 2010.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              To provide discerning gentlemen worldwide with access to premium menswear that combines impeccable craftsmanship, timeless design, and exceptional value.
            </p>
            <p className="text-muted-foreground">
              We believe that quality fashion should be accessible, sustainable, and celebrated. Every piece in our collection is carefully selected to meet our high standards.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-muted-foreground mb-4">
              To become the world's leading destination for premium menswear, recognized for our commitment to quality, innovation, and customer satisfaction.
            </p>
            <p className="text-muted-foreground">
              We envision a future where men's fashion celebrates individuality while maintaining timeless elegance and sophistication.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Premium Quality</h3>
            <p className="text-muted-foreground text-sm">
              Only the finest materials and craftsmanship make it to our collection.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Customer First</h3>
            <p className="text-muted-foreground text-sm">
              Your satisfaction is our top priority. We're here to help at every step.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Global Reach</h3>
            <p className="text-muted-foreground text-sm">
              Serving customers in 150+ countries with consistent quality and service.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Innovation</h3>
            <p className="text-muted-foreground text-sm">
              Continuously evolving to bring you the latest in menswear fashion.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="bg-card border border-border rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Have Fashion was founded in 2010 by a group of fashion enthusiasts who shared a vision: to make premium menswear accessible to gentlemen worldwide.
              What started as a small boutique in New York has grown into an international luxury brand served by passionate professionals.
            </p>
            <p>
              Over the past decade, we've built lasting relationships with the world's finest tailors, designers, and manufacturers. Each partnership reflects our commitment
              to quality and our belief that clothing should be an expression of individuality and sophistication.
            </p>
            <p>
              Today, Have Fashion serves customers across 150+ countries, offering an curated selection of suits, shirts, accessories, and services. We remain dedicated
              to our core values: premium quality, exceptional customer service, and a passion for menswear excellence.
            </p>
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Our Team</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Our team of dedicated professionals brings decades of combined experience in fashion, retail, and customer service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Marcus Sterling", role: "Founder & Creative Director", image: "/professional-man.jpg" },
              { name: "Alexander Chen", role: "Chief Operations Officer", image: "/professional-man.jpg" },
              { name: "James Mitchell", role: "Head of Customer Experience", image: "/professional-man.jpg" },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="bg-card border border-border rounded-lg overflow-hidden mb-4 h-64">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
