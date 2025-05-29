// features/menu/menuSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: [],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu(state, action) {
      state.menu = action.payload;
      state.status = "succeeded";
    },
  },
});

export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;

export const selectMenu = (state) => state.menu.menu;
