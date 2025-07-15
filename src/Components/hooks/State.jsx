import { useState } from "react";
export const StateUser = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>{count}</div>;
      <button onClick={handleClick}>incement</button>;
    </>
  );
};
