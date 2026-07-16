import { useState, useEffect } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const handleSubmit = () => {
    if (!title || !url) {
      alert("Please fill all fields");
      return;
    }

    if (editId !== null) {
      setBookmarks(
        bookmarks.map((item) =>
          item.id === editId ? { ...item, title, url } : item
        )
      );
      setEditId(null);
    } else {
      setBookmarks([
        ...bookmarks,
        {
          id: Date.now(),
          title,
          url,
        },
      ]);
    }

    setTitle("");
    setUrl("");
  };

  const handleEdit = (bookmark) => {
    setTitle(bookmark.title);
    setUrl(bookmark.url);
    setEditId(bookmark.id);
  };

  const handleDelete = (id) => {
    setBookmarks(bookmarks.filter((item) => item.id !== id));
  };

  return (
    <div style={{ width: "500px", margin: "30px auto" }}>
      <h1>Bookmark Manager</h1>

      <input
        type="text"
        placeholder="Website Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSubmit}>
        {editId ? "Update Bookmark" : "Add Bookmark"}
      </button>

      <hr />

      {bookmarks.map((bookmark) => (
        <div
          key={bookmark.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{bookmark.title}</h3>

          <a
            href={bookmark.url}
            target="_blank"
            rel="noreferrer"
          >
            {bookmark.url}
          </a>

          <br />
          <br />

          <button onClick={() => handleEdit(bookmark)}>
            Edit
          </button>

          <button
            onClick={() => handleDelete(bookmark.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;