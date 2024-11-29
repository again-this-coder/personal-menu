import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "./Reducers/Meals/MealsSlice";
import favoritesReducer from "./Reducers/Favorites/Favorites";
import shoppingReducer from "./Reducers/Shopping/ShoppingSlice";

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
    favorites: favoritesReducer,
    shopping: shoppingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
