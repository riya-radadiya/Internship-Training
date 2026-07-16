import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";

import { ThemeContext } from "./ThemeContext";
import useWindowWidth from "./useWindowWidth";

function App() {
  // useState
  const [count, setCount] = useState(0);

  // useEffect
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // useMemo
  const square = useMemo(() => {
    console.log("Calculating...");
    return count * count;
  }, [count]);

  // useCallback
  const showMessage = useCallback(() => {
    alert("useCallback executed!");
  }, []);

  // useRef
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  // useContext
  const theme = "light";

  // Custom Hook
  const width = useWindowWidth();

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>React Hooks Practical</h1>

        <hr />

        <h2>useState</h2>

        <h3>{count}</h3>

        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>

        <hr />

        <h2>useMemo</h2>

        <p>Square = {square}</p>

        <hr />

        <h2>useCallback</h2>

        <button onClick={showMessage}>
          Click Me
        </button>

        <hr />

        <h2>useRef</h2>

        <input
          ref={inputRef}
          placeholder="Type here"
        />

        <button onClick={focusInput}>
          Focus Input
        </button>

        <hr />

        <h2>useContext</h2>

        <ThemeDisplay />

        <hr />

        <h2>Custom Hook</h2>

        <p>Window Width: {width}px</p>
      </div>
    </ThemeContext.Provider>
  );
}

function ThemeDisplay() {
  const theme = React.useContext(ThemeContext);

  return <h3>Current Theme: {theme}</h3>;
}

export default App;