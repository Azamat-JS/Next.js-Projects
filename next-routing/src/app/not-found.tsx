"use client"
import { usePathname } from "next/navigation"


const NotFound = () => {
    const pathName = usePathname()
    const productId = pathName.split('/')[2];
    const reviewId = pathName.split('/')[4];
  return (
    <>
    <h1>Page not found</h1>
    <p>Review {reviewId} Not Found productId {productId}</p>
    </>
  )
}

export default NotFound