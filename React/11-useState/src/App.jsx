import { useState } from "react";

const App = () => {
  const [a, setA] = useState(20);
  const [userName, setuserName] = useState("Rahul");
  const [arr, setArr] = useState([12, 13, 14]);
  // SO that who we can chnage the value on the view or screen by using useState
  return (
    <div>
      <h1>
        The value of a is {a} <br /> The name of user is {userName} <br />
        The array is {arr}
      </h1>
      <button
        onClick={() => {
          setA(a + 1);
          setuserName("Harsh");
          setArr([10, 34, 55]);
        }}
        className="btn"
      >
        Click
      </button>
    </div>
  );
};

export default App;
