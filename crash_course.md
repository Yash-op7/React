# 1st course
# why react, how it works
- react allows us to build dynamic interactive websites

# how react works:
- react uses virtual dom, which is a lightweight copy of the actual dom, when a state in a component changes, the virtual dom changes first, then react compares this with the actual dom then it updates only the parts that need to be updated.![alt text](image.png)

## components:
![alt text](image-1.png)
## state
![alt text](image-2.png)
- to define a state in a functionall component you can use a hook.

- see redux for global state and state management

## hooks
![alt text](image-3.png)

## different types of websites
![alt text](image-4.png)

## vite
![alt text](image-5.png)
`npm create vite@latest`
## proj structure

- inside main.jsx, strict mode which is a wrapper component to check for potential problems, like deperacated, unsafe lifecycle methods, legacy context apis, etc.

## jsx crash course
- every react comoponent returns an html like syntax called jsx
- can only return a single element.

##  react router
- the App() function returns <ReactProvider router={router}/>
where router is:
`const router = createBrowserRouter(
    createRoutesFromElements(<Route index element={<HomePage />} />)
)`
here you can provide an explicit route or you can provide index which by default means '/' route

- for navbar and footers which appear on all pages yuo use `layouts`
so make a layouts folder, inside it
    - `MainLayout.jsx`, then use this as a parent route to the rest of our routes so they follow its layout

- useNavigate from react-router-dom ->
`const navigate = useNavigate()
...
return navigate('/');

# POST request:
![alt text](image-6.png)

# Delete Request:
![alt text](image-7.png)

# Update/PUT Request
![alt text](image-8.png)

# React hooks
- only call them at the top level of a functional component, they dont work inside nested js functions, loops or anything like that.
## `useRef()`
![alt text](image-9.png)
> when you want to grab elements from the dom

## `useReducer()`
- what it does is similar to setState, it goes about it in a different way using the redux pattern, which works like this:
![alt text](image-10.png)
> instead of updating the state directly, you dispatch actions that go to a reducer function which determines how to compute the next state
- just like useState, useReducer() returns an array of two values, the first value is the reactive state that you want to show in the ui, the second value is a function that can dispatch an action, an action is just an object that has a `type` key which will have a string value and an optional data payload, you might dispatch an action when a button is clicked, which will trigger your reducer function, the reducer function is something that you define and pass to the useReducer hook, the reducer function takes the current state and the action as the arguements and uses them to compute the next state, which is usually handled inside a switch statement, also the useReducer() hook can also take an initial state as the second arguement
example:
![alt text](image-11.png)
![alt text](image-12.png)

## `useMemo()`


## `useContext()`