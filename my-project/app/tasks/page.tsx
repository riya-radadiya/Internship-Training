"use client";

import { useState } from "react";
import "./styles.css";

interface Task {
  id: number;
  title: string;
  employee: string;
  priority: string;
  dueDate: string;
  status: string;
}

export default function TasksPage() {
  const [title, setTitle] = useState("");
  const [employee, setEmployee] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const [search, setSearch] = useState("");

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Design Login Page",
      employee: "John Smith",
      priority: "High",
      dueDate: "2026-07-25",
      status: "Pending",
    },
    {
      id: 2,
      title: "Create Reports Module",
      employee: "Emma Watson",
      priority: "Medium",
      dueDate: "2026-07-28",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Testing Payroll",
      employee: "David Miller",
      priority: "Low",
      dueDate: "2026-08-02",
      status: "Completed",
    },
  ]);

  const addTask = () => {
    if (!title || !employee || !dueDate) {
      alert("Please fill all fields.");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title,
      employee,
      priority,
      dueDate,
      status: "Pending",
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setEmployee("");
    setPriority("Medium");
    setDueDate("");
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateStatus = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id !== id) return task;

        let nextStatus = "Pending";

        if (task.status === "Pending") nextStatus = "In Progress";
        else if (task.status === "In Progress") nextStatus = "Completed";

        return {
          ...task,
          status: nextStatus,
        };
      })
    );
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.employee.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Task Management</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Assign Employee"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <input
        className="search"
        type="text"
        placeholder="Search Task..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Employee</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.employee}</td>
              <td>
                <span className={task.priority.toLowerCase()}>
                  {task.priority}
                </span>
              </td>
              <td>{task.dueDate}</td>
              <td>
                <span className={task.status.toLowerCase().replace(" ", "-")}>
                  {task.status}
                </span>
              </td>
              <td>
                <button
                  className="update-btn"
                  onClick={() => updateStatus(task.id)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {filteredTasks.length === 0 && (
            <tr>
              <td colSpan={7}>No tasks found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}