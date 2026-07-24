"use client";

import { useState } from "react";
import "./styles.css";

interface Department {
  id: number;
  name: string;
  head: string;
  employees: number;
}

export default function DepartmentsPage() {
  const [search, setSearch] = useState("");

  const [departmentName, setDepartmentName] = useState("");
  const [departmentHead, setDepartmentHead] = useState("");
  const [employeeCount, setEmployeeCount] = useState("");

  const [departments, setDepartments] = useState<Department[]>([
    {
      id: 1,
      name: "Information Technology",
      head: "John Smith",
      employees: 35,
    },
    {
      id: 2,
      name: "Human Resources",
      head: "Emma Watson",
      employees: 15,
    },
    {
      id: 3,
      name: "Finance",
      head: "David Miller",
      employees: 20,
    },
  ]);

  const addDepartment = () => {
    if (
      !departmentName ||
      !departmentHead ||
      !employeeCount
    ) {
      alert("Please fill all fields.");
      return;
    }

    const newDepartment: Department = {
      id: Date.now(),
      name: departmentName,
      head: departmentHead,
      employees: Number(employeeCount),
    };

    setDepartments([...departments, newDepartment]);

    setDepartmentName("");
    setDepartmentHead("");
    setEmployeeCount("");
  };

  const deleteDepartment = (id: number) => {
    setDepartments(departments.filter((d) => d.id !== id));
  };

  const filteredDepartments = departments.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Department Management</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Department Name"
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Department Head"
          value={departmentHead}
          onChange={(e) => setDepartmentHead(e.target.value)}
        />

        <input
          type="number"
          placeholder="Employees"
          value={employeeCount}
          onChange={(e) => setEmployeeCount(e.target.value)}
        />

        <button onClick={addDepartment}>
          Add Department
        </button>
      </div>

      <input
        className="search"
        type="text"
        placeholder="Search Department..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Department</th>
            <th>Head</th>
            <th>Employees</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredDepartments.map((department) => (
            <tr key={department.id}>
              <td>{department.name}</td>
              <td>{department.head}</td>
              <td>{department.employees}</td>

              <td>
                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteDepartment(department.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {filteredDepartments.length === 0 && (
            <tr>
              <td colSpan={4}>
                No departments found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}