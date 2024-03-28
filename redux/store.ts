import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "./reducers/meals/mealsSlice";
import favoritesReducer from "./reducers/favorites/favorites";
import shoppingReducer from "./reducers/shopping/shoppingSlice";

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
    favorites: favoritesReducer,
    shopping: shoppingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
