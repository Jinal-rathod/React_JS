import React from "react";
import { useRef } from "react";

const UseRef = () => {
  {
    /* const ref = useRef(initialValue) */
  }
  const ref = useRef(null);

  function handleInput() {
    ref.current.focus();
    const InputValue = ref.current.value;
    console.log(InputValue);
  }

  return (
    <>
      <input type="text" ref={ref} />
      <button onClick={handleInput}>Click</button>
    </>
  );
};

export default UseRef;
