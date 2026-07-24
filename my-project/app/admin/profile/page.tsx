"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "../../components/Footer";
import "./styles.css";

export default function AdminDashboard() {
  const router = useRouter();

  const [email, setEmail] = useState("admin@gmail.com");

  useEffect(() => {
    const isLoggedIn = document.cookie.includes("isLoggedIn=true");

    if (!isLoggedIn) {
      router.push("/login");
      return;
    }

    const savedEmail = localStorage.getItem("userEmail");

    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, [router]);

  const handleLogout = () => {
    document.cookie =
      "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    localStorage.clear();

    router.push("/login");
  };

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>

      <p className="welcome">
        <strong>Welcome:</strong> {email}
      </p>

      <div className="dashboard-cards">
        <div className="card">
          <h2>120</h2>
          <p>Total Employees</p>
        </div>

        <div className="card">
          <h2>8</h2>
          <p>Departments</p>
        </div>

        <div className="card">
          <h2>18</h2>
          <p>Projects</p>
        </div>

        <div className="card">
          <h2>96%</h2>
          <p>Attendance</p>
        </div>
      </div>

      <div className="button-group">
        <button onClick={() => router.push("/admin/users")}>
          Manage Users
        </button>

        <button onClick={() => router.push("/admin/profile")}>
          Profile
        </button>

        <button onClick={() => router.push("/analytics")}>
          Analytics
        </button>

        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <Footer />
    </div>
  );
}