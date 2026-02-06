import React from 'react'

const CreateTask = () => {
  return (
      <div>
        <form>
          <div className="flex items-center justify-between bg-[#1C1C1C] p-3 mt-3">
            <div className="w-1/2 flex flex-col gap-3">
              <h3 className="text-lg">Task Title</h3>
              <input
                className="bg-transparent border border-gray-300 px-3 py-1 rounded text-white font-bold w-full"
                type="text"
                placeholder="Enter the task title"
              />
              <h3 className="text-lg">Date</h3>
              <input
                id="date-icon"
                className="bg-transparent border border-gray-300 px-3 py-1 rounded text-white font-bold w-full"
                type="date"
                name=""
              />
              <h3 className="text-lg">Assign to</h3>
              <input
                className="bg-transparent border border-gray-300 px-3 py-1 rounded text-white font-bold w-full"
                type="text"
                placeholder="Employee name"
              />
              <h3 className="text-lg">Category</h3>
              <input
                className="bg-transparent border border-gray-300 px-3 py-1 mb-4 rounded text-white font-bold w-full"
                type="text"
                placeholder="Design,Webdev,editor,etc...."
              />
            </div>
            <div className="flex flex-col items-start  w-2/5 ">
              <h3>Description</h3>
              <textarea
                className="w-full h-52 border rounded border-gray-400 mt-1"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button className="bg-[#e0d794] text-[#650004] active:scale-95 mt-4 py-4 text-lg font-bold rounded w-full ">
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
  )
}

export default CreateTask