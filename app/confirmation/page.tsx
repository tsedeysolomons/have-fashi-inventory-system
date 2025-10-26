"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Package, Truck, Mail, Phone } from "lucide-react"

export default function ConfirmationPage() {
  const orderNumber = "HF-2024-001234"
  const orderDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl" />
              <CheckCircle size={80} className="relative text-accent" />
            </div>
          </div>

          <h1 className="text-4xl font-serif font-bold text-accent mb-4">Order Confirmed!</h1>
          <p className="text-lg text-foreground mb-2">Thank you for your purchase</p>
          <p className="text-muted-foreground">Order #{orderNumber}</p>
        </div>

        {/* Order Details Card */}
        <div className="bg-card p-8 rounded-lg border border-border mb-8">
          <div className="flex justify-between items-start mb-6 pb-6 border-b border-border">
            <div>
              <h2 className="text-xl font-serif font-bold text-accent mb-2">Order Details</h2>
              <p className="text-sm text-muted-foreground">Order Date: {orderDate}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-1">Order Total</p>
              <p className="text-2xl font-bold text-accent">$1,586.70</p>
            </div>
          </div>

          {/* Order Items */}
          <div className="space-y-4 mb-6">
            <div className="flex justify-between pb-4 border-b border-border">
              <div>
                <p className="font-semibold text-foreground">Classic Black Suit</p>
                <p className="text-sm text-muted-foreground">Size: L | Color: Black | Qty: 1</p>
              </div>
              <p className="font-semibold text-accent">$599.00</p>
            </div>

            <div className="flex justify-between pb-4 border-b border-border">
              <div>
                <p className="font-semibold text-foreground">Navy Blue Blazer</p>
                <p className="text-sm text-muted-foreground">Size: M | Color: Navy | Qty: 2</p>
              </div>
              <p className="font-semibold text-accent">$798.00</p>
            </div>

            {/* Order Summary */}
            <div className="space-y-2 pt-4">
              <div className="flex justify-between text-foreground">
                <span>Subtotal</span>
                <span>$1,397.00</span>
              </div>
              <div className="flex justify-between text-foreground">
                <span>Shipping</span>
                <span>$50.00</span>
              </div>
              <div className="flex justify-between text-foreground">
                <span>Tax</span>
                <span>$139.70</span>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping & Delivery Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-secondary p-6 rounded-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Truck size={24} className="text-accent" />
              <h3 className="font-semibold text-foreground">Estimated Delivery</h3>
            </div>
            <p className="text-lg font-bold text-accent mb-2">5-7 Business Days</p>
            <p className="text-sm text-muted-foreground">Standard shipping to your address</p>
          </div>

          <div className="bg-secondary p-6 rounded-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Mail size={24} className="text-accent" />
              <h3 className="font-semibold text-foreground">Confirmation Email</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-2">A confirmation email has been sent to:</p>
            <p className="text-sm font-medium text-foreground">customer@example.com</p>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-card p-6 rounded-lg border border-border mb-8">
          <h3 className="text-lg font-serif font-bold text-accent mb-4">What's Next?</h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <Package size={20} className="text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Order Processing</p>
                <p className="text-sm text-muted-foreground">Your order is being prepared for shipment</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Truck size={20} className="text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Shipping Updates</p>
                <p className="text-sm text-muted-foreground">You'll receive tracking information via email</p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Support */}
        <div className="bg-secondary p-6 rounded-lg border border-border mb-8">
          <h3 className="font-semibold text-foreground mb-4">Need Help?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Call us</p>
                <p className="font-medium text-foreground">1-800-FASHION</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Email us</p>
                <p className="font-medium text-foreground">support@havefashion.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/" className="flex-1">
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Continue Shopping</Button>
          </Link>
          <Button variant="outline" className="flex-1 bg-transparent">
            View Order Status
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}
