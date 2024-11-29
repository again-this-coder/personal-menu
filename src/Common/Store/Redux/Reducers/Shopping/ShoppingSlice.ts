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
    updateShoppingItem: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.shopItems.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addShoppingItem, removeShoppingItem, updateShoppingItem } =
  shoppingSlice.actions;

export default shoppingSlice.reducer;
