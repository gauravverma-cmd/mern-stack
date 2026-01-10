import { useState } from "react";

const App = () => {
  const [Num, setNum] = useState(0);
  return (
    <div>
      <h1>{Num}</h1>
      <button
        onClick={() => {
          setNum(Num + 1);
        }}
      >
        Increase <i class="fa-solid fa-plus"></i>
      </button>
      <button
        onClick={() => {
          setNum(Num - 1);
        }}
      >
        Decrease <i class="fa-solid fa-minus"></i>
      </button>
      <button
        onClick={() => {
          setNum(Num + 5);
        }}
      >
        Increase by 5 <i class="fa-regular fa-square-plus"></i>
      </button>
      <button
        onClick={() => {
          setNum(0);
        }}
      >
        Reset <i class="fa-solid fa-arrow-rotate-right"></i>
      </button>
    </div>
  );
};

export default App;
