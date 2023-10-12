// import React from 'react'

import { useSelector } from "react-redux";
const Movement = () => {
  const transactions = useSelector((store) => store.account.transactions);
  console.log(transactions);
  const balance = useSelector((store) => store.account.balance);
  const type = useSelector((store) => store.account.transactions);
  console.log(type);
  // const value =
  // console.log(value);
  console.log(balance);

  const loanPurpose = useSelector((store) => store.account.loanPurpose);
  console.log(transactions);
  // const style = {
  // }
  return (
    <>
      <div className="movements">
        {balance === 0 ? (
          <h2 className="blank__screen">Transaction not Available</h2>
        ) : (
          <div>
            {transactions.map((transfer, i) => (
              <div className="movements__row" key={i}>
                <div
                  className={`movements__type ${
                    transfer.type === "Deposit"
                      ? "movements__type--deposit"
                      : transfer.type === "Withdraw"
                      ? "movements__type--withdrawal"
                      : transfer.type === "Loan Request"
                      ? "movements__type--loan"
                      : ""
                  }`}
                >
                  {transfer.type}
                </div>
                <div className="movements__date">
                  {transfer.dateTime.toLocaleString()}
                </div>
                {loanPurpose === "" ? (
                  ""
                ) : (
                  <div className="movements__reason">({loanPurpose})</div>
                )}
                <div className="movements__value">{transfer.amount}€</div>
              </div>
            ))}
            {/* <div className="movements__row">
        <div className="movements__type movements__type--loan">2 Loan</div>
        <div className="movements__date">3 days ago</div>
        <div className="movements__reason">(reason for loan)</div>
        <div className="movements__value">4 000€</div>
      </div>
      <div className="movements__row">
        <div className="movements__type movements__type--withdrawal">
        1 withdrawal
        </div>
        <div className="movements__date">24/01/2037</div>
        <div className="movements__value">-378€</div>
        </div>
        <div className="movements__row">
        <div className="movements__type movements__type--deposit">
          2 deposit
          </div>
        <div className="movements__date">3 days ago</div>
        <div className="movements__value">4 000€</div>
        </div>
      <div className="movements__row">
        <div className="movements__type movements__type--loan">2 Loan</div>
        <div className="movements__date">3 days ago</div>
        <div className="movements__reason">(reason for loan)</div>
        <div className="movements__value">4 500€</div>
      </div>
      <div className="movements__row">
      <div className="movements__type movements__type--withdrawal">
      1 withdrawal
      </div>
        <div className="movements__date">24/01/2037</div>
        <div className="movements__value">-378€</div>
      </div>
      <div className="movements__row">
        <div className="movements__type movements__type--deposit">
          2 deposit
        </div>
        <div className="movements__date">3 days ago</div>
        <div className="movements__value">4 000€</div>
        </div>
        <div className="movements__row">
        <div className="movements__type movements__type--withdrawal">
        1 withdrawal
        </div>
        <div className="movements__date">24/01/2037</div>
        <div className="movements__value">-378€</div>
        </div>
        <div className="movements__row">
        <div className="movements__type movements__type--deposit">
        2 deposit
        </div>
        <div className="movements__date">3 days ago</div>
        <div className="movements__value">4 000€</div>
        </div>
        <div className="movements__row">
        <div className="movements__type movements__type--withdrawal">
        1 withdrawal
        </div>
        <div className="movements__date">24/01/2037</div>
        <div className="movements__value">-378€</div>
        </div>
        <div className="movements__row">
        <div className="movements__type movements__type--withdrawal">
          1 withdrawal
          </div>
          <div className="movements__date">24/01/2037</div>
          <div className="movements__value">-378€</div>
        </div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Movement;
