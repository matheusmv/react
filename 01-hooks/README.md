# [React Hooks](https://reactjs.org/docs/hooks-reference.html)

    They let you use state and other React features without writing a class.

 - **Rules**
     - only call hooks at the top level. Don't call hooks inside loops, conditions,
     or nested functions.
     - only call hooks from React function components. Don't call hooks from regular
     javascript functions.

## [useState](https://reactjs.org/docs/hooks-state.html)

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

## [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)

 - useCallback to prevent a component from re-rendering unless its props have changed.
 - "caching" a value so that it does not need to be recalculated. This allows us to
 isolate resource intensive functions so that they will not automatically run on every
 render.
 - only runs when one of its dependencies update.
 - is usually used in optimization.

    ```jsx
    const Button = React.memo(function Button({ text, onClick }) {
      return <button onClick={onClick}>{text}</button>;
    });

    export const Counter = ({ initialCount }) => {
      const [counter, setCounter] = useState(initialCount);

      const resetCounter = useCallback(() => {
        setCounter(initialCount);
      }, [initialCount]);

      const incrementCounter = useCallback(() => {
        setCounter((count) => count + 1);
      }, []);

      const decrementCounter = useCallback(() => {
        setCounter((count) => count - 1);
      }, []);

      useEffect(() => {
        const timer = setTimeout(() => {
          setCounter((count) => count + 1);
        }, 1000);

        return () => clearTimeout(timer);
      });

      return (
        <div className="counter-container">
          <h4 onClick={() => setCounter(counter + 1)}>Counter: {counter}</h4>
          <Button onClick={resetCounter} text="Reset" />
          <Button onClick={incrementCounter} text="+" />
          <Button onClick={decrementCounter} text="-" />
        </div>
      );
    };
    ```
