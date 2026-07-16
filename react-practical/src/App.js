import React from "react";

function App() {
  const appName =
    process.env.REACT_APP_APP_NAME || "Default App";

  const api =
    process.env.REACT_APP_API_URL || "No API URL";

  const version =
    process.env.REACT_APP_VERSION || "1.0";

  const mode =
    process.env.REACT_APP_MODE || "Development";

  return (
    <div
      style={{
        width: "500px",
        margin: "40px auto",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      <h1>{appName}</h1>

      <hr />

      <h3>Environment Variables</h3>

      <p>
        <strong>API URL:</strong>
        <br />
        {api}
      </p>

      <p>
        <strong>Version:</strong>
        <br />
        {version}
      </p>

      <p>
        <strong>Mode:</strong>
        <br />
        {mode}
      </p>
    </div>
  );
}

export default App;