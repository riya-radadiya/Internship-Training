"use client";

import "./styles.css";

export default function AnalyticsPage() {
  const stats = [
    { title: "Total Employees", value: 120, color: "#2563eb" },
    { title: "Departments", value: 8, color: "#16a34a" },
    { title: "Projects", value: 18, color: "#f59e0b" },
    { title: "Tasks", value: 95, color: "#dc2626" },
    { title: "Attendance", value: "96%", color: "#7c3aed" },
    { title: "Monthly Payroll", value: "₹12,50,000", color: "#0f766e" },
    { title: "Leave Requests", value: 14, color: "#ea580c" },
    { title: "Pending Reviews", value: 6, color: "#0891b2" },
  ];

  const recentActivities = [
    "John Smith joined the IT Department.",
    "Emma Watson submitted a leave request.",
    "Payroll generated for July.",
    "New project assigned to David Miller.",
    "Marketing meeting scheduled.",
    "Performance reviews completed.",
  ];

  return (
    <div className="container">
      <h1>Analytics Dashboard</h1>

      <div className="cards">
        {stats.map((item, index) => (
          <div
            key={index}
            className="card"
            style={{ borderTop: `6px solid ${item.color}` }}
          >
            <h2>{item.value}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Department Overview</h2>

        <table>
          <thead>
            <tr>
              <th>Department</th>
              <th>Employees</th>
              <th>Projects</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>IT</td>
              <td>35</td>
              <td>8</td>
            </tr>

            <tr>
              <td>HR</td>
              <td>15</td>
              <td>2</td>
            </tr>

            <tr>
              <td>Finance</td>
              <td>20</td>
              <td>3</td>
            </tr>

            <tr>
              <td>Marketing</td>
              <td>18</td>
              <td>5</td>
            </tr>

            <tr>
              <td>Sales</td>
              <td>32</td>
              <td>7</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2>Recent Activities</h2>

        <ul className="activity-list">
          {recentActivities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}