import { useSelector } from "react-redux";

const Summary = () => {
  const deposit = useSelector((store) => store.account.balance);
  const withdraw = useSelector((store) => store.account.withdraw);
  const loan = useSelector((store) => store.account.loan);

  return (
    <div className="summary">
      <p className="summary__label">In</p>
      <p className="summary__value summary__value--in">{deposit}€</p>
      <p className="summary__label">Out</p>
      <p className="summary__value summary__value--out">{withdraw}€</p>
      <p className="summary__label">Interest</p>
      <p className="summary__value summary__value--interest">{loan}€</p>
      <button className="btn--sort">↓ SORT</button>
    </div>
  );
};

export default Summary;
