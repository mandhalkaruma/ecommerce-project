import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    status:{
        type:String,
        enum:["pending","In-progress", "completed"],
        default:"pending"
    }
}, {timestamps:true});

const Task = mongoose.model("Task", taskSchema);
export default Task;