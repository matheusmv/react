import P from 'prop-types';

import { useEffect, useState } from 'react';

import '../../App.css';

export const Counter = ({ initialCount }) => {
  const [counter, setCounter] = useState(initialCount);

  useEffect(() => {
    document.title = `You clicked ${counter} times`;
  }, [counter]);

  const incrementCounter = () => {
    setCounter((count) => count + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      incrementCounter();
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="counter-container">
          <h4 onClick={incrementCounter}>Counter: {counter}</h4>
          <button onClick={() => setCounter(initialCount)}>Reset</button>
          <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
          <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
        </div>
      </header>
    </div>
  );
};

Counter.propTypes = {
  initialCount: P.number.isRequired,
};
