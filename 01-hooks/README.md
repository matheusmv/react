# [React Hooks](https://reactjs.org/docs/hooks-reference.html)

    They let you use state and other React features without writing a class.

 - **Rules**
     - only call hooks at the top level. Don't call hooks inside loops, conditions,
     or nested functions.
     - only call hooks from React function components. Don't call hooks from regular
     javascript functions.

## [useState](https://reactjs.org/docs/hooks-state.html)

    Returns a stateful value, and a function to update it.

 - the only argument to **useState** is the initial state.

  ```jsx
  function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);

    return (
      <>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      </>
    );
  }
  ```

## [useEffect](https://reactjs.org/docs/hooks-effect.html)

    Adds the ability to perform side effects (data fetching, subscriptions or manual
    DOM manipulation) from a function component. It serves the same purpose as
    componentDidMount, componentDidUpdate and componentDidUnmount in React classes,
    but unified into a single API.

 - by default, React runs the effects after every render - **including the first
 render**

 - effects may also optionally specify how to "clean up" after them by returning a
 function.

 - just like you can use the State Hook more than once, you can also use several
 effects. This lets us separate unrelated logic into different effects:

 - will run every time the component updates

    ```jsx
    useEffect(() => {
      console.log('update');
    });
    ```

 - will run only on component creation

    ```jsx
    useEffect(() => {
      console.log('mount');
    }, []);
    ```

 - will be executed every time the component state passed as an argument update

    ```jsx
    useEffect(() => {
      console.log(`${state} update`);
    }, [state]);
    ```

 - component "clean up"

    ```jsx
    useEffect(() => {
      document.querySelector('header')?.addEventListener('click', eventFn);
      return () =>
        document.querySelector('header')?.removeEventListener('click', eventFn);
    }, []);
    ```
