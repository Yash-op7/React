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
