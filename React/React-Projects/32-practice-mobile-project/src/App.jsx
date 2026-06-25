import React from "react";
import data from "./data.json";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-3 p-4">
        {data.map((phoneDetails, index) => {
          return <Card phoneDetails={phoneDetails} key={index}/>;
        })}
      </div>
    </>
  );
};

export default App;
