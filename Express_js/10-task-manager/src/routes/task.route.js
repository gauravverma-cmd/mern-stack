import { Router } from "express";
import { auhtMiddleware } from "../middleware/auth.middleware.js";
import { createTask, deleteTask, getAllTask, updateTask, } from "../controller/task.controller.js";

const router = Router();

router.get("/", auhtMiddleware, getAllTask);
router.post("/", auhtMiddleware, createTask);
router.put("/:id", auhtMiddleware, updateTask);
router.delete("/:id", auhtMiddleware, deleteTask);

export default router;