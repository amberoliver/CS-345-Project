import { configureStore } from "@reduxjs/toolkit";
import budgetSlice from "./budgetSlice";
import expensesSlice from "./expensesSlice";

export const store = configureStore({
  reducer: {
    expenses: expensesSlice,
    budget: budgetSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
