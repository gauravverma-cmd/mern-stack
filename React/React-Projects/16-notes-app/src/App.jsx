const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submit");
  };
  return (
    <div className="min-h-screen lg:flex bg-black text-white p-10">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex items-start lg:w-1/2 gap-4 py-10 mr-4"
      >
        <div className="flex flex-col items-start gap-4 w-full">
        <h1 className="text-3xl font-bold">Add Notes</h1>
          <input
            className="w-full border border-gray-700 font-bold bg-gray-900 px-9 py-4 text-2xl rounded placeholder-gray-500 focus:outline-none"
            type="text"
            placeholder="Enter notes heading"
          />

          <textarea
            className="w-full border flex items-start flex-row  border-gray-700 bg-gray-900 px-9 py-4 h-32 text-2xl rounded placeholder-gray-500 focus:outline-none"
            type="text"
            placeholder="Enter notes detailed"
          />

          <button className="w-full bg-gray-700 text-white px-9 py-4 text-2xl rounded hover:bg-gray-600 transition-colors font-bold">
            Add notes
          </button>
        </div>
      </form>
      <div className=" bg-gray-900  lg:w-1/2 p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-10 mt-5">
          <div className="h-82 w-62 bg-amber-500 rounded-lg"></div>
          <div className="h-82 w-62 bg-amber-500 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
