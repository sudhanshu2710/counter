import React, { useState } from "react";
import { Counter } from "./component/Counter";
import InputCount from "./component/InputCount";
import classes from "./App.module.css";

function App() {
  const [count, setCount] = useState();
  console.log(count + "this is in app");
  const setCountHandler = (count_) => {
    setCount(count_);
  };
  return (
    <div className={classes.App}>
      {!count && <InputCount setCount={setCountHandler} />}
      {count && <Counter countRecived={count} />}
    </div>
  );
}

export default App;
