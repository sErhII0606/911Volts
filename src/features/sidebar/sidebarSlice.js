import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  isSidebarTestOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebarTest: (state) => {
      state.isSidebarTestOpen = !state.isSidebarTestOpen;
    },
    handleClose: (state) => {
      state.isSidebarOpen = false;
    },
    handleShow: (state) => {
      state.isSidebarOpen = true;
    },
  },
});

export const { toggleSidebarTest, handleClose, handleShow } =
  sidebarSlice.actions;
export default sidebarSlice.reducer;
