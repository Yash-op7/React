import { useReducer } from "react";

/*
const [state, dispatch] = useReducer(reducerFunction, initalState);

// reducer function returns the new state
const reducerFunction = (prevState, action) {
  // action is an object with 2 properties type and payload
}
*/

function NameList() {

  const [namesList, dispatch] = useReducer(reducerFunc, {
    names: ['bob'],
    name:''
  })

  function reducerFunc(prevState, action) {
    switch (action.type) {
      case 'ADD_NAME':
          return {
          names: [...prevState.names, prevState.name],
          name:''
        }
        break;
      default:
        console.log('Action not defined.');
        return prevState;
        break;
    }
  }

  return <div className="component">
    <ol>
      {namesList.names.map((name, idx) => {
        return <li key={idx}>
          {name}
        </li>
      })}
    </ol>
  </div>
}

function App() {
  return (
    <div className="outer-div">
      <NameList />
    </div>
  );
}

export default App;
