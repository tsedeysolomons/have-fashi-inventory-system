"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export default function CartIcon() {
  const { cartCount } = useCart()

  return (
    <Link href="/cart" className="relative">
      <ShoppingCart size={24} className="text-accent hover:text-accent/80 transition" />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  )
}
