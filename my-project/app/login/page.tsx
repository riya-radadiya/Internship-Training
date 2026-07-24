"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    // Store login information
    document.cookie = "isLoggedIn=true; path=/";
    localStorage.setItem("userEmail", email);

    // Redirect based on role
    if (email === "admin@gmail.com") {
      router.push("/admin/dashboard");
    } else {
      router.push("/user/dashboard");
    }
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "100px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 5px 15px rgba(0,0,0,.1)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "20px",
          marginBottom: "15px",
        }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
        }}
      />

      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: "12px",
          background: "#2563eb",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "6px",
        }}
      >
        Login
      </button>
    </div>
  );
}