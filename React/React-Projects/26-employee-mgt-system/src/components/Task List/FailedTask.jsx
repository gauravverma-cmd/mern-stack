import React from "react";

const FailedTask = () => {
  return (
    <div className="h-full w-95 p-7 shrink-0 rounded-2xl bg-rose-900 flex flex-col justify-between gap-4">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="bg-black px-3 py-1 rounded">Failed Task</h3>
          <h4>1 Feb 2026</h4>
        </div>
        <h2 className="text-3xl font-semibold mt-13">Payment Gateway</h2>
        <p className="mt-3 text-lg">Integration failed due to API issue.</p>
      </div>
      <div>
        <button className="w-full">Failed</button>
      </div>
    </div>
  );
};

export default FailedTask;
