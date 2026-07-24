"use client";

import { useState } from "react";
import "./styles.css";

interface Employee {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  status: string;
  image: string;
}

export default function EmployeesPage() {
  const [search, setSearch] = useState("");

  const employees: Employee[] = [
    {
      id: 1,
      name: "John Smith",
      email: "john@gmail.com",
      phone: "+91 9876543210",
      department: "IT",
      position: "Frontend Developer",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Emma Watson",
      email: "emma@gmail.com",
      phone: "+91 9876543211",
      department: "HR",
      position: "HR Manager",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 3,
      name: "David Miller",
      email: "david@gmail.com",
      phone: "+91 9876543212",
      department: "Finance",
      position: "Accountant",
      status: "Inactive",
      image: "https://i.pravatar.cc/150?img=8",
    },
    {
      id: 4,
      name: "Sophia Brown",
      email: "sophia@gmail.com",
      phone: "+91 9876543213",
      department: "Marketing",
      position: "Marketing Executive",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=10",
    },
  ];

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Employee Directory</h1>

      <input
        type="text"
        placeholder="Search Employee..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filteredEmployees.map((emp) => (
          <div className="card" key={emp.id}>
            <img src={emp.image} alt={emp.name} />

            <h2>{emp.name}</h2>

            <p>
              <strong>Email:</strong> {emp.email}
            </p>

            <p>
              <strong>Phone:</strong> {emp.phone}
            </p>

            <p>
              <strong>Department:</strong> {emp.department}
            </p>

            <p>
              <strong>Position:</strong> {emp.position}
            </p>

            <span
              className={
                emp.status === "Active"
                  ? "status active"
                  : "status inactive"
              }
            >
              {emp.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}