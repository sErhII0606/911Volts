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

  product: { imgShown: 0, reviews: [], average: 0, starView: [] },
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
        state.product = payload;
        state.product.imgShown = 0;

        // state.average = payload.average; //(sum / payload.starView.length).toFixed(1);
        /*  let sum = 0;
        payload.Items[0].starView?.map((star) => {
          sum = sum + star.stars;
        });
        state.average = (sum / payload.Items[0].starView?.length).toFixed(1); */
        //state.point = Math.trunc(+(sum / payload.Items[0].starView?.length));
        state.isLoading = false;
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
        state.product.reviews = payload.updatedReview;
        toast.success(
          `Thanks ${payload.newReview.reviewName} for the review:)`
        );
        state.isReviewLoading = false;
      })
      .addCase(postReview.rejected, (state, { payload }) => {
        state.isReviewLoading = false;
        toast.error(`Something went wrong...${payload.message}`);
      })
      .addCase(postStarView.pending, (state) => {
        state.isStarsLoading = true;
      })
      .addCase(postStarView.fulfilled, (state, { payload }) => {
        /*    let sum = 0;
        payload.starView.map((star) => {
          sum = sum + star.stars;
        }); */
        state.product.average = payload.average; //(sum / payload.starView.length).toFixed(1);
        state.product.starView = payload.starView;
        state.isStarsLoading = false;
      })
      .addCase(postStarView.rejected, (state, { payload }) => {
        toast.error(`Something went wrong...${payload}`);
        state.isStarsLoading = false;
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
