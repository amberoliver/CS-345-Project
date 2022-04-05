import { createSlice } from "@reduxjs/toolkit";
export type Category = {
  name: string;
  amount: number;
  id: string;
};
const initialState: Category[] = [];

export const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    create: (budget, { payload }: { payload: Category }) => {
      budget.push(payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { create } = budgetSlice.actions;

export default budgetSlice.reducer;
