import P from 'prop-types';
import { useContext } from 'react';

import { Button } from '../../components/Button';

import { GlobalContext } from '../../contexts/AppContext';

export const ExampleUseContext = ({ message }) => {
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
    <div className="component-card">
      <h1 className="card--content">{pageTitle}</h1>
      <p className="card--content">{counter}</p>
      <Button
        clickFun={() =>
          setContextState((s) => ({ ...s, counter: s.counter + 1 }))
        }
        text={message}
        btnStyle={{
          background: dark.background,
          color: dark.foreground,
        }}
      />
    </div>
  );
};

ExampleUseContext.propTypes = {
  message: P.string,
};
