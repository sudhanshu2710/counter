import React, { useState } from "react";

const InputCount = (props) => {
  const [input_, setInput_] = useState(0);
  const setInputCount = (e) => {
    setInput_(Number(e.currentTarget.value));
  };
  const sendCount = () => {
    props.setCount(input_);
  };
  return (
    <React.Fragment>
      <h3>Input the initial Count</h3>
      <input type="text" value={input_} onChange={setInputCount}></input>
      <button onClick={sendCount}>START COUNTER</button>
    </React.Fragment>
  );
};

export default InputCount;
