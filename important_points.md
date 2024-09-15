- in map((x) => func(x)); we can get the index as well, map((x, index) => {});
- in jsx you cannot have if, for, while
- {loggedIn && <h1>hello user</h1>}
### css rules:
```js
<div style={{color:'red', fontSize:'2em' }}>{[1, 2, 3]}</div>
<div style={style_object}>{[1, 2, 3]}</div>
```
basically:
- the value of style will be a js object, so instead of `;` seperating properties, we use `,`
also instead of font-size we use fontSize
- put the contents of style instead braces
- Object Syntax: Inline styles in JSX are written as JavaScript objects
- The keys are in camelCase (not kebab-case like CSS).
- The values must be strings if they represent units like `px`.
```jsx
const style = {
  backgroundColor: 'blue', // Use camelCase for properties
  fontSize: '20px'         // Values are usually strings
};

return <div style={style}>Hello</div>;
```
- className instead of class: In JSX, you must use className (not class) to apply CSS classes.
- You can use JavaScript expressions inside curly braces to apply dynamic inline styles or class names.
```jsx
const isActive = true;
return <div className={isActive ? 'active' : 'inactive'}>Hello</div>;
```

## in `useState()`
- `const [value, setValue] = useState(23);`
- when you update state, you can pass a literal value, or a callback which gets as an arguement the current state value by deffault, so:
`setValue((prevValue) => prevValue + 1);