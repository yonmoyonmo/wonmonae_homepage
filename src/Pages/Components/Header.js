import React from "react";
import "../../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <a href="/">
      <div className="header">
        <img src="/images/new_wonmonae_logo.png"></img>
      </div>
    </a>
  );
};

export default Header;
