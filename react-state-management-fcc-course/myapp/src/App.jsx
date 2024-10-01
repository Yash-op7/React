// useEffect example
/*
lets use it to fetch data, whiich is its most common use case
*/

import { useEffect, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);

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
