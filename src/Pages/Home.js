import React from "react";
import "../styles/home.css";
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import {Link} from "react-router-dom"

const Home = () =>{
  return (
    <>
      <Header>
      </Header>
      <div  className="container">
        <h1>homepage</h1>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
      </div>
      <Footer>
      </Footer>
    </>
  )
}

export default Home;