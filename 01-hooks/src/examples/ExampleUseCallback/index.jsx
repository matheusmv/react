import P from 'prop-types';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { Button } from '../../components/Button';

export const ExampleUseCallback = ({ initialCount }) => {
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

  const buttons = useMemo(
    () => (
      <>
        <Button clickFun={resetCounter} text="Reset" />
        <Button clickFun={incrementCounter} text="+" />
        <Button clickFun={decrementCounter} text="-" />
      </>
    ),
    [resetCounter, incrementCounter, decrementCounter],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="component-card">
      <h4 onClick={() => setCounter(counter + 1)}>Counter: {counter}</h4>
      {buttons}
    </div>
  );
};

ExampleUseCallback.propTypes = {
  initialCount: P.number.isRequired,
};
