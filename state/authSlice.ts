import { createSlice } from "@reduxjs/toolkit";
export type User = {
  name?: string;
  phone?: string;
  token?: string;
  email?: string;
};
const initialState: User = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (auth, { payload }: { payload: User }) => {
      auth = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login } = authSlice.actions;

export default authSlice.reducer;
