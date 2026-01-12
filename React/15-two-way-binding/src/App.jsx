import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const formHandler = (elem) => {
    elem.preventDefault();
    console.log("form submitted by",title);
    setTitle('')
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          formHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => {
          setTitle(e.target.value)
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
