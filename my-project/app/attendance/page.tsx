"use client";

import "./styles.css";
import { useState } from "react";

interface Employee {
  id: number;
  name: string;
  department: string;
  status: string;
}

export default function AttendancePage() {
  const [search, setSearch] = useState("");

  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      name: "John",
      department: "IT",
      status: "Present",
    },
    {
      id: 2,
      name: "Emma",
      department: "HR",
      status: "Absent",
    },
    {
      id: 3,
      name: "David",
      department: "Finance",
      status: "Present",
    },
    {
      id: 4,
      name: "Sophia",
      department: "Marketing",
      status: "Present",
    },
  ]);

  const toggleStatus = (id: number) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id
          ? {
              ...emp,
              status: emp.status === "Present" ? "Absent" : "Present",
            }
          : emp
      )
    );
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  const total = employees.length;
  const present = employees.filter((e) => e.status === "Present").length;
  const absent = total - present;

  return (
    <div className="attendance-container">
      <h1>Attendance Management</h1>

      <div className="summary">
        <div className="card blue">
          <h2>{total}</h2>
          <p>Total Employees</p>
        </div>

        <div className="card green">
          <h2>{present}</h2>
          <p>Present</p>
        </div>

        <div className="card red">
          <h2>{absent}</h2>
          <p>Absent</p>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search employee..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>

              <td>
                <span
                  className={
                    emp.status === "Present"
                      ? "status present"
                      : "status absent"
                  }
                >
                  {emp.status}
                </span>
              </td>

              <td>
                <button
                  className="toggle-btn"
                  onClick={() => toggleStatus(emp.id)}
                >
                  Toggle Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}