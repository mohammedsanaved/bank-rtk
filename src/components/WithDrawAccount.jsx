// import React from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdrawAmount } from "../app/AccountSlice";

const WithDrawAccount = () => {
  const [withdraw, setWithdraw] = useState(null);
  const balance = useSelector((store) => store.account.balance);
  const data = useSelector((store) => store.account);
  console.log(data);
  const dispatch = useDispatch();
  const handleWithDraw = (e) => {
    e.preventDefault();
    if (balance >= withdraw) {
      dispatch(
        withdrawAmount({ type: "account/withdrawAmount", payload: withdraw })
      );
    } else alert("your withDraw value is High");
  };
  return (
    <div className="operation operation--close">
      <h2>WithDraw Amount</h2>
      <form className="form form--loan">
        <input
          type="number"
          className="form__input form__input--loan-amount"
          value={withdraw}
          onChange={(e) => setWithdraw(+e.target.value)}
        />
        <button className="form__btn form__btn--loan" onClick={handleWithDraw}>
          →
        </button>
        <label className="form__label form__label--loan">Amount</label>
      </form>
    </div>
  );
};

export default WithDrawAccount;
