import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setdata] = useState([])

  const getDetails = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setdata(response.data)
  };

  return (
    <div>
      <button onClick={getDetails}>Get data</button>
      <div>{data.map((elem,id)=>{
         return <h1>{elem.author}{id}</h1>
      })}
      </div>
    </div>
  );
};

export default App;
