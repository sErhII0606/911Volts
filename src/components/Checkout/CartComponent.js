import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Image } from "react-bootstrap";
import { priceStringToNumber } from "../../utils/priceTransformer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ButtonContainer from "./ButtonContainer";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import NameTooltip from "./NameTooltip";
const CartComponent = ({ handleClick }) => {
  const { cart, total } = useSelector((store) => store.cart);
  const navigate = useNavigate();
  return (
    <>
      <div className="container cart">
        <h4>
          <Link to="/cart"> Cart</Link>{" "}
          <span className="price">
            <i className="fa fa-shopping-cart"></i> <b>{`${cart.length}`}</b>
          </span>
        </h4>
        {cart.map((cartItem, i) => {
          return (
            <div key={i} className="cart-item">
              <Image
                src={cartItem.product.img[0].imgLink}
                style={{ width: "55px" }}
                roundedCircle
              />
              <Link to={`/products/${cartItem.product.productId}`}>
                <NameTooltip id={i} title={cartItem.product.name}>
                  {" "}
                  {cartItem.product.name.substring(0, 18)}
                </NameTooltip>
              </Link>{" "}
              {`x${cartItem.quantity}`}
              <ButtonContainer product={cartItem.product} />
              <span className="price">
                {" "}
                {`$${
                  priceStringToNumber(cartItem.product.price) *
                  cartItem.quantity
                }`}
              </span>
            </div>
          );
        })}

        <hr></hr>
        <p>
          Total{" "}
          <span className="price">
            <b>{`$${Math.trunc(total)}`}</b>
          </span>
        </p>
        <hr></hr>
        <Button
          variant="primary"
          onClick={() => {
            navigate("/checkout");
            handleClick();
          }}
        >
          proceed to checkout
        </Button>
      </div>
    </>
  );
};

export default CartComponent;
