import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import {
  addCartToLocalStorage,
  getCartFromLocalStorage,
  removeCartFromLocalStorage,
} from "../../utils/localStorage";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";

import {
  loginUserThunk,
  registerUserThunk,
  createOrderThunk,
  getUserOrderHistoryThunk,
  updateUserThunk,
  clearStoreThunk,
} from "./userThunk";
const initialUser = {};

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  isOrderLoading: false,
  isOrderHistoryLoading: false,
  user: getUserFromLocalStorage(), // ? getUserFromLocalStorage() : initialUser,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  registerUserThunk
);
/* 
export const updateUser = createAsyncThunk("user/updateUser", updateUserThunk);
export const clearStore = createAsyncThunk("user/clearStore", clearStoreThunk); */
export const loginUser = createAsyncThunk("user/loginUser", loginUserThunk);
export const getUserOrderHistory = createAsyncThunk(
  "user/getUserOrderHistory",
  getUserOrderHistoryThunk
);
export const createOrder = createAsyncThunk(
  "user/createOrder",
  createOrderThunk
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, { payload }) => {
      state.user = initialUser;
      window.location.href = "";
      removeUserFromLocalStorage();
      removeCartFromLocalStorage();
      toast.warn(payload);
    },
    /*     toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    }, */
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const user = {
          AccessToken: payload.AuthenticationResult.AccessToken,
          IdToken: payload.AuthenticationResult.IdToken,
          userName: payload.family_name + " " + payload.given_name,
          userId: payload.sub,
          phoneNumber: payload.phone_number,
          address: payload.address,
          company: payload.Company,
          email: payload.Value,
          userOrderHistory: [],
          /*  userId: payload.UserAttributes.filter(
            (attribute) => attribute.Name === "sub"
          )[0].Value, */
        };
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(state.user);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload.message);
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;

        toast.error(payload.message);
      })
      .addCase(createOrder.pending, (state) => {
        state.isOrderLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, { payload }) => {
        const { user } = payload;
        toast.success("Your order is created");
        state.isOrderLoading = false;
      })
      .addCase(createOrder.rejected, (state, { payload }) => {
        state.isOrderLoading = false;

        toast.error(payload.message);
      })
      .addCase(getUserOrderHistory.pending, (state) => {
        state.isOrderHistoryLoading = true;
      })
      .addCase(getUserOrderHistory.fulfilled, (state, { payload }) => {
        state.isOrderHistoryLoading = false;
        state.user.userOrderHistory = payload.Items;
      })
      .addCase(getUserOrderHistory.rejected, (state, { payload }) => {
        state.isOrderHistoryLoading = false;

        toast.error(payload.message);
      }); /* 
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Hello there ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;

        toast.error(payload);
      })
     
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`user updated`);
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;

        toast.error(payload);
      })
      .addCase(clearStore.rejected, () => {
        toast.error("ERROR");
      }); 
  },*/
  },
});
export const { /* toggleSidebar,  */ logout } = userSlice.actions;
export default userSlice.reducer;
