import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { MealType, mealsData } from "src/data/mealData";

// Define the initial state using that type
const initialState: MealType[] = mealsData;

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    setFilteredMeals: (state, action: PayloadAction<string>) => {
      return state.filter((meal) => meal.category === action.payload);
    },
  },
});

export const { setFilteredMeals } = mealsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMeal = (state: RootState) => state.meals;

export default mealsSlice.reducer;
