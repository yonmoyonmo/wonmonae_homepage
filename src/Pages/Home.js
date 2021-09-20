import React from "react";
import "../styles/home.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <h1>MAKES</h1>
        </div>
        <div className="section">
          <h1>SIMPLE</h1>
        </div>
        <div className="section">
          <h1>APPS</h1>
        </div>
        <div className="section">
          <h1>FOR YOU!</h1>
        </div>
        <div className="section">
          <div className="bottom_logo">
            <img src="/images/noletters.png" />
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
