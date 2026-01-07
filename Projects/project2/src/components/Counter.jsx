import { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div className="counter-container">
      <h1>Character Counter</h1>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onInput={(e) => setText(e.target.value)}
      />

      <p className="count">
        Characters: <span>{text.length}</span>
      </p>
    </div>
  );
}

export default CharacterCounter;
