import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
export type Category = {
  name: string;
  amount: number | null;
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
    remove: (budget, { payload: id }: { payload: string }) => {
      let index = budget.findIndex((e) => e.id === id);
      budget.splice(index, 1);
    },
    clearBudget: (budget) => {
      budget.length = 0;
    },
    setBudget: (budget, { payload }: { payload: Category[] }) => {
      budget.length = 0;
      for (let i of payload) {
        budget.push(i);
      }
    },
    clearBudgetExpenses: (budget) => {
      budget.forEach((cat) => (cat.spent = 0));
    },
  },
});

export const selectCategory = (id: string) => (state: RootState) => {
  return (
    state.budget.find((category) => category.id == id) || {
      id: new Date().getTime() + "",
      name: "",
      amount: null,
      spent: 0,
    }
  );
};
// Action creators are generated for each case reducer function
export const {
  create,
  addExpense,
  update,
  remove,
  clearBudget,
  setBudget,
  clearBudgetExpenses,
} = budgetSlice.actions;

export default budgetSlice.reducer;
