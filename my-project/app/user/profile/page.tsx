"use client";

import "./styles.css";
import { useAuth } from "../../../context/AuthContext";

export default function UserProfile() {
  const { user } = useAuth();

  return (
    <div className="profile-container">
      <div className="profile-card">

        <h1>User Profile</h1>

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="User"
        />

        <div className="info">
          <p>
            <strong>Name:</strong> User
          </p>

          <p>
            <strong>Email:</strong> {user?.email || "user@gmail.com"}
          </p>

          <p>
            <strong>Role:</strong> User
          </p>

          <p>
            <strong>Department:</strong> Customer
          </p>

          <p>
            <strong>Status:</strong>{" "}
            <span className="active">Active</span>
          </p>
        </div>

      </div>
    </div>
  );
}