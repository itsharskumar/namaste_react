import { useState } from "react";
import  usePrev  from "./hooks/usePrev";

const App = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrev(count);

  return (
    <div>
      <h2>Now: {count}</h2>
      <h3>Previous: {prevCount}</h3>

      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default App;
