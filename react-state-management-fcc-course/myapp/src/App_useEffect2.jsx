// useEffect example
/*
lets use it to fetch data, whiich is its most common use case
*/

import { useEffect, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);

  // setInterval(() => setTime((prev) => prev+1), 1000);
  // this is bad it causes exponential explosion of timers after each second

  // solution is:
  useEffect(callback2, []);

  function callback2() {
    const intervalId = setInterval(() => setTime((t) => t+1), 1000);
    return () => clearInterval(intervalId);
  }

  return (<div>
    Time: {time}
  </div>)
}

function App() {
  return (
    <div className="outer-div">
<Stopwatch />
    </div>
  );
}
export default App;
