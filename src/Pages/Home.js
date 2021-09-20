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
          <h1>1</h1>
        </div>
        <div className="section">
          <h1>2</h1>
        </div>
        <div className="section">
          <h1>3</h1>
        </div>
        <div className="section">
          <h1>4</h1>
        </div>
        <div className="section">
          <h1>5</h1>
        </div>
        <div className="section">
          <h1>6</h1>
        </div>
        <div className="section">
        <Footer></Footer>
        </div>
      </div>
      
    </>
  );
};

export default Home;
