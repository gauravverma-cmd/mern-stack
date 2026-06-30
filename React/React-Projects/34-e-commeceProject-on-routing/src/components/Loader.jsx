import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="w-20 h-20 border-4 border-transparent border-t-blue-400 rounded-full animate-spin flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-transparent border-t-red-400 rounded-full animate-spin"></div>
      </div>

      <h1 className="text-2xl font-bold text-white/40">
        Loading...
      </h1>
    </div>
  );
};

export default Loader;