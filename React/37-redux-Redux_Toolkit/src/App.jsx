import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "./features/counter/counterSlice";
const App = () => {
  const [amount, setAmount] = useState();
  const count = useSelector((state) => state.counter.value); // useSelector ek aisa React hook hai jo aapke component ko global Redux store se direct data nikalne (read karne) me help karta hai, aur jab bhi wo data change hota hai, ye component ko automatically update (re-render) kar deta hai.

  const dispatch = useDispatch(); //useDispatch ek aisa React hook hai jo aapko global Redux store ka data change karne (update karne) ki power deta hai. Iska use karke aap actions ko "dispatch" (bhejte) karte ho, jo store me jaakar data ko badal dete hain. // So basically agar hme koi action perform krwana hai to hme useDispatch ka use krna hota hai

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };
  const resetHandler = () => {
    dispatch(reset());
    setAmount('')
  };
  const inputHander = () => {
    dispatch(incrementByAmount(amount));
  };
  return (
    <div className="container">
      <button onClick={incrementHandler}>+</button>
      <p>Count: {count}</p>
      <button onClick={decrementHandler}>-</button>
      <button onClick={resetHandler}>Reset</button>
      <input
        className="input"
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        placeholder="Enter Amount"
        value={amount}
      />
      <button onClick={inputHander}>Inc By Amount</button>
    </div>
  );
};

export default App;
