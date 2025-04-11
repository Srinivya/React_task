import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function Increament() {
    setCount(count + 1);
  }
  function Decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={Increament}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
