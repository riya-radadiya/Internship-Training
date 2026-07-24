"use client";

import { useState } from "react";
import "./styles.css";

interface Notification {
  id: number;
  title: string;
  message: string;
  type: string;
}

export default function NotificationsPage() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("Info");
  const [search, setSearch] = useState("");

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Welcome",
      message: "Welcome to Employee Management System.",
      type: "Info",
    },
    {
      id: 2,
      title: "Salary Credited",
      message: "Salary has been credited successfully.",
      type: "Success",
    },
    {
      id: 3,
      title: "Leave Pending",
      message: "Your leave request is awaiting approval.",
      type: "Warning",
    },
  ]);

  const addNotification = () => {
    if (!title || !message) {
      alert("Please fill all fields.");
      return;
    }

    const newNotification: Notification = {
      id: Date.now(),
      title,
      message,
      type,
    };

    setNotifications([newNotification, ...notifications]);

    setTitle("");
    setMessage("");
    setType("Info");
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const filteredNotifications = notifications.filter(
    (n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.message.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Notifications</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Notification Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Notification Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>Info</option>
          <option>Success</option>
          <option>Warning</option>
          <option>Error</option>
        </select>

        <button onClick={addNotification}>Add Notification</button>
      </div>

      <input
        className="search"
        type="text"
        placeholder="Search Notification..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="notification-list">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification ${notification.type.toLowerCase()}`}
          >
            <div className="content">
              <h3>{notification.title}</h3>
              <p>{notification.message}</p>

              <span className="badge">{notification.type}</span>
            </div>

            <button
              className="delete-btn"
              onClick={() => deleteNotification(notification.id)}
            >
              Delete
            </button>
          </div>
        ))}

        {filteredNotifications.length === 0 && (
          <p className="empty">No notifications found.</p>
        )}
      </div>
    </div>
  );
}