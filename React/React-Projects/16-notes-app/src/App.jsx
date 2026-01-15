import { useState, useEffect } from "react";

const App = () => {
  // 🔹 Load tasks from localStorage on first render
  const [task, setTask] = useState(() => {
    const savedTask = localStorage.getItem("tasks");
    return savedTask ? JSON.parse(savedTask) : [];
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // 🔹 Save tasks to localStorage whenever task changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) return;

    const newTask = [...task, { title, description }];
    setTask(newTask);

    setTitle("");
    setDescription("");
  };

  const deleteHandler = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="min-h-screen lg:flex bg-black text-white p-10 overflow-hidden">
      {/* LEFT FORM */}
      <form
        onSubmit={submitHandler}
        className="flex items-start lg:w-1/2 gap-4 py-10 mr-4"
      >
        <div className="flex flex-col items-start gap-4 w-full">
          <h1 className="text-3xl font-bold">Add Notes</h1>

          <input
            className="w-full border border-gray-700 font-bold bg-gray-900 px-9 py-4 text-2xl rounded placeholder-gray-500 focus:outline-none"
            type="text"
            placeholder="Enter notes heading"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="w-full border border-gray-700 bg-gray-900 px-9 py-4 h-32 text-2xl rounded placeholder-gray-500 focus:outline-none"
            placeholder="Enter notes detailed"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button className="w-full bg-gray-700 text-white px-9 py-4 text-2xl rounded hover:bg-gray-600 transition-colors font-bold">
            Add Notes
          </button>
        </div>
      </form>

      {/* RIGHT NOTES */}
      <div className="bg-gray-900 lg:w-1/2 p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>

        <div className="flex flex-wrap gap-10 mt-5">
          {task.length === 0 && (
            <p className="text-gray-400 text-xl">No notes added yet.</p>
          )}

          {task.map((elem, idx) => (
            <div
              key={idx}
              className="relative flex justify-between flex-col h-82 w-72 bg-cover bg-[url('https://pngimg.com/uploads/sticky_note/sticky_note_PNG18928.png')] px-7 py-10"
            >
              <div>
                <h1 className="text-4xl text-black leading-tight font-bold">
                  {elem.title}
                </h1>
                <p className="text-gray-800 font-medium mt-4 text-2xl max-h-32 overflow-y-auto break-all whitespace-pre-wrap">
                  {elem.description}
                </p>
              </div>

              <button
                onClick={() => deleteHandler(idx)}
                className="bg-red-700 text-white w-fit px-4 py-2 rounded-2xl font-bold"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
