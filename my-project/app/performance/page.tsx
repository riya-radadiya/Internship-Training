"use client";

import { useState } from "react";
import "./styles.css";

interface Review {
  id: number;
  employee: string;
  reviewer: string;
  date: string;
  rating: number;
  comments: string;
}

export default function PerformancePage() {
  const [employee, setEmployee] = useState("");
  const [reviewer, setReviewer] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState("");
  const [search, setSearch] = useState("");

  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      employee: "John Smith",
      reviewer: "Manager A",
      date: "2026-07-20",
      rating: 5,
      comments: "Excellent performance and teamwork.",
    },
    {
      id: 2,
      employee: "Emma Watson",
      reviewer: "Manager B",
      date: "2026-07-21",
      rating: 4,
      comments: "Very good work and punctual.",
    },
  ]);

  const addReview = () => {
    if (!employee || !reviewer || !date || !comments) {
      alert("Please fill all fields.");
      return;
    }

    const newReview: Review = {
      id: Date.now(),
      employee,
      reviewer,
      date,
      rating,
      comments,
    };

    setReviews([newReview, ...reviews]);

    setEmployee("");
    setReviewer("");
    setDate("");
    setRating(5);
    setComments("");
  };

  const deleteReview = (id: number) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  const filteredReviews = reviews.filter(
    (review) =>
      review.employee.toLowerCase().includes(search.toLowerCase()) ||
      review.reviewer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Performance Reviews</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Employee Name"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
        />

        <input
          type="text"
          placeholder="Reviewer Name"
          value={reviewer}
          onChange={(e) => setReviewer(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          <option value={5}>⭐⭐⭐⭐⭐</option>
          <option value={4}>⭐⭐⭐⭐</option>
          <option value={3}>⭐⭐⭐</option>
          <option value={2}>⭐⭐</option>
          <option value={1}>⭐</option>
        </select>

        <textarea
          placeholder="Performance Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />

        <button onClick={addReview}>Add Review</button>
      </div>

      <input
        className="search"
        type="text"
        placeholder="Search Review..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="review-list">
        {filteredReviews.map((review) => (
          <div className="card" key={review.id}>
            <h2>{review.employee}</h2>

            <p><strong>Reviewer:</strong> {review.reviewer}</p>

            <p><strong>Date:</strong> {review.date}</p>

            <p><strong>Rating:</strong> {"⭐".repeat(review.rating)}</p>

            <p>{review.comments}</p>

            <button onClick={() => deleteReview(review.id)}>
              Delete Review
            </button>
          </div>
        ))}

        {filteredReviews.length === 0 && (
          <p className="empty">No reviews found.</p>
        )}
      </div>
    </div>
  );
}