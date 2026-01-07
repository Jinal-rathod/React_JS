import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Modal Popup</h2>
        <p>This modal create using React + Vite</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
