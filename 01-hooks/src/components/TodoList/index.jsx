import { useCallback, useMemo, useState } from 'react';
import Todos from '../Todos';

export const TodoList = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const incrementCount = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, `New Todo ${new Date().toLocaleString()}`]);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="todo-list-container">
          {useMemo(
            () => (
              <Todos todos={todos} addTodo={addTodo} />
            ),
            [todos, addTodo],
          )}
          <div>
            <h2>Count: {count}</h2>
            <button onClick={incrementCount}>+</button>
          </div>
        </div>
      </header>
    </div>
  );
};
