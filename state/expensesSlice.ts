import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
export type ExpenseType = {
  date: number;
  name: string;
  cost: number | null;
  id: string;
  category: string | null;
};
const initialState: ExpenseType[] = [];

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    create: (expenses, { payload }: { payload: ExpenseType }) => {
      expenses.push(payload);
      expenses.sort((a, b) => b.date - a.date);
    },
    update: (expenses, { payload }: { payload: ExpenseType }) => {
      let index = expenses.findIndex((e) => e.id === payload.id);
      expenses[index] = payload;
      expenses.sort((a, b) => b.date - a.date);
    },
    remove: (expenses, { payload: id }: { payload: string }) => {
      let index = expenses.findIndex((e) => e.id === id);
      expenses.splice(index, 1);
      expenses.sort((a, b) => b.date - a.date);
    },
  },
});

export const selectExpense = (id: string) => (state: RootState) => {
  return (
    state.expenses.find((expense) => expense.id == id) || {
      id: new Date().getTime() + "",
      date: new Date().getTime(),
      name: "",
      cost: null,
      category: null,
    }
  );
};

// Action creators are generated for each case reducer function
export const { create, update, remove } = expensesSlice.actions;

export default expensesSlice.reducer;
