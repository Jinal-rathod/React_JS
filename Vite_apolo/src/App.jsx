import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>{count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Incremet</button>
        <button
          onClick={
            count <= 0
              ? () => setCount((count) => count)
              : () => setCount((count) => count - 1)
          }
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
