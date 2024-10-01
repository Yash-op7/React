import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = (prev) => prev+1;
  return (
    <div className="component">
      <p>{count}</p>
      <button onClick={() => setCount(increment)}>+</button>
    </div>
  );
}

function Names() {
  const [names, setNames] = useState(() => ['tom', 'jane']);
  const [name, setName] = useState('Enter name');

  function addName() {
    setNames([...names, name]);
    setName('');
  }

  return <div className="component">
    <ol>
      {names.map((name, idx) => {
        return <li key={idx}>
          {name}
        </li>
      })}
    </ol>
    <input
      type="text"
      value={name}
      onChange={(event) => setName(event.target.value)}
    />
    <button
      onClick={() => addName()}
    >
      Add Name
    </button>
    <p>
      {name}
    </p>
  </div>
}

function App() {
  return (
    <div className="outer-div">
      <Counter />
      <Names />
    </div>
  );
}

export default App;
