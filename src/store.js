import { configureStore } from "@reduxjs/toolkit";
import allProductsSlice from "./features/AllProducts/allProductsSlice";
import sidebarSlice from "./features/sidebar/sidebarSlice";
import searchSlice from "./features/search/searchSlice";
import userSlice from "./features/user/userSlice";
import cartSlice from "./features/cart/cartSlice";
import singleProductSlice from "./features/singleProduct/singleProductSlice";

export const store = configureStore({
  reducer: {
    allProducts: allProductsSlice,
    sidebar: sidebarSlice,
    search: searchSlice,
    user: userSlice,
    cart: cartSlice,
    product: singleProductSlice,
  },
});
