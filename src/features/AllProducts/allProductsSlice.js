import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllProductsThunk, searchByCategoryThunk } from "./allProductThunk";
import {
  addProductsPerPageToLocalStorage,
  removeProductsPerPageFromLocalStorage,
  getProductsPerPageFromLocalStorage,
} from "../../utils/localStorage";
const initialFiltersState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};
const initialState = {
  isProductsLoading: false,
  products: [],
  names: [],
  brands: [],
  categories: [],
  totalProducts: 0,
  numOfPages: 1,
  page: 1,
  productsPerPage: getProductsPerPageFromLocalStorage(),
  stats: {},

  ...initialFiltersState,
};

export const getAllProducts = createAsyncThunk(
  "allProducts/getAllProducts",
  getAllProductsThunk
);
export const searchByCategory = createAsyncThunk(
  "allProducts/searchByCategory",
  searchByCategoryThunk
);

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    setPage: (state, { payload }) => {
      console.log(payload);
      state.page = payload;
    },
    setProductsPerPage: (state, { payload }) => {
      state.productsPerPage = payload;
      state.numOfPages = Math.ceil(state.totalProducts / payload);
      state.page = 1;
      addProductsPerPageToLocalStorage(payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isProductsLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, { payload }) => {
        state.products = payload.Items;
        state.categories = Array.from(
          new Set(payload.Items.map((product) => product.category))
        );
        state.names = Array.from(
          new Set(payload.Items.map((product) => product.name))
        );
        state.brands = Array.from(
          new Set(
            payload.Items.map((product) =>
              product.brand ? product.brand : "no brand"
            )
          )
        );
        state.page = 1;
        state.numOfPages = Math.ceil(payload.Count / state.productsPerPage);
        state.totalProducts = payload.Count;
        state.isProductsLoading = false;
      })
      .addCase(getAllProducts.rejected, (state, { payload }) => {
        toast.error(payload.message);
        state.isProductsLoading = false;
      })
      .addCase(searchByCategory.pending, (state) => {
        state.isProductsLoading = true;
      })
      .addCase(searchByCategory.fulfilled, (state, { payload }) => {
        state.page = 1;
        state.products = payload.Items;
        state.numOfPages = Math.ceil(payload.Count / state.productsPerPage);
        state.totalProducts = payload.Count;
        state.isProductsLoading = false;
      })
      .addCase(searchByCategory.rejected, (state, { payload }) => {
        state.isProductsLoading = false;
        toast.error(payload.message);
      });
  },
});

export const { showLoading, hideLoading, setPage, setProductsPerPage } =
  allProductsSlice.actions;

export default allProductsSlice.reducer;
