import React from "react";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
          <div className="link">
            <Link to="/products">Products</Link>
          </div>
          <div className="link">
            <Link to="/contact">About</Link>
          </div>
      </div>
    </>
  );
};

export default Footer;
