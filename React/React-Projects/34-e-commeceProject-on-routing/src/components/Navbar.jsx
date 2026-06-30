import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex bg-gray-600 py-2  gap-5 items-center">
      <div className="px-4">
        <img
          src="https://www.iconpacks.net/icons/2/free-store-icon-2017-thumb.png"
          className="w-20"
          alt=""
        />
      </div>
      <div className="flex flex-1 justify-evenly gap-7 text-3xl font-bold  ">
        <Menu to={"/"} title={"Home"} />
        <Menu to={"/products"} title={"Products"} />
      </div>
    </div>
  );
};
const Menu = ({ to, title }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-[#FF7058]" : "")}
    >
      {title}
    </NavLink>
  );
};
export default Navbar;
