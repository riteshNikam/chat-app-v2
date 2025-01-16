import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    login: (state, actions) => {
      state.loggedIn = !state.loggedIn;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
