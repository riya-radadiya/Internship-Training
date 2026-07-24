"use client";

import { useState } from "react";
import "./styles.css";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export default function CalendarPage() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");

  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Weekly Team Meeting",
      date: "2026-07-25",
      time: "10:00",
      location: "Conference Room",
      description: "Discuss weekly progress",
    },
    {
      id: 2,
      title: "HR Training",
      date: "2026-07-28",
      time: "02:00",
      location: "Training Hall",
      description: "Employee onboarding session",
    },
  ]);

  const addEvent = () => {
    if (!title || !date || !time || !location || !description) {
      alert("Please fill all fields.");
      return;
    }

    const newEvent: Event = {
      id: Date.now(),
      title,
      date,
      time,
      location,
      description,
    };

    setEvents([...events, newEvent]);

    setTitle("");
    setDate("");
    setTime("");
    setLocation("");
    setDescription("");
  };

  const deleteEvent = (id: number) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Calendar & Events</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={addEvent}>Add Event</button>
      </div>

      <input
        className="search"
        type="text"
        placeholder="Search Events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="event-list">
        {filteredEvents.map((event) => (
          <div className="card" key={event.id}>
            <h2>{event.title}</h2>

            <p><strong>Date:</strong> {event.date}</p>

            <p><strong>Time:</strong> {event.time}</p>

            <p><strong>Location:</strong> {event.location}</p>

            <p>{event.description}</p>

            <button onClick={() => deleteEvent(event.id)}>
              Delete Event
            </button>
          </div>
        ))}

        {filteredEvents.length === 0 && (
          <p className="empty">No events found.</p>
        )}
      </div>
    </div>
  );
}