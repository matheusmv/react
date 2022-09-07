import { useState } from 'react';

import './App.css';

import logo from './logo.svg';

function App() {
  const [reverseRotation, setReverseRotation] = useState(false);
  const [counter, setCounter] = useState(0);

  const toggleRotation = () => {
    setReverseRotation((reverse) => !reverse);
  };

  const incrementCounter = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className={reverseRotation ? 'App-logo reverse' : 'App-logo'}
          alt="logo"
        />
        <h4 onClick={incrementCounter}>Counter: {counter}</h4>
        <button onClick={toggleRotation}>
          {reverseRotation ? 'clockwise' : 'anticlockwise'}
        </button>
      </header>
    </div>
  );
}

export default App;
