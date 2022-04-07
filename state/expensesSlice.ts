import { createSlice } from "@reduxjs/toolkit";
export type ExpenseType = {
  date: number;
  name: string;
  cost: number;
  id: string;
  category: string;
};
const initialState: ExpenseType[] = [];

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    create: (expenses, { payload }: { payload: ExpenseType }) => {
      expenses.push(payload);
    },
    update: (expenses, { payload }: { payload: ExpenseType }) => {
      let index = expenses.findIndex((e) => e.id === payload.id);
      expenses[index] = payload;
    },
    remove: (expenses, { payload }: { payload: ExpenseType }) => {
      let index = expenses.findIndex((e) => e.id === payload.id);
      expenses.splice(index, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { create, update, remove } = expensesSlice.actions;

export default expensesSlice.reducer;
