import React from "react";
import { useDispatch } from "react-redux";

import {
  removeItemFromCart,
  increase,
  decrease,
} from "../../features/cart/cartSlice";

const ButtonContainer = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="btn-container">
      <button
        type="button"
        className="btn-in"
        onClick={() => dispatch(decrease(product))}
      >
        -
      </button>
      <button
        type="button"
        className="btn-in"
        onClick={() => dispatch(increase({ product, quantity: 1 }))}
      >
        +
      </button>
      <button
        type="button"
        className="btn-in"
        onClick={() => dispatch(removeItemFromCart(product))}
      >
        R
      </button>
    </div>
  );
};

export default ButtonContainer;
