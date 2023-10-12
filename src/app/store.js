import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../app/CustomerSlice";
import accountReducer from "../app/AccountSlice";
const store = configureStore({
  reducer: {
    customer: customerReducer,
    account: accountReducer,
  },
});

export default store;
