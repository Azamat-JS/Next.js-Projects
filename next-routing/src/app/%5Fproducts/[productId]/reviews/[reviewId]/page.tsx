import { redirect } from "next/navigation";

function getRandomInt(count:number){
  return Math.floor(Math.random() * count)
}

const ProductReview = async ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  const random = getRandomInt(2)
  if(random === 1){
    throw new Error('Error loading review')
  }
  const { productId, reviewId } = await params;
  if(parseInt(reviewId) > 1000){
    // notFound();
    redirect('/_products')
  }
  return (
    <div>
      <h1>Review {reviewId}</h1>
      <h1>Product {productId}</h1>
    </div>
  );
};

export default ProductReview;
