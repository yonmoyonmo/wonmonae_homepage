import React from "react";
import "../styles/home.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <h1>homepage</h1>
        </div>
        <div className="section">
          <h1>homepage</h1>
        </div>
        <div className="section">
          <h1>homepage</h1>
        </div>
        <div className="section">
          <h1>homepage</h1>
        </div>
        <div className="section">
          <h1>homepage</h1>
        </div>
        <div className="section">
          <h1>homepage</h1>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
