const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");

let dragElement = null;

/* ---------- COUNT FUNCTION ---------- */
function updateCounts() {
  [todo, progress, done].forEach(col => {
    const tasks = col.querySelectorAll(".task");
    const count = col.querySelector(".heading .left");
    count.innerText = tasks.length;
  });
}

/* ---------- SAVE TO LOCAL STORAGE ---------- */
function saveTasks() {
  const data = [];

  [todo, progress, done].forEach(col => {
    const status =
      col.id === "todo" ? "todo" :
      col.id === "progress" ? "progress" :
      "done";

    col.querySelectorAll(".task").forEach(task => {
      data.push({
        title: task.querySelector("h2").innerText,
        desc: task.querySelector("p").innerText,
        status: status
      });
    });
  });

  localStorage.setItem("kanban-tasks", JSON.stringify(data));
}

/* ---------- LOAD FROM LOCAL STORAGE ---------- */
function loadTasks() {

  // 🔴 Clear existing tasks to avoid duplicates
  [todo, progress, done].forEach(col => {
    col.querySelectorAll(".task").forEach(task => task.remove());
  });

  const data = JSON.parse(localStorage.getItem("kanban-tasks")) || [];

  data.forEach(item => {

    const column =
      item.status === "todo" ? todo :
      item.status === "progress" ? progress :
      done;

    const div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("draggable", "true");

    div.innerHTML = `
      <h2>${item.title}</h2>
      <p>${item.desc}</p>
      <button>Delete</button>
    `;

    column.appendChild(div);

    div.addEventListener("dragstart", (e) => {
      dragElement = e.target;
    });

    div.querySelector("button").addEventListener("click", () => {
      div.remove();
      updateCounts();
      saveTasks();
    });
  });

  updateCounts();
}

/* ---------- COLUMN DRAG & DROP ---------- */
function scaleUpColumn(column) {

  column.addEventListener("dragenter", (e) => {
    e.preventDefault();
    column.classList.add("hover-over");
  });

  column.addEventListener("dragleave", (e) => {
    e.preventDefault();
    column.classList.remove("hover-over");
  });

  column.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  column.addEventListener("drop", (e) => {
    e.preventDefault();

    if (!dragElement) return;

    column.appendChild(dragElement);
    column.classList.remove("hover-over");

    updateCounts();
    saveTasks();
  });
}

scaleUpColumn(todo);
scaleUpColumn(progress);
scaleUpColumn(done);

/* ---------- MODAL ---------- */
const toggelModalBtn = document.querySelector("#toggel-modal");
const modal = document.querySelector(".modal");
const bg = document.querySelector(".bg");
const task_create_btn = document.querySelector("#addd-new-task");

toggelModalBtn.addEventListener("click", () => {
  modal.classList.toggle("active");
});

bg.addEventListener("click", () => {
  modal.classList.remove("active");
});

/* ---------- CREATE NEW TASK ---------- */
task_create_btn.addEventListener("click", () => {

  const titleInput = document.querySelector("#task-input-title");
  const descInput = document.querySelector("#task-description");

  const task_input_title = titleInput.value;
  const task_description = descInput.value;

  if (!task_input_title) return;

  const div = document.createElement("div");
  div.classList.add("task");
  div.setAttribute("draggable", "true");

  div.innerHTML = `
    <h2>${task_input_title}</h2>
    <p>${task_description}</p>
    <button>Delete</button>
  `;

  todo.appendChild(div);

  div.addEventListener("dragstart", (e) => {
    dragElement = e.target;
  });

  div.querySelector("button").addEventListener("click", () => {
    div.remove();
    updateCounts();
    saveTasks();
  });

  updateCounts();
  saveTasks();

  /* 🧹 CLEAR MODAL INPUTS */
  titleInput.value = "";
  descInput.value = "";

  modal.classList.remove("active");
});

/* ---------- INIT ---------- */
loadTasks();
