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
