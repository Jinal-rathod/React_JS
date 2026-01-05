import React from "react";
import { useRef } from "react";

const Square = () => {
  const ref = useRef(null);

  function renderSquare() {
    ref.current.style.backgroundColor = "pink";
    ref.current.style.height = "100px";
    ref.current.style.width = "100px";
  }

  return (
    <>
      <div ref={ref}></div>
      <button onClick={renderSquare}>Click</button>
    </>
  );
};

export default Square;
