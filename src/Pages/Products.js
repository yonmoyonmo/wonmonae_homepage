import React from "react";
import "../styles/home.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Products = () => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <p>products</p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Products;
