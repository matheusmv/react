import { useEffect, useState } from 'react';

import { Button } from '../../components/Button';

import logo from '../../logo.svg';

const eventFn = () => {
  console.log('header click');
};

export const ExampleUseStateAndUseEffect = () => {
  const [reverseRotation, setReverseRotation] = useState(false);

  const toggleRotation = () => {
    setReverseRotation((reverse) => !reverse);
  };

  useEffect(() => {
    console.log('<Logo /> header click eventListener created');
    document.querySelector('header')?.addEventListener('click', eventFn);
    return () => {
      console.log('<Logo /> header click eventListener removed');
      document.querySelector('header')?.removeEventListener('click', eventFn);
    };
  }, []);

  useEffect(() => {
    console.log('<Logo /> update');
  });

  useEffect(() => {
    console.log(`reverseRotation update to ${reverseRotation}`);
  }, [reverseRotation]);

  return (
    <div className="component-card">
      <img
        src={logo}
        className={reverseRotation ? 'logo reverse' : 'logo'}
        alt="logo"
      />
      <Button
        clickFun={toggleRotation}
        text={reverseRotation ? 'clockwise' : 'anticlockwise'}
      />
    </div>
  );
};
