import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../features/singleProduct/singleProductSlice";
import { Spinner } from "react-bootstrap";
import ProductInfo from "../../components/Single_Product_Page/ProductInfo";
import Wrapper from "../../wrappers/SingleProduct";
import ReviewForm from "../../components/Single_Product_Page/ReviewForm";
import Reviews from "../../components/Single_Product_Page/Reviews";
import { setIsOrderCreated } from "../../features/cart/cartSlice";
const SingleProduct = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();

  React.useEffect(() => {
    dispatch(getProduct(productId));
    dispatch(setIsOrderCreated(false));
  }, []);
  const { product, isLoading, isReviewLoading } = useSelector(
    (store) => store.product
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Wrapper>
      <ProductInfo product={product} />
      <div className="product">
        <Reviews product={product} isReviewLoading={isReviewLoading} />
        <ReviewForm product={product} />
      </div>
    </Wrapper>
  );
};

export default SingleProduct;
