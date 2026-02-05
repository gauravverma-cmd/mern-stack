import React, { useRef } from "react";

const colors = [
  "bg-cyan-900",
  "bg-emerald-900",
  "bg-indigo-900",
  "bg-purple-900",
  "bg-rose-900",
  "bg-amber-900",
  "bg-teal-900",
  "bg-lime-900",
];

const TaskList = () => {
  const sliderRef = useRef(null);

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleMouseUp = () => (isDown = false);
  const handleMouseLeave = () => (isDown = false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={sliderRef}
      id="task-list"
      className="h-[60%] mt-13 flex items-center gap-5 overflow-x-auto flex-nowrap cursor-grab active:cursor-grabbing select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {Array.from({ length: 14 }).map((_, index) => (
        <div
          key={index}
          className={`h-full w-95 p-7 shrink-0 rounded-2xl ${colors[index % colors.length]}`}
        >
          <div className="flex items-center justify-between">
            <h3 className="bg-red-600 px-3 py-1 rounded">hello</h3>
            <h4>5 Feb 2026</h4>
          </div>

          <h2 className="text-3xl font-semibold mt-13">
            Complete this project
          </h2>

          <p className="mt-3 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
