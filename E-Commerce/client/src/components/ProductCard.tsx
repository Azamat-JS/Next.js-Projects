"use client"

import { ProductsType } from "@/types"
import {  ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const ProductCard = ({product} : {product: ProductsType}) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      {/* image */}
      <Link href={`/products/${product.id}`}>
      <div className="relative aspect-[2/3]">
        <Image src={product.images[product.colors[0]]} alt={product.name} fill className="object-cover hover:scale-105 transition duration-300"/>
      </div>
      </Link>
      {/* Product detail */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        {/* Product types */}
        <div className="flex items-center gap-4 text-xs">
          {/* SIZE */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Size</span>
            <select name="size" id="size" className="ring ring-gray-300 rounded-md px-2 py-1">
              {
                product.sizes.map((s, i) => (
                  <option key={i} value="size">{s.toUpperCase()}</option>
                ))
              }
            </select>
          </div>
            {/* Colors */}
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Color</span>
              <div className="flex items-center gap-2">
                {product.colors.map((c, i)  => (
                  <div key={i} className="">
                    <div className="w-[14px] h-[14px] rounded-full cursor-pointer" style={{backgroundColor: c}}/>
                  </div>
                ))}
              </div>
            </div>
        </div>

        {/* Price and add to cart  */}
        <div className="flex items-center justify-between">
                <p className="font-medium">${product.price.toFixed(2)}</p>
                <button className="ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4"/>
                  Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard