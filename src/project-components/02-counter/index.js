import { useState } from "react";
import "./index.css";

function Counter() {
  // let counter = 15;
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    // setCounter(counter + 1)
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }
    // console.log("value:", counter);
  };

  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  };

  return (
    <div className="counter-box">
      <h1>Counter</h1>
      <h2>Counter Value {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </div>
  );
}

export default Counter;
