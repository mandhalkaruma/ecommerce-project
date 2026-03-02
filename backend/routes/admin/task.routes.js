import express from "express";
import { createTask, deleteTask, getTaskByDate, updateTask } from "../../controller/admin/Task.controller.js";

const taskRouter = express.Router();

taskRouter.post('/create', createTask);
taskRouter.get('/getByDate', getTaskByDate);
taskRouter.put('/update/:id', updateTask);
taskRouter.delete("/delete/:id", deleteTask);

export default taskRouter;