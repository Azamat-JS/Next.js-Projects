const ProductReview = async ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  const { productId, reviewId } = params;

  return (
    <div>
      <h1>Review {reviewId}</h1>
      <h1>Product {productId}</h1>
    </div>
  );
};

export default ProductReview;
