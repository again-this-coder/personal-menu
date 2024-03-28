import { createSlice } from "@reduxjs/toolkit";

const shoppingSlice = createSlice({
  name: "shopping",
  initialState: {
    shopItems: [],
  },
  reducers: {
    addShoppingItem: (state, action) => {
      state.shopItems.push(action.payload);
    },
    removeShoppingItem: (state, action) => {
      state.shopItems = state.shopItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addShoppingItem, removeShoppingItem } = shoppingSlice.actions;

export default shoppingSlice.reducer;
