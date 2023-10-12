// import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit } from "../app/AccountSlice";

const TransferMoney = () => {
  const [currency, setCurrency] = useState("");
  const [balance, setBalance] = useState(null);
  const dispatch = useDispatch();
  console.log(balance);
  const handleDeposit = (e) => {
    e.preventDefault();
    dispatch(deposit({ type: "account/deposit", payload: balance }));
  };
  return (
    <div className="operation operation--transfer">
      <h2>Deposit Money</h2>
      <form className="form form--transfer">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="form__input form__input--to"
        >
          <option value="USD">Euro</option>
          <option value="EUR">USD</option>
          <option value="GBP">British Pound</option>
        </select>
        <input
          type="number"
          className="form__input form__input--amount"
          value={balance}
          onChange={(e) => setBalance(+e.target.value)}
        />
        <button
          className="form__btn form__btn--transfer"
          onClick={handleDeposit}
        >
          →
        </button>
        <label className="form__label">Select Currency</label>
        <label className="form__label">Amount</label>
      </form>
    </div>
  );
};

export default TransferMoney;
