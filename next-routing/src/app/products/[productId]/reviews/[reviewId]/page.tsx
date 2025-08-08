import { notFound } from "next/navigation"

const ProductReview = async ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  const { productId, reviewId } = params;
  if(parseInt(reviewId) > 1000){
    notFound();
  }
  return (
    <div>
      <h1>Review {reviewId}</h1>
      <h1>Product {productId}</h1>
    </div>
  );
};

export default ProductReview;
