import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCustomer } from "../app/CustomerSlice";

const Header = () => {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this state variable
  const dispatch = useDispatch();
  const date = useSelector((store) => store.customer.createdAt);
  console.log(date);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both username and pin are not empty
    if (username && pin) {
      setIsLoggedIn(true); // Set isLoggedIn to true when the form is submitted
    }
    if (!username && !pin) return;
    dispatch(createCustomer(username, pin));
  };

  return (
    <div>
      <nav>
        <p className="welcome">Log in to get started</p>
        <img src="/public/icon.png" alt="Logo" className="logo" />
        {isLoggedIn ? (
          ""
        ) : (
          <form className="login" onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              placeholder="user"
              onChange={(e) => setUsername(e.target.value)}
              className="login__input login__input--user"
            />
            <input
              type="text"
              placeholder="PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              maxLength="4"
              className="login__input login__input--pin"
            />
            <button className="login__btn">Log in</button>
          </form>
        )}
      </nav>
    </div>
  );
};

export default Header;
