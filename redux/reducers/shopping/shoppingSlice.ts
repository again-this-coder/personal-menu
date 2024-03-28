import { createSlice } from "@reduxjs/toolkit";

const shoppingSlice = createSlice({
  name: "Shopping",
  initialState: {
    shopItems: [],
  },
  reducers: {
    addShoppingItem: (state, action) => {
      state.shopItems.push(action.payload);
    },
    removeShoppingItem: (state, action) => {
      state.shopItems.splice(state.shopItems.indexOf(action.payload.id), 1);
    },
  },
});

export const { addShoppingItem, removeShoppingItem } = shoppingSlice.actions;

export default shoppingSlice.reducer;
