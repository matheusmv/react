import { useEffect, useState } from 'react';

import '../../App.css';

import logo from '../../logo.svg';

const eventFn = () => {
  console.log('header click');
};

export const Logo = () => {
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
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className={reverseRotation ? 'App-logo reverse' : 'App-logo'}
          alt="logo"
        />
        <button onClick={toggleRotation}>
          {reverseRotation ? 'clockwise' : 'anticlockwise'}
        </button>
      </header>
    </div>
  );
};
