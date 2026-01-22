import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <h2>AtlatisCore</h2>
      <div className="nav-left">
        <Link to="/">Home</Link>
        <Link to="/about">AboutUs</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">ContactUs</Link>
      </div>
    </div>
  );
};

export default Navbar;
