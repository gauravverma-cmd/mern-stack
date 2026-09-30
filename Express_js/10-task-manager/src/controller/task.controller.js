import { readTasks, writeTasks } from "../utils/file.utils.js";

export const getAllTask = async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Unauthenticated" });
  }
  const tasks = await readTasks();
  res.json(tasks.filter((task) => task.username === req.session.user.username));
};

export const createTask = async (req, res) => {
  // 1. Guard against unauthenticated users (Fixes potential crash)
  if (!req.session.user) {
    return res.status(401).json({ message: "Unauthenticated" });
  }

  const { title, description } = req.body;
  const tasks = await readTasks();

  const newTask = {
    id: Date.now(),
    username: req.session.user.username,
    title,
    description,
    completed: false,
  };

  tasks.push(newTask);
  await writeTasks(tasks);

  res.status(201).json(newTask);
};

export const updateTask = async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Unauthenticated" });
  }

  const { id } = req.params;
  const { title, description, completed } = req.body;
  const tasks = await readTasks();

  // Find the task index and ensure it belongs to the logged-in user
  const taskIndex = tasks.findIndex(
    (t) => t.id === Number(id) && t.username === req.session.user.username
  );

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  // Update only the provided fields
  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title: title !== undefined ? title : tasks[taskIndex].title,
    description: description !== undefined ? description : tasks[taskIndex].description,
    completed: completed !== undefined ? completed : tasks[taskIndex].completed,
  };

  await writeTasks(tasks);
  res.json(tasks[taskIndex]);
};

export const deleteTask = async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Unauthenticated" });
  }

  const { id } = req.params;
  const tasks = await readTasks();

  // FIX: Using String(t.id) === String(id) ensures a perfect text match regardless of data type
  const initialLength = tasks.length;
  const filteredTasks = tasks.filter(
    (t) => !(String(t.id) === String(id) && t.username === req.session.user.username)
  );

  if (tasks.length === filteredTasks.length) {
    return res.status(404).json({ message: "Task not found" });
  }

  await writeTasks(filteredTasks);
  return res.json({ message: "Task deleted successfully" });
};

