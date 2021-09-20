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
          <div className="info">
            <div className="baggerWonmo">
              <img src="/images/baggerWonmo.png"></img>
            </div>
            <p>멋들어진 문장 준비중...</p>
          </div>
        </div>
        <div className="section">
          <h2>wonmonae@gmail.com</h2>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Information;
