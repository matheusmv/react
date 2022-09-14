import P from 'prop-types';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const ThemedButton = ({ message }) => {
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
    <div className="App">
      <header className="App-header">
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
          {message}
        </button>
      </header>
    </div>
  );
};

ThemedButton.propTypes = {
  message: P.string,
};
