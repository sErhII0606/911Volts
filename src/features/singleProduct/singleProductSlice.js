import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  postReviewThunk,
  getProductThunk,
  postStarViewThunk,
  updateAmountThunk,
} from "./singleProductThunk";
const initialState = {
  isLoading: false,
  isReviewLoading: false,
  isAmountLoading: false,
  isStarsLoading: false,
  stars: [1, 2, 3, 4, 5],
  point: 0,
  average: 0,

  product: [{ imgShown: 0, reviews: [], starView: [] }],
};

export const getProduct = createAsyncThunk(
  "product/getProduct",
  getProductThunk
);
export const postReview = createAsyncThunk(
  "product/postReview",
  postReviewThunk
);
export const updateAmount = createAsyncThunk(
  "product/updateAmount",
  updateAmountThunk
);
export const postStarView = createAsyncThunk(
  "product/postStarView",
  postStarViewThunk
);

const singleProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    setImgShown: (state, { payload }) => {
      state.product.imgShown = payload;
    },
    calculateAverage: (state, { payload }) => {},
    setStarView: (state, { payload }) => {
      state.starView = payload;
    },
    setPoint: (state, { payload }) => {
      state.point = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        [state.product] = payload.Items;
        let sum = 0;
        payload.Items[0].starView?.map((star) => {
          sum = sum + star.stars;
        });
        state.product.imgShown = 0;
        state.average = (sum / payload.Items[0].starView?.length).toFixed(1);
        //state.point = Math.trunc(+(sum / payload.Items[0].starView?.length));
        // [state.starAverage]=payload.Items.starView.map
      })
      .addCase(getProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(postReview.pending, (state) => {
        state.isReviewLoading = true;
      })
      .addCase(postReview.fulfilled, (state, { payload }) => {
        state.isReviewLoading = false;
        state.product.reviews = payload.reviews;
        toast.success(
          `Thanks ${payload.reviews[0].reviewName} for the review:)`
        );
      })
      .addCase(postReview.rejected, (state, { payload }) => {
        state.isReviewLoading = false;
        toast.error(`Something went wrong...${payload.message}`);
      })
      .addCase(postStarView.pending, (state) => {
        state.isStarsLoading = true;
      })
      .addCase(postStarView.fulfilled, (state, { payload }) => {
        state.isStarsLoading = false;
        let sum = 0;
        payload.starView.map((star) => {
          sum = sum + star.stars;
        });
        state.average = (sum / payload.starView.length).toFixed(1);
        state.product.starView = payload.starView;
      })
      .addCase(postStarView.rejected, (state, { payload }) => {
        state.isStarsLoading = false;
        toast.error(`Something went wrong...${payload.message}`);
      })
      .addCase(updateAmount.pending, (state) => {
        state.isAmountLoading = true;
      })
      .addCase(updateAmount.fulfilled, (state, { payload }) => {
        state.isAmountLoading = false;
      })
      .addCase(updateAmount.rejected, (state, { payload }) => {
        state.isAmountLoading = false;
        toast.error(`Something went wrong...${payload.message}`);
      });
    /*    */
  },
});

export const {
  showLoading,
  hideLoading,
  calculateAverage,
  setPoint,
  setStarView,
  setImgShown,
} = singleProductSlice.actions;

export default singleProductSlice.reducer;
