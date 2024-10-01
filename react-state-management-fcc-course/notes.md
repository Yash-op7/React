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

