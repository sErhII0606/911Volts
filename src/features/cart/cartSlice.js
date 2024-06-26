import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addCartToLocalStorage,
  getCartFromLocalStorage,
  removeCartFromLocalStorage,
} from "../../utils/localStorage";
import { priceStringToNumber } from "../../utils/priceTransformer";
import { Image } from "react-bootstrap";
import { createOrderThunk } from "./cartThunk";

const initialState = {
  isOrderLoading: false,
  isOrderCreated: false,
  cart: getCartFromLocalStorage() ? getCartFromLocalStorage() : [],
  total: 0,
};
const createToast = (text, name, img) => {
  return (
    <>
      <span>
        {text} {name}
      </span>
      <Image src={img} style={{ width: "5rem" }} roundedCircle thumbnail />
    </>
  );
};

export const createOrder = createAsyncThunk(
  "user/createOrder",
  createOrderThunk
);
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      state.cart.push(payload);
      addCartToLocalStorage(state.cart);
      toast.success(
        createToast(
          "Your Item was Added to Cart:",
          payload.product.name,
          payload.product.img[0].imgLink
        )
      );
    },
    setIsOrderCreated: (state, { payload }) => {
      state.isOrderCreated = payload;
    },
    removeItemFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(
        (cartItem) => cartItem.product.productId !== payload.productId
      );
      addCartToLocalStorage(state.cart);
      toast.warn(
        createToast(
          "Item was Removed From Cart:",
          payload.name,
          payload.img[0].imgLink
        )
      );
    },
    clearCart: (state) => {
      state.cart = [];
      removeCartFromLocalStorage();
    },
    increase: (state, { payload }) => {
      if (payload.quantity <= 0) {
        toast.warn(`Invalid Entry: ${payload.quantity}`);
        return;
      }
      const cartItem = state.cart.find(
        (item) => item.product.productId === payload.product.productId
      );
      if (cartItem.quantity + payload.quantity > payload.product.amount) {
        toast.warn(
          createToast(
            "You've reached the available limit on this item:",
            payload.product.name,
            payload.product.img[0].imgLink
          )
        );
        return;
      }
      toast.success(
        createToast(
          "Your Item was Increased:",
          payload.product.name,
          payload.product.img[0].imgLink
        )
      );
      cartItem.quantity = cartItem.quantity + payload.quantity;
      addCartToLocalStorage(state.cart);
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cart.find(
        (item) => item.product.productId === payload.productId
      );

      cartItem.quantity = cartItem.quantity - 1;
      if (cartItem.quantity === 0) {
        state.cart = state.cart.filter(
          (cartItem) => cartItem.product.productId !== payload.productId
        );
        toast.warn(
          createToast(
            "Item was Removed From Cart:",
            payload.name,
            payload.img[0].imgLink
          )
        );
      } else {
        toast.warn(
          createToast(
            "Your Item was Decreased:",
            payload.name,
            payload.img[0].imgLink
          )
        );
      }
      addCartToLocalStorage(state.cart);
    },
    calculateTotal: (state) => {
      let total = 0;
      state.cart.forEach((cartItem) => {
        total =
          total +
          priceStringToNumber(cartItem.product.price) * cartItem.quantity;
      });
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.isOrderLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, { payload }) => {
        toast.success("Your order is created");
        state.cart = [];
        removeCartFromLocalStorage();
        state.createdOrder = payload;
        state.isOrderCreated = true;
        state.isOrderLoading = false;
      })
      .addCase(createOrder.rejected, (state, { payload }) => {
        state.isOrderLoading = false;
        console.log(payload);
        toast.error(payload);
      });
  },
});
export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  calculateTotal,
  increase,
  decrease,
  setIsOrderCreated,
} = cartSlice.actions;
export default cartSlice.reducer;
