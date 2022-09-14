import P from 'prop-types';
import { useContext } from 'react';
import { ColorTheme } from '../../contexts/ColorTheme';

export const ThemedButton = ({ message }) => {
  const theme = useContext(ColorTheme);

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
