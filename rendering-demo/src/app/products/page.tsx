import Link from "next/link"

const ProductsPage = () => {
  return (
    <div>
        <h1>Products Featured</h1>
        <Link href={'/products/1'}>Product 1</Link>
        <Link href={'/products/2'}>Product </Link>
        <Link href={'/products/3'}>Product 3</Link>
    </div>
  )
}

export default ProductsPage