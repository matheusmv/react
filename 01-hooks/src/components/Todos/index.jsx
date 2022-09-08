import P from 'prop-types';

const Todos = ({ todos, addTodo }) => {
  return (
    <>
      <h2>My Todos</h2>
      <div className="todos-container">
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
      </div>
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

Todos.propTypes = {
  todos: P.array.isRequired,
  addTodo: P.func.isRequired,
};

export default Todos;
