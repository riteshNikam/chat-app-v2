import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import messageReducer from "./messageSlice";

const store = configureStore({
  reducer: {
    userReducer,
    messageReducer,
  },
});

export default store;
