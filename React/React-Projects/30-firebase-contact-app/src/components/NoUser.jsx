import React from "react";

const NoUser = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="flex items-center gap-4">
        <img
          className="w-32"
          src="/src/assets/profile_13860563.png"
          alt=""
        />
        <h1 className="text-3xl text-gray-300">No User Found</h1>
      </div>
    </div>
  );
};

export default NoUser;