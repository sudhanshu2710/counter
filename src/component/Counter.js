import React, { useState, useEffect } from "react";

export const Counter = (props) => {
  const [count, setCount] = useState(props.countRecived);

  const setIncrement = () => {
    console.log(count);
    setCount(count + 1);
  };
  const setDecrement = () => {
    setCount(count - 1);
  };
  const setDouble = () => {
    setCount(count * 2);
  };
  return (
    <React.Fragment>
      <h1>Counter</h1>
      <div value={count}>{count}</div>
      <button onClick={setIncrement}>Increment</button>
      <button onClick={setDecrement}>decrement</button>
      <button onClick={setDouble}>double</button>
    </React.Fragment>
  );
};
