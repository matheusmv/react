import { useEffect, useRef, useState } from 'react';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export const ExampleUseRef = () => {
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
    <div className="component-card">
      <p className="card--content">
        Previous input: {previousInputValue.current}
      </p>
      <Input
        inputType={'text'}
        inputRef={inputElement}
        inputValue={inputValue}
        onChangeFn={(e) => setInputValue(e.target.value)}
      />
      <Button clickFun={focusInput} text={'Focus Input'} />
      <p className="card--content">Render Count: {count.current}</p>
    </div>
  );
};
