import React from "react";

const Buttons = (props) => {
  const { setUserData, setIndex, index } = props;

  return (
    <div>
      <div className="flex items-center justify-center gap-4 ">
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          className="text-[#231942] bg-[#E0B1CB] px-9 py-4 font-bold rounded active:scale-95 cursor-pointer"
          onClick={() => {
            console.log(" prev btn clicked ");
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
        >
          Prev
        </button>
        <h1 className="text-lg font-bold">Page {index}</h1>
        <button
          className="text-[#231942] bg-[#E0B1CB] px-9 py-4 font-bold rounded active:scale-95 cursor-pointer"
          onClick={() => {
            console.log(" next btn  clicked ");
            setUserData([]);
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Buttons;
