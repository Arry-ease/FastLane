import { useState } from "react";
const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://previews.123rf.com/images/shmakova/shmakova2206/shmakova220600109/188025742-grill-menu-hand-drawn-inscription-slogan-food-court-logo-menu-restaurant-bar-cafe-vector-steak-on.jpg"
    />
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn === true ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Header;
