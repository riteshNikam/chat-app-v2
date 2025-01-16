import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "messageSlice",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, actions) => {
      const newMessages = [...state.messages, actions.payload.message];
      state.messages = newMessages;
    },
  },
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
