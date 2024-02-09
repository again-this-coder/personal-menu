import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter/counterSlice";
import mealsReducer from "./reducers/meals/mealsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    meals: mealsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
