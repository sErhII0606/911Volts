import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import {
  removeItemFromCart,
  clearCart,
  calculateTotal,
  increase,
  decrease,
} from "../features/cart/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { priceStringToNumber } from "../utils/priceTransformer";
import CartItem from "../components/Cart/CartItem";
const Cart = () => {
  const dispatcher = useDispatch();
  const { cart, total } = useSelector((store) => store.cart);
  const navigate = useNavigate();
  useEffect(() => {
    dispatcher(calculateTotal());
  }, [cart]);
  if (cart.length === 0) {
    return (
      <>
        <h1>Cart is Empty</h1>
        <Link className="btn btn-outline-secondary" to="/products">
          products
        </Link>
      </>
    );
  }
  return (
    <div>
      {cart.map((cartItem, i) => {
        return <CartItem key={i} cartItem={cartItem} />;
      })}
      <h3>{`Total: $${total.toFixed(2)}`}</h3>

      <Button
        variant="primary"
        size="sm"
        onClick={() => {
          dispatcher(clearCart());
        }}
      >
        clear cart
      </Button>

      <Button
        variant="primary"
        size="sm"
        onClick={() => {
          navigate("/checkout");
        }}
      >
        proceed to checkout
      </Button>
    </div>
  );
};

export default Cart;
