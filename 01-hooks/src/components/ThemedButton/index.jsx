import P from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

export const ThemedButton = ({ message }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className="App">
      <header className="App-header">
        <button
          style={{
            background: theme.background,
            color: theme.foreground,
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
