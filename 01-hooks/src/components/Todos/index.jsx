import P from 'prop-types';

import { Button } from '../Button';

const Todos = ({ todos, addTodo }) => {
  return (
    <>
      <h2>My Todos</h2>
      <div className="card--content">
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
      </div>
      <Button clickFun={addTodo} text={'Add Todo'} />
    </>
  );
};

Todos.propTypes = {
  todos: P.array.isRequired,
  addTodo: P.func.isRequired,
};

export default Todos;
