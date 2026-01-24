import { createContext } from "react";

export const postDataContect = createContext();
const ThemeContext = (props) => {
  return (
    <div>
      <postDataContect.Provider value='Alise'>
        {props.children}
        </postDataContect.Provider>
    </div>
  );
};

export default ThemeContext;
