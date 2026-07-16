"use client";

import { useEffect, useState } from "react";

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 10)));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}