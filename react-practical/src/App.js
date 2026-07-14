

import './App.css';

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>JSX and React Elements Practical</h1>

      {/* HTML converted to JSX */}
      <section>
        <h2>Welcome to React</h2>
        <p>This is an example of HTML converted into JSX.</p>

        <button onClick={() => alert("Hello from React!")}>
          Click Me
        </button>
      </section>

      <hr />

      {/* User Profile Card */}
      <div
        style={{
          width: "300px",
          margin: "20px auto",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
        }}
      >
        <img
          src="https://via.placeholder.com/120"
          alt="Profile"
          style={{ borderRadius: "50%" }}
        />

        <h2>Riya Radadiya</h2>
        <p>React Developer Intern</p>
        <p>Email: riya@example.com</p>

        <button>View Profile</button>
      </div>
    </div>
  );
}

export default App;