import { useEffect, useRef, useState } from 'react';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

const useCounter = (cb, delay = 1000) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

export const ExampleCustomHookV1 = () => {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  const incrementDelay = () => {
    setDelay((d) => d + incrementor);
  };

  const decrementDelay = () => {
    setDelay((d) => d - incrementor);
  };

  useCounter(() => setCounter((c) => c + 1), delay);

  return (
    <div className="component-card">
      <h1 className="card--content">Counter: {counter}</h1>
      <h1 className="card--content">Delay: {delay}</h1>
      <Button clickFun={incrementDelay} text={`+ ${incrementor}`} />
      <Button clickFun={decrementDelay} text={`- ${incrementor}`} />
      <Input
        inputValue={incrementor}
        inputType={'number'}
        onChangeFn={(e) => setIncrementor(Number(e.target.value))}
      />
    </div>
  );
};
