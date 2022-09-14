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

 - run every time the component updates

    ```jsx
    useEffect(() => {
      console.log('update');
    });
    ```

 - run only on component creation

    ```jsx
    useEffect(() => {
      console.log('mount');
    }, []);
    ```

 - run every time the argument update

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

## [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)

 - only runs when one of its dependencies update.
 - the **useMemo** and **useCallback** hooks are similar. The main difference is that
 **useMemo returns a memoized value** and **useCallback returns a memoized function**.
 - if no array is provided, a new value will be computed on every render.

    ```jsx
    const Post = ({ post }) => {
      return (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      );
    };

    Post.propTypes = {
      post: P.shape({
        id: P.number,
        title: P.string,
        body: P.string,
      }),
    };

    export const Posts = () => {
      const [value, setValue] = useState('');
      const [posts, setPosts] = useState([]);

      useEffect(() => {
        setTimeout(() => {
          fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((res) => setPosts(res));
        }, 5000);
      }, []);

      return (
        <div className="App">
          <input
            type="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="posts-container">
            {useMemo(() => {
              return (
                posts.length > 0 &&
                posts.map((post) => <Post key={post.id} post={post} />)
              );
            }, [posts])}
            {posts.length <= 0 && <p>Loading...</p>}
          </div>
        </div>
      );
    };
    ```

## [useRef](https://reactjs.org/docs/hooks-reference.html#useref)

 - returns a mutable ref object whose **.current** property is initialized to the passed
 argument. The returned object will persist for the full lifetime of the component.

 - it can be used to:
     - persist values between renders.
     - store a mutable value that does not cause a re-render when updated.
     - access a DOM element directly.

## [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)

 - is a way to manage state globally.
 - it can be used together with the useState to share state between deeply nested
 components more easily than with useState alone.

   ```jsx
   const globalState = {
     themes: {
       light: {
         foreground: '#000000',
         background: '#eeeeee',
       },
       dark: {
         foreground: '#ffffff',
         background: '#222222',
       },
     },
     pageTitle: 'Title from globalState',
     counter: 0,
   };

   export const GlobalContext = createContext();

   export const AppContext = ({ children }) => {
     const [contextState, setContextState] = useState(globalState);

     return (
       <GlobalContext.Provider value={{ contextState, setContextState }}>
         {children}
       </GlobalContext.Provider>
     );
   };
   ```

   ```jsx
   export default function App() {
     return (
       <AppContext>
         <Post />
       </AppContext>
     );
   }
   ```

   ```jsx
   export const Post = () => {
     const globalContext = useContext(GlobalContext);

     const {
       contextState: {
         themes: { dark },
         pageTitle,
         counter,
       },
       setContextState,
     } = globalContext;

     return (
       <>
         <div>
           <h1>{pageTitle}</h1>
           <p>{counter}</p>
         </div>
         <button
           onClick={() =>
             setContextState((s) => ({ ...s, counter: s.counter + 1 }))
           }
           style={{
             background: dark.background,
             color: dark.foreground,
           }}
         >
           {'click'}
         </button>
       </>
     );
   };
   ```

## [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)

 - userReducer is usually preferable to useState when you have complex state logic that
 involves multiple sub-values or when the next state depends on the previous one.
 - optimize performance for components that trigger deep updates because you can pass
 dispatch down instead of callbacks.

   ```jsx
   function reducer(state, action) {
     switch (action.type) {
     case 'action-1':
       // perform action-1 logic
       return { ...state, state.count + action.value };
     case 'action-2':
       // perform action-2 logic
       return { ...state, state.count - action.value };
     // ...
     default:
       return state;
     }
   }

   const [state, dispatch] = useReducer(reducer, initialState);

   const performActionOne = (num) => {
     dispatch({ type: 'action-1', value: num });
   };

   const performActionTwo = (num) => {
     dispatch({ type: 'action-2', value: num });
   };
   ```
