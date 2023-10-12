import { useSelector } from "react-redux";
import MainWrapper from "./MainWrapper";
import Balance from "./components/Balance";
import CloseAccount from "./components/WithDrawAccount";
import Header from "./components/Header";
import LoanMoney from "./components/LoanMoney";
import Logout from "./components/Logout";
import Movement from "./components/Movement";
import Summary from "./components/Summary";
import TransferMoney from "./components/TransferMoney";
// import Footer from "./components/Footer";

function App() {
  const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };

  const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };

  const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };

  const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };

  const accounts = [account1, account2, account3, account4];
  console.log(accounts);
  const username = useSelector((store) => store.customer.username);
  console.log(username);
  return (
    <>
      {username === "" ? (
        <Header />
      ) : (
        <MainWrapper>
          <Balance />
          <Movement />
          <Summary />
          <TransferMoney />
          <CloseAccount />
          <LoanMoney />
          <Logout />
        </MainWrapper>
      )}
      {/* <Header />
      <MainWrapper>
        <Balance />
        <Movement />
        <Summary />
        <TransferMoney />
        <CloseAccount />
        <LoanMoney />
        <Logout />
      </MainWrapper> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
