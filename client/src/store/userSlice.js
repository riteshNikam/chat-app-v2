import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  initialState: {
    loggeIn: false,
  },
  reducers: {
    login: (state, actions) => {},
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
