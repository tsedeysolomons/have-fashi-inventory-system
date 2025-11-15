"use client"

import { Truck, Globe, Clock, DollarSign, ArrowLeft } from 'lucide-react'
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ShippingInfoPage() {
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
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">Shipping Information</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Fast, reliable delivery to over 150 countries worldwide. Learn about our shipping options and policies.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Shipping Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-card border border-border rounded-lg p-8">
            <Truck className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Standard Shipping</h3>
            <p className="text-muted-foreground text-sm mb-2">5-7 business days</p>
            <p className="text-primary font-semibold">Free on orders $100+</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <Truck className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Express Shipping</h3>
            <p className="text-muted-foreground text-sm mb-2">2-3 business days</p>
            <p className="text-primary font-semibold">$19.99</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <Truck className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Overnight Shipping</h3>
            <p className="text-muted-foreground text-sm mb-2">Next business day</p>
            <p className="text-primary font-semibold">$49.99</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <Globe className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">International</h3>
            <p className="text-muted-foreground text-sm mb-2">10-20 business days</p>
            <p className="text-primary font-semibold">From $34.99</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Shipping Details */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Shipping Details</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-primary" />
                  Delivery Times
                </h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-3 text-muted-foreground">
                  <p><span className="font-semibold text-foreground">United States:</span> 3-7 business days</p>
                  <p><span className="font-semibold text-foreground">Canada:</span> 5-10 business days</p>
                  <p><span className="font-semibold text-foreground">Europe:</span> 7-14 business days</p>
                  <p><span className="font-semibold text-foreground">Asia-Pacific:</span> 10-20 business days</p>
                  <p><span className="font-semibold text-foreground">Rest of World:</span> 12-25 business days</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-primary" />
                  Shipping Costs
                </h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-3 text-muted-foreground">
                  <p><span className="font-semibold text-foreground">Free Shipping:</span> Orders over $100 (US & Canada)</p>
                  <p><span className="font-semibold text-foreground">Standard Rate:</span> $9.99 for orders under $100</p>
                  <p><span className="font-semibold text-foreground">International:</span> Calculated at checkout based on destination</p>
                  <p><span className="font-semibold text-foreground">Remote Areas:</span> Additional fees may apply</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Tracking Your Order</h3>
                <p className="text-muted-foreground mb-4">
                  Once your order ships, you'll receive an email with a tracking number. Use this number to monitor your package's delivery status in real-time.
                </p>
                <p className="text-muted-foreground">
                  Our shipping partners include DHL, FedEx, UPS, and local carriers. All packages are fully insured.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">International Orders</h3>
                <p className="text-muted-foreground mb-4">
                  We ship to over 150 countries worldwide. International customers are responsible for any customs duties or import taxes.
                </p>
                <p className="text-muted-foreground">
                  We use DHL for most international shipments, ensuring reliable and timely delivery with full tracking.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Shipping FAQ</h2>
            <div className="space-y-4">
              {[
                { q: "Can I upgrade my shipping?", a: "Yes, you can select expedited shipping at checkout." },
                { q: "Do you ship to PO boxes?", a: "No, we require a physical delivery address." },
                { q: "What about tracking?", a: "You'll receive tracking info once your order ships." },
                { q: "Is shipping insured?", a: "Yes, all packages are fully insured." },
                { q: "What if my package is lost?", a: "We'll work with the carrier to locate it or arrange a replacement." },
                { q: "Do you ship gift-ready?", a: "Yes, gift wrapping is available at checkout." },
              ].map((faq, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">{faq.q}</p>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
