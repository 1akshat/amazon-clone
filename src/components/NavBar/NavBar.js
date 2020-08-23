import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth } from "../../firebase";
import "./NavBar.css";

const NavBar = () => {
  // const [state, dispatch] = useStateValue();
  // On Destructuring:
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img
          className="navbar-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        ></img>
      </Link>

      <div className="navbar-search-box">
        <input className="navbar-search-input" type="text"></input>
        <SearchIcon className="navbar-search-button" />
      </div>

      <div className="navbar-nav-icons">
        <Link className="navbar-link" to={!user && "/login"}>
          <div onClick={login} className="navbar-options">
            <span className="navbar-option-line1">Hello {user?.email},</span>
            <span className="navbar-option-line2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link className="navbar-link" to="/">
          <div className="navbar-options">
            <span className="navbar-option-line1">Returns</span>
            <span className="navbar-option-line2">& Orders</span>
          </div>
        </Link>
        <Link className="navbar-link" to="/">
          <div className="navbar-options">
            <span className="navbar-option-line1">Your</span>
            <span className="navbar-option-line2">Prime</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="navbar-option-basket">
            <ShoppingBasketIcon className="navbar-basket-icon" />
            <span className="navbar-basket-number">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
