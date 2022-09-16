import { useCallback, useMemo, useState } from 'react';

import { Button } from '../../components/Button';
import Todos from '../../components/Todos';

export const ExampleUseMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const incrementCount = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, `New Todo ${new Date().toLocaleString()}`]);
  }, []);

  return (
    <div className="component-card">
      {useMemo(
        () => (
          <Todos todos={todos} addTodo={addTodo} />
        ),
        [todos, addTodo],
      )}
      <p className="card--content">Count: {count}</p>
      <Button clickFun={incrementCount} text={'+'} />
    </div>
  );
};
