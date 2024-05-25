import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  addItemToCart,
  increase,
  decrease,
} from "../../features/cart/cartSlice";
import StarPointsContainer from "./StarPointsContainer";
import ImageContainer from "./ImageContainer";
const ProductInfo = ({ product }) => {
  const { cart } = useSelector((store) => store.cart);
  const { average } = product;
  const dispatcher = useDispatch();
  let quantity = 1;
  return (
    <div className="section">
      <h2 className="title">{product?.name}</h2>
      <div className="product">
        <ImageContainer product={product} />
        <div className="product-info-container">
          {" "}
          <h5 className="brand-title">
            {"Brand: "}
            {product?.brand}
          </h5>{" "}
          <StarPointsContainer product={product} />
          <span className="star-data">{`${average === "NaN" ? "0" : average} (${
            product.starView ? product.starView.length : "0"
          })`}</span>
          <div className="product-info">
            <p>
              {"Category: "}
              {product?.category}
            </p>
            <p>
              {`Quantity:`}
              <input
                type="number"
                style={{ width: "2rem" }}
                placeholder={quantity}
                onChange={(e) => {
                  quantity = +e.target.value;
                }}
              />
              {` ${product?.amount} available `}
            </p>
            <span className="price">
              {"Price: "}
              {product?.price}
            </span>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                if (
                  cart.find(
                    (item) => item.product.productId === product.productId
                  )
                ) {
                  dispatcher(increase({ quantity, product }));
                  return;
                }
                if (quantity && quantity > 0 && quantity <= product.amount) {
                  dispatcher(addItemToCart({ quantity, product }));
                } else {
                  toast.warn("Invalid entry");
                }
              }}
            >
              add to cart
            </Button>
            <p className="fst-italic">{product?.description}</p>
          </div>
          <Link to="/products">back to products</Link>
        </div>{" "}
        <div className="description"></div>
      </div>
    </div>
  );
};

export default ProductInfo;
