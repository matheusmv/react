import { useEffect, useRef, useState } from 'react';

export const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const previousInputValue = useRef('');
  const inputElement = useRef(null);
  const count = useRef(0);

  const focusInput = () => {
    inputElement.current.focus();
  };

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    count.current++;
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="text-container">
          <p>Previous input: {previousInputValue.current}</p>
        </div>
        <input
          type="text"
          ref={inputElement}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="button-container">
          <button onClick={focusInput}>Focus Input</button>
        </div>
        <h1>Render Count: {count.current}</h1>
      </header>
    </div>
  );
};
