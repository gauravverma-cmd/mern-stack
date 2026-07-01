import React, { useEffect } from "react";
import useMyStore from "../store";

const Navbar = () => {
  // choose subscription of state carefully

  // here we used the subscription method, so in this we destructure the variable or state that we had mad and use them like this so that our component does not re render without any use, they will not re render untill we used them
  // const { count, increment, capitalizeName } = useMyStore();
  const count = useMyStore((state) => state.count);
  const name = useMyStore((state) => state.name);
  const increment = useMyStore((state) => state.increment);
  const capitalizeName = useMyStore((state) => state.capitalizeName);

  useEffect(() => {
    console.log("re render hua kya", count);
  });

  return (
    <div>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={capitalizeName}>Capitalize</button>
    </div>
  );
};

export default Navbar;
