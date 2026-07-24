"use client";

import { useState } from "react";
import "./styles.css";

interface Project {
  id: number;
  name: string;
  manager: string;
  startDate: string;
  endDate: string;
  status: string;
}

export default function ProjectsPage() {
  const [search, setSearch] = useState("");

  const [projectName, setProjectName] = useState("");
  const [manager, setManager] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("Planning");

  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      name: "Employee Management System",
      manager: "John Smith",
      startDate: "2026-07-01",
      endDate: "2026-08-30",
      status: "In Progress",
    },
    {
      id: 2,
      name: "E-Commerce Website",
      manager: "Emma Watson",
      startDate: "2026-06-10",
      endDate: "2026-07-25",
      status: "Completed",
    },
  ]);

  const addProject = () => {
    if (!projectName || !manager || !startDate || !endDate) {
      alert("Please fill all fields.");
      return;
    }

    const newProject: Project = {
      id: Date.now(),
      name: projectName,
      manager,
      startDate,
      endDate,
      status,
    };

    setProjects([...projects, newProject]);

    setProjectName("");
    setManager("");
    setStartDate("");
    setEndDate("");
    setStatus("Planning");
  };

  const deleteProject = (id: number) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Project Management</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Project Manager"
          value={manager}
          onChange={(e) => setManager(e.target.value)}
        />

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Planning</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button onClick={addProject}>Add Project</button>
      </div>

      <input
        className="search"
        type="text"
        placeholder="Search Project..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Project</th>
            <th>Manager</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredProjects.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.manager}</td>
              <td>{project.startDate}</td>
              <td>{project.endDate}</td>
              <td>
                <span className={project.status.toLowerCase().replace(" ", "-")}>
                  {project.status}
                </span>
              </td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteProject(project.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {filteredProjects.length === 0 && (
            <tr>
              <td colSpan={6}>No projects found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}