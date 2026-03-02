import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Admin.css";
import axios from "axios";

const AdminSchedule = () => {

  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const formattedDate =
    `${date.getDate()} ${date.toLocaleString('en-US', { month: 'short' }).toLowerCase()} ${date.getFullYear()}`;

  const fetchTasksByDate = async () => {

    try {

      const res = await axios.get(
        `http://localhost:5000/api/v1/getByDate?date=${formattedDate}`
      );

      setTasks(res.data.tasks);

    } catch (error) {
      setTasks([]);
    }

  }

  const handleAddTask = async () => {

    if (!newTask) return;

    await axios.post("http://localhost:5000/api/v1/create", {
      task: newTask,
      date: formattedDate,
      status: "pending"
    });

    setNewTask("");
    fetchTasksByDate();
  };

  // delete task
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/v1/delete/${id}`);
    fetchTasksByDate();
  };

  // complete task
  const handleComplete = async (id) => {
    await axios.put(`http://localhost:5000/api/v1/update/${id}`);
    fetchTasksByDate();
  }

  useEffect(() => {
    fetchTasksByDate();
  }, [date])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* LEFT SIDE CALENDAR */}
      <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
        <h2 className="text-xl text-purple-400 mb-4">Schedule</h2>

        <Calendar
          onChange={setDate}
          value={date}
        />
      </div>

      {/* RIGHT SIDE TASKS */}
      <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
        <h2 className="text-xl text-purple-400 mb-4">
          Tasks on {date.toDateString()}
        </h2>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white outline-none"
          />

          <button
            onClick={handleAddTask}
            className="bg-purple-600 px-4 py-2 rounded-md text-white"
          >
            +
          </button>
        </div>

        <ul className="space-y-2">

          {tasks.map((task) => (

            <li
              key={task._id}
              className="flex justify-between items-center bg-purple-600/20 px-3 py-2 rounded-md"
            >

              <span>
                {task.task}
              </span>

              <div className="flex gap-2">

                {/* COMPLETE */}
                <button
                  onClick={() => handleComplete(task._id)}
                  className="text-green-400"
                >
                  ✔
                </button>

                {/* DELETE */}
                <button
                  onClick={() => handleDelete(task._id)}
                  className="text-red-400"
                >
                  🗑
                </button>

              </div>

            </li>

          ))}

        </ul>
      </div>

    </div>
  );
};

export default AdminSchedule;
