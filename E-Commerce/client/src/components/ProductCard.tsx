"use client"

import useCartStore from "@/stores/cartStore"
import { ProductsType } from "@/types"
import {  ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { toast } from "react-toastify"

const ProductCard = ({product} : {product: ProductsType}) => {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0]
  });

  const {addToCart} = useCartStore();

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity:1,
      selectedSize: productTypes.size,
      selectedColor: productTypes.color
    })
    toast.success('Product added to cart')
  }

  const handleProductType = ({type, value} : {type: "size" | "color", value: string}) => {
    setProductTypes(prev => ({
      ...prev,
      [type]:value
    }))
  }
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      {/* image */}
      <Link href={`/products/${product.id}`}>
      <div className="relative aspect-[2/3]">
        <Image src={product.images[productTypes.color]} alt={product.name} fill className="object-cover hover:scale-105 transition duration-300"/>
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
            <select onChange={(e) => handleProductType({type: "size", value: e.target.value})} name="size" id="size" className="ring ring-gray-300 rounded-md px-2 py-1">
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
                  <div key={i} className={`cursor-pointer border-1 ${productTypes.color === c ? "bg-gray-400" : "bg-gray-200"} rounded-full p-[1.2px]`} onClick={() =>  handleProductType({type: "color", value: c})}>
                    <div className="w-[14px] h-[14px] rounded-full cursor-pointer" style={{backgroundColor: c}}/>
                  </div>
                ))}
              </div>
            </div>
        </div>

        {/* Price and add to cart  */}
        <div className="flex items-center justify-between">
                <p className="font-medium">${product.price.toFixed(2)}</p>
                <button onClick={handleAddToCart} className="ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 cursor-pointer hover:text-white hover:bg-black active:bg-gray-400 transition-all duration-300 flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4"/>
                  Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard