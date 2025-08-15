"use client"

import { ProductsType } from "@/types"
import { Minus, Plus } from "lucide-react";
import { usePathname, useSearchParams,useRouter } from "next/navigation";
import { useState } from "react";


const ProductInteraction = ({ product, selectedSize, selectedColor }: { product: ProductsType, selectedSize: string, selectedColor: string }) => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [quantity, setQuantity] = useState(1)

    const handleTypeChange = (type:string, value:string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(type, value)
        router.push(`${pathname}?${params.toString()}`, {scroll:false})
    };

    const handleQuantityChange = (type: "increment" | "decrement") => {
        if(type === 'increment'){
            setQuantity((prev) => prev + 1)
        }else{
            if(quantity > 1){
                setQuantity((prev) => prev - 1)
            }
        }
    }
    return (
        <div className="flex flex-col gap-4 mt-4">
            {/* size */}
            <div className="flex flex-col text-xs gap-2">
                <span className="text-gray-500 text-[18px]">Size</span>
                <div className="flex items-center gap-2">
                    {product.sizes.map((s) => (
                        <div className={`cursor-pointer border-1 p-[2px]${selectedSize === s ? "border-gray-600" : "border-gray-300"}`} key={s} 
                        onClick={() => handleTypeChange('size', s)}
                        >
                            <div className={`w-6 h-6 text-center flex items-center justify-center ${selectedSize === s ? "bg-black text-white" : "bg-white text-black"}`}>{s.toUpperCase()}</div>
                        </div>
                    ))}
                </div>
            </div>
            {/* color */}
            <div className="flex flex-col text-sm gap-2">
                                <span className="text-gray-500 text-[18px]">Color</span>
                <div className="flex items-center gap-2">
                    {product.colors.map((s) => (
                        <div className={`cursor-pointer border-1 p-[2px]${selectedColor === s ? "border-gray-300" : "border-white"}`} key={s} 
                        onClick={() => handleTypeChange('color', s)}
                        >
                            <div className={`w-6 h-6`}
                            style={{backgroundColor: s}}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* quantity */}
            <div className="flex flex-col text-sm gap-2">
                <span className="text-gray-500">Quantity</span>
                <div className="flex items-center gap-2">
                    <button className="cursor-pointer border-1 border-gray-300 p-1" onClick={() => handleQuantityChange("decrement")}>
                        <Minus className="w-4 h-4"/>
                    </button>
                    <span>{quantity}</span>
                    <button className="cursor-pointer border-1 border-gray-300 p-1" onClick={() => handleQuantityChange("increment")}>
                        <Plus className="w-4 h-4"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductInteraction