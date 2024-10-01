// useEffect example
/*
lets use it to fetch data, whiich is its most common use case
*/

import { useEffect, useState } from "react";

function App() {
  const [names, setNames] = useState(["init"]);

  useEffect(
    () =>{
      fetch("/names.json")
        .then((resp) => resp.json())
        .then((data) => setNames(data))
        .catch((err) => console.log(err))},
    []
  );
  const [selectedName, setSelectedName] = useState(null);
  const [data, setData] = useState('no data');

  const callback1 = () => {
    if(selectedName){
      fetch(`/${selectedName}.json`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err, 'FILE NOT FOUND'));
    }
  }

  // but theres no need to do this, instead when the button is clicked dont rely on useEffect rather, just fetch and set the new state inside the click handler
  
  useEffect(callback1, [selectedName]);


  return (
    <div className="outer-div">
      {names.map((name, idx) => {
        return <button key={idx} onClick={(() => setSelectedName(name))}>{name}</button>
      })}
      <ol>
      {JSON.stringify(data)}
      </ol>
      <p>{selectedName}</p>
    </div>
  );
}
export default App;
