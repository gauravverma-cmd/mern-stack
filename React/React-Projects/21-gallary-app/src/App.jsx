import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Buttons from "./components/Buttons";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h4 className="text-gray-400 text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h4>
  );

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen overflow-auto text-white p-4">
      <div className="flex h-[90%] flex-wrap gap-4 p-2">
        {printUserData}
      </div>
      <Buttons setUserData={setUserData} setIndex={setIndex} index={index} />
    </div>
  );
};

export default App;
