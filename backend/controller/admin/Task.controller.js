import Task from "../../models/admin/task.model.js";


export const createTask = async (req,res) => {

    try {
        const {task, date, status} = req.body;
        if(!task || !date) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields"
            });
        }

        const newTask = await Task.create({
            task, date, status
        });

        res.status(201).json({
            success:true,
            message:"Task created successfully",
            newTask
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// get tasks by date
export const getTaskByDate = async (req,res) => {
    try {
        const {date} = req.query;

        const tasks = await Task.find({date}).sort({createdAt:-1});

        if(tasks.length === 0) {
            return res.status(404).json({
                success:false,
                message:"No tasks found for the given date"
            });
        }

        res.status(200).json({
            success:true,
            tasks
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

// delete task
export const deleteTask = async (req,res) => {
    try {
        const deleteTask = await Task.findByIdAndDelete(req.params.id, req.body);

        if(!deleteTask) {
            return res.status(404).json({
                success:false,
                message:"Task not found"
            });
        }

        res.status(200).json({
            success:true,
            message:"Task deleted successfully"
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// update task
export const updateTask = async (req,res) => {
    try {

        const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new:true
        })

        if(!updateTask) {
            return res.status(404).json({
                success:false,
                message:"Task not found"
            });
        }

        res.status(200).json({
            success:true,
            message:"Task updated successfully",
        });
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}