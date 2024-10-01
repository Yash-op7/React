import { useEffect, useRef, useState } from "react";

function App() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const idRef = useRef(1);
  const [names, setNames] = useState([
    {id:idRef.current++, name:'bob'},
    {id:idRef.current++, name:'bill'},
  ]);

  const updateNames = () => {
    const newId = idRef.current++; // Increment first, then use
    setNames([...names, { id: newId, name: inputRef.current.value }]);
    inputRef.current.value = "";
  };
  
  console.log("Component re-rendered.");
  return (
    <div className="outer-div">
      <input type="text" ref={inputRef} />
      <button onClick={updateNames}>Add Name</button>

      <div>
        <ul>
          {names.map((name, idx) => {
           return  <li key={name.id}>{`${name.id} -> ${name.name}`}</li>
          })}
        </ul>
      </div>
    </div>
  );
}
export default App;

