"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";

export default function UserDashboard() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    // Remove cookie
    document.cookie = "user=; Max-Age=0; path=/";

    // Clear context
    logout();

    // Redirect
    router.push("/login");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>User Dashboard</h1>

      <p>
        <strong>Welcome:</strong> {user?.email}
      </p>

      <button
        onClick={handleLogout}
        style={{
          padding: "10px 20px",
          background: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Logout
      </button>
    </div>
  );
}