"use client";

import { useState } from "react";
import "./styles.css";

interface Role {
  id: number;
  roleName: string;
  permissions: string;
  status: string;
}

export default function RolesPage() {
  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissions] = useState("");
  const [status, setStatus] = useState("Active");
  const [search, setSearch] = useState("");

  const [roles, setRoles] = useState<Role[]>([
    {
      id: 1,
      roleName: "Admin",
      permissions: "All Permissions",
      status: "Active",
    },
    {
      id: 2,
      roleName: "HR",
      permissions: "Employee, Payroll, Leave",
      status: "Active",
    },
    {
      id: 3,
      roleName: "Manager",
      permissions: "Projects, Tasks, Reports",
      status: "Active",
    },
    {
      id: 4,
      roleName: "Employee",
      permissions: "Profile, Attendance",
      status: "Inactive",
    },
  ]);

  const addRole = () => {
    if (!roleName || !permissions) {
      alert("Please fill all fields.");
      return;
    }

    const newRole: Role = {
      id: Date.now(),
      roleName,
      permissions,
      status,
    };

    setRoles([...roles, newRole]);

    setRoleName("");
    setPermissions("");
    setStatus("Active");
  };

  const deleteRole = (id: number) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  const toggleStatus = (id: number) => {
    setRoles(
      roles.map((role) =>
        role.id === id
          ? {
              ...role,
              status: role.status === "Active" ? "Inactive" : "Active",
            }
          : role
      )
    );
  };

  const filteredRoles = roles.filter(
    (role) =>
      role.roleName.toLowerCase().includes(search.toLowerCase()) ||
      role.permissions.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Role & Permission Management</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Role Name"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Permissions"
          value={permissions}
          onChange={(e) => setPermissions(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <button onClick={addRole}>Add Role</button>
      </div>

      <input
        className="search"
        type="text"
        placeholder="Search Role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Permissions</th>
            <th>Status</th>
            <th>Change Status</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {filteredRoles.map((role) => (
            <tr key={role.id}>
              <td>{role.roleName}</td>

              <td>{role.permissions}</td>

              <td>
                <span
                  className={
                    role.status === "Active"
                      ? "active"
                      : "inactive"
                  }
                >
                  {role.status}
                </span>
              </td>

              <td>
                <button
                  className="status-btn"
                  onClick={() => toggleStatus(role.id)}
                >
                  Toggle
                </button>
              </td>

              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteRole(role.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {filteredRoles.length === 0 && (
            <tr>
              <td colSpan={5}>No roles found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}