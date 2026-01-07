// Modal Popup using Click Events

import React, { useState } from "react";
import Modal from "./components/Model.jsx";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ padding: "50px" }}>

      <h1>Modal Popup using Click Events</h1>

      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
