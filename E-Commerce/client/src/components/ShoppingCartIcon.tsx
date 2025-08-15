'use client'

import useCartStore from "@/stores/cartStore"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"


const ShoppingCartIcon = () => {
  const {cart, hasHydrated} = useCartStore();

  if(!hasHydrated) return null;
  return (
    <Link href="/cart" className="relative">
        <ShoppingCart className="w-4 h-4 text-gray-600"/>
        <span className="absolute -z-10 -top-2 -right-2 bg-amber-400 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">{cart.reduce((acc, item) => acc + item.quantity,0)}</span>
    </Link>
  )
}

export default ShoppingCartIcon