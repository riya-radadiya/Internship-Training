"use client";

import "./styles.css";
import { useState } from "react";

interface Leave {
  id: number;
  employee: string;
  type: string;
  from: string;
  to: string;
  reason: string;
  status: string;
}

export default function LeavePage() {
  const [employee, setEmployee] = useState("");
  const [type, setType] = useState("Casual");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [reason, setReason] = useState("");
  const [search, setSearch] = useState("");

  const [leaves, setLeaves] = useState<Leave[]>([
    {
      id: 1,
      employee: "John",
      type: "Casual",
      from: "2026-07-20",
      to: "2026-07-21",
      reason: "Personal Work",
      status: "Pending",
    },
    {
      id: 2,
      employee: "Emma",
      type: "Sick",
      from: "2026-07-18",
      to: "2026-07-19",
      reason: "Fever",
      status: "Approved",
    },
  ]);

  const applyLeave = () => {
    if (!employee || !from || !to || !reason) {
      alert("Please fill all fields.");
      return;
    }

    const newLeave: Leave = {
      id: Date.now(),
      employee,
      type,
      from,
      to,
      reason,
      status: "Pending",
    };

    setLeaves([...leaves, newLeave]);

    setEmployee("");
    setType("Casual");
    setFrom("");
    setTo("");
    setReason("");
  };

  const updateStatus = (id: number, status: string) => {
    setLeaves(
      leaves.map((leave) =>
        leave.id === id ? { ...leave, status } : leave
      )
    );
  };

  const filteredLeaves = leaves.filter((leave) =>
    leave.employee.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Leave Management</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Employee Name"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Casual</option>
          <option>Sick</option>
          <option>Annual</option>
        </select>

        <input
          type="date"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />

        <input
          type="date"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />

        <textarea
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />

        <button onClick={applyLeave}>Apply Leave</button>
      </div>

      <input
        className="search"
        type="text"
        placeholder="Search Employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Type</th>
            <th>From</th>
            <th>To</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredLeaves.map((leave) => (
            <tr key={leave.id}>
              <td>{leave.employee}</td>
              <td>{leave.type}</td>
              <td>{leave.from}</td>
              <td>{leave.to}</td>
              <td>{leave.reason}</td>

              <td>
                <span className={leave.status.toLowerCase()}>
                  {leave.status}
                </span>
              </td>

              <td>
                <button
                  className="approve"
                  onClick={() =>
                    updateStatus(leave.id, "Approved")
                  }
                >
                  Approve
                </button>

                <button
                  className="reject"
                  onClick={() =>
                    updateStatus(leave.id, "Rejected")
                  }
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}