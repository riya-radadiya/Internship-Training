"use client";

import { useState } from "react";
import "./styles.css";

interface Payroll {
  id: number;
  name: string;
  department: string;
  basicSalary: number;
  bonus: number;
  deduction: number;
  status: string;
}

export default function PayrollPage() {
  const [search, setSearch] = useState("");

  const [employees, setEmployees] = useState<Payroll[]>([
    {
      id: 1,
      name: "John Smith",
      department: "IT",
      basicSalary: 50000,
      bonus: 5000,
      deduction: 2000,
      status: "Pending",
    },
    {
      id: 2,
      name: "Emma Watson",
      department: "HR",
      basicSalary: 45000,
      bonus: 3000,
      deduction: 1000,
      status: "Paid",
    },
    {
      id: 3,
      name: "David Miller",
      department: "Finance",
      basicSalary: 60000,
      bonus: 7000,
      deduction: 2500,
      status: "Pending",
    },
    {
      id: 4,
      name: "Sophia Brown",
      department: "Marketing",
      basicSalary: 42000,
      bonus: 2500,
      deduction: 800,
      status: "Paid",
    },
  ]);

  const markPaid = (id: number) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id ? { ...emp, status: "Paid" } : emp
      )
    );
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Payroll Management</h1>

      <input
        type="text"
        placeholder="Search Employee..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Department</th>
            <th>Basic Salary</th>
            <th>Bonus</th>
            <th>Deduction</th>
            <th>Net Salary</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((emp) => {
            const netSalary =
              emp.basicSalary + emp.bonus - emp.deduction;

            return (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>₹{emp.basicSalary.toLocaleString()}</td>
                <td>₹{emp.bonus.toLocaleString()}</td>
                <td>₹{emp.deduction.toLocaleString()}</td>
                <td>₹{netSalary.toLocaleString()}</td>

                <td>
                  <span
                    className={
                      emp.status === "Paid"
                        ? "status paid"
                        : "status pending"
                    }
                  >
                    {emp.status}
                  </span>
                </td>

                <td>
                  <button
                    className="pay-btn"
                    disabled={emp.status === "Paid"}
                    onClick={() => markPaid(emp.id)}
                  >
                    {emp.status === "Paid" ? "Paid" : "Mark Paid"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}