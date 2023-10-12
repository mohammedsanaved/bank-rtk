// import React from "react";

import { useSelector } from "react-redux";

const Balance = () => {
  const date = useSelector((store) => store.customer.createdAt);
  const datePart = date.split("T")[0];
  const customer = useSelector((store) => store.customer.username);
  const balance = useSelector((store) => store.account.balance);
  const data = useSelector((store) => store);
  console.log(balance);
  console.log(data);
  return (
    <div className="balance">
      <div>
        <p className="welcome">👋 Welcome,{customer}</p>
        <p className="balance__label">Current balance</p>
        <p className="balance__date">
          As of <span className="date">{datePart}</span>
        </p>
      </div>
      <p className="balance__value">{balance}€</p>
    </div>
  );
};

export default Balance;
