import { configureStore } from "@reduxjs/toolkit";
import budgetSlice from "./budgetSlice";
import expensesSlice from "./expensesSlice";

export const store = configureStore({
  reducer: {
    expenses: expensesSlice,
    budget: budgetSlice
  },
});
