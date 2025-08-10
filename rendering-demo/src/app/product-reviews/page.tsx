import Products from "@/components/product";
import Reviews from "@/components/reviews";
import { Suspense } from "react";


export default function ProductReviews() {
    return (
        <div>
            <h1>Product reviews</h1>
            <Suspense fallback={<p>Loading product details...</p>}>
                <Products />
            </Suspense>
            <Suspense fallback={<p>Loading reviews...</p>}>
                <Reviews />
            </Suspense>
        </div>
    )
}