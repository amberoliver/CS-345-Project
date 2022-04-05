import { createSlice } from "@reduxjs/toolkit";
export type Expense = {
  date: string;
  name: string;
  cost: number;
  id: string;
  categoryName: string;
};
const initialState: Expense[] = [];

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    create: (expenses, { payload }: { payload: Expense }) => {
      expenses.push({ ...payload, id: payload.date });
    },
  },
});

// Action creators are generated for each case reducer function
export const { create } = expensesSlice.actions;

export default expensesSlice.reducer;
