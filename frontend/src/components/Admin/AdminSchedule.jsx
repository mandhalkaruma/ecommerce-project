import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Admin.css";

const AdminSchedule = () => {

  const [date, setDate] = useState(new Date());

  const tasks = {
    "Thu Feb 19 2026": [
      "Approve Orders",
      "Launch Offer",
      "Reply Customers"
    ],
    "Fri Feb 20 2026": [
      "Update Products",
      "Check Inventory"
    ]
  };

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

        <ul className="space-y-2">
          {tasks[date.toDateString()]?.map((task, index) => (
            <li
              key={index}
              className="bg-purple-600/20 px-3 py-2 rounded-md"
            >
              {task}
            </li>
          )) || (
            <p className="text-gray-400">No tasks for this day</p>
          )}
        </ul>
      </div>

    </div>
  );
};

export default AdminSchedule;
