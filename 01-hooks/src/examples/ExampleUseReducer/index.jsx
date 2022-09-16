import { useReducer } from 'react';

import { Input } from '../../components/Input';

const initialTodos = [
  {
    id: 1,
    title: 'Todo 1',
    complete: false,
  },
  {
    id: 2,
    title: 'Todo 2',
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'COMPLETE':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export const ExampleUseReducer = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: 'COMPLETE', id: todo.id });
  };

  return (
    <div className="component-card">
      <h1>Todos</h1>
      <div className="card--content">
        {todos.map((todo) => (
          <div key={todo.id}>
            <Input
              inputType={'checkbox'}
              inputChecked={todo.complete}
              onChangeFn={() => handleComplete(todo)}
              inputStyle={{ width: '15px', height: '15px' }}
            />
            {todo.complete ? ` ${todo.title} DONE` : ` ${todo.title}`}
          </div>
        ))}
      </div>
    </div>
  );
};
