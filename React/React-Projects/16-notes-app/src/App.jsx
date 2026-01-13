import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = [...task];
    newTask.push({ title, description });

    setTask(newTask);
    console.log(newTask);
    setTitle("");
    setDescription("");
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
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <textarea
            className="w-full border flex items-start flex-row  border-gray-700 bg-gray-900 px-9 py-4 h-32 text-2xl rounded placeholder-gray-500 focus:outline-none"
            type="text"
            placeholder="Enter notes detailed"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <button className="w-full bg-gray-700 text-white px-9 py-4 text-2xl rounded hover:bg-gray-600 transition-colors font-bold">
            Add notes
          </button>
        </div>
      </form>
      <div className=" bg-gray-900  lg:w-1/2 p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="relative flex justify-between flex-col h-82 w-72 bg-cover bg-[url('https://pngimg.com/uploads/sticky_note/sticky_note_PNG18928.png')] px-7 py-10"
              >
                <div>
                  <h1 className="text-4xl text-black leading-tight font-bold">
                    {elem.title}
                  </h1>
                  <p className="text-gray-800 font-medium mt-4 text-2xl max-h-32 overflow-y-auto">
                    {elem.description}
                  </p>
                </div>  
                 <button onClick={()=>{
                    const copyTask = [...task]
                    console.log(copyTask)

                    copyTask.splice(idx,1)
                    setTask(copyTask)
                 }} className=" bg-red-700 text-white w-fit px-4 py-2 rounded-2xl font-bold">Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
