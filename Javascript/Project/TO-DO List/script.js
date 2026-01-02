const addBtn = document.querySelector("#addBtn");
const inp = document.querySelector("input");
const ul = document.querySelector("#taskList");
const themeBtn = document.querySelector("#themeBtn");


const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "🌛";
} else {
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "🌛";
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.textContent = "☀️";
    localStorage.setItem("theme", "light");
  }
});


function saveTasks() {
  const tasks = [];
  ul.querySelectorAll("li").forEach(li => {
    const taskText = li.querySelector("span").textContent;
    const completed = li.querySelector("input").checked;
    tasks.push({ text: taskText, completed });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => {
    addTask(task.text, task.completed);
  });
}

function addTask(text, completed = false) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;

  const taskText = document.createElement("span");
  taskText.textContent = text;
  if (completed) taskText.style.textDecoration = "line-through";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "deleteBtn";

  li.appendChild(checkbox);
  li.appendChild(taskText);
  li.appendChild(deleteBtn);
  ul.appendChild(li);

  deleteBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  checkbox.addEventListener("change", () => {
    taskText.style.textDecoration = checkbox.checked ? "line-through" : "none";
    saveTasks();
  });

  saveTasks();
}

addBtn.addEventListener("click", () => {
  if (inp.value.trim() === "") return;
  addTask(inp.value);
  inp.value = "";
});

window.addEventListener("DOMContentLoaded", loadTasks);
