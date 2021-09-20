import React from "react";
import "../styles/home.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Information = () => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <p>information</p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Information;
