import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchProduct: "",
  searchOrder: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchProduct: (state, { payload }) => {
      state.searchProduct = payload;
    },
    setSearchOrder: (state, { payload }) => {
      state.searchOrder = payload;
    },
  },
});

export const { setSearchProduct, setSearchOrder } = searchSlice.actions;

export default searchSlice.reducer;
