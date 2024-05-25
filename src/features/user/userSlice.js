import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import {
  addCartToLocalStorage,
  getCartFromLocalStorage,
  removeCartFromLocalStorage,
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  addOrderToLocalStorage,
  getOrderFromLocalStorage,
  removeOrderFromLocalStorage,
  addProductsPerPageToLocalStorage,
  removeProductsPerPageFromLocalStorage,
  getProductsPerPageFromLocalStorage,
} from "../../utils/localStorage";

import {
  loginUserThunk,
  getUserOrderThunk,
  registerUserThunk,
  // createOrderThunk,
  getUserOrderHistoryThunk,
  updateUserThunk,
  clearStoreThunk,
  signOutThunk,
  changePasswordThunk,
  deleteUserThunk,
  getUserOrderHistoryPaginationThunk,
  updateUserOrderThunk,
} from "./userThunk";

const initialState = {
  isLoading: false,
  isMember: true,
  isSidebarOpen: false,
  isOrderLoading: false,
  isOrderHistoryLoading: false,
  isOrderHistoryLoadingPagination: false,
  isGuest: false,
  updateUserDeliveryAddress: false,
  numOfOrdersShown: 5,
  count: 0,
  order: {
    date: "",
    paid: false,
    shipped: false,
    delivered: false,
    total: "",
    address: "",
    items: [],
  }, //getOrderFromLocalStorage(),
  user: getUserFromLocalStorage(), // ? getUserFromLocalStorage() : getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  registerUserThunk
);
/* 
export const updateUser = createAsyncThunk("user/updateUser", updateUserThunk);
export const clearStore = createAsyncThunk("user/clearStore", clearStoreThunk); */
export const loginUser = createAsyncThunk("user/loginUser", loginUserThunk);
export const deleteUser = createAsyncThunk("user/deleteUser", deleteUserThunk);
export const logout = createAsyncThunk("user/logout", signOutThunk);
export const updateUserOrder = createAsyncThunk(
  "user/updateUserOrder",
  updateUserOrderThunk
);
/* export const requestOrderCancelation = createAsyncThunk(
  "user/requestOrderCancelation",
  updateUserOrderThunk
); */
export const changePassword = createAsyncThunk(
  "user/changePassword",
  changePasswordThunk
);
export const updateUser = createAsyncThunk("user/updateUser", updateUserThunk);
export const getUserOrderHistory = createAsyncThunk(
  "user/getUserOrderHistory",
  getUserOrderHistoryThunk
);
export const getUserOrderHistoryPagination = createAsyncThunk(
  "user/getUserOrderHistoryPagination",
  getUserOrderHistoryPaginationThunk
);
export const getUserOrder = createAsyncThunk(
  "user/getUserOrder",
  getUserOrderThunk
);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    /*  logout: (state, { payload }) => {
      state.user = getUserFromLocalStorage();
      removeProductsPerPageFromLocalStorage();
      window.location.href = "";
      removeUserFromLocalStorage();
      removeCartFromLocalStorage();
      removeOrderFromLocalStorage();
      toast.warn(payload);
    }, */
    setIsMember: (state, { payload }) => {
      state.isMember = payload;
    },
    setIsGuest: (state, { payload }) => {
      state.isGuest = payload;
    },
    toggleUpdateDelAddr: (state) => {
      state.updateUserDeliveryAddress = !state.updateUserDeliveryAddress;
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
          FirstName: payload.given_name,
          LastName: payload.family_name,
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
        state.user = user;
        addUserToLocalStorage(state.user);
        state.isGuest = false;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        toast.error(payload.message);
        state.isLoading = false;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        removeProductsPerPageFromLocalStorage();
        removeUserFromLocalStorage();
        removeCartFromLocalStorage();
        removeOrderFromLocalStorage();
        state.user = getUserFromLocalStorage();
        toast.warn(payload.message);
        state.isLoading = false;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        removeProductsPerPageFromLocalStorage();
        removeUserFromLocalStorage();
        removeCartFromLocalStorage();
        removeOrderFromLocalStorage();
        state.user = getUserFromLocalStorage();
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const user = {
          AccessToken: payload.AuthenticationResult.AccessToken,
          IdToken: payload.AuthenticationResult.IdToken,
          FirstName: payload.given_name,
          LastName: payload.family_name,
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
        state.user = user;
        addUserToLocalStorage(state.user);
        state.isMember = true;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload.message);
      })
      .addCase(getUserOrderHistory.pending, (state) => {
        state.isOrderHistoryLoading = true;
      })
      .addCase(getUserOrderHistory.fulfilled, (state, { payload }) => {
        state.count = payload.count;
        state.user.userOrderHistory = payload.userOrderHistory;
        state.isOrderHistoryLoading = false;
      })
      .addCase(getUserOrderHistory.rejected, (state, { payload }) => {
        state.isOrderHistoryLoading = false;
        toast.error(payload);
      })
      .addCase(getUserOrderHistoryPagination.pending, (state) => {
        state.isOrderHistoryLoadingPagination = true;
      })
      .addCase(
        getUserOrderHistoryPagination.fulfilled,
        (state, { payload }) => {
          state.count = payload.count;
          state.user.userOrderHistory = [
            ...state.user.userOrderHistory,
            ...payload,
          ];
          state.numOfOrdersShown = state.numOfOrdersShown + 5;
          state.isOrderHistoryLoadingPagination = false;
        }
      )
      .addCase(getUserOrderHistoryPagination.rejected, (state, { payload }) => {
        state.isOrderHistoryLoadingPagination = false;
        toast.error(payload);
      })
      .addCase(getUserOrder.pending, (state) => {
        state.isOrderLoading = true;
      })
      .addCase(getUserOrder.fulfilled, (state, { payload }) => {
        state.order = payload.Items[0];

        state.isOrderLoading = false;
        //addCartToLocalStorage(payload.Items[0].items);
      })
      .addCase(getUserOrder.rejected, (state, { payload }) => {
        toast.error(payload);
        state.isOrderLoading = false;
      })
      .addCase(updateUserOrder.pending, (state) => {
        state.isOrderLoading = true;
      })
      .addCase(updateUserOrder.fulfilled, (state, { payload }) => {
        state.isOrderLoading = false;
        state.order = payload;
        state.updateUserDeliveryAddress = false;
        //addCartToLocalStorage(payload.Items[0].items);
      })
      .addCase(updateUserOrder.rejected, (state, { payload }) => {
        toast.error(payload);
        state.isOrderLoading = false;
      })
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload.message);
        //addCartToLocalStorage(payload.Items[0].items);
      })
      .addCase(changePassword.rejected, (state, { payload }) => {
        toast.error(payload);
        state.isLoading = false;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        toast.success(payload.message);
        state.user.FirstName = payload.given_name;
        state.user.LastName = payload.family_name;
        state.user.phoneNumber = payload.phone_number;
        state.user.address = payload.address;
        state.user.company = payload.Company;
        addUserToLocalStorage(state.user);
        state.isLoading = false;
        //addCartToLocalStorage(payload.Items[0].items);
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        toast.error(payload);
        state.isLoading = false;
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        removeProductsPerPageFromLocalStorage();
        removeUserFromLocalStorage();
        removeCartFromLocalStorage();
        removeOrderFromLocalStorage();
        state.user = getUserFromLocalStorage();
        state.isLoading = false;
        toast.warn(payload.message);
        //addCartToLocalStorage(payload.Items[0].items);
      })
      .addCase(deleteUser.rejected, (state, { payload }) => {
        toast.error(payload);
        state.isLoading = false;
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
export const {
  /* toggleSidebar,  logout, */ setIsMember,
  setIsGuest,
  toggleUpdateDelAddr,
} = userSlice.actions;
export default userSlice.reducer;
