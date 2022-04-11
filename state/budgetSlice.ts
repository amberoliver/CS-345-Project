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
    update: (budget, { payload }: { payload: Category }) => {
      let index = budget.findIndex((e) => e.id === payload.id);
      budget[index] = payload;
    },
    remove: (budget, { payload }: { payload: Category }) => {
      let index = budget.findIndex((e) => e.id === payload.id);
      budget.splice(index, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { create, addExpense, update, remove } = budgetSlice.actions;

export default budgetSlice.reducer;
