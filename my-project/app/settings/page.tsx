"use client";

import "./styles.css";
import { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="settings-container">
      <div className="settings-card">
        <h1>Settings</h1>

        <div className="setting-item">
          <label>Dark Mode</label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>

        <div className="setting-item">
          <label>Email Notifications</label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>

        <button
          className="save-btn"
          onClick={() => alert("Settings Saved Successfully!")}
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}