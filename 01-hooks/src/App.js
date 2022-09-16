import { ExampleUseCallback } from './examples/ExampleUseCallback';
import { ExampleUseContext } from './examples/ExampleUseContext';
import { ExampleUseContextAndUseReducer } from './examples/ExampleUseContextAndUseReducer';
import { ExampleUseEffectAndUseMemo } from './examples/ExampleUseEffectAndUseMemo';
import { ExampleUseMemo } from './examples/ExampleUseMemo';
import { ExampleUseReducer } from './examples/ExampleUseReducer';
import { ExampleUseRef } from './examples/ExampleUseRef';
import { ExampleUseStateAndUseEffect } from './examples/ExampleUseStateAndUseEffect';

import { AppContext } from './contexts/AppContext';

import './index.css';

function App() {
  return (
    <div className="examples-container">
      <AppContext>
        <ExampleUseStateAndUseEffect />
        <ExampleUseCallback initialCount={0} />
        <ExampleUseMemo />
        <ExampleUseEffectAndUseMemo />
        <ExampleUseRef />
        <ExampleUseContext message={'click'} />
        <ExampleUseReducer />
        <ExampleUseContextAndUseReducer />
      </AppContext>
    </div>
  );
}

export default App;
