import { createSlice } from "@reduxjs/toolkit";
export type Category = {
  name: string;
  amount: number;
  id: string;
  spent: number;
};
const initialState: Category[] = [];

export const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    create: (budget, { payload }: { payload: Category }) => {
      budget.push(payload);
    },
    addExpense: (budget, { payload: { cost, category } }) => {
      let index = budget.findIndex((cat) => cat.name == category);
      budget[index].spent += cost;
      console.log(cost, category, index);
    },
  },
});

// Action creators are generated for each case reducer function
export const { create, addExpense } = budgetSlice.actions;

export default budgetSlice.reducer;
