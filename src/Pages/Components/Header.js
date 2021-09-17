import React from "react";
import "../../styles/header.css";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <div className="dropdown">
      <button className="dropdown_hover">🍔</button>
      <div className="dropdown_menu">
        <Link to ="/products">Products</Link>
        <Link to ="/contact">Contact</Link>
      </div>
    </div>
    <div class="logo">wonmonae</div>
    </div>
  );
};

export default Header;