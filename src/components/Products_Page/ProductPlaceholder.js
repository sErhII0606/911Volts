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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
const ProductPlaceholder = ({ product }) => {
  const { cart } = useSelector((store) => store.cart);
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const renderTooltipAddToCart = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Add to cart
    </Tooltip>
  );
  const [showMore, setShowMore] = useState(false);
  let quantity = 1;
  return (
    <Wrapper>
      <Card style={{ width: "18rem" }} className="product-container">
        <Card.Img
          variant="top"
          src={product.img[0].imgLink}
          className="product-card-img"
        />
        <Card.Body>
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
              disabled={product.amount ? false : true}
              style={{ width: "2rem" }}
              placeholder={quantity}
              onChange={(e) => {
                quantity = +e.target.value;
              }}
            />
            {product.amount ? ` ${product.amount} available ` : "Out of stock"}
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltipAddToCart}
            >
              <span>
                <MdAddShoppingCart
                  className="add-to-cart-icon"
                  onClick={() => {
                    if (product.amount == 0) {
                      toast.warn(`${product.name} is out of stock at the time`);
                      return;
                    }
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
          <div className="card-btn-container"></div>
        </Card.Body>
      </Card>
    </Wrapper>
  );
};

export default ProductPlaceholder;
