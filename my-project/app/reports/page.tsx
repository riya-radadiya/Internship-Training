"use client";

import "./styles.css";

export default function ReportsPage() {
  const reports = [
    {
      title: "Total Employees",
      value: 120,
      color: "#2563eb",
    },
    {
      title: "Departments",
      value: 8,
      color: "#16a34a",
    },
    {
      title: "Attendance",
      value: "96%",
      color: "#f59e0b",
    },
    {
      title: "Active Users",
      value: 112,
      color: "#dc2626",
    },
  ];

  return (
    <div className="reports-container">
      <h1>Reports Dashboard</h1>

      <div className="card-grid">
        {reports.map((report, index) => (
          <div
            key={index}
            className="report-card"
            style={{ borderTop: `6px solid ${report.color}` }}
          >
            <h2>{report.value}</h2>
            <p>{report.title}</p>
          </div>
        ))}
      </div>

      <table className="report-table">
        <thead>
          <tr>
            <th>Department</th>
            <th>Employees</th>
            <th>Attendance</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>HR</td>
            <td>20</td>
            <td>98%</td>
          </tr>

          <tr>
            <td>IT</td>
            <td>45</td>
            <td>95%</td>
          </tr>

          <tr>
            <td>Finance</td>
            <td>18</td>
            <td>97%</td>
          </tr>

          <tr>
            <td>Marketing</td>
            <td>37</td>
            <td>94%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}