import { startTransition, useReducer } from "react";

/*
const [state, dispatch] = useReducer(reducerFunction, initalState);
// dispatch takes the action object and passes it to the reducer function along with the state

// reducer function returns the new state
const reducerFunction = (prevState, action) {
  // action is an object with 2 properties type and payload
}
*/

function NameList() {
  const [namesList, dispatch] = useReducer(reducerFunc, {
    names: ["bob"],
    name: "_",
  });

  function reducerFunc(prevState, action) {
    switch (action.type) {
      case "ADD_NAME":
        return {
          // names: [...prevState.names, prevState.name],
          names: [...prevState.names, prevState.name],
          name: "",
        };
      case "SET_NAME":
        return {
          ...prevState,
          name: action.payload,
        };
      default:
        console.log("Action not defined.");
        return prevState;
        break;
    }
  }

  const handleInputChange = (e) => {
    dispatch({
      type: "SET_NAME",
      payload: e.target.value,
    });
  };

  function addNameHandler() {
    dispatch({
      type: "ADD_NAME",
    });
  }

  return (
    <div className="component">
      <ol>
        {namesList.names.map((name, idx) => {
          return <li key={idx}>{name}</li>;
        })}
      </ol>
      <input type="text" value={namesList.name} onChange={handleInputChange} />
      <button onClick={addNameHandler}>Add Name</button>
      <p>{namesList.name}</p>
    </div>
  );
}

function ConstructName() {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      first: "",
      last: "",
    }
  );

  return (
    <div>
      <input
        type="text"
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })}
      />
      <input
        type="text"
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })}
      />
      <div>
        <p>{state.first}</p>
        <p>{state.last}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="outer-div">
      <NameList />
      <ConstructName />
    </div>
  );
}

export default App;
