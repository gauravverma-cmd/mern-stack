import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-orange-100 gap-3 m-4 h-16 flex items-center justify-center text-2xl rounded-2xl font-bold capitalize">
        <img className="w-6" src="src/images/firebase_icon-logo.png" alt="" />
        <h1>firebase contact app</h1>
      </div>

      <div className="flex items-center gap-4 w-full px-4">
        <div className="flex items-center gap-4  border-2 border-gray-400 py-1 px-2 rounded-2xl w-full">
          <i className="fa-solid fa-magnifying-glass text-2xl text-gray-300"></i>
          <input 
            className="bg-transparent placeholder:text-gray-300 text-gray-300 capitalize rounded-2xl px-2 py-2 text-2xl font-medium w-full outline-none" 
            type="text" 
            placeholder="search contact" 
          />
        </div>
        <i className="fa-solid fa-circle-plus text-white text-6xl cursor-pointer hover:text-[#a7a7a7] active:scale-95"></i>
      </div>
    </>
  );
};

export default Navbar;