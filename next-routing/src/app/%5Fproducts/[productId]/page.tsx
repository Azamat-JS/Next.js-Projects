

const ProductDetails = async ({params}: 
    {params: Promise<{productId:string}>}) => {
        const productId = (await params).productId
  return (
    <div>ProductDetails {productId}</div>
  )
}

export default ProductDetails