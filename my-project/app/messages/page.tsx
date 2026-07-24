"use client";

import { useState } from "react";
import "./styles.css";

interface Message {
  id: number;
  sender: string;
  message: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "Admin",
      message: "Welcome to the Employee Management System!",
    },
    {
      id: 2,
      sender: "John",
      message: "Your profile has been updated successfully.",
    },
  ]);

  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  const addMessage = () => {
    if (!sender || !message) {
      alert("Please fill all fields.");
      return;
    }

    const newMessage: Message = {
      id: Date.now(),
      sender,
      message,
    };

    setMessages([...messages, newMessage]);

    setSender("");
    setMessage("");
  };

  const deleteMessage = (id: number) => {
    if (confirm("Delete this message?")) {
      setMessages(messages.filter((msg) => msg.id !== id));
    }
  };

  const filteredMessages = messages.filter(
    (msg) =>
      msg.sender.toLowerCase().includes(search.toLowerCase()) ||
      msg.message.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">Messages</h1>

      <input
        className="search"
        type="text"
        placeholder="Search messages..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="form">
        <input
          className="input"
          type="text"
          placeholder="Sender"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="button" onClick={addMessage}>
          Send
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Sender</th>
            <th>Message</th>
            <th width="120">Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredMessages.length === 0 ? (
            <tr>
              <td colSpan={3} className="noData">
                No messages found.
              </td>
            </tr>
          ) : (
            filteredMessages.map((msg) => (
              <tr key={msg.id}>
                <td>{msg.sender}</td>
                <td>{msg.message}</td>
                <td>
                  <button
                    className="delete"
                    onClick={() => deleteMessage(msg.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}