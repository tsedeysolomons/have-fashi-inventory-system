"use client"

import { useCart } from "@/lib/cart-context"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Trash2, Plus, Minus } from "lucide-react"

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart()

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold text-accent mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-6">Your cart is empty</p>
                <Link href="/">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Continue Shopping</Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-6 bg-card rounded-lg border border-border">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-24 h-32 object-cover rounded"
                    />

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Size: {item.size} | Color: {item.color}
                      </p>
                      <p className="text-accent font-semibold mt-2">${item.price}</p>
                    </div>

                    <div className="flex flex-col items-end gap-4">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-destructive hover:text-destructive/80 transition"
                      >
                        <Trash2 size={20} />
                      </button>

                      <div className="flex items-center gap-2 bg-secondary rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-secondary/80 transition"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-secondary/80 transition"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <p className="font-semibold text-foreground">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card p-6 rounded-lg border border-border sticky top-20">
              <h2 className="text-xl font-serif font-bold text-accent mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-foreground">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-foreground">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between text-lg font-bold text-accent">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Link href="/checkout">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-base font-semibold">
                  Proceed to Checkout
                </Button>
              </Link>

              <Link href="/">
                <Button variant="outline" className="w-full mt-3 bg-transparent">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
