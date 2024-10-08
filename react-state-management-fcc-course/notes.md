# create react app with vite:
## what is vite:
- Vite is a modern build tool that provides a fast development environment and a highly optimized production build. It leverages native ES modules in the browser, resulting in lightning-fast server start times and hot module replacement (HMR) for an improved development experience.

## command:
1. npm create vite@latest my-react-app --template react
2. npm i
3. npm run dev

# 1. `useState`
- When `useState`'s `setState` is called, it looks at the old value and the new value and if they're the same it doesn't re-render, so when we have objects and arrays as states they are stored as references in the state so we cannot do in place mutation of the array, instead we need to create a new array using `...`
- For the default value you can also pass a callback and that will only be run once to compute the initial state.
- what setState does is set the state and enqueues a rerender component operation, in react 18 and later when you have multiple setStates going off in before one re render then react smartly enqueues only one rerender

## 2. `useReducer`
- This gives a nice way to manage more complex state.
- You can also test the reducer code independently
- see the design pattern at the end

useState and useReducer are used to manage state and how it changes, now we will see how to monitor state using useMemo, useCallback and useEffect

## 3. `useMemo` or `useCalculatedValue`
- 2 times where you wanna use useMemo:
1. to avoid complex recomputations, any arguements, numbers or objects  
2. when you're creating arrays or objects, because react compares arrays and objects by references.

## 4. `useCallback`
- the code above the return function in a component runs again at every re render, so any functions declared in this space will also be redeclared with new references, these functions may be passed to some useMemo logic in the dependencies which will trigger their rerenders, this is fine if the function's definition is affected by the reason for re render, but if its not then we can use useCallback to prevent redeclarations
- another solution to stabilize references is to declare the function gloablly outside the component, but thats bad code.
- it takes two arguements, first is the function as a callback second is a dependency array which relates to the logic inside the function or when it should be redeclared.

- when should you use this, when you are passing a function as a prop to a child component, because that will prevent re rendering of the child component.
- the other time to use this is when you are creating a callback in a custom hook, because you have no clue of what the custom hook will do with the callback and you'd want the callback reference to be stable.

## 5. `useEffect`
- it takes a function that is going to be called once when the dom is rendered or whenever react detects a change in the dep array.
- example of a solid useEffect, good pattern:
![alt text](notes_snapshots/image.png)

- use useEffect only when needed, 

- another thing is how to implement a stopwatch, see the example

- also the callback passed to useEffect can return an optional value which is a callback function which is the cleanup function which gets called when the component unmounts to clear things like timers.

- useEffect is important in custom hooks, 
- runs after the initial render

## 6. `useRef`:
- another way to associate state to a component
- when you change the value of reference it doesn't cause a re render
### 1. first use is to get the reference to a html element
- we attach reference like this:
![alt text](notes_snapshots/image-1.png)
- next when we want to do something with the referenced html tag, we first need to make sure the tag exists and then work on it, so put useRef's ref's logic inside a useEffect since useEffect runs after the initial render
- what is `current`, when you have a reference, a `current` property is associated with that reference, ref is just a pointer the current property gives us access to manipulate the element.
- ![alt text](notes_snapshots/image-2.png)
- so now anytime the page refereshes we automatically set reference to that element.
### 2. second use is to maintain state without doing any updates
- this is weird dont use it

### WDS
- for example to store how many times a component rerenders:
```jsx
import {useEffect, useRef, useState} from 'react';

function App() {
  const renderCount = useRef(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log('rerender')
  });

  return <div>
    <button onClick={() => setToggle((t) => !t)}>re render</button>
    <h1>i rendered {renderCount.current} times</h1>

  </div>
}

export default App;
```
- this is used to keep a state that doesn't trigger re render on change
- another use is grab html elements from the dom, each of them have a `ref` property which allows this ref={inputRef}

## 7. `context` and `useContext` and `customHooks`
