import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  transactions: [],
  balance: 0,
  loan: 0,
  withdraw: 0,
  loanPurpose: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit: (state, action) => {
      const depositAmount = action.payload.payload;
      state.balance += depositAmount;

      // Add a deposit transaction to the array
      state.transactions.push({
        type: "Deposit",
        amount: depositAmount,
        dateTime: new Date(),
      });
    },
    withdrawAmount: (state, action) => {
      const withdrawAmount = action.payload.payload;
      state.withdraw = withdrawAmount;
      state.balance -= state.withdraw;

      // Add a withdraw transaction to the array
      state.transactions.push({
        type: "Withdraw",
        amount: withdrawAmount,
        dateTime: new Date(),
      });
    },
    loanAmount: (state, action) => {
      const loanAmount = action.payload.payload;
      // const loanPurpose = state.loanPurpose; // Get the loan purpose from the state
      state.loan = loanAmount;
      state.balance += state.loan;

      // Add a loan request transaction to the array with loan purpose
      state.transactions.push({
        type: "Loan Request",
        amount: loanAmount,
        // purpose: loanPurpose, // Include the loan purpose in the transaction
        dateTime: new Date(),
      });
    },
    loanPurposeStatement: (state, action) => {
      state.loanPurpose = action.payload.payload;
    },
  },
});
export const { deposit, loanAmount, loanPurposeStatement, withdrawAmount } =
  accountSlice.actions;

export default accountSlice.reducer;
