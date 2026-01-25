import { useContext } from "react";
import { ThemeDataContext } from "../Context/ThemeContext";

const Nav2 = () => {
  const [theme,setTheme] = useContext(ThemeDataContext)
  
  return (
    <div className="nav2">
      <h2>Home</h2>
      <h2>Contact</h2>
      <h2>About</h2>
      <h2>Product</h2>
      <h2>{theme}</h2>
    </div>
  );
};

export default Nav2;
