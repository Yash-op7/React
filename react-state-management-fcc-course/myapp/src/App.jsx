import { useEffect, useRef, useState } from "react";

function App() {
  const renderCount = useRef(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("rerender");
  });

  return (
    <div>
      <button onClick={() => setToggle((t) => !t)}>re render</button>
      <h1>i rendered {renderCount.current} times</h1>
    </div>
  );
}

export default App;
