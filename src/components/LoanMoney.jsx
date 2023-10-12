// import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { loanAmount, loanPurposeStatement } from "../app/AccountSlice";

const LoanMoney = () => {
  const dispatch = useDispatch();

  const [loan, setLoan] = useState(null);
  const [loanPurpose, setLoanPurpose] = useState("");
  const handleLoan = (e) => {
    e.preventDefault();
    dispatch(loanAmount({ type: "account/loanAmount", payload: loan }));
    dispatch(
      loanPurposeStatement({
        type: "account/loanPurpose",
        payload: loanPurpose,
      })
    );
  };
  return (
    <div className="operation operation--loan">
      <h2>Request loan</h2>

      <form className="form form--close">
        <input
          type="number"
          className="form__input form__input--user"
          value={loan}
          onChange={(e) => setLoan(+e.target.value)}
        />
        <input
          type="text"
          className="form__input"
          value={loanPurpose}
          onChange={(e) => setLoanPurpose(e.target.value)}
        />
        <button className="form__btn form__btn--close" onClick={handleLoan}>
          →
        </button>
        <label className="form__label">Amount</label>
        <label className="form__label">Reason</label>
      </form>
    </div>
  );
};

export default LoanMoney;
