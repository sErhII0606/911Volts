import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Card from "react-bootstrap/Card";
import { MdAddShoppingCart } from "react-icons/md";
import Wrapper from "../../wrappers/ProductPlaceholder";
import {
  addItemToCart,
  increase,
  decrease,
} from "../../features/cart/cartSlice";
import Image from "react-bootstrap/Image";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
import { Col, Container } from "react-bootstrap";
const ProductPlaceholderHorizontal = ({ product }) => {
  const { cart } = useSelector((store) => store.cart);
  const dispatcher = useDispatch();
  const renderTooltipAddToCart = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Add to cart
    </Tooltip>
  );
  const [showMore, setShowMore] = useState(false);
  let quantity = 1;
  return (
    <Wrapper>
      <Card className="product-container product-container-horizontal">
        <Image
          thumbnail
          variant="top"
          src={product.img[0].imgLink}
          className="product-card-img product-card-img-horizontal"
        />
        <Card.Body>
          {" "}
          <Card.Title className="product-card-title">
            <Link
              className="product-card-title"
              to={`/products/${product.productId}`}
            >
              {product.name}
            </Link>
          </Card.Title>
          <h5>{product.brand}</h5> <p>{product.category}</p>
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
            {` ${product.amount} available `}
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltipAddToCart}
            >
              <span>
                <MdAddShoppingCart
                  className="add-to-cart-icon"
                  onClick={() => {
                    if (
                      cart.find(
                        (item) => item.product.productId === product.productId
                      )
                    ) {
                      dispatcher(increase({ quantity, product }));
                      return;
                    }
                    if (
                      quantity &&
                      quantity > 0 &&
                      quantity <= product.amount
                    ) {
                      dispatcher(addItemToCart({ quantity, product }));
                    } else {
                      toast.warn("Invalid entry");
                    }
                  }}
                />
              </span>
            </OverlayTrigger>
          </p>
          <span className="price">{product.price}</span>
          <div className="like">
            <AiOutlineHeart className="like-icon" />
          </div>
          <div className="like-full">
            <AiFillHeart className="like-icon-full" />
          </div>
          <Card.Text className="product-description">
            {product.description.substring(0, 50)}
            {showMore ? (
              <>
                {product.description.substring(50)}
                <span className="show-more" onClick={() => setShowMore(false)}>
                  {"  show less"}
                </span>
              </>
            ) : (
              <span className="show-more" onClick={() => setShowMore(true)}>
                {"  ..."}
              </span>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </Wrapper>
  );
};

export default ProductPlaceholderHorizontal;
