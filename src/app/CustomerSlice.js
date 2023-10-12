import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  pin: "",
  createdAt: "",
};
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(username, pin) {
        return {
          payload: {
            username,
            pin,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.username = action.payload.username;
        state.pin = action.payload.pin;
        state.createdAt = action.payload.createdAt;
      },
    },
  },
});
export const { createCustomer } = customerSlice.actions;
export default customerSlice.reducer;
