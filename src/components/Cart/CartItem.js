import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import {
  removeItemFromCart,
  increase,
  decrease,
} from "../../features/cart/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { priceStringToNumber } from "../../utils/priceTransformer";

const CartItem = ({ cartItem }) => {
  const dispatcher = useDispatch();

  return (
    <Card>
      <Card.Body>
        <div>
          <h5>
            {" "}
            <Link to={`/products/${cartItem.product.productId}`}>
              {cartItem.product.name}
            </Link>
          </h5>

          <p>{`amount: ${cartItem.quantity}`}</p>
          <p>{`total: $${(
            priceStringToNumber(cartItem.product.price) * cartItem.quantity
          ).toFixed(2)}`}</p>
        </div>
        <Image
          style={{ width: "5rem" }}
          src={cartItem.product.img[0].imgLink}
          roundedCircle
        />
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              dispatcher(decrease(cartItem.product));
            }}
          >
            decrease
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              dispatcher(increase({ product: cartItem.product, quantity: 1 }));
            }}
          >
            increase
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              dispatcher(removeItemFromCart(cartItem.product));
            }}
          >
            remove from cart
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
