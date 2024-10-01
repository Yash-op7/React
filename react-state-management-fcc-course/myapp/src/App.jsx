import { useRef } from "react";

function App() {
  const inputRef = useRef(null);
  
  return (
    <div className="outer-div">
      <input type='text' ref={inputRef}>
      </input>
    </div>
  );
}
export default App;
