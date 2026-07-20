import React, { useState } from "react";
import { useCounter } from "./useCustomHook/useCounter";
import './index.css'
const App = () => {
  const [input, setInput] = useState("");
  const { count, increment, decrement, setByValue } = useCounter(0);
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> 
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClickCapture={() => setByValue(Number(input))}>SetByValue</button>
    </div>
  );
};

export default App;
