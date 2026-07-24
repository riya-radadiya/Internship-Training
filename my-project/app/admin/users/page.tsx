"use client";

import { useEffect, useState } from "react";
import "./styles.css";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Admin",
      email: "admin@gmail.com",
      role: "Admin",
    },
    {
      id: 2,
      name: "John",
      email: "user@gmail.com",
      role: "User",
    },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("User");
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [editId, setEditId] = useState<number | null>(null);

  // Pagination
  const usersPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handleSubmit = () => {
    if (!name || !email) {
      alert("Please fill all fields");
      return;
    }

    if (editId !== null) {
    setUsers(
    users.map((user) => {
      if (user.id !== editId) return user;

      const updatedUser = { ...user };

      if (name.trim() !== "" && name !== user.name) {
        updatedUser.name = name;
      }

      if (email.trim() !== "" && email !== user.email) {
        updatedUser.email = email;
      }

      if (role !== user.role) {
        updatedUser.role = role;
      }

      return updatedUser;
    })
    );

      setEditId(null);
    } else {
      setUsers([
        ...users,
        {
          id: Date.now(),
          name,
          email,
          role,
        },
      ]);
    }

    setName("");
    setEmail("");
    setRole("User");
  };

  const handleEdit = (user: User) => {
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
    setEditId(user.id);
  };

  const handleDelete = (id: number) => {
    if (confirm("Delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  // Search + Role Filter
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchesRole =
      roleFilter === "All" || user.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [search, roleFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const currentUsers = filteredUsers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  return (
    <div className="container">
      <h1 className="title">User Management</h1>

      {/* Search */}
      <input
        className="search"
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Role Filter */}
      <select
        className="select"
        value={roleFilter}
        onChange={(e) => setRoleFilter(e.target.value)}
      >
        <option value="All">All Roles</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select>

      <br />
      <br />

      {/* Form */}
      <div className="form">
        <input
          className="input"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <select
          className="select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Admin</option>
          <option>User</option>
        </select>

        <button className="button" onClick={handleSubmit}>
          {editId !== null ? "Update User" : "Add User"}
        </button>
      </div>

      {/* Table */}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th width="220">Action</th>
          </tr>
        </thead>

        <tbody>
          {currentUsers.length === 0 ? (
            <tr>
              <td colSpan={4} className="noData">
                No users found.
              </td>
            </tr>
          ) : (
            currentUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>

                <td>
                  <button
                    className="edit"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "active-page" : ""}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}