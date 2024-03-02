import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "./reducers/meals/mealsSlice";
import favoritesReducer from "./reducers/favorites/favorites";

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
    favoriteMeals: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
