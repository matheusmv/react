# React Hooks

## [useState](https://reactjs.org/docs/hooks-state.html)

    Returns a stateful value, and a function to update it

```jsx
const [counter, setCounter] = useState(0);

const incrementCounter = () => {
  setCounter(counter + 1);
};
```

```jsx
const [counter, setCounter] = useState(0);

const incrementCounter = () => {
  setCounter((counter) => counter + 1);
};
```
