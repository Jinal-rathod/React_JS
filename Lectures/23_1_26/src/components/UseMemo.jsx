import { useCallback, useMemo, useState } from "react";

const UseMemo = () => {
  const [num1, setNum1] = useState(5);
  const [num2, setNum2] = useState(10);

  const sum = useMemo(() => {
    return num1 + num2;
  }, [num1, num2]);

  const count1 = useCallback(() => {
    setNum1((prev) => prev + 1);
  }, []);

  const count2 = useCallback(() => {
    setNum2((prev) => prev + 1);
  }, []);

  return (
    <>
      <p>Count1 : {num1}</p>
      <p>Count2 : {num2}</p>
      <p>Sum : {sum}</p>

      <button onClick={count1}>First num</button>
      <button onClick={count2}>Second num</button>
    </>
  );
};

export default UseMemo;
