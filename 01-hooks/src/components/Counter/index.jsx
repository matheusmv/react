import P from 'prop-types';

import React, { useCallback, useEffect, useState } from 'react';

import '../../App.css';

const Button = React.memo(function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
});

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
};

export const Counter = ({ initialCount }) => {
  const [counter, setCounter] = useState(initialCount);

  useEffect(() => {
    document.title = `You clicked ${counter} times`;
  }, [counter]);

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
    <div className="App">
      <header className="App-header">
        <div className="counter-container">
          <h4 onClick={() => setCounter(counter + 1)}>Counter: {counter}</h4>
          <Button onClick={resetCounter} text="Reset" />
          <Button onClick={incrementCounter} text="+" />
          <Button onClick={decrementCounter} text="-" />
        </div>
      </header>
    </div>
  );
};

Counter.propTypes = {
  initialCount: P.number.isRequired,
};
