import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
 const navigate = useNavigate();
// we used useNavigate hook which is react-router-dom hook, which use to navigate the page 
  const isLoggin = true;

  const clickHanler = () => {
    if (isLoggin) {
      navigate("/about");
    }
  };
  return (
    <>
    <div className="nav">
      <h2>AtlatisCore</h2>
      <div className="nav-left">
        {/* navLink give us more features instead  of link rahter than using simple link we can use the navlink */}
        <NavLink to="/" className={({ isActive }) => { return isActive ? "text-[rgb(255,204,173)]" : "" }}>
          Home
        </NavLink>{" "}
        <NavLink to="/about" className={({ isActive }) => { return isActive ? "text-[rgb(255,204,173)]" : "" }}>
          About
        </NavLink>{" "}
        <NavLink to="/product" className={({ isActive }) => { return isActive ? "text-[rgb(255,204,173)]" : "" }}>
          Product
        </NavLink>{" "}
        <NavLink to="/contact" className={({ isActive }) => { return isActive ? "text-[rgb(255,204,173)]" : "" }}>
          ContactUs
        </NavLink>{" "}
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/about">AboutUs</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">ContactUs</Link> */}
      </div>
    </div>
    <div>
      <button className="border-2 p-5 m-4 rounded-lg font-bold text-lg bg-amber-400 text-black" onClick={clickHanler}>Navigate to About Page</button>
    </div>
   </>
  );
};

  
  export default Navbar;