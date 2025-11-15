import { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="counter-value">{count}</div>
      <button className="counter-btn" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default CounterApp;
