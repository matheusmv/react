import P from 'prop-types';
import { createContext, useState } from 'react';
import { globalState } from './data';

export const GlobalContext = createContext();

export const AppContext = ({ children }) => {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      {children}
    </GlobalContext.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};
