import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./NavBar.css";

const NavBar = () => {
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
        <Link className="navbar-link" to="/login">
          <div className="navbar-options">
            <span className="navbar-option-line1">Hello Akshat,</span>
            <span className="navbar-option-line2">Sign In</span>
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
            <span className="navbar-basket-number">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
