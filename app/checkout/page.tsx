"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronRight, Lock } from "lucide-react"

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === "cardNumber") {
      const formatted = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim()
      setFormData((prev) => ({ ...prev, [name]: formatted }))
    } else if (name === "expiry") {
      const formatted = value.replace(/\D/g, "").slice(0, 4)
      if (formatted.length >= 2) {
        setFormData((prev) => ({ ...prev, [name]: `${formatted.slice(0, 2)}/${formatted.slice(2)}` }))
      } else {
        setFormData((prev) => ({ ...prev, [name]: formatted }))
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1)
  }

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const subtotal = 1397
  const tax = 139.7
  const shipping = 50
  const total = subtotal + tax + shipping

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold text-accent mb-12">Checkout</h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-12">
          {[1, 2, 3].map((stepNum) => (
            <div key={stepNum} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition ${
                  step >= stepNum ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground"
                }`}
              >
                {stepNum}
              </div>
              <div className={`flex-1 h-1 mx-2 transition ${step > stepNum ? "bg-accent" : "bg-secondary"}`} />
            </div>
          ))}
          <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-accent text-accent-foreground">
            3
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            {/* Step 1: Shipping Information */}
            {step === 1 && (
              <div className="bg-card p-8 rounded-lg border border-border">
                <h2 className="text-2xl font-serif font-bold text-accent mb-6">Shipping Information</h2>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="col-span-1 px-4 py-3 bg-input border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="col-span-1 px-4 py-3 bg-input border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent mb-4"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent mb-4"
                />

                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent mb-4"
                />

                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="px-4 py-3 bg-input border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="px-4 py-3 bg-input border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="px-4 py-3 bg-input border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Review Order */}
            {step === 2 && (
              <div className="bg-card p-8 rounded-lg border border-border">
                <h2 className="text-2xl font-serif font-bold text-accent mb-6">Review Your Order</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between p-4 bg-secondary rounded">
                    <div>
                      <p className="font-semibold text-foreground">Classic Black Suit</p>
                      <p className="text-sm text-muted-foreground">Size: L | Color: Black | Qty: 1</p>
                    </div>
                    <p className="font-semibold text-accent">$599.00</p>
                  </div>

                  <div className="flex justify-between p-4 bg-secondary rounded">
                    <div>
                      <p className="font-semibold text-foreground">Navy Blue Blazer</p>
                      <p className="text-sm text-muted-foreground">Size: M | Color: Navy | Qty: 2</p>
                    </div>
                    <p className="font-semibold text-accent">$798.00</p>
                  </div>
                </div>

                <div className="border-t border-border pt-4 space-y-2">
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
            )}

            {/* Step 3: Payment Information */}
            {step === 3 && (
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-6">
                  <Lock size={20} className="text-accent" />
                  <h2 className="text-2xl font-serif font-bold text-accent">Payment Information</h2>
                </div>

                <div className="mb-6 p-4 bg-secondary rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">
                    Your payment information is encrypted and secure. We never store your full card details.
                  </p>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">Cardholder Name</label>
                  <input
                    type="text"
                    name="cardName"
                    placeholder="John Doe"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    maxLength="19"
                    className="w-full px-4 py-3 bg-input border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Expiry Date</label>
                    <input
                      type="text"
                      name="expiry"
                      placeholder="MM/YY"
                      value={formData.expiry}
                      onChange={handleInputChange}
                      maxLength="5"
                      className="w-full px-4 py-3 bg-input border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      maxLength="4"
                      className="w-full px-4 py-3 bg-input border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent font-mono"
                    />
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Billing Address</h3>
                  <p className="text-sm text-muted-foreground mb-4">Same as shipping address</p>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="sameAddress" defaultChecked className="w-4 h-4" />
                    <label htmlFor="sameAddress" className="text-sm text-foreground">
                      Use the same address for billing
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <Button onClick={handlePrevStep} variant="outline" className="flex-1 bg-transparent">
                  Back
                </Button>
              )}
              {step < 3 ? (
                <Button onClick={handleNextStep} className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
                  Next <ChevronRight className="ml-2" size={20} />
                </Button>
              ) : (
                <Link href="/confirmation" className="flex-1">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Complete Purchase
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card p-6 rounded-lg border border-border sticky top-20">
              <h3 className="text-xl font-serif font-bold text-accent mb-6">Order Summary</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-foreground">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-foreground">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-foreground">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between text-lg font-bold text-accent">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="text-xs text-muted-foreground flex items-center gap-2">
                <Lock size={14} />
                <p>Secure checkout powered by premium payment processing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
