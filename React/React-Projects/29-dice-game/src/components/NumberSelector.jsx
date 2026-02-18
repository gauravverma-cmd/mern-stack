import React, { useState } from "react";

const NumberSelector = ({error, selectedNumber ,setSelectedNumber}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  console.log(selectedNumber);

  return (
    <div className="flex flex-col gap-3 items-end pr-5">
      <div className="flex gap-4 items-center ">
        {error}
        {arrNumber.map((value, idx) => (
          <div
            className={`h-20 w-20 text-3xl border cursor-pointer font-bold grid place-items-center ${selectedNumber === value ? "bg-black text-white" : "bg-white text-balck"}`}
            key={idx}
            onClick={() => setSelectedNumber(value)}  >
            {value}
          </div>
        ))}
      </div>
      <h1 className="text-3xl capitalize font-bold">select number</h1>
    </div>
  );
};

export default NumberSelector;
