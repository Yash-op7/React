import { useCallback, useMemo, useState } from "react";

/*
useMemo takes the function which performs calculations and the array of dependencies
*/



function App() {
  

  const [names] = useState(['tom', 'bill', 'kyle']);

  function sortNames() {
    console.log('function called');
    return names.toSorted();
  }

  // const customSort = (a, b) => a.localeCompare(b) * -1;
  const customSort = useCallback((a, b) => a.localeCompare(b) * -1, []);  

  const sortedNames2 = useMemo(sortNames, [names, customSort]);


  const [toggle, setToggle] = useState(true);

  return (
    <div className="outer-div">
      <button onClick={() => setToggle((prev) => !prev)}>
        simulate re-render
      </button>
    </div>
  );
}

export default App;
