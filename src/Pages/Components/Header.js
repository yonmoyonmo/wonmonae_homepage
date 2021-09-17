import React from "react";
import "../../styles/header.css";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className="header">
        <h1>header</h1>
        {/* <Link to="/contact">Contact</Link>
        <br/>
        <Link to="/products">Products</Link> */}
      </div>
    </>
  );
};

export default Header;