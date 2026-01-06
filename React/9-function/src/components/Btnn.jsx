
const Btnn = () => {
  const btnClicked = () => {
    console.log("bnt clicked ");
  };
  return (
    <div>
      {/*  method 1 - make a function outside the div */}
      <button onClick={btnClicked}>Click me</button>
      {/* Method 2 - make function inside the elemnet which we want to tigger */}
      <button
        onClick={() => {
          console.log("explore this btn clicked");
        }}
      >
        Explore this
      </button>
    </div>
  );
};

export default Btnn;
